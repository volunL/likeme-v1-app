/**
 * 主页 组件
 * created by  liangzx
 * 20190508
 *  */

import React from "react";
import classNames from "classnames";
import compose from "recompose/compose";
import { withStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";
import AppCssStyles from "./AppCssStyle";
import SearchIcon from "@material-ui/icons/Search";
import InputBase from "@material-ui/core/InputBase";
import { Route, Switch, Redirect } from "react-router-dom";
import DashboardView from "./pages/dashboardView";
import TypographyView from "./pages/typography";
import NotificationsView from "./pages/notifications";
import TablesView from "./pages/table";
import IconView from "./pages/icons";
import ErrorView from "./pages/errorpage";

const App = ({ classes, theme, isOpened, ...props }) => (
  <div className={classes.root}>
    <CssBaseline />

    {/*顶部栏 start*/}
    <AppBar
      color="primary"
      position="fixed"
      className={classNames(classes.appBar, {
        [classes.appBarShift]: isOpened
      })}
    >
      <Toolbar disableGutters={!isOpened}>
        <IconButton
          color="inherit"
          aria-label="Open drawer"
          onClick={props.handleDrawerOpen}
          className={classNames(classes.menuButton, isOpened && classes.hide)}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" color="inherit" noWrap>
          Materials-UI Demo
        </Typography>

        <div className={classes.search}>
          <div className={classes.searchIcon}>
            <SearchIcon />
          </div>
          <InputBase
            placeholder="Search…"
            classes={{
              root: classes.inputRoot,
              input: classes.inputInput
            }}
          />
        </div>
      </Toolbar>
    </AppBar>
    {/*顶部栏 end*/}

    {/*侧边弹出栏 start*/}
    <Drawer
      className={classes.drawer}
      variant="persistent"
      anchor="left"
      open={isOpened}
      classes={{
        paper: classes.drawerPaper
      }}
    >
      <div className={classes.drawerHeader}>
        <IconButton onClick={props.handleDrawerClose}>
          {theme.direction === "ltr" ? (
            <ChevronLeftIcon />
          ) : (
            <ChevronRightIcon />
          )}
        </IconButton>
      </div>
      <Divider />
      <List>
        {["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>
              {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {["All mail", "Trash", "Spam"].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>
              {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </Drawer>
    {/*侧边弹出栏 end*/}

    {/*主要显示页 start*/}
    <main
      className={classNames(classes.content, {
        [classes.contentShift]: isOpened
      })}
    >
      <div className={classes.drawerHeader} />
      <Switch>
        <Route exact path="/" render={() => <Redirect to="/app/dashboard" />} />
        {/* 仪表盘*/}
        <Route path="/app/dashboard" component={DashboardView} />
        {/*文笔框 */}
        <Route path="/app/typography" component={TypographyView} />
        {/*表 */}
        <Route path="/app/tables" component={TablesView} />

        {/*提示 */}
        <Route path="/app/notifications" component={NotificationsView} />

        {/**标志 */}
        <Route exact path="/app/icon" component={IconView} />
        {/**错误页 */}
        <Route component={ErrorView} />
      </Switch>
    </main>
    {/*主要显示页 end*/}
  </div>
);
export default compose(withStyles(AppCssStyles, { withTheme: true }))(App);
