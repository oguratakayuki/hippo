import React from 'react';
import {HippoProps} from './Hippo';

import { useDispatch, useSelector } from 'react-redux';
import { hippoSlice, hippoState } from './modules/HippoState';
import { AppState } from './store';

export default function AnimalInfo(props: HippoProps) {
  const { name, age } = props;

  const { hippo } = useSelector<
    AppState,
    { hippo: hippoState }
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
          <dt>height</dt><dd>{hippo.height}cm</dd>
          <dt>HP</dt><dd>{hippo.hp}cm</dd>
          <dt>賢さ</dt><dd>{hippo.intelligence}</dd>
          <dt>強さ</dt><dd>{hippo.strength}</dd>
          <dt>status</dt><dd>angry</dd>
        </dl>
      </div>
    </React.Fragment>
  );

}
