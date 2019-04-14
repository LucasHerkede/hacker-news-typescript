import React, { memo } from "react";
import { Menu } from "antd";

const MenuHeader = () => (
  <Menu
    theme="dark"
    mode="horizontal"
    defaultSelectedKeys={["1"]}
    style={{ lineHeight: "64px" }}
  >
    <Menu.Item key="1">Home</Menu.Item>
  </Menu>
);

export default memo(MenuHeader);
