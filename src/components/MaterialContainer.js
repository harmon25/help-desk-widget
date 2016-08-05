'use strict';

import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

import AppComponent from './Main'

class MaterialContainer extends React.Component {
  render() {


    return (
     <MuiThemeProvider muiTheme={getMuiTheme()}>
        <AppComponent />
     </MuiThemeProvider>
    );
  }
}

MaterialContainer.displayName = 'MaterialContainer';

// Uncomment properties you need
// MaterialComponent.propTypes = {};
// MaterialComponent.defaultProps = {};

export default MaterialContainer;
