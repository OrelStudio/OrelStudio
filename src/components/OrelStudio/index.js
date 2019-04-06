'use strict'

import React, { Component } from 'react'
import { Waypoint } from 'react-waypoint'

// other components
import SideLogo from '../SideLogo'

class OrelStudio extends Component {
    constructor (props) {
        super(props)
    }

    _OrelEnterHandler() {
        console.log('Enter OrelStudio')
    }

    _OrelLeaveHandler() {
        if (typeof this.props.toggleStatus() === 'function') {
            this.props.toggleStatus()
        }
    }

    render() {
        return(
            <div>
                <div className={'iamorel'}>
                    <div>
                        <div className={'parral'}>
                            {'I am Orel'}
                            <Waypoint
                                onEnter={this._OrelEnterHandler}
                                onLeave={this._OrelLeaveHandler}
                                topOffset={'20px'}
                            >
                            </Waypoint>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default OrelStudio