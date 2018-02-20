/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';
import { FormattedMessage } from 'react-intl';
import messages from './messages';
import TodoForm from 'components/todoForm';
import TodoList from 'components/todoList';
import styled from 'styled-components';

// Create a <Title> react component that renders an <h1> which is
// centered, palevioletred and sized at 1.5em
const Title = styled.h2`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
  margin: 0em;
`;

// Create a <Wrapper> react component that renders a <section> with
// some padding and a papayawhip background
const Wrapper = styled.section`
  padding: 4em;
  background: papayawhip;
  height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export default class HomePage extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      value : '',
      items : []
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleAddBtnClick = this.handleAddBtnClick.bind(this);
    this.handleRemoveBtnClick = this.handleRemoveBtnClick.bind(this);
  }

  handleChange (e) {
    this.setState({value : e.target.value});
  }

  handleAddBtnClick () {
    if (this.state.value !== '') {
      let items = this.state.items,
        val = this.state.value;
      items.push(val);
      this.setState({items: items});
    }
  }

  handleRemoveBtnClick (value) {
    let ls = this.state.items.filter((item) => {
      if (value !== item) {
        return item;
      }
    });
    this.setState({items: ls});
  }

  render () {
    return (
      <Wrapper>
        <Title>
          <FormattedMessage {...messages.header} />
        </Title>
        <article>
          <TodoForm value={this.props.value} handleChange={this.handleChange} handleAddBtnClick={this.handleAddBtnClick}/>
          <TodoList items={this.state.items} handleRemoveBtnClick={this.handleRemoveBtnClick}/>
        </article>
      </Wrapper>
    );
  }
}
