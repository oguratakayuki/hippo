import React from 'react';
import type { AnimalInfo } from './types/AnimalInfo';



export default class Animal extends React.Component<AnimalInfo, AnimalInfo> {
  constructor(props: AnimalInfo) {
    super(props);
  }

  render() {
    return (
      <React.Fragment>
        <img className="svg-class" src="hippo.svg" alt="hippo" / > 
      </React.Fragment>
    );
  }
}
