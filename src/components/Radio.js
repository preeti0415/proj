/*jshint esversion: 6 */
import React, {Component} from 'react';
import {PropTypes} from 'prop-types';

class Radio extends Component {
	constructor(props) {
        super(props);
       
		this.state = {
			radioClick: "name"
		};
	}

	onChange(el) {
		// on radio state change handler
	}

	render() {
        // Work to do here...
     
		return (<div className="radioButtons">
			<div className="left">
				<input type="radio"></input>
				<label>&nbsp;&nbsp;Sort by name</label>
			</div>
			<div className="right">
				<input type="radio"></input>
				<label>&nbsp;&nbsp;Sort by age</label>
			</div>
		</div>);
	}
}

Radio.propTypes = {
	sortBy: PropTypes.func
}

export default Radio;

