'use strict';

import React from 'react';
import { render } from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';

import constants from './constants';
import Main from './components/Main.jsx';


injectTapEventPlugin();

window.pubnub = PUBNUB({
    subscribe_key: constants.pubnub.SUBSCRIBE_KEY,
    publish_key: constants.pubnub.PUBLISH_KEY
});

render(<Main />, document.getElementById('app-main'));
