import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { getChannel } from '../../../ducks/channel';
import { grid } from '../../../util/grid';
import { getMatrix, getDimensions } from '../../../util/parameters';

class Frame extends Component {
  componentWillMount() {
    const { channel } = this.props;
    const frameEl = document.getElementById('frame');
    const frameContentEl = document.getElementById('frame__content');
    grid(channel, frameEl, frameContentEl, getMatrix(), getDimensions());
  }
  render() {
    const { children } = this.props;
    return (
      <div>
        {children}
      </div>
    );
  }
}
Frame.propTypes = {
  channel: PropTypes.number.isRequired,
  children: PropTypes.node,
};
export default connect(
  state => ({
    channel: getChannel(state),
  }), null
)(Frame);
