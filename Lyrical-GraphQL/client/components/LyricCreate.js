import React, { Component } from "react";
import { graphql } from "react-apollo";
import { AddLyricToSongQuery, FetchSongByIDQuery } from "../queries/songQuery";

class LyricCreate extends Component {
  constructor(props) {
    super(props)
    this.state = { content: "" }
  }
  handleSubmit(e) {
    e.preventDefault();
    this.setState({ content: "" })
    this.props
      .mutate({
        variables: {
          id: this.props.id,
          content: this.state.content,
        },
        refetchQueries: [{ query: FetchSongByIDQuery }],
      })
    // .then(() => hashHistory.push("/"))
    // .catch((e) => console.log(e));
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit.bind(this)}>
        <label>Add a Lyric :</label>
        <input
          value={this.state.content}
          onChange={(e) => this.setState({ content: e.target.value })}
        />
      </form>
    );
  }
}

export default graphql(AddLyricToSongQuery)(LyricCreate);

