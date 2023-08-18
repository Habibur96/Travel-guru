import React from "react";
import { useParams } from "react-router-dom";
const PlaceDetails = () => {
  const { name } = useParams();
  return <div>Wel Come{name}</div>;
};

export default PlaceDetails;
