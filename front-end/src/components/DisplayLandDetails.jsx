import React, { useEffect, useState } from "react";

const DisplayLandDetails = (props) => {
  const [Long, setLong] = useState(0);
  const [Lang, setLang] = useState(0);

  useEffect(() => {
    let longString = props?.longitude.toString();
    let latString = props?.latitude.toString();
    let longNum = longString.slice(0, 2) + "." + longString.slice(2);
    let latNum = latString.slice(0, 2) + "." + latString.slice(2);
    setLong(parseFloat(longNum));
    setLang(parseFloat(latNum));
  }, [props]);

  console.log(Long, Lang);
  return (
    <>
      <div className="explore-result">
        <div className="row">
          <div className="col-6">
            <img
              src={`https://maps.googleapis.com/maps/api/staticmap?center=${Lang},${Long}&zoom=12&size=400x400&key=AIzaSyDyqBo5lmmRiFu1dpBn_r_atvoE3qwO3lM`}
            />
          </div>
          <div className="col-12 col-md-6">
            <p>
              <b>Owner:</b> {props.owner}
            </p>
            <p>
              <b>Survey Number:</b> {props.surveyNo}
            </p>
            <p>
              <b>Market Value:</b> {props.marketValue}
            </p>
            <p>
              <b>State:</b> {props.state}
            </p>
            <p>
              <b>District:</b> {props.district}
            </p>
            <p>
              <b>City:</b> {props.city}
            </p>
            <p>
              <b>Size:</b> {props.sqft} sq. ft.
            </p>
            <p>
              <b>latitude:</b> {props.latitude}
            </p>
            <p>
              <b>longitude:</b> {props.longitude}
            </p>
          </div>
        </div>
        {props.available ? (
          <button className="marked-available">
            <b>Marked Available</b>
          </button>
        ) : (
          <button
            className="mark-available-btn"
            onClick={() => {
              props.markAvailable(props.index);
            }}
          >
            <b>Mark Available</b>
          </button>
        )}
      </div>
    </>
  );
};

export default DisplayLandDetails;
