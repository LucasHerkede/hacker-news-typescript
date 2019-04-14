import React, { Component, PureComponent } from "react";
import { Layout, Icon } from "antd";
import MenuHeader from "../../components/MenuHeader";
import { BrowserRouter } from "react-router-dom";
import AppRouter from "../../AppRouter";

class Main extends PureComponent {
  render() {
    const { Header, Content } = Layout;

    return (
      <div>
        <Layout>
          <Header>
            <MenuHeader />
          </Header>
          <Content>
            <BrowserRouter>
              <AppRouter />
            </BrowserRouter>
          </Content>
        </Layout>
      </div>
    );
  }
}

export default Main;
