import React from 'react';
import { Switch, Route } from 'react-router-dom';
import styled from 'styled-components';

const Button = styled.button`
  height: 2.1em;
  padding: 0;
  font-size: 1em;
  width: 5em;
  color: white;
  text-align: center;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.25);
  background: palevioletred;
  border: 0;
  cursor: pointer;
  -webkit-box-shadow: inset 0 -2px palevioletred;
  box-shadow: inset -2px  palevioletred;
  box-sizing: border-box;
`;

const Item = styled.span`
  color: palevioletred;
  padding-left: 1em;
`;

const ItemContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const IndividualItemContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 0.5em;
  border-radius: 2px;
  border: 2px solid palevioletred;
  box-sizing: border-box;
  align-items: center;
`;

export default class TodoList extends React.Component {

  constructor (props) {
    super(props);
    this.handleRemoveBtnClick = this.props.handleRemoveBtnClick;
    this.handleClick = this.handleClick.bind(this);
    // this.state.items = this.props.items;
  }

  handleClick (e) {
    e.preventDefault();
    this.handleRemoveBtnClick(e.target.value);
  }

  render () {
    let lis = this.props.items.map((item, ind) => {
      return (
        <IndividualItemContainer key={ind}>
          <Item>{item}</Item>
          <Button onClick={this.handleClick} value={item}>Remove</Button>
        </IndividualItemContainer>
      );
    });
    return (
      <ItemContainer>
        {lis}
      </ItemContainer>
    );
  }
}