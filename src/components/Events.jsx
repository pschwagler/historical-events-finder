import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Events extends Component {
  render() {
    console.log(this.props.events);
    const eventNodes = this.props.events.map(function(event, index) {
      return (
        <div className='event' key={index}>
          <h4>{event.date}</h4>
          <p>{event.description}</p>
        </div>
      );
    });

    return <div>{eventNodes}</div>;
  }
}

Events.propTypes = {
  events: PropTypes.array.isRequired
};

export default Events;
