//========= Styles =========//
import './index.css';

//========= Storage =========//
import store from './store';
import { Provider } from 'react-redux';

//========= React libs =========//
import React from 'react';
import ReactDOM from 'react-dom';

//========= Needed for onTouchTap =========//
import injectTapEventPlugin from 'react-tap-event-plugin';

//========= Register a service worker to serve assets from local cache =========//
import registerServiceWorker from './registerServiceWorker';

//========= BaseContainer =========//
import BaseContainer from './containers/BaseContainer';

injectTapEventPlugin();

ReactDOM.render(
  <Provider store={ store }>
    <BaseContainer />
  </Provider>,
  document.getElementById('root')
);

registerServiceWorker();
