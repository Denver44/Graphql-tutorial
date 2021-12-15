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

export { fetchSongListQuery, CreateSongQuery };
