
import React from 'react';
import { Switch, Route } from "react-router-dom";
import StoryList from "./components/StoryList";
import StoryItem, { StoryItemProps } from './components/StoryItem';

const AppRouter = () => (
  <Switch>
    <Route exact path="/" component={StoryList} />
    <Route path='/story/:id' component={StoryItem} />
  </Switch>
);

export default AppRouter;
