import React, { Component } from "react";
import services from "../services/TrelloService";
import Column from "./Column";

import "../Css/Board.css";
import NewColumn from "./NewColumn";

class Board extends Component {
  state = {
    columns: [],
    total: 0
  };

  refreshColumns = () => {
    services.getColumns()
      .then(columns => this.setState({ columns }))
  }

  componentDidMount() {
    this.refreshColumns();
  }

  render() {
    return (
      <div className="board">
        {this.state.columns.map((column, i) => (
          <Column key={i}
           column={column}
           refreshColumns={this.refreshColumns} />
        ))}
        <NewColumn
        nextPosition={this.state.columns.length}
        refreshColumns={this.refreshColumns} />
      </div>
    );
  }
}

export default Board;
