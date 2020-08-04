import React, { Component } from 'react';

class PhoneForm1 extends Component {
    state = {
        name: '',
        phone: '',
    };
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
        });
    };

    render() {
        return (
            <div>
                <input
                    placeholder="Name"
                    onChange={this.handleChange}
                    value={this.state.name}
                    name="name"
                />
                <input
                    placeholder="Phone"
                    onChange={this.handleChange}
                    value={this.state.phone}
                    name="phone"
                />
                {this.state.name}
                {this.state.phone}
            </div>
        );
    }
}

export default PhoneForm1;
