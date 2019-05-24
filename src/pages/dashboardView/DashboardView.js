import React from "react";
import { withTheme } from "@material-ui/core";

const DashboardView = ({ ...props }) => {
  return (
    <React.Fragment>
      <div>dashboard</div>
    </React.Fragment>
  );
};
export default withTheme()(DashboardView);
