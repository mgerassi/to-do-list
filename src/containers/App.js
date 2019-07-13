import React, { Component } from 'react';
import InputForm from '../components/InputForm/InputForm'
import ToDoList from '../components/ToDoList/ToDoList'

import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      input: '',
      list: [
        { text: "Eat", done: false },
        { text: "Sleep", done: false },
        { text: "React", done: true },
        { text: "Repeat", done: false }
      ]
    };
  }

  componentDidMount() {
    document.getElementById("textbox").focus();
  }

  onInputChange = (event) => {
    this.setState({ input: event.target.value });
  }

  onButtonSubmit = () => {
    if (this.state.input !== '') {
      this.setState({ list: this.state.list.concat({ text: this.state.input, done: false }) });
      this.setState({ input: '' });
      document.getElementById("textbox").value = '';
      document.getElementById("textbox").focus();
    }
  }

  onCheckboxClick = (indexToToggle) => {
    this.setState({
      list:
        this.state.list.map((item, index) => {
          if (index === indexToToggle) {
            item.done = !item.done;
            return item;
          } else {
            return item;
          }
        })
    })
  }

  onDeleteClick = (indexToRemove) => {
    this.setState({ list: this.state.list.filter((item, index) => index !== indexToRemove) });
  };

  onDeleteDone = () => {
    this.setState({ list: this.state.list.filter(item => item.done === false) });
  };

  onDeleteAll = () => {
    this.setState({ list: [] });
  }

  onToggleSelectAll = (isChecked) => {
    this.setState({
      list: this.state.list.map(item => {
        item.done = isChecked;
        return item;
      })
    });
  }

  render() {
    return (
      <div>
        <InputForm onInputChange={this.onInputChange} onButtonSubmit={this.onButtonSubmit}
          onToggleSelectAll={this.onToggleSelectAll} onDeleteDone={this.onDeleteDone} onDeleteAll={this.onDeleteAll} />
        <ToDoList toDoList={this.state.list} onCheckboxClick={this.onCheckboxClick} onDeleteClick={this.onDeleteClick} />
      </div>
    )
  }
}

export default App;