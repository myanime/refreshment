import React from 'react'

export default class BottleO extends React.Component {
  render() {
    return (
      <div className="panel" style={{backgroundColor: 'hotpink'}}>
        <div className="panel-header">{this.props.title}</div>
        <div className="panel-body">{this.props.children}</div>
      </div>
    );
  }
}
