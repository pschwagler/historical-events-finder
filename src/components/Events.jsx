import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Events extends Component {
  render() {
    const eventNodes = this.props.events
      .slice(0, 10)
      .map(function(event, index) {
        return <div key={index}>{event.description}</div>;
      });

    return (
      <div>
        <ul>{eventNodes}</ul>
      </div>
    );
  }
}

Events.propTypes = {
  events: PropTypes.array.isRequired
};

export default Events;
