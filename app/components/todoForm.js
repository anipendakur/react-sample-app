import React from 'react';
import { Switch, Route } from 'react-router-dom';
import styled from 'styled-components';

const SubTitle = styled.h3`
  font-size: 1.2em;
  text-align: center;
  color: orange;
  margin: 0em;
`;

const Button = styled.button`
  height: 2.1em;
  padding: 0;
  font-size: 1em;
  width: 5em;
  color: white;
  text-align: center;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.25);
  background: #f39c12;
  border: 0;
  cursor: pointer;
  -webkit-box-shadow: inset 0 -2px #e8930c;
  box-shadow: inset -2px  #e8930c;
  box-sizing: border-box;
`;

const Input = styled.input`
  background-color: white;
  height: 2em;
  box-sizing: border-box;
  box-shadow: 0 0 2px #e8930c;
  color: #f39c12;
  padding-left: 1em;
`;

export default class TodoForm extends React.Component {

  constructor (props) {
    super(props);
    this.handleChange = this.props.handleChange;
    this.handleAddBtnClick = this.props.handleAddBtnClick;
  }

  render () {
    return (
      <div>
        <SubTitle>
          Please add a Todo:
        </SubTitle>
        <Input onChange={this.handleChange} value={this.props.value}/>
        <Button onClick={this.handleAddBtnClick} type="button">Add</Button>
      </div>
    );
  }
}