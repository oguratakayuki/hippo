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
          <dt>tall</dt><dd>2m</dd>
          <dt>weight</dt><dd>{hippo.weight}kg</dd>
          <dt>status</dt><dd>angry</dd>
        </dl>
      </div>
    </React.Fragment>
  );

}
