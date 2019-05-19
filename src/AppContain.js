//App 容器
import { withHandlers, compose, withState } from "recompose";
import App from "./App";

export default compose(
  withState("isOpened", "setIsOpened", false),
  withHandlers({
    //drawer打开
    handleDrawerClose: props => () => {
      props.setIsOpened(false);
    },
    //drawer关闭
    handleDrawerOpen: props => () => {
      props.setIsOpened(true);
    }
  })
)(App);
