import React, { Component } from "react";
import { graphql } from "react-apollo";
import "../style/style.css";
import { FetchSongByIDQuery } from "../queries/songQuery";

class SongDetail extends Component {


  render() {
    console.log(this.props);
    return (
      <div>
        <h3>{this.props.data.song === undefined ? <h1>No Song</h1> : this.props.data.song.title}</h3>
      </div>
    );
  }
}

// This props is from react-router to graphQl then from graphql it comes to our component so this will work in modern react also.
export default graphql(FetchSongByIDQuery, {
  options: (props) => { return { variables: { id: props.params.id } } }
})(SongDetail);
