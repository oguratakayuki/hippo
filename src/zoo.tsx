import React from "react";
import "./App.css";
import Cage2 from "./cage2";
import type { CageSummaryType } from "./cage2";
import Menu from "./menu";
import Summary from "./summary";

import constJson from "./settings/const.json";
import { AnimalTypeInterface } from "./types/animalTypeInterface";
const animalTypes: AnimalTypeInterface = constJson.animalType;
export type ZooSummaryType = CageSummaryType[];

type CageInfo = {
  id: number;
  animalType: string;
};
type Info = {
  message: string;
};

type Cages = {
  cages: CageInfo[];
  infos: Info[];
  summary: ZooSummaryType;
};



export default class Zoo extends React.Component<{}, Cages> {
  private childRefs: React.RefObject<Cage2>[];
  private timer: any;
  constructor(props: {}) {
    super(props);
    this.addAnimalCage = this.addAnimalCage.bind(this);
    this.state = { cages: [], infos: [], summary: [] };
    this.childRefs = [];
    this.getSummary = this.getSummary.bind(this);
    this.timer = 0;
  }
  componentDidMount() {
    this.timer = window.setInterval( () => this.tick(), 5000);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }
  tick() {
    this.setState((state) => ({
      summary: this.getSummary(),
    }));
    console.log(this.state.summary);
  }

  addAnimalCage(animalType: string) {
    let currentCageId: number;
    if (this.state.cages.length > 0) {
      currentCageId = this.state.cages[this.state.cages.length - 1].id;
    } else {
      currentCageId = 0;
    }
    const message: string = animalTypes[animalType] + "を追加しました";
    this.setState((state) => ({
      cages: [
        ...this.state.cages,
        { id: currentCageId + 1, animalType: animalType },
      ],
      infos: [...this.state.infos, { message: message }],
    }));
  }

  getSummary(): ZooSummaryType {
    let zooSummary: CageSummaryType[] = [];
    if (this.childRefs.length) {
      zooSummary = this.childRefs.map((childRef) => {
        if (childRef.current) {
          return childRef.current.getCageInfo();
        } else {
          return {} as CageSummaryType;
        }
      }).filter(Boolean).filter(value => Object.keys(value).length !== 0);
    }
    return zooSummary;
  }

  render() {
    return (
      <React.Fragment>
        <Menu addCageAction={this.addAnimalCage} />
        <div className="container">
          <div className="row">
            <div className="col-sm-10">
              <div className="container">
                <div className="row">
                  {this.state.cages.map( (cage, i) => {
                    const ref: React.RefObject<Cage2> = React.createRef();
                    this.childRefs.push(ref);
                    return (
                      <div className="col-sm-6" key={cage.id}>
                        <Cage2
                          id={cage.id}
                          name="hippos cage"
                          animalType={cage.animalType}
                          ref={ref}
                        />{" "}
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
            <div className="col-md-2">
              <div>
                <Summary summary={this.state.summary}/>
              </div>
              <div>
                {this.state.infos.map(function (info, i) {
                  return (
                    <div className="card info-card" key={i}>
                      <div className="card-body">{info.message}</div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        <br />
      </React.Fragment>
    );
  }
}
