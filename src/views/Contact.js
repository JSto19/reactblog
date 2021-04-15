import React, { Component } from 'react'

export default class Contact extends Component {
    render() {
        return (
            <div>
                This is the Contact Page :)
            </div>
        )
    }
}
import React, { Component } from 'react'

export default class Contact extends Component {
    render() {
        return (
            <div>
                <div className="container">
                    <ul>
                        <li><h3>First Name: {this.props.contact_info.name.split(' ')[0]}</h3></li>
                        <li><h3>Last Name: {this.props.contact_info.name.split(' ')[1]}</h3></li>
                        <li><h3>Address: {this.props.contact_info.address }</h3></li>
                        <li><h3>Phone Number: {this.props.contact_info.phone}</h3></li>
                        <li><h3>Email: {this.props.contact_info.email}</h3></li>
                    </ul>
                </div>
            </div>
        )
    }
}