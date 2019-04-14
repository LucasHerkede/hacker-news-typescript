import React from "react";
import ButtonGroup from "antd/lib/button/button-group";
import { Button, Icon, Row } from "antd";
import { AppState } from "../../store";
import { connect } from "react-redux";
import { bindActionCreators, Dispatch } from "redux";
import * as StoryActions from "../../store/ducks/filteredStories/actions";

interface StateProps {
  page: number;
}

interface DispatchProps {
  loadRequest(page: number): void;
}

type Props = StateProps & DispatchProps;

interface Disabled {
  disabled: boolean;
}

class StoriesPage extends React.Component<Props> {
  _nextPage() {
    const { page, loadRequest } = this.props;
    loadRequest(page + 1);
    window.scroll(0, 0);

  }

  _previousPage() {
    const { page, loadRequest } = this.props;
    loadRequest(page - 1);
    window.scroll(0, 0);
  }

  render() {
    const { page } = this.props;
    return (
      <Row type="flex" justify="end">
        <ButtonGroup>
          <Button disabled={page <= 1} onClick={() => this._previousPage()}>
            <Icon type="left" />
          </Button>
          <Button onClick={() => this._nextPage()}>
            <Icon type="right" />
          </Button>
        </ButtonGroup>
      </Row>
    );
  }
}

const mapStateToProps = (state: AppState) => ({
  page: state.filteredStories.page
});
const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators(StoryActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StoriesPage);
