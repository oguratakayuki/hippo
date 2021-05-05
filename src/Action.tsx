import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { counterSlice } from './modules/counter';
import { logSlice, LogState } from './modules/log';
import { hippoSlice, hippoState } from './modules/HippoState';
import { AppState } from './store';


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
  const hoge = () => {
    console.log('herererer');
    dispatch(addLog({ id: 1, text: 'hoge' }));
    dispatch(incrementCount());
  };
  const fuga = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const  target = event.target as HTMLElement; 
    const element: HTMLInputElement = target.querySelector('input[name="actionValue"]') as HTMLInputElement;
    const food: number  = Number(element.value);
    const quantity: number = Number(target.querySelector('select')!.selectedOptions[0].value);
    dispatch(feed({ food: food, quantity: quantity }));
    console.log('fuga');
  };




    return (
      <form onSubmit={fuga}>
        <div className="action-form">
            <div className="mb-3">
              <select className="form-select" aria-label="Default select example" name="actionType" onChange={hoge} >
                <option value="DEFAULT" disabled>Open this select menu</option>
                <option value="1">feed</option>
                <option value="2">lesson</option>
                <option value="3">walk</option>
              </select>
            </div>
            <div className="mb-3">
              <label htmlFor="option-input" className="form-label">action option</label>
              <input type="text" className="form-control" id="option-input" name="actionValue"  />
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
        </div>
      </form>
    );

}
