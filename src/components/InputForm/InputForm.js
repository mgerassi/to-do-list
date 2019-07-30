import React from 'react';
import PropTypes from 'prop-types';
import './InputForm.css';

const InputForm = ({ input, onInputChange, onButtonSubmit, onToggleSelectAll, onDeleteDone, onDeleteAll }) => {

    const handleKeyPress = (event) => {
        if (event.keyCode === 13) {
            onButtonSubmit();
        }
    };

    return (
        <div className='form'>
            <div className='textform'>
                <input
                    autoFocus
                    value={input}
                    id='textbox'
                    type="text"
                    placeholder="To-Do..."
                    onChange={onInputChange}
                    onKeyDown={handleKeyPress}
                />
                <button
                    className="button"
                    onClick={onButtonSubmit}
                >{"Submit"}</button>
            </div>
            <div className='controls'>
                <button
                    className="button"
                    onClick={onDeleteDone}
                >{"Delete Done"}</button>
                <button
                    className="button"
                    onClick={onDeleteAll}
                >{"Delete All"}
                </button>
                <label
                    className='toggleLabel'>
                    <input
                        type='checkbox'
                        id='toggleCheckbox'
                        onChange={onToggleSelectAll} />
                    {"Check All/None"}
                </label>
            </div>
        </div>
    );
};

InputForm.propTypes = {
    input: PropTypes.string,
    onInputChange: PropTypes.func,
    onButtonSubmit: PropTypes.func,
    onToggleSelectAll: PropTypes.func,
    onDeleteDone: PropTypes.func,
    onDeleteAll: PropTypes.func,
};

export default InputForm;
