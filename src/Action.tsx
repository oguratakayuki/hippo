import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { counterSlice } from './modules/counter';
import { logSlice, LogState } from './modules/log';
import { hippoSlice } from './modules/hippoState';
import { AppState } from './store';
import constJson from "./settings/const.json";

interface BreedingTypeInterface {
    [key: string]: string;
}
const breedingType: BreedingTypeInterface = constJson.breedingType;

interface FoodTypeInterface {
    [key: string]: string;
}
const foodType: FoodTypeInterface = constJson.foodType;

export type ActionProps = {
  id: number;
}

export default function Action(props: ActionProps) {
  const { id } = props;
  const { count, log  } = useSelector<
    AppState,
    { count: number; log: LogState  }
  >((state) => ({
    count: state.counter.count,
    log: state.log,
  }));
  const dispatch = useDispatch();
  const { incrementCount, decrementCount } = counterSlice.actions;
  const { addLog, deleteLog, setLogLoading } = logSlice.actions;
  const { feed } = hippoSlice.actions;
  const actionTypeChange = (event:  React.ChangeEvent<HTMLSelectElement>) => {
    dispatch(addLog({ id: 1, text: 'hoge' }));
    dispatch(incrementCount());
    const actionType1Elem = (document.getElementById("actionType1")) as HTMLSelectElement;
    const actionType1: string = String(actionType1Elem.options[actionType1Elem.selectedIndex].value);
    if (["lesson","walk"].includes(actionType1)) {
      const unit = document.querySelector("p#actionValueUnit") as HTMLElement;
      unit.innerHTML = "時間";
      const secondOption = document.querySelector("#second-option") as HTMLElement;
      secondOption.style.display = "none";
    } else if ( actionType1 == "feed") {
      const unit = document.querySelector("p#actionValueUnit") as HTMLElement;
      unit.innerHTML = "個";
      const secondOption = document.querySelector("#second-option") as HTMLElement;
      secondOption.style.display = "block";
    }
  };
  const breedAction = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const target = event.target as HTMLElement; 
    const actionType1Elem = (document.getElementById("actionType1")) as HTMLSelectElement;
    const actionType1: string = actionType1Elem.options[actionType1Elem.selectedIndex].value;
    const actionType2Elem = (document.getElementById("actionType2")) as HTMLSelectElement;
    const actionType2: string = actionType2Elem.options[actionType2Elem.selectedIndex].value;
    const actionValueElem = (document.getElementById("actionValue")) as HTMLInputElement;
    const actionValue: number = Number(actionValueElem.value);
    console.log(actionType1);
    console.log(actionType2);
    console.log(actionValue);
    if (actionType1 == "feed") {
      dispatch(feed({ id: id, food: actionType2, quantity: actionValue }));
    }



  };

  return (
    <form onSubmit={breedAction}>
      <div className="action-form">
          <div className="mb-3">
            <select className="form-select option1" aria-label="Default select example" id="actionType1" onChange={(event) => { actionTypeChange(event) }} >
              <option value="DEFAULT" disabled>Open this select menu</option>
              {Object.keys(breedingType).map(key =>
                <option value={key} key={key}>{breedingType[key]}</option>
              )}
            </select>
          </div>
          <div className="mb-3" style={{display: 'none'}} id="second-option">
            <select className="form-select option2" aria-label="Default select example"  id="actionType2">
              <option value="DEFAULT" disabled>何を食べさせる?</option>
              {Object.keys(foodType).map(key =>
                <option value={key} key={key}>{foodType[key]}</option>
              )}
            </select>
          </div>
          <div className="mb-3">
            <label htmlFor="option-input2" className="form-label">action option</label>
            <input type="number" className="form-control"  id="actionValue" />
            <p id="actionValueUnit">時間</p>
          </div>
          <button type="submit" className="btn btn-primary">実行</button>
      </div>
    </form>
  );
}
