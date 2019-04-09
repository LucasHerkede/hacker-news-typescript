import React from 'react';
import { Story } from "../../models";
import { List } from "antd";
import Paragraph from "antd/lib/typography/Paragraph";
import { RouteComponentProps, withRouter } from 'react-router';

export interface StoryItemProps extends RouteComponentProps<any> {
  story?: Story;
}

function StoryItem({ story }: StoryItemProps) {

  if (!story) return <Paragraph> Opps! </Paragraph>

  return (
    <Paragraph>
      {story.title}
    </Paragraph>
  );
}

export default withRouter<StoryItemProps>(StoryItem);