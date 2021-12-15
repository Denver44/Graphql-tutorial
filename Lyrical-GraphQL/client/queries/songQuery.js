import gql from "graphql-tag";

const fetchSongListQuery = gql`
  {
    songs {
      id
      title
    }
  }
`;
const CreateSongQuery = gql`
  mutation AddSong($title: String) {
    addSong(title: $title) {
      id
      title
    }
  }
`;

const DeleteSongQuery = gql`
  mutation DeleteSong($id: ID) {
    deleteSong(id: $id) {
      id
    }
  }
`;
const FetchSongByIDQuery = gql`
  query FetchSong($id: ID!) {
    song(id: $id) {
      title
      id
    }
  }
`;

export {
  fetchSongListQuery,
  CreateSongQuery,
  DeleteSongQuery,
  FetchSongByIDQuery,
};
