import React, {Component} from 'react';
import MapGL, {Marker, Popup} from 'react-map-gl';
import Pin from './Pin'

const TOKEN = 'pk.eyJ1IjoiZ2VvMjIwMyIsImEiOiJjamtlM2V1eTEwMjA0M3Z0aWwxbmR5bTB0In0.itO3KiRDJILOOpoeNpdTbg';

const navStyle = {
  position: 'absolute',
  top: 0,
  left: 0,
  padding: '10px'
};

class UserMap extends Component {
  constructor(props) {
    super(props);
    this.state = {
      viewport: {
        latitude: "",
        longitude: "",
        zoom: 2.8,
        bearing: 0,
        pitch: 0,
        width: 1366,
        height: 638
      },
      popupInfo: null
    };
    this.renderPopup = this.renderPopup.bind(this)
  }

  componentWillMount() {
  navigator.geolocation.getCurrentPosition(location => {
    this.setState({
      viewport: {
        ...this.state.viewport,
      latitude: location.coords.latitude,
      longitude: location.coords.longitude
      }
    })
  });
}

  renderPopup() {
    return this.state.popupInfo && (<Popup tipSize={5} anchor="bottom-right" longitude={this.state.popupInfo.state.longitude} latitude={this.state.popupInfo.state.latitude} onClose={() => this.setState({popupInfo: null})} closeOnClick={true}>
      <p>{[
  {
    "firstname": "Agent",
    "lastname": "1",
    "countryCode": "0033",
    "phone": "12345678",
    "geo": {
      "lat": 48.82947097610185,
      "lng": 2.3665683586914383
    },
    "comments": [
      {
        "sender": "Bernard Dupond",
        "score": 3,
        "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut viverra quis nibh aliquam porta. Sed ac est non ipsum efficitur elementum a quis massa. Fusce vel vehicula nulla."
      },
      {
        "sender": "Bernard Dupond",
        "score": 4,
        "text": "Sed ac est non ipsum efficitur elementum a quis massa. Fusce vel vehicula nulla."
      },
      {
        "sender": "Bernard Dupond",
        "score": 1,
        "text": "Lorem ipsum dolor sit amet."
      }
    ]
  },
  {
    "firstname": "Agent",
    "lastname": "2",
    "countryCode": "0033",
    "phone": "12345678",
    "geo": {
      "lat": 48.83110952310031,
      "lng": 2.336184294970735
    },
    "comments": [
      {
        "sender": "Bernard Dupond",
        "score": 5,
        "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut viverra quis nibh aliquam porta. Sed ac est non ipsum efficitur elementum a quis massa. Fusce vel vehicula nulla."
      },
      {
        "sender": "Bernard Dupond",
        "score": 2,
        "text": "Sed ac est non ipsum efficitur elementum a quis massa. Fusce vel vehicula nulla."
      }
    ]
  },
  {
    "firstname": "Agent",
    "lastname": "3",
    "countryCode": "0033",
    "phone": "12345678",
    "geo": {
      "lat": 48.869966923991065,
      "lng": 2.3655383904297196
    },
    "comments": [
      {
        "sender": "Bernard Dupond",
        "score": 0,
        "text": "Sed ac est non ipsum efficitur elementum a quis massa. Fusce vel vehicula nulla."
      },
      {
        "sender": "Bernard Dupond",
        "score": 1,
        "text": "Lorem ipsum dolor sit amet."
      }
    ]
  },
  {
    "firstname": "Agent",
    "lastname": "4",
    "countryCode": "0033",
    "phone": "12345678",
    "geo": {
      "lat": 48.856867216840485,
      "lng": 2.293440612109407
    },
    "comments": [
      {
        "sender": "Bernard Dupond",
        "score": 5,
        "text": "Sed ac est non ipsum efficitur elementum a quis massa. Fusce vel vehicula nulla."
      },
      {
        "sender": "Bernard Dupond",
        "score": 4,
        "text": "Lorem ipsum dolor sit amet."
      }
    ]
  }
]}</p>
    </Popup>)
  }

  logout = () => {
    this.props.history.push('/')
  }
  render() {
    return (
      <div className="form">
        <MapGL {...this.state.viewport} mapStyle="mapbox://styles/mapbox/streets-v9"  onViewportChange={(viewport) => this.setState({viewport})} mapboxApiAccessToken={TOKEN}>

          {this.renderPopup()}
          <div className="nav" style={navStyle}>
            <Marker longitude={2.3665683586914383} latitude={48.82947097610185} offsetTop={-20} offsetLeft={-10}>
              <Pin onClick={() => this.setState({popupInfo: this.state.popupInfo})}/>
            </Marker>
            <Marker longitude={2.336184294970735} latitude={48.83110952310031} offsetTop={-20} offsetLeft={-10}>
              <Pin onClick={() => this.setState({popupInfo: this.state.popupInfo})}/>
            </Marker>
            <Marker longitude={2.3655383904297196} latitude={48.869966923991065} offsetTop={-20} offsetLeft={-10}>
              <Pin onClick={() => this.setState({popupInfo: this.state.popupInfo})}/>
            </Marker>
            <Marker longitude={2.293440612109407} latitude={48.856867216840485} offsetTop={-20} offsetLeft={-10}>
              <Pin onClick={() => this.setState({popupInfo: this.state.popupInfo})}/>
            </Marker>
          </div>
        </MapGL>
        <button className="boutonlogout" type="button" onClick={this.logout}>Se déconnecter</button>
      </div>
    )
  }
}

export default UserMap
