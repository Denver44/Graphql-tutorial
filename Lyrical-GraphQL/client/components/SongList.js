import React, { UseState, useEffect } from "react";
import gql from "graphql-tag";
import { graphql } from "react-apollo";

const query = gql`
  {
    songs {
      id
      title
    }
  }
`;

const SongList = (props) => {
  console.log("props ", props);
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
    </div>
  );
};

export default graphql(query)(SongList);
