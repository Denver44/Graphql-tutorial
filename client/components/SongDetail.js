import React, { Component } from "react";
import { graphql } from "react-apollo";
import "../style/style.css";
import { FetchSongByIDQuery } from "../queries/songQuery";
import { Link } from "react-router";
import LyricCreate from "./LyricCreate";
import LyricList from "./LyricList";

class SongDetail extends Component {
  render() {
    console.log(this.props);
    return (
      <div>
        <Link to="/">Back</Link>
        {this.props.data.loading ? <h1>Loading...</h1> :
          (<div>
            {this.props.data.song.title}
            <LyricList lyricList={this.props.data.song.lyrics} />
          </div>
          )
        }
        <LyricCreate id={this.props.params.id} />
      </div>
    );
  }
}

// This props is from react-router to graphQl then from graphql it comes to our component so this will work in modern react also.
export default graphql(FetchSongByIDQuery, {
  options: (props) => { return { variables: { id: props.params.id } } }
})(SongDetail);
