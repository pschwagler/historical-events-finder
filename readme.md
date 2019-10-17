#Historical Events Finder

## Basic Requirements

Build a single-page app that enables users to search and browse historical event information based on data found in the JSON file included with this repo. Use:

- `ReactJS` for all views and bundle with Webpack
- `json-server` as your simple web+api server
- `react-paginate` to manage data fetch from the server

You'll be working with a "messy" dataset. In this dataset, the dates are sometimes represented as year-only and sometimes as YYYY/MM/DD. Additionally, some dates fall into the BC range, and those dates have a negative sign in front. Lastly, citations are improperly formatted and are unusable in their current form. Yuck!

For basic requirements, you are going to ignore this messiness at the server layer by using json-server to create a simple web+api server from your JSON data source. Configure json-server to serve up static assets from your public folder. Target webpack to build into the public folder, then create an index.html file which loads that bundle, and you now have a simple full-stack react app.

Build a React UI that allows the user to search for historical events based on a keyword. Use the full-text search features of json-server to return a result to the UI for browsing. Paginate the list of events using react-paginate, loading no more than ten at a time. Ensure you are implementing server-side pagination NOT client-side pagination.

Reminder: emphasis should be placed on creating well-defined interfaces, writing code with a clear separation of concerns, and using the principles of modularity, encapsulation, abstraction.
