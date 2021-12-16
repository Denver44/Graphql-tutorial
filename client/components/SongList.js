import React from "react";
import { graphql } from "react-apollo";
import { fetchSongListQuery, DeleteSongQuery } from "../queries/songQuery";
import { Link } from "react-router";
import "../style/style.css";

const SongList = (props) => {
  const OnSongDelete = (id) => {
    props
      .mutate({
        variables: { id },
      })
      .then(() => props.data.refetch())
      .catch((e) => console.log(e));
  };

  return (
    <div>
      {props.data.loading ? (
        <h3>loading.....</h3>
      ) : (
        <ul>
          {props.data.songs.map((song) => (
            <div className="collection-item" >
              <Link to={`/song/${song.id}`}>
                <li key={song.id}> {song.title}</li>
              </Link>
              <i
                className="material-icons delete-icon"
                onClick={() => OnSongDelete(song.id)}
              >
                delete
              </i>
            </div>
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
