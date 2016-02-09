require('../less/main.less');
// require('../sass/main.scss');

'use strict';

import injectTapEventPlugin from 'react-tap-event-plugin';
import React from 'react';
import ReactDOM from 'react-dom';
const RaisedButton = require('material-ui/lib/raised-button');
import Hello from './components/Hello.jsx';

injectTapEventPlugin();
// Addons are in separate packages: 
// const createFragment = require('react-addons-create-fragment');
// const immutabilityHelpers = require('react-addons-update');
// const CSSTransitionGroup = require('react-addons-css-transition-group');

var Main = React.createClass({
  render: function () {
    return <Hello />;
  }
});

// var Main = React.createClass({
//   render: function () {
//     return React.DOM.div(
//       {width: '100px', height: '100px'},
//       'terefere kuku',
//       'asdasd'
//     );
//   }
// });

var HelloWorld = React.createClass({
  render: function() {
    return (
      <div>
        Hello, <input type="text" placeholder="Your name here" />!
        It is {this.props.date.toTimeString()}
        <RaisedButton label='guzik' />
        <Hello />
      </div>
    );
  }
});

ReactDOM.render(
  <HelloWorld date={new Date()} />,
  document.getElementById('container')
);
