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
      SongList
      <ul>
        {props.data &&
          props.data.songs &&
          props.data.songs.map((song) => <li key={song.id}>{song.title}</li>)}
      </ul>
    </div>
  );
};

export default graphql(query)(SongList);
