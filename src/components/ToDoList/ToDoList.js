import React from 'react';
import ToDoListItem from '../ToDoListItem/ToDoListItem'
import './ToDoList.css'

const ToDoList = ({ toDoList, onCheckboxClick, onDeleteClick }) => {
    return (
        <div className='center'>
            <div className='box'>
                {
                    toDoList.map((toDoItem, index) => {
                        return (
                            <ToDoListItem
                                key={new Date().getTime() + index}
                                toDoText={toDoItem.text}
                                isChecked={toDoItem.done}
                                onCheckboxClick={() => onCheckboxClick(index)}
                                onDeleteClick={() => onDeleteClick(index)} />
                        );
                    })
                }
            </div>
        </div>
    );
};

export default ToDoList;