import React from "react";
import constJson from "./settings/const.json";
import { AnimalTypeInterface } from "./types/animalTypeInterface";
const animalType: AnimalTypeInterface = constJson.animalType;

type MenuState = {
  mode: string;
};

type MenuProps = {
  addCageAction?: (animalType: string) => void;
};

export default class Menu extends React.Component<MenuProps, MenuState> {
  constructor(props: MenuProps) {
    super(props);
    this.state = { mode: "initial" };
    this.changeMode = this.changeMode.bind(this);
    this.onClick = this.onClick.bind(this);
  }
  changeMode(mode: string) {
    console.log(mode);
    this.setState(() => ({ mode: mode }));
  }
  onClick(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    if (this.props.addCageAction) {
      const animalTypeElement = document.getElementById(
        "animalType"
      ) as HTMLSelectElement;
      const animalType: string = String(
        animalTypeElement.options[animalTypeElement.selectedIndex].value
      );
      this.props.addCageAction(animalType);

      const cageName = document.getElementById(
        "cageName"
      ) as HTMLInputElement;
      this.setState(() => ({ mode: "initial" }));
    }
  }

  render() {
    if (this.state.mode == "initial") {
      return (
        <React.Fragment>
          <div className="container">
            <div className="row">
              <div className="col-md-4">
                <button className="pushable" onClick={()=>this.changeMode('cage')}>
                  {" "}
                  <span className="front"> おり </span>{" "}
                </button>
              </div>
              <div className="col-md-4">
                <button className="pushable">
                  {" "}
                  <span className="front"> hippo </span>{" "}
                </button>
              </div>
              <div className="col-md-4">
                <button className="pushable" onClick={()=>this.changeMode('breeder')}>
                  {" "}
                  <span className="front">飼育員</span>{" "}
                </button>
              </div>
            </div>
          </div>
        </React.Fragment>
      );
    } else if (this.state.mode == "cage") {
      return (
        <React.Fragment>
          <div className="container">
            <div className="row">
              <div className="col-md-4">
                <select
                  className="form-control form-select option1"
                  aria-label="Default select example"
                  id="animalType"
                >
                  <option value="DEFAULT" disabled>
                    Open this select menu
                  </option>
                  {Object.keys(animalType).map((key) => (
                    <option value={key} key={key}>
                      {animalType[key]}
                    </option>
                  ))}
                </select>
              </div>
              <div className="col-md-4">
                <input type="text" className="form-control" id="cageName" placeholder="おりの名前" aria-label="Username" />
              </div>
              <div className="col-md-4">
                <button
                  type="submit"
                  className="pushable"
                  onClick={this.onClick}
                >
                  {" "}
                  <span className="front">追加</span>{" "}
                </button>
              </div>
            </div>
          </div>
        </React.Fragment>
      );
    } else if (this.state.mode == "breeder") {
      return (
        <React.Fragment>
          <div className="container">
            <div className="alert alert-primary" role="alert">三人からの応募がありました</div>

            <div className="row">
              <div className="col-md-4">
                <div className="card" style={{borderColor: 'purple'}}>
                  <div className="card-header"> 飼育員A </div>
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item">時給 1000円</li>
                    <li className="list-group-item">餌やり時追加スキル 調教</li>
                    <li className="list-group-item">餌やりコスト 2.5</li>
                    <li className="list-group-item">清掃コスト 2.3</li>
                    <li className="list-group-item">ルーティンタイプ random</li>
                    <li className="list-group-item">適性　カバ+2, ライオン-1</li>
                  </ul>
                  <div className="card-body">
                    <a href="#" className="btn btn-primary">採用する</a>
                  </div>
                </div>
              </div>

              <div className="col-md-4">
                <div className="card" style={{borderColor: 'purple'}}>
                  <div className="card-header"> 飼育員B </div>
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item">時給 1200円</li>
                    <li className="list-group-item">餌やり時追加スキル 散歩</li>
                    <li className="list-group-item">餌やりコスト 2.3</li>
                    <li className="list-group-item">清掃コスト 2.1</li>
                    <li className="list-group-item">ルーティンタイプ 空腹度重視</li>
                    <li className="list-group-item">適性　カバ-2, ライオン-3</li>
                  </ul>
                  <div className="card-body">
                    <a href="#" className="btn btn-primary">採用する</a>
                  </div>
                </div>
              </div>

              <div className="col-md-4">
                <div className="card" style={{borderColor: 'purple'}}>
                  <div className="card-header"> 飼育員B </div>
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item">時給 2200円</li>
                    <li className="list-group-item">餌やり時追加スキル 治療</li>
                    <li className="list-group-item">餌やりコスト 2.5</li>
                    <li className="list-group-item">清掃コスト 3.1</li>
                    <li className="list-group-item">ルーティンタイプ 清掃重視</li>
                    <li className="list-group-item">適性　なし</li>
                  </ul>
                  <div className="card-body">
                    <a href="#" className="btn btn-primary">採用する</a>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </React.Fragment>
      );
    }





  }
}
