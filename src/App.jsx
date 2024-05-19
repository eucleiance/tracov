import React from 'react';
import { CssBaseline, Grid } from '@material-ui/core';


import Header from '../components/Header/Header.jsx';
import List from '../components/List/List.jsx';
import Map from '../components/Map/Map.jsx';
// import PlaceDetails from '../components/PlaceDetails/PlaceDetails.jsx';

const App = () => {
  return (
    <>
      <CssBaseline />
      <Header />
      <Grid container spacing={3} style={{ width: '100%' }}>
        <Grid item xs={12} md={4}>
          {/* Take full width on mobile devices but only take 4 out of 12 spaces in medium to large devices */}
          {/* For List of places */}
          <List />
        </Grid>
        <Grid item xs={12} md={8}>
          {/* Take full width on mobile devices but only take 8 out of 12 spaces in medium to large devices */}
          {/* For Map */}
          <Map />
        </Grid>
      </Grid>
    </>
  );
}


export default App
