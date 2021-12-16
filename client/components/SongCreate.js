import React, { Component } from "react";
import { graphql } from "react-apollo";
import { Link, hashHistory } from "react-router";
import { CreateSongQuery, fetchSongListQuery } from "../queries/songQuery";

class SongCreate extends Component {
  constructor(props) {
    super(props);
    this.state = { title: "" };
  }
  handleSubmit(e) {
    e.preventDefault();
    console.log(this.props);
    this.props
      .mutate({
        variables: {
          title: this.state.title,
        },
        refetchQueries: [{ query: fetchSongListQuery }],
      })
      .then(() => hashHistory.push("/"))
      .catch((e) => console.log(e));
  }
  render() {
    return (
      <div>
        <Link to="/">Back</Link>
        <h3>Create a new Song</h3>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <label>Song Title :</label>
          <input
            value={this.state.title}
            onChange={(e) => this.setState({ title: e.target.value })}
          />
        </form>
      </div>
    );
  }
}

export default graphql(CreateSongQuery)(SongCreate);
