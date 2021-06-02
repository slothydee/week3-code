import React, { Component } from 'react';

export default class MountUnmount extends Component {
    constructor(props) {
        super(props);
        console.log('MountUnmount: constructor');
    }

    componentDidMount() {
        console.log('MountUnmount: componentDidMount');
    }

    componentWillUnmount() {
        console.log('MountUnmount: componentWillUnmount');
    }

    render() {
        console.log('MountUnmount: render');
        return <h1>Mount/Unmount</h1>
    }
}