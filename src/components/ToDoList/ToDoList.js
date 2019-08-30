import React from 'react';
import PropTypes from 'prop-types';
import ToDoListItem from '../ToDoListItem/ToDoListItem';
import uuid from 'uuid';
import './ToDoList.css';

const ToDoList = ({ toDoList, onCheckboxClick, onDeleteClick }) => {
    return (
        <div className='center'>
            <div className='box'>
                {
                    toDoList.map((toDoItem, index) => {
                        return (
                            <ToDoListItem
                                key={uuid.v4()}
                                toDoText={toDoItem.text}
                                isChecked={toDoItem.done}
                                onCheckboxClick={() => onCheckboxClick(index)}
                                onDeleteClick={() => onDeleteClick(index)}
                            />
                        );
                    })
                }
            </div>
        </div>
    );
};

ToDoList.propTypes = {
    toDoList: PropTypes.arrayOf(PropTypes.object),
    onCheckboxClick: PropTypes.func,
    onDeleteClick: PropTypes.func
};

export default ToDoList;
