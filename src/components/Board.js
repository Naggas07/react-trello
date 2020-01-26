import React, { Component } from 'react';
import services from '../services/TrelloService'
import Column from './Column';

import '../Css/Board.css'
import NewColumn from './NewColumn';

class Board extends Component {
   state={
       columns: [],
       total: 0
   }

newColumn = (title) => {
    services.createColumns(title, this.state.columns.length)
        .then(res => this.setState({total: res.position}))
} 

   componentDidMount(){
       services.getColumns()
        .then(
            columns => this.setState({columns})
        )
   }
    
    render() { 
        return ( 
            <div className="board">
                {this.state.columns.map(
                    (column, i) => <Column key={i} column={column} />
                )}
                <NewColumn createColum={() => this.newColumn}/>
            </div>
         );
    }
}
 
export default Board;