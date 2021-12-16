import React, { Component } from "react";
import gql from "graphql-tag";
import { graphql } from "react-apollo";

class SongCreate extends Component {
  constructor(props) {
    super(props);
    this.state = { title: "" };
  }
  handleSubmit(e) {
    e.preventDefault();
    console.log(this.props);
    this.props.mutate({
      variables: {
        title: this.state.title,
      },
    });
  }
  render() {
    return (
      <div>
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

const mutation = gql`
  mutation AddSong($title: String) {
    addSong(title: $title) {
      id
      title
    }
  }
`;

export default graphql(mutation)(SongCreate);
