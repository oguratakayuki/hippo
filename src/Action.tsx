import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { counterSlice } from './modules/counter';
import { logSlice, LogState } from './modules/log';
import { hippoSlice, hippoState } from './modules/HippoState';
import { AppState } from './store';
import breedingTypeJson from "./breedingType.json";

interface BreedingTypeInterface {
    [key: string]: string;
}
const breedingType: BreedingTypeInterface = breedingTypeJson;

export default function Action() {
  const { count, log, hippo } = useSelector<
    AppState,
    { count: number; log: LogState, hippo: hippoState }
  >((state) => ({
    count: state.counter.count,
    log: state.log,
    hippo: state.hippo,
  }));
  const dispatch = useDispatch();
  const { incrementCount, decrementCount } = counterSlice.actions;
  const { addLog, deleteLog, setLogLoading } = logSlice.actions;
  const { feed } = hippoSlice.actions;
  const actionTypeChange = (event:  React.ChangeEvent<HTMLSelectElement>) => {
    dispatch(addLog({ id: 1, text: 'hoge' }));
    dispatch(incrementCount());
    const target = event.target as HTMLElement; 
    const actionType1: string = String(event.currentTarget.value);
    if (["lesson","walk"].includes(actionType1)) {
      const unit = document.querySelector("p#actionValueUnit") as HTMLElement;
      unit.innerHTML = "時間";
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
    const element: HTMLInputElement = target.querySelector('input[name="actionValue"]') as HTMLInputElement;
    const food: number  = Number(element.value);
    const quantity: number = Number(target.querySelector('select')!.selectedOptions[0].value);
    dispatch(feed({ food: food, quantity: quantity }));
  };

  return (
    <form onSubmit={breedAction}>
      <div className="action-form">
          <div className="mb-3">
            <select className="form-select option1" aria-label="Default select example" name="actionType1" onChange={(event) => { actionTypeChange(event) }} >
              <option value="DEFAULT" disabled>Open this select menu</option>
              {Object.keys(breedingType).map(key =>
                <option value={key}>{breedingType[key]}</option>
              )}
            </select>
          </div>
          <div className="mb-3" style={{display: 'none'}} id="second-option">
            <select className="form-select option2" aria-label="Default select example"  id="option-input2" name="actionType2">
              <option value="DEFAULT" disabled>何を食べさせる?</option>
              <option value="1">お肉</option>
              <option value="2">お野菜</option>
              <option value="3">来場者</option>
            </select>
          </div>
          <div className="mb-3">
            <label htmlFor="option-input2" className="form-label">action option</label>
            <input type="number" className="form-control" id="option-input2" name="actionValue" />
            <p id="actionValueUnit">時間</p>
          </div>
          <button type="submit" className="btn btn-primary">実行</button>
      </div>
    </form>
  );
}
