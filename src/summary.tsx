import React from "react";
import type { ZooSummaryType } from "./zoo";
import type { CageSummaryType, AnimalSummaryType } from "./cage2";


type SummaryProps = {
  summary: ZooSummaryType;
};


export default class Summary extends React.Component<SummaryProps, {}> {



  render() {
    if (this.props.summary.length) {
    return (
      <React.Fragment>
        <div className="card" style={{borderColor: 'purple', fontSize: 12}}>
          <div className="card-header"> summary </div>
          <div className="card-body">
            {this.props.summary.map((cageSummary: CageSummaryType, index: number) => {
              return (
                <div className="card border border-0" style={{fontSize: 12}} key={index}>
                  <div className="card-header">{cageSummary.animalType}のおり{cageSummary.id}</div>
                  <div className="card-body">
                    <ul className="list-group list-group-flush">
                    {cageSummary.animalSummary.map((animalInfo: AnimalSummaryType, index: number) => {
                      return (
                        <li className="list-group-item" key={index}>{animalInfo.id}, {animalInfo.satiation}</li>
                      );
                    })}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </React.Fragment>
    );
    } else {
      return (
        <React.Fragment>
            <div className="card-header"> 飼育員A </div>
        </React.Fragment>
      );
    }

  }
}
