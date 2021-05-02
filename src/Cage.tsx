import React from 'react';

export default function Cage(props: any) {
  return (
    <React.Fragment>
      <div className="cage">
        <div className="container">
          <div className="row">
            <div className="col-sm-3">
              <object className="svg-class" type="image/svg+xml" data="hippo.svg" aria-label="hoge" ></object>
            </div>
            <div className="col-sm-3">
            </div>
            <div className="col-sm-3">
              <object className="svg-class" type="image/svg+xml" data="hippo.svg" aria-label="hoge" ></object>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
