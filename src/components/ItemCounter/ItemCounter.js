import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './ItemCounter.css';

class ItemCounter extends Component {

    shouldComponentUpdate(nextProps) {
        return nextProps.listLength !== this.props.listLength || nextProps.remainingItemsCount !== this.props.uncheckedItemsCount;
    }

    render() {
        return (
            <div className="center counter">
                <h3>{`To-Do Items | Total: ${this.props.listLength}, Remaining: ${this.props.uncheckedItemsCount}`}</h3>
            </div>
        );

    }
}

ItemCounter.propTypes = {
    listLength: PropTypes.number,
    remainingItemsCount: PropTypes.number
};

export default ItemCounter;
