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

const App = ({ classes, theme, isOpened, ...props }) => (
  <div className={classes.root}>
    <CssBaseline />
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
      </Toolbar>
    </AppBar>
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
    <main
      className={classNames(classes.content, {
        [classes.contentShift]: isOpened
      })}
    >
      <div className={classes.drawerHeader} />
      <Typography paragraph>材质化UI Demo</Typography>
      <Typography paragraph>测试测试测试</Typography>
    </main>
  </div>
);
export default compose(withStyles(AppCssStyles, { withTheme: true }))(App);
