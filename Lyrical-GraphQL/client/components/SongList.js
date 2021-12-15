import React from "react";
import { graphql } from "react-apollo";
import { fetchSongListQuery, DeleteSongQuery } from "../queries/songQuery";
import { Link } from "react-router";

const SongList = (props) => {
  return (
    <div>
      {props.data.loading ? (
        <h3>loading.....</h3>
      ) : (
        <ul>
          {props.data.songs.map((song) => (
            <li key={song.id}>{song.title}</li>
          ))}
        </ul>
      )}
      <Link to="/song/new" className="btn-floating btn-large red right">
        <i className="material-icons">+</i>
      </Link>
    </div>
  );
};

// TODO Check this and find a new Solution
export default graphql(DeleteSongQuery)(graphql(fetchSongListQuery)(SongList));
