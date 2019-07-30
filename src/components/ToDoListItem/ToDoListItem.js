import React from 'react';
import PropTypes from 'prop-types';
import './ToDoListItem.css';

const ToDoListItem = ({ toDoText, isChecked, onCheckboxClick, onDeleteClick }) => {
    return (
        <div className="toDoItem">
            <div className="checkboxAndText">
                <label className="toToLabel">
                    <input
                        type="checkbox"
                        defaultChecked={isChecked}
                        onChange={onCheckboxClick}
                    />
                    {isChecked
                        ? <strike>{toDoText}</strike>
                        : <div>{toDoText}</div>
                    }
                </label>
            </div>
            <button
                className="button"
                id='deleteItemButton'
                onClick={onDeleteClick}
            >Delete</button>
        </div>
    );
};

ToDoListItem.propTypes = {
    toDoText: PropTypes.string,
    isChecked: PropTypes.bool,
    onCheckboxClick: PropTypes.func,
    onDeleteClick: PropTypes.func
};

export default ToDoListItem;
