import React from 'react';

const Body = ({ cntr, prevCnt, incrementCntClick, decrementCntClick }) => {
  return (
    <>
      <div className="bg-light text-dark p-4 mb-4">
        <div className="container">
          <div className="row">
            <div className="col-md-4 offset-md-4 text-center">
              <h2 className="text-primary">Count Score: {cntr}</h2>
              <h2 className="text-warning">Previous Score: {prevCnt}</h2>
              <h2 className="text-success">{cntr > 10 && "You Won!"}</h2>
              <h2 className="text-danger">{cntr < -10 && "You Lost!"}</h2>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4"></div>
            <div className="col-md-2">
              <img
                src="./Assets/Body/thumbsup.jpg"
                onClick={() => incrementCntClick()}
              />
            </div>
            <div className="col-md-2">
              <img
                src="./Assets/Body/thumbsdown.jpg"
                onClick={() => decrementCntClick()}
              />
            </div>
            {/* <div className="col-md-4"></div> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Body;