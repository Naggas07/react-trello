import React, { Component } from "react";
import services from "../services/TrelloService";
import '../Css/NewCard.css'

class NewCard extends Component {
  state = {
    data: {
      title: "",
      description: "",
      labels: [],
      position: 0,
      column: this.props.match.params.id
    },
    options:{
        labels: ['Learning Unit', 'Kata', 'Example', 'Lab', 'Done!', 'Review', 'Bonus']
    }
  };

  componentDidMount() {
    services.getColumn(this.state.data.column).then(column => {
      this.setState({
        data: {
          ...this.state.data,
          position: column.data.cards.length
        }
      });
    });
  }

  handelChange = event => {
    const {name, value} = event.target

        this.setState({
            data: {
              ...this.state.data,
              [name]: value
            }
          })
    }
  

  render() {
    return(
        <article className="new-card container mt-4">
        <form >
          <div className="form-group">
            <label htmlFor="title">Insert title</label>
            <input required type="text"
            className="form-control"
            placeholder="title"
            name="title" 
            onChange={this.handelChange}
            value={this.state.data.title}/>
          </div>

          <div className="form-group">
            <label htmlFor="description">Insert description</label>
            <textarea required type="text"
            className="form-control"
            placeholder="description"
            name="description" 
            onChange={this.handelChange}
            value={this.state.data.description}/>
          </div>
          <div className="form-group">
            <label htmlFor="labels">labels</label>
            <select className="form-control"
             name="labels" 
             onChange={this.handelChange}>
                {this.state.options.labels.map((item, i) => <option key={i}> {item} </option>)}
            </select>
          </div>

          <button type="submit" className="btn btn-primary btn-block">Create</button>
        </form>
      </article>
    )
  }
}

export default NewCard;
