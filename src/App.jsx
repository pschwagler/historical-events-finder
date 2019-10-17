import React, { Component } from 'react';
import ReactPaginate from 'react-paginate';
import Events from './components/Events.jsx';
import $ from 'jquery';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      events: [],
      limitPerPage: 10,
      offset: 0
    };

    this.loadCommentsFromServer = this.loadCommentsFromServer.bind(this);
    this.handlePageClick = this.handlePageClick.bind(this);
  }

  loadCommentsFromServer() {
    $.ajax({
      url: '/events',
      data: { limit: this.state.limitPerPage, offset: this.state.offset },
      dataType: 'json',
      type: 'GET',

      success: events => {
        this.setState({
          events: events,
          pageCount: Math.ceil(events.length / this.state.limitPerPage)
        });
      }
    });
  }

  componentDidMount() {
    this.loadCommentsFromServer();
  }

  handlePageClick(data) {
    let selected = data.selected;
    let offset = Math.ceil(selected * this.props.perPage);

    this.setState({ offset: offset }, () => {
      this.loadCommentsFromServer();
    });
  }

  render() {
    return (
      <>
        <Events events={this.state.events} />
        <ReactPaginate
          previousLabel={'previous'}
          nextLabel={'next'}
          breakLabel={'...'}
          breakClassName={'break-me'}
          pageCount={this.state.pageCount}
          marginPagesDisplayed={2}
          pageRangeDisplayed={5}
          onPageChange={this.handlePageClick}
          containerClassName={'pagination'}
          subContainerClassName={'pages pagination'}
          activeClassName={'active'}
        />
      </>
    );
  }
}

export default App;
