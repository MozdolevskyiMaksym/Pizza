import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchDrinks } from './actions/actions';
import Card from '../../shared/components/card/card';
import DrinksFilter from './components/drinks-filter/drinks-filter';

import './drinks.scss';
import { AppStateType } from '../../shared/types/app-state-type';
import { Dispatch } from 'redux';
import { ActionType } from '../../shared/types/redux-saga-types';
import { DrinkType } from './types';

interface StateType {
  filteredDrinkData: DrinkType[];
}

export type DrinksPropsType = {
  drinksData: DrinkType[];
  fetchDrinks: () => void;
};

class Drinks extends Component<DrinksPropsType, StateType> {
  constructor(props: DrinksPropsType) {
    super(props);
    this.state = {
      filteredDrinkData: props?.drinksData || [],
    };
  }

  componentDidMount() {
    const { fetchDrinks } = this.props;
    fetchDrinks();
  }

  componentDidUpdate(prevProps: DrinksPropsType) {
    const { drinksData } = this.props;
    if (drinksData !== prevProps.drinksData) {
      this.setState({ filteredDrinkData: drinksData });
    }
  }

  onSortDrink = (category: string) => {
    const { drinksData } = this.props;
    const updatedContent = drinksData?.filter((item) =>
      category === 'All' ? item : item.category === category
    );
    this.setState({ filteredDrinkData: updatedContent });
  };

  render() {
    const { filteredDrinkData } = this.state;

    return (
      <div className="drinks-catalog">
        <div className="drinks-catalog-title">
          <h1>Drink Title</h1>
        </div>

        <DrinksFilter onSortDrink={this.onSortDrink} />
        <div className="drinks-catalog-content">
          {filteredDrinkData?.map((item: DrinkType) => (
            <Card key={item?.id} item={item} />
          ))}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state: AppStateType) => {
  return {
    drinksData: state?.drinks?.data,
  };
};

const mapDispatchToProps = (dispatch: Dispatch<ActionType>) => {
  return {
    fetchDrinks: () => dispatch(fetchDrinks()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Drinks);
