import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form'

//reduxForm is very similar to connect

class PostNew extends Component {
    renderTitleField(field){
        return (
            <div>
                <input 
                    type = "text"
                    {...field.input}
                />
            </div>
        )
    }
    
    render(){
        return(
            <form> 
                <Field 
                    name = "title"
                    component = {this.renderTitleField}
                />
            </form>
        )
    }

}

export default  reduxForm({
    form: 'PostNewFrom'
})(PostNew)