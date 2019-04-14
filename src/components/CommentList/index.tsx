import React, { Component } from "react";
import { Comment, Icon, Spin, Row, Col } from "antd";

import * as Models from "../../models";

const antIcon = <Icon type="loading" style={{ fontSize: 24 }} spin />;

const renderComment = (comment: Models.Comment) => (
  <Comment author={comment.user} content={renderText(comment.content)} key={comment.id}>
    {comment.comments
      ? comment.comments.map(element => {
          return renderComment(element);
        })
      : null}
  </Comment>
);

const renderText = (text: string) => (
  <div dangerouslySetInnerHTML={{__html: text}} />
);

interface OwnProps {
  comments?: Models.Comment[];
}

class CommentList extends Component<OwnProps> {
  render() {
    const comments = this.props.comments;
    return (
      <div>
        {comments ? (
          comments.map(element => {
            return renderComment(element);
          })
        ) : (
            <Row align="middle" type="flex" justify="center">
                <Spin indicator={antIcon} />
            </Row>
        )}
      </div>
    );
  }
}

export default CommentList;
