import React, { Component } from "react";
import * as Models from "../../models";
import Paragraph from "antd/lib/typography/Paragraph";
import { RouteComponentProps } from "react-router";
import { AppState } from "../../store";
import { Dispatch, bindActionCreators } from "redux";
import { connect } from "react-redux";

import * as StoryActions from "../../store/ducks/comments/actions";
import Typography from "antd/lib/typography/Typography";
import Title from "antd/lib/typography/Title";
import CommentList from "../CommentList";

export interface StoryItemProps {
  id: string;
}

interface DispatchProps {
  loadRequest(storyId: number): void;
}

interface StateProps {
  stories: Models.Story[];
  comments?: Models.Comment[];
}

type Props = DispatchProps & RouteComponentProps<StoryItemProps> & StateProps;

class StoryItem extends Component<Props> {
  componentDidMount() {
    const { loadRequest, match } = this.props;
    loadRequest(parseInt(match.params.id));
  }

  render() {
    const { match, stories, comments } = this.props;

    if (!match.params.id) return <Paragraph> Opps! </Paragraph>;
    const item = stories.find(x => x.id.toString() == match.params.id);

    if (!item) return <Paragraph> Opps! </Paragraph>;
    return (
      <div>
        <Typography style={{ padding: "10px" }}>
          <Title level={3}>{item.title}</Title>
          <Paragraph>
            posted {item.time_ago} with {item.comments_count} comments
          </Paragraph>
        </Typography>
        <CommentList comments={comments} />
      </div>
    );
  }
}

const mapStateToProps = (state: AppState) => ({
  stories: state.filteredStories.data,
  comments: state.comments.data
});

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators(StoryActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StoryItem);
