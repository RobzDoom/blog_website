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
                    label = "Categories"
                    name = "categories"
                    component = {this.renderField}
                />
                <Field 
                    label = "Post Content"
                    name = "content"
                    component = {this.renderField}
                />
            </form>
        )
    }

}

function validate (values) {
    const errors = {};

    //Have to validate inputs from values
    if (!values.title){
        errors.title = "Enter a title";
    }
    if(!values.categories){
        errors.categories = "Enter some content";
    }
    if (!values.content){
        errors.content = "Enter some content please";
    }

    // if errors is empty, the form is fine to submit
    // if errors has ANY properties, Redux from assumes form is invalid
    return errors

}

export default  reduxForm({
    validate,
    form: 'PostNewFrom'
})(PostNew)