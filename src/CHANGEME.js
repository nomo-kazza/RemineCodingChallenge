import React, { Component } from 'react';
import RemineTable from './components/Table/RemineTable/RemineTable';
import API from './API';

class Test extends Component {
  state = {
    locations: null
  };
  componentWillMount() {
    API.getLocations().then(({ data }) => {
      console.log(data);
      this.setState({ locations: data });
    });
  }
  render() {
    return (
      <div className="testContainer">
        <div className="filterContainer">Your filters go here.</div>
        <pre>
          <code>{JSON.stringify(this.state.locations, null, 2)}</code>
        </pre>
        {this.state.locations ? <RemineTable properties={this.state.locations} /> : <h1>loading</h1>}
      </div>
    );
  }
}

export default Test;
