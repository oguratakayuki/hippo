import React from "react";

export default function Cage(props: any) {
  return (
    <React.Fragment>
      <div className="cage">
        <div className="container">
          <div className="row">
            <div className="col-sm-3">
              <img className="svg-class" src="hippo.svg" alt="hippo" />
            </div>
            <div className="col-sm-3"></div>
            <div className="col-sm-3">
              <img className="svg-class" src="hippo.svg" alt="hippo" />
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
