import React from 'react';
import GoogleMapreact from 'google-map-react';
import { Paper, Typography, useMediaQuery } from '@material-ui/core';
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';
import Rating from '@material-ui/lab/Rating';

import useStyles from './styles.js';

const Map = () => {
  const classes = useStyles();
  const isMobile = useMediaQuery('(min-width:600px)');  // Going to be set to false if the width of the device is larger than 600px
  const coordinates = { lat: 0, lng: 0 };
  return (
    <div className={classes.mapContainer}>
      <GoogleMapreact
        bootstrapURLKeys={{ key: '' }}
        defaultcenter={coordinates}
        center={coordinates}
        defaultZoon={14}
        margin={[50, 50, 50, 50]}
        options={''}
        onChange={''}
        onChildClick={''}
      >
      </GoogleMapreact>
    </div>



  );
}

export default Map;

