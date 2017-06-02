import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form'

//reduxForm is very similar to connect

class PostNew extends Component {
    
    renderField(field){
        const {meta: {touched, error }} = field
        const className = `form group ${touched && error ? 'has-danger' : ''}`
        return (
            <div className = {className}>
                <label>{field.label}</label>
                <input 
                    className = 'form-control'
                    type = "text"
                    {...field.input}
                />
                <div className = "text-help">
                    { touched ? error: "" }
                </div>
            </div>
        )
    }
    onSubmit(values){
        console.log(values);
    }

    render(){
        const { handleSubmit } = this.props
        // handle submit is coming from ReduxForm


        return(
            <form onSubmit={handleSubmit(this.onSubmit.bind(this))}> 
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
                <button type="submit" className = "btn btn-primary"> Submit </button>
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