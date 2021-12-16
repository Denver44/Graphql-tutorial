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
      lyrics {
        id
        content
        likes
      }
    }
  }
`;

const AddLyricToSongQuery = gql`
mutation addLyric($id : ID , $content : String){
  addLyricToSong(songId: $id, content: $content) {
    id
    lyrics{
      id
      content
      likes
    }
  }
}
`
const LikeLyricOfASongQuery = gql`
mutation LikeLyric($id : ID ){
  likeLyric(id: $id) {
    id
    likes
  }
}
`

export {
  fetchSongListQuery,
  CreateSongQuery,
  DeleteSongQuery,
  FetchSongByIDQuery,
  AddLyricToSongQuery,
  LikeLyricOfASongQuery
};
