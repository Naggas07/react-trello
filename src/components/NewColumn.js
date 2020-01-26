import React, {Component} from 'react';
import services from "../services/TrelloService";
import '../Css/NewColumn.css'

const validators = {
    title: val => val.length>3
}

class NewColumn extends Component {
    state={
        data:{
            title: ''
        },
        errors:{
            title: true
        }
        
    }


    handelChange = (event) => {
        const {name, value} = event.target
        const  valid = validators[name](value)

        this.setState({
            data: {
              ...this.state.data,
              [name]: value
            },
            errors: {
              ...this.state.errors,
              [name]: !valid
            }
          })
    }

    handelSubmit = (event) => {
        event.preventDefault()

        const column ={
            title: this.state.data.title,
            position: this.props.nextPosition
        }

        
        services.createColumns(column)
            .then(this.props.refreshColumns)

        this.setState({
            data:{
                title: ''
            }
        })

    }


    render() { 
        const disabled = this.state.errors.title
        return ( 
            <div className="column">
            <h3>New Column</h3>
            <form className="create-column-form"
            onSubmit={this.handelSubmit}>
                <input type="text"
                placeholder="Title"
                onChange={this.handelChange}
                value={this.state.data.title}
                name="title"
                />
                <button className="btn btn-success" disabled={disabled} >Create</button>
            </form>
        </div>
         );
    }
}
 
export default NewColumn;