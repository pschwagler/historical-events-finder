import React, { Component } from 'react';
import ReactPaginate from 'react-paginate';
import Events from './components/Events.jsx';
import SearchBar from './components/SearchBar.jsx';
import $ from 'jquery';
import './style.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      events: [],
      limitPerPage: 10,
      page: 1,
      pageCount: 1,
      search: ''
    };

    this.loadCommentsFromServer = this.loadCommentsFromServer.bind(this);
    this.handlePageClick = this.handlePageClick.bind(this);
    this.handleSearchInput = this.handleSearchInput.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
  }

  loadCommentsFromServer(search) {
    let data = { _limit: this.state.limitPerPage, _page: this.state.page };
    if (search !== undefined) {
      data.q = search;
    }

    $.ajax({
      url: '/events',
      data: data,
      dataType: 'json',
      type: 'GET',

      success: (events, textSatus, request) => {
        this.setState({
          events: events,
          pageCount: Math.ceil(
            request.getResponseHeader('X-Total-Count') / this.state.limitPerPage
          )
        });
      }
    });
  }

  componentDidMount() {
    this.loadCommentsFromServer();
  }

  handleSearchInput(e) {
    this.setState({ search: e.target.value });
  }

  handleSearch(e) {
    e.preventDefault();
    this.loadCommentsFromServer(this.state.search);
    this.setState({ search: '' });
  }

  handlePageClick(data) {
    let page = data.selected + 1;
    console.log(page);
    this.setState({ page }, () => {
      this.loadCommentsFromServer();
    });
  }

  render() {
    return (
      <>
        <SearchBar
          value={this.state.search}
          handleChange={this.handleSearchInput}
          handleSubmit={this.handleSearch}
        />
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
