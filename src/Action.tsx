import React from 'react';

export default function Action(props: any) {
  return (
    <React.Fragment>
      <div className="action-form">
        <form>
          <div className="mb-3">
            <select className="form-select" aria-label="Default select example">
              <option selected>Open this select menu</option>
              <option value="1">feed</option>
              <option value="2">lesson</option>
              <option value="3">walk</option>
            </select>
          </div>
          <div className="mb-3">
            <label htmlFor="option-input" className="form-label">action option</label>
            <input type="email" className="form-control" id="option-input" />
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      </div>
    </React.Fragment>
  );

}
