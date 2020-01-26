import React, {Component} from 'react';
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

        const col ={
            title: this.state.data.title
        }

        this.props.createColum(col.title)

        this.setState({
            data:{
                title: ''
            }, errors: {
                title: true
            }
        })
    }


    render() { 
        return ( 
            <div className="column">
            <h3>New Column</h3>
            <form className="create-column-form">
                <input type="text"
                placeholder="Title"
                onChange={this.handelChange}
                value={this.state.data.title}
                name="title"
                />
                <button className="btn btn-success"
                onSubmit={()=> this.handelSubmit}>Create</button>
            </form>
        </div>
         );
    }
}
 
export default NewColumn;