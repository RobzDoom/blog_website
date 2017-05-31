import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form'

//reduxForm is very similar to connect

class PostNew extends Component {
    
    renderField(field){
        return (
            <div className = 'form-group'>
                <label>{field.label}</label>
                <input 
                    className = 'form-control'
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
                    label = 'Title'
                    //label can be anyyhting you want. Its a property and you can choose to name it as you please.  
                    name = "title"
                    component = {this.renderField}
                />
                 <Field 
                    label = "Tags"
                    name = "tags"
                    component = {this.renderField}
                />
                <Field 
                    label = "Post Content"
                    name = "tags"
                    component = {this.renderField}
                />
            </form>
        )
    }

}

export default  reduxForm({
    form: 'PostNewFrom'
})(PostNew)