import React, { Component } from 'react';

export default class CountdownTimer extends Component {
    static defaultProps = { countFrom: 10 }
  
    constructor(props) {
        super(props);
        this.state = { count: props.countFrom };
    }
  
    componentDidMount() {
        console.log('CountdownTimer: componentDidMount');
        this.interval = setInterval(() => {
            this.setState({ count: this.state.count - 1 });
        }, 1000);
    }
  
    componentWillUnmount() {
        console.log('CountdownTimer: componentWillUnmount');
        clearInterval(this.interval);
    }

    shouldComponentUpdate(props, state) {
        console.log('CountdownTimer: shouldComponentUpdate');
        console.log('CountdownTimer: Incoming state and props:', props, state);
        return true;
    }
    
    componentDidUpdate() {
        console.log('CountdownTimer: componentDidUpdate');
    }

    render() {
        console.log('CountdownTimer: render');
        return (
            <div>{this.state.count}</div>
        );
    }
}