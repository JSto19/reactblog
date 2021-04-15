import React, { Component } from 'react'
import Post from '../components/Post';


export default class Blog extends Component {
    constructor() {
        super();

        this.state = {
            posts: []
        }
    }

    componentDidMount() {
        fetch('http://127.0.0.1:5000/blog/myposts')
            .then(res => res.json())
            .then(data => this.setState({ posts: data }))
            .catch(error => console.error(error))
    }

    render() {
        return (
            <div className="justify-content-center">
                {this.state.posts.map(p => ( <Post key={p.id} post={p} /> ))}
            </div>
        )
    }
}