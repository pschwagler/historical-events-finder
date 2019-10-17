import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Events extends Component {
  render() {
    const eventNodes = this.props.events.map(function(event, index) {
      return <li key={index}>{event.description}</li>;
    });

    return <ul>{eventNodes}</ul>;
  }
}

Events.propTypes = {
  events: PropTypes.array.isRequired
};

export default Events;
