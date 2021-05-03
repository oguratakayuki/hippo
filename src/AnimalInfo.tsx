import React from 'react';
import {HippoProps} from './Hippo';

export default function AnimalInfo(props: HippoProps) {
  const { name, age } = props;
  return (
    <React.Fragment>
      <div className="animal-info">
        <dl>
          <dt>name</dt><dd>{name}</dd>
          <dt>age</dt><dd>{age}</dd>
          <dt>gender</dt><dd>men</dd>
          <dt>tall</dt><dd>2m</dd>
          <dt>weight</dt><dd>10kg</dd>
          <dt>status</dt><dd>angry</dd>
        </dl>
      </div>
    </React.Fragment>
  );

}
