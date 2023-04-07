import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPizza } from './actions/actions';
import PizzaFilter from './components/pizza-filter/pizza-filter';
import Card from '../../shared/components/card/card';

import './pizza.scss';

class PizzaPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      filteredPizzasData: [],
    };
  }

  componentDidMount() {
    this.props.fetchPizza();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.pizzasData !== this.props.pizzasData) {
      this.setState({ filteredPizzasData: this.props.pizzasData });
    }
  }

  onSortPizza = (category) => {
    const { pizzasData } = this.props;
    const updatedContent = pizzasData.filter(
      (item) => category === 'All' || item.category === category
    );
    this.setState({ filteredPizzasData: updatedContent });
  };

  renderCard = () => {
    const { filteredPizzasData } = this.state;

    return filteredPizzasData.map((item) => (
      <Card
        type={item.type}
        key={item.id}
        id={item.id}
        img={item.img}
        title={item.title}
        description={item.description}
        size={item.size}
        weight={item.weight}
        price={item.price}
      />
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

const mapStateToProps = (state) => {
  return {
    pizzasData: state.pizza.data,
  };
};

const mapDispatchToProps = {
  fetchPizza,
};

export default connect(mapStateToProps, mapDispatchToProps)(PizzaPage);
