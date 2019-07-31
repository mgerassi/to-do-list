import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ItemCounter extends Component {

    shouldComponentUpdate(nextProps) {
        // console.log('shouldComponentUpdate(nextProps)');
        // console.log('nextProps.listLength', nextProps.listLength);
        // console.log('this.props.listLength', this.props.listLength);
        return nextProps.listLength !== this.props.listLength;
    }

    render() {
        // console.log('RENDERED');
        return (
            <div className="center">
                <h3>{`Total Number of List Items: ${this.props.listLength}`}</h3>
            </div>
        );

    }
}

ItemCounter.propTypes = {
    listLength: PropTypes.number
};

export default ItemCounter;
