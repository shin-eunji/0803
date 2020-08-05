import React, { Component } from 'react';
import PhoneForm from './components/PhoneForm';
import PhoneInfoList from './components/PhoneInfo';
import Slide from './components/slide/Slide';

class App extends Component {
    id = 0;

    state = {
        information: [],
    };
    handleCreate = (data) => {
        const { information } = this.state;
        this.setState({
            information: information.concat(
                Object.assign({}, data, {
                    id: this.id++,
                }),
            ),
        });
    };

    render() {
        return (
            <div>
                <PhoneForm onCreate={this.handleCreate} />
                <PhoneInfoList data={this.state.information} />
                <Slide />
            </div>
        );
    }
}

export default App;
