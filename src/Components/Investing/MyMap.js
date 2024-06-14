import React from "react";
import { MapContainer, TileLayer,Marker,Popup } from "react-leaflet";
import 'leaflet/dist/leaflet.css'
import { Icon, divIcon, point } from "leaflet";
import MarkerClusterGroup from "react-leaflet-cluster";

import './MyMap.css'
import { useNavigate } from "react-router-dom";
const customIcon = new Icon({
   iconUrl: "https://cdn-icons-png.flaticon.com/512/447/447031.png",
  // iconUrl: require("./icons/placeholder.png"),
  iconSize: [38, 38] // size of the icon
});

// custom cluster icon
const createClusterCustomIcon = function (cluster) {
  return new divIcon({
    html: `<span class="cluster-icon">${cluster.getChildCount()}</span>`,
    className: "custom-marker-cluster",
    iconSize: point(33, 33, true)
  });
};
const markers = [
  {
    geocode: [1.290270, 103.851959],
    popUp: "Area:33*33m,Price:$10,000"
  },
  {
    geocode: [1.3,103.78],
    popUp: "Area:50*50m,Price:$15000"
  },
  {
    geocode: [1.315, 103.78],
    popUp: "Area:25*25m,Price:$7500"
  },
  {
    geocode: [1.325,103.779],
    popUp: "Area:40*40m,Price:$13000"
  },
  {
    geocode: [1.328, 103.8001],
    popUp: "Area:80*80m,Price:$25000"
  },
  {
    geocode: [1.330, 103.8100],
    popUp: "Area:75*75m,Price:$22000"
  },
  {
    geocode: [1.334, 103.8102],
    popUp: "Area:20*20m,Price:$5000"
  },
  {
    geocode: [1.338, 103.815],
    popUp: "Area:100*100m,Price:$30000"
  },
  {
    geocode: [1.339, 103.820],
    popUp: "Area:120*120m,Price:$43000"
  },
  {
    geocode: [1.340, 103.825],
    popUp: "Area:60*60m,Price:$21000"
  },

];
function MyMap() {
  const navigation=useNavigate();
  const position = [1.35, 103.8];
  return (
    <div className="mapstext">
    <MapContainer
      className="map"
      center={position}
      zoom={10}
      style={{ height: 800, width: "100%" }}
    >
      <TileLayer
        // attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"

      />
      <MarkerClusterGroup
        chunkedLoading
        iconCreateFunction={createClusterCustomIcon}
      >
        {/* Mapping through the markers */}
        {markers.map((marker) => (
          <Marker position={marker.geocode} icon={customIcon}>
            <Popup>{marker.popUp}
           <button className='buttt'onClick={()=>navigation('/onbuy') }>Buy</button>
           
            </Popup>
          </Marker>
        ))}
         </MarkerClusterGroup>
    </MapContainer>
    </div>
  );
}



export default MyMap;