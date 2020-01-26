import React, { Component } from "react";
import services from "../services/TrelloService";
import "../Css/NewCard.css";
import { Redirect, Link } from "react-router-dom";

const validators = {
  title: val => val.length > 3,
  description: val => val.length > 3,
  labels: val => val.length >= 0
};

class NewCard extends Component {
  state = {
    data: {
      title: "",
      description: "",
      labels: [],
      position: 0,
      column: this.props.match.params.id
    },
    options: {
      labels: [
        "Learning Unit",
        "Kata",
        "Example",
        "Lab",
        "Done!",
        "Review",
        "Bonus"
      ]
    },
    touch: {},
    errors: {
      title: true,
      description: true,
      labels: false
    },
    toBoard: false
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

  labelUpdate = label => {
    if (this.state.data.labels.includes(label)) {
      this.setState({
        data: {
          ...this.state.data,
          labels: this.state.data.labels.splice(
            this.state.data.labels.indexOf(label),
            1
          )
        }
      });
    } else {
      this.setState({
        data: {
          ...this.state.data,
          labels: this.state.data.labels.push(label)
        }
      });
    }
  };

  handelChange = event => {
    const { name, value } = event.target;
    const valid = validators[name](value);

    this.setState({
      data: {
        ...this.state.data,
        [name]: value
      },
      errors: {
        ...this.state.errors,
        [name]: !valid
      }
    });
  };

  handelBlur = event => {
    const { name } = event.target;

    this.setState({
      touch: {
        ...this.state.touch,
        [name]: true
      }
    });
  };

  handelUpdated = event => {
    const { name } = event.target;

    this.setState({
      data: {
        ...this.state.data,
        labels: this.labelUpdate(name)
      }
    });
  };

  handelSubmit = event => {
    event.preventDefault()

    const card = {
      ...this.state.data
    }

    services.createCard(card)
      .then(card => {
        this.setState({
          toBoard: true
        })
      })

  }

  render() {
    if (this.state.toBoard) {
      return <Redirect to="/"/>
    }


    return (
      <article className="new-card container mt-4">
        <form onSubmit={this.handelSubmit}>
          <div className="form-group">
            <label htmlFor="title">Insert title</label>
            <input
              required
              type="text"
              className="form-control"
              placeholder="title"
              name="title"
              onChange={this.handelChange}
              value={this.state.data.title}
              onBlur={this.handelBlur}
            />
          </div>

          <div className="form-group">
            <label htmlFor="description">Insert description</label>
            <textarea
              required
              type="text"
              className="form-control"
              placeholder="description"
              name="description"
              onChange={this.handelChange}
              onBlur={this.handelBlur}
              value={this.state.data.description}
            />
          </div>
          <div className="form-group options">
           pending of update labels
          </div>

          <button type="submit" className="btn btn-primary btn-block">
            Create
          </button>
        </form>

        <Link to="/">Go Back</Link>
      </article>
    );
  }
}

export default NewCard;
