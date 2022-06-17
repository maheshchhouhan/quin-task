import { FC } from "react";
import { Marker } from "@react-google-maps/api";
import { ILaunch } from "../../interfaces/launches";

type Props = {
  launch: ILaunch;
};

const MapMarker: FC<Props> = ({ launch }) => {
  return (
    <Marker
      key={launch.id}
      position={{ lat: +launch.pad.latitude, lng: +launch.pad.longitude }}
    />
  );
};

export default MapMarker;
