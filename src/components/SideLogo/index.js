'use strict'

import React, { Component } from 'react'


//other components

class SideLogo extends Component {
    constructor (props) {
        super(props)
        this.state = {
            turned: true
        }
        this.toggleStatus = this.toggleStatus.bind(this)
    }

    toggleStatus() {
        const { turned } = this.state;
        this.setState({ turned: !turned });
    }

    get display() {
        return this.state.turned ? 'block' : 'none'
    }

    componentDidMount() {
        const { toggleStatus } = this.props
        if (toggleStatus) {
            toggleStatus(this.toggleStatus)
        }
    }

    render() {
        return(
            <div className={'side-logo'} style={{display: this.display}} toggleStstus={this.toggleStatus}>
                {this.props.children}
            </div>
        )
    }
}

export default SideLogo
