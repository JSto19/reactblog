import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Post extends Component {
    render() {
        const p = this.props.post;
        console.log(p);
        return (
            <div className="container w-50 justify-content-center text-center">
                <h3>{p.title}</h3>
                <div className="container justify-content-center">
                    <Link to={`/blog/${p.id}`}>
                        <img className="w-100" src={p.image} alt={p.title}/>
                    </Link>
                    
                </div>
                <h6>{p.content}</h6>
            </div>
        )
    }
}