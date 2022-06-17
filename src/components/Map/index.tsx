import React, { useState, useEffect } from "react";
import { GoogleMap, LoadScript } from "@react-google-maps/api";

import Marker from "../Marker/Index";
import { ILaunch } from "../../interfaces/launches";

const containerStyle = {
  width: "100vw",
  height: "100vh",
};

type Props = {
  launches: ILaunch[] | undefined;
};

const Map = ({ launches }: Props) => {
  const [center, setCenter] = useState({
    lat: -3.745,
    lng: -38.523,
  });

  useEffect(() => {
    if (launches?.length) {
      setCenter({
        lat: +launches[0]?.pad.latitude,
        lng: +launches[0]?.pad.longitude,
      });
    }
  }, [launches]);

  return (
    <LoadScript googleMapsApiKey={process.env.REACT_APP_MAP_API_KEY || ""}>
      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={2}>
        {launches?.map((launch) => (
          <Marker launch={launch} key={launch.id} />
        ))}
      </GoogleMap>
    </LoadScript>
  );
};

export default React.memo(Map);
