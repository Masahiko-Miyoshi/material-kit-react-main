import * as React from 'react';
import {useRef,useState,useCallback} from 'react';
import Map, {Marker,MapRef} from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

const MAPBOX_TOKEN = 'pk.eyJ1IjoibWl5b3NoaW1hc2FoaWtvIiwiYSI6ImNreW1kMXNlajJsOWIyb21sdTI5c2J0enkifQ.EDMYy_IZHN46YqcRpRXoLA'; // Set your mapbox token here

let mapRef=null;
export const MoveToCity = (props) => {
  if(mapRef !== null){
    mapRef.current?.flyTo({center: [props.longitude, props.latitude], duration: 2000,zoom: 10});
  }
}


export default function MapBox() {
  
    const [mode, setMode] = useState(0);
    mapRef = useRef();

    const onClick = props =>{
      if(mode === 0){
        mapRef.current?.flyTo({center: [118.08, 24.48], duration: 2000, zoom: 11});
        setMode(1);
      }
      else{
        mapRef.current?.flyTo({center: [135.652, 34.813], duration: 2000, zoom: 11});
        setMode(0);
      }
    };
  
    return (
      <div>
        <Map
          ref={mapRef}
          initialViewState={{
            latitude: 34.41,
            longitude: 135.31,
            zoom: 10,
            // bearing: 0,
            //pitch: 0
             pitch: 85
          }}
          terrain= {{
            source: "mapbox-raster-dem",
            exaggeration: 1.5
          }}
          // style={{width: 2000, height: 1000}}
          style={{width: 1400, height: 500}}
          
          // mapStyle="mapbox://styles/mapbox/streets-v11"
           mapStyle = "mapbox://styles/miyoshimasahiko/ckymdbhj60zo014mob9ayej95"
          // mapStyle="mapbox://styles/mapbox/dark-v9"
          // mapStyle="mapbox://styles/mapbox/light-v9"
          mapboxAccessToken={MAPBOX_TOKEN}
          onClick={onClick}
        >
          <Marker longitude={118.08} 
          latitude={24.48} 
          color="red" 
          />
          <Marker longitude={135.652} 
          latitude={34.813} 
          color="red" 
          />
        </Map>
  
    
  
      </div>
    );
  }
  