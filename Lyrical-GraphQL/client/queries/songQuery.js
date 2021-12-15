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

export { fetchSongListQuery, CreateSongQuery, DeleteSongQuery };
