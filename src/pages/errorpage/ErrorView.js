import React from "react";
import { withTheme } from "@material-ui/core";
//错误页面
const ErrorView = ({ ...props }) => {
  return (
    <React.Fragment>
      <div>Error 错误页面</div>
    </React.Fragment>
  );
};
export default withTheme()(ErrorView);
