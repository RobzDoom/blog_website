import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPost } from '../actions'

class PostsShow extends Component {
    componentDidMount (){
       const { id } =  this.props.match.params.id
        this.props.fetchPost(id);
    }
    render(){
        this.props.post
        return (
            <div>
                Post Show ajshdjashdj
            </div>
        );
    };
}

function mapStateToProps({ posts }, ownProps){
    return { post: [ownProps.match.params.id] }
}

export default connect(mapStateToProps, { fetchPost }) (PostsShow);
