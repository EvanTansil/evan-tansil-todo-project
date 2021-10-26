import React, { Component } from "react";
import { getNextModeByKey } from "../../Services/mode";
import { wrapChildrenWith } from "../../util/common";

class KeyStrokeHandler extends Component {
  componentWillMount() {
    window.addEventListener("keydown", this.handleKeyUP.bind(this));
  }
  componentWillUnmount() {
    window.removeEventListener("keydown", this.handleKeyUP);
  }

  handleKeyUP(e) {
    const { mode } = this.props.data;
    const nextMode = getNextModeByKey(mode, e.keyCode);

    if (nextMode !== mode) {
      e.preventDefault();
      this.props.action.changeMode(nextMode);
    }
  }
  render() {
    return <div>{wrapChildrenWith(this.props.children, this.props)}</div>;
  }
}

export default KeyStrokeHandler;
