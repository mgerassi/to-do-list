import React, { Component } from 'react';
import InputForm from '../components/InputForm/InputForm';
import ToDoList from '../components/ToDoList/ToDoList';
import ItemCounter from '../components/ItemCounter/ItemCounter';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      input: '',
      list: [],
      uncheckedItemsCount: 0
    };
  }

  componentDidMount() {
    fetch('https://api.myjson.com/bins/1b3qs9') // This is a JSON file I've stored on a remote server. See: src/containers/initialList.json
      .then(resposne => resposne.json())
      .then(initalList => { this.setState({ list: initalList }, this.updateUncheckedItemsCount); });
  }

  onInputChange = (event) => {
    this.setState({ input: event.target.value });
  }

  onButtonSubmit = () => {
    if (this.state.input !== '') {
      this.setState({
        list:
          this.state.list.concat({
            text: this.state.input,
            done: false
          }),
        input: ''
      }, this.updateUncheckedItemsCount);
    }
  }

  onCheckboxClick = (indexToToggle) => {
    this.setState({
      list:
        this.state.list.map((item, index) => {
          if (index === indexToToggle) {
            item.done = !item.done;
          }
          return item;
        })
    }, this.updateUncheckedItemsCount);
  }

  onDeleteClick = (indexToRemove) => {
    this.setState({
      list:
        this.state.list.filter((item, index) =>
          index !== indexToRemove)
    }, this.updateUncheckedItemsCount);
  };

  onDeleteDone = () => {
    this.setState({
      list:
        this.state.list.filter(item =>
          item.done === false)
    }, this.updateUncheckedItemsCount);
  };

  onDeleteAll = () => {
    this.setState({ list: [] }, this.updateUncheckedItemsCount);
  }

  onToggleSelectAll = (event) => {
    const isChecked = event.target.checked;
    this.setState({
      list:
        this.state.list.map(item => {
          item.done = isChecked;
          return item;
        })
    }, this.updateUncheckedItemsCount);
  }

  updateUncheckedItemsCount = () => {
    this.setState({
      uncheckedItemsCount:
        this.state.list.filter(item =>
          item.done === false).length
    });
  }

  render() {
    return (
      <div>
        <InputForm
          input={this.state.input}
          onInputChange={this.onInputChange}
          onButtonSubmit={this.onButtonSubmit}
          onToggleSelectAll={this.onToggleSelectAll}
          onDeleteDone={this.onDeleteDone}
          onDeleteAll={this.onDeleteAll}
        />
        <ToDoList
          toDoList={this.state.list}
          onCheckboxClick={this.onCheckboxClick}
          onDeleteClick={this.onDeleteClick}
        />
        <ItemCounter
          listLength={this.state.list.length}
          uncheckedItemsCount={this.state.uncheckedItemsCount}
        />
      </div>
    );
  }
}

export default App;
