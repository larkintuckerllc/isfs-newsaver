import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { getAuthenticated } from '../../ducks/authenticated';
import { getChannel } from '../../ducks/channel';
import { getConnected } from '../../ducks/connected';
import * as fromBlocked from '../../ducks/blocked';
import Authentication from './Authentication';
import Channel from './Channel';
import Connect from './Connect';
import Frame from './Frame';
import Saver from '../Saver';

class App extends Component {
  componentDidMount() {
  }
  render() {
    const { authenticated, blocked, channel, connected } = this.props;
    if (!authenticated) return <Authentication />;
    if (channel === null) return <Channel />;
    if (!connected) return <Connect />;
    return (
      <Frame>
        {blocked ? null : <Saver />}
      </Frame>
    );
  }
}
App.propTypes = {
  authenticated: PropTypes.bool.isRequired,
  blocked: PropTypes.bool.isRequired,
  channel: PropTypes.number,
  connected: PropTypes.bool.isRequired,
};
export default connect(
  state => ({
    authenticated: getAuthenticated(state),
    blocked: fromBlocked.getBlocked(state),
    channel: getChannel(state),
    connected: getConnected(state),
  }), null
)(App);
