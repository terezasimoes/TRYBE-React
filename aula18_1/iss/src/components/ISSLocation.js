import React, { Component } from 'react';
// pigeon é uma biblioteca externa
import Map from 'pigeon-maps';
import Marker from 'pigeon-marker'; // marcador onde passa as coordenadas
import ISSContext from '../context/ISSContext';
//1 - import o comp.Context pq é no context que tenho acesso ao comp. cosume. só
// com o consume que uso o context


class ISSLocation extends Component {
  componentDidMount() {
    const { getCurrentISSLocation } = this.context;
    //qndo o componente montar quero disparar uma açao(fazer requisiçao)disponível nessa prop
    this.timer = setInterval(
      getCurrentISSLocation,
      2000,
    );
  }

  componentWillMount() {
    clearInterval(this.timer);
  }

  render() {
    const {
        error,
        isFetching,
        latitude,
        longitude,
      } = this.context;

      const isLocationPresent = latitude && longitude;

      // transformar o que estava no redux para context
          return (
            <div>
              <div className="map">
                <Map
                  center={[0, 0]}
                  defaultWidth={700}
                  height={450}
                  minZoom={1}
                  maxZoom={8}
                  zoom={1}
                >
                  {!isFetching && isLocationPresent && <Marker anchor={[latitude, longitude]} />}
                </Map>
              </div>
              {isFetching && 'Loading...'}
              {!isFetching &&
                isLocationPresent &&
                `Current ISS location: latitude = ${latitude}, longitude = ${longitude}`}
            </div>
          );
        }
      
}
// uma propriedade pode ser definida para o comp. (de classe) CONTEXtTYPE -- passar para o comp.
// qual context o comp pode consumir. (quero consumir ISSContext)

ISSLocation.contextType = ISSContext;


export default ISSLocation;
