import React from "react";
import { graphql } from "react-apollo";
import { LikeLyricOfASongQuery } from "../queries/songQuery";
import "../style/style.css";

const LyricList = (props) => {


  const OnSongLike = (id, likes) => {
    props
      .mutate({
        variables: { id },
        optimisticResponse: {
          __typename: 'Mutation',
          likeLyric: {
            id,
            __typename: 'LyricType',
            likes: ++likes
          }
        }

      })
  };

  return (
    <div>
      <h1>Hello</h1>
      {props.lyricList.length === 0 ? (
        <h3>Add lyrics to Your Song Please</h3>
      ) : (
        <ul className="collection">
          {props.lyricList.map(({ id, content, likes }) => (
            <div className="collection-item" key={id} >
              <li> {content}</li>
              <div className="collection-item" >
                <i
                  className="material-icons like-icon"
                  onClick={() => OnSongLike(id, likes)}
                >
                  thumb_up
                </i>
                <p>{likes}</p>
              </div>
            </div>
          ))}
        </ul>
      )}

    </div>
  );
};

export default graphql(LikeLyricOfASongQuery)(LyricList);

