import React, { Component } from 'react';

class PhoneInfo extends Component {
    render() {
        const { name, phone, id } = this.props.info;

        const style = {
            border: '1px solid black',
            padding: '10px',
            margin: '8px',
        };
        return (
            <div>
                <div>{name}</div>
                <div>{phone}</div>
            </div>
        );
    }
}

export default PhoneInfo;
