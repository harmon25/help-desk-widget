import 'core-js/fn/object/assign';
import React from 'react';
import ReactDOM from 'react-dom';
import MaterialContainer from './components/MaterialContainer';

import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

// Render the main component into the dom
ReactDOM.render(<MaterialContainer />, document.getElementById('help-widgit'));
