import React from 'react';
import './InputForm.css';

const InputForm = ({ onInputChange, onButtonSubmit, onToggleSelectAll, onDeleteDone, onDeleteAll }) => {

    const handleKeyPress = (event) => {
        if (event.keyCode === 13) {
            onButtonSubmit();
        }
    }

    return (
        <div className='form'>
            <div className='textform'>
                <input id='textbox' type="text" placeholder="To-Do..." onChange={onInputChange} onKeyDown={handleKeyPress} />
                <button className="button" onClick={onButtonSubmit}>Submit</button>
            </div>
            <div className='controls'>
                <button className="button" onClick={onDeleteDone}>Delete Done</button>
                <button className="button" onClick={onDeleteAll}>Delete All</button>
                <label className='toggleLabel'>
                    <input type='checkbox' id='toggleCheckbox'
                        onChange={() => onToggleSelectAll(document.getElementById("toggleCheckbox").checked)} />
                    {"Check All/None"}
                </label>
            </div>
        </div>
    )
};

export default InputForm;