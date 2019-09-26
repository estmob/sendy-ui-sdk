import React from 'react';
import logo from './logo.svg';
import Sendy from './sdk/sendy-sdk';
import './App.scss';

class App extends React.PureComponent {
    state = {
        link: '',
        userKey: '',
    };

    componentDidMount() {
        Sendy.init(this.handleLink);
    }

    componentWillUnmount() {
        Sendy.final();
    }

    handleLink = link => {
        this.setState({ link: (this.state.link || '') + link + '\n' });
    };

    handleInputChange = e => {
        this.setState({ userKey: e.target.value });
    };

    handleClick = e => {
        const { userKey } = this.state;
        Sendy.launch(userKey);
    };

    render() {
        const { link, userKey } = this.state;

        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <p>Sendy Extension Example. Please click the button below.</p>
                    <div className="launch-box">
                        <input type="text" value={userKey} placeholder="User Key" onChange={this.handleInputChange} />
                        <button onClick={this.handleClick}>Launch</button>
                    </div>
                    <textarea value={link} readOnly />
                </header>
            </div>
        );
    }
}

export default App;
