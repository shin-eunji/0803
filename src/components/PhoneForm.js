import React, { Component } from 'react';

class PhoneForm extends Component {
    state = {
        name: '',
        phone: '',
    };
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
        });
    };
    // 새로고침 방지
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.onCreate(this.state);

        // input 값 초기화
        this.setState({
            name: '',
            phone: '',
        });
    };

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input
                    name="name"
                    placeholder="이름을 입력하세요"
                    onChange={this.handleChange}
                    value={this.state.name}
                />
                <input
                    name="phone"
                    placeholder="전화번호를 입력하세요"
                    onChange={this.handleChange}
                    value={this.state.phone}
                />
                <button type="submit">등록</button>
            </form>
        );
    }
}

export default PhoneForm;
