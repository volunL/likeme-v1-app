import React from "react";
import { withTheme } from "@material-ui/core";
//提示页面
const NotificationsView = ({ ...props }) => {
  return (
    <React.Fragment>
      <div>notification 提示页面</div>
    </React.Fragment>
  );
};
export default withTheme()(NotificationsView);
