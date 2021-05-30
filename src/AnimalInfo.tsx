import React from 'react';
import {HippoProps} from './hippo';

import { useDispatch, useSelector } from 'react-redux';
import { hippoSlice, stateList } from './modules/hippoState';
import { AppState } from './store';

export default function AnimalInfo(props: HippoProps) {
  const { id, name, age } = props;

  const { hippo } = useSelector<
    AppState,
    { hippo: stateList }
  >((state) => ({
    hippo: state.hippo,
  }));
  const dispatch = useDispatch();

  return (
    <React.Fragment>
      <div className="animal-info">
        <dl>
          <dt>name</dt><dd>{name}</dd>
          <dt>age</dt><dd>{age}</dd>
          <dt>gender</dt><dd>men</dd>
          <dt>height</dt><dd>{hippo.hippos[id].height}cm</dd>
          <dt>HP</dt><dd>{hippo.hippos[id].hp}</dd>
          <dt>賢さ</dt><dd>{hippo.hippos[id].intelligence}</dd>
          <dt>強さ</dt><dd>{hippo.hippos[id].strength}</dd>
          <dt>status</dt><dd>angry</dd>
        </dl>
      </div>
    </React.Fragment>
  );

}
