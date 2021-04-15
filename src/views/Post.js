import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Post extends Component {
    constructor() {
        super();

        this.state = {
            post: {}
        }
    }

    componentDidMount() {
        console.log('mount')
        fetch(`http://localhost:5000/blog/myposts/${this.props.match.params.id}`)
            .then(res => res.json())
            .then(data => this.setState({post:data}))
            .catch(error => console.error(error))
    }

    render() {
        const p=this.state.post;
        return (
            <div className="col-md-6 offset-md-3">
                <div className="card">
                    <div className="card-body">
                        <h3 className="card-title">
                            {p.title}

                        </h3>
                        <img className="card-img-top img-fluid" src={p.image} alt={p.title} />
                        <p className="card-text">{p.content}</p>
                    </div>
                    <div className="card-footer">
                        <Link to="/blog">
                            <button className="btn btn-secondary float-end">Blog</button>
                        </Link>
                    </div>
                </div>
            </div>
        )
    }
}