import React, { Component } from "react";
import { graphql } from "react-apollo";
import "../style/style.css";
import { FetchSongByIDQuery } from "../queries/songQuery";

class SongDetail extends Component {
  constructor(props) {
    super(props);
    this.state = { title: "" };
  }

  handleFetch() {
    this.props
      .mutate({
        variables: {
          id: this.props.routeParams.id,
        },
      })
      .then((data) => this.setState({ title: data.title }))
      .catch((e) => console.log(e));
  }

  render() {
    console.log(this.props.routeParams.id);
    return (
      <div>
        <h3>{this.props.title === "" ? <h1>No Song</h1> : this.state.title}</h3>
      </div>
    );
  }
}

export default graphql(FetchSongByIDQuery)(SongDetail);
