import React, { Component } from "react";
import { List, Icon } from "antd";
import { AppState } from "../../store";
import { bindActionCreators, Dispatch } from "redux";
import * as StoryActions from "../../store/ducks/filteredStories/actions";
import { connect } from "react-redux";
import { Story } from "../../models";
import styles from "./StoryList.module.css";
import { Link } from "react-router-dom";

interface StateProps {
  stories: Story[];
  page: number;
}

interface DispatchProps {
  loadRequest(page: number): void;
}

type Props = StateProps & DispatchProps;

interface OwnProps {
  text: string;
  icon: string;
  type: string;
}

const IconText = ({ icon, type, text }: OwnProps) => (
  <span>
    <Icon type={icon} style={{ marginRight: 8 }} />
    {text} {type}
  </span>
);

class StoryList extends Component<Props> {
  componentDidMount() {
    const { loadRequest } = this.props;
    loadRequest(1);
  }

  render() {
    const { stories } = this.props;
    return (
      <List<Story>
        dataSource={stories}
        bordered
        itemLayout="vertical"
        renderItem={item => (
          <List.Item
            key={item.id}
            actions={[
              <IconText
                text={item.comments_count.toString()}
                icon="file-text"
                type="comments"
              />,
              <IconText
                text={item.points ? item.points.toString() : "0"}
                icon="like"
                type="points"
              />
            ]}
          >
            <List.Item.Meta
              className={styles.title_list}
              title={
                <Link to={{ pathname: `/story/${item.id}`, state: { story: item} }}>{item.title}</Link>
              }
            />
            <a href={item.url} className={styles.link}>
              {item.domain}
            </a>
          </List.Item>
        )}
      />
    );
  }
}

const mapStateToProps = (state: AppState) => ({
  stories: state.filteredStories.data,
  page: state.filteredStories.page
});
const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators(StoryActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StoryList);
