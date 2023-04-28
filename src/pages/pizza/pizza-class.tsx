import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPizza } from './actions/actions';
import PizzaFilter from './components/pizza-filter/pizza-filter';
import Card from '../../shared/components/card/card';

import './pizza.scss';
import { AppStateType } from '../../shared/types/app-state-type';
import { PizzaType } from './types';

interface StateType {
  filteredPizzasData: PizzaType[];
}

export type PizzaPropsType = {
  pizzasData: PizzaType[];
  fetchPizza: () => void;
};

class PizzaPage extends Component<PizzaPropsType, StateType> {
  constructor(props: PizzaPropsType) {
    super(props);

    this.state = {
      filteredPizzasData: [],
    };
  }

  componentDidMount() {
    this.props.fetchPizza();
  }

  componentDidUpdate(prevProps: PizzaPropsType) {
    if (prevProps.pizzasData !== this.props.pizzasData) {
      this.setState({ filteredPizzasData: this.props.pizzasData });
    }
  }

  onSortPizza = (category: string) => {
    const { pizzasData } = this.props;
    const updatedContent = pizzasData.filter(
      (item) => category === 'All' || item.category === category
    );
    this.setState({ filteredPizzasData: updatedContent });
  };

  renderCard = () => {
    const { filteredPizzasData } = this.state;

    return filteredPizzasData.map((item) => (
      <Card item={item} key={item?.id} />
    ));
  };

  render() {
    return (
      <div className="pizza-catalog">
        <div className="pizza-catalog-title">
          <h1>Pizza Title</h1>
        </div>

        <PizzaFilter onSortPizza={this.onSortPizza} />
        <div className="pizza-catalog-content">{this.renderCard()}</div>
      </div>
    );
  }
}

const mapStateToProps = (state: AppStateType) => {
  return {
    pizzasData: state.pizza.data,
  };
};

const mapDispatchToProps = {
  fetchPizza,
};

export default connect(mapStateToProps, mapDispatchToProps)(PizzaPage);
