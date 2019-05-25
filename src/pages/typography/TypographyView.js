import React from "react";
import { withTheme } from "@material-ui/core";
//图标页面
const TypographyView = ({ ...props }) => {
  return (
    <React.Fragment>
      <div>typography 段落页面</div>
    </React.Fragment>
  );
};
export default withTheme()(TypographyView);
