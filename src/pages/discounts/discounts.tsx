import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import DiscountCard from './components/discount-card.js/discound-card';

import './discounts.scss';
import { fetchDiscounts } from './actions/actions';
import { AppStateType } from '../../shared/types/app-state-type';
import { ActionType } from '../../shared/types/redux-saga-types';
import { DiscountType } from './types';

export type DiscountsPagePropsType = {
  discounts: DiscountType[];
  fetchDiscounts: () => void;
};

class DiscountsPage extends Component<DiscountsPagePropsType> {
  componentDidMount() {
    const { fetchDiscounts } = this.props;
    fetchDiscounts();
  }

  renderDiscountCard = () => {
    const { discounts } = this.props;
    return discounts?.map((item: DiscountType) => {
      return (
        <DiscountCard
          key={item?.id}
          imgPath={item?.imgPath}
          title={item?.title}
        />
      );
    });
  };

  render() {
    return (
      <div className="discounts">
        <h1 className="discounts__heading">Discount Title</h1>
        <div className="discounts__content">{this.renderDiscountCard()}</div>
      </div>
    );
  }
}

const mapStateToProps = (state: AppStateType) => {
  return {
    discounts: state?.discounts?.data,
  };
};

const mapDispatchToProps = (dispatch: Dispatch<ActionType>) => {
  return {
    fetchDiscounts: () => dispatch(fetchDiscounts()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DiscountsPage);
