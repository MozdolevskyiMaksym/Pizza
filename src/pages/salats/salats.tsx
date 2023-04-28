import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchSalats } from './actions/actions';
import Card from '../../shared/components/card/card';

import { AppStateType } from '../../shared/types/app-state-type';
import { SalatType } from './types';

import './salats.scss';

export type SalatsPropsType = {
  salats: SalatType[];
  fetchSalats: () => void;
};

class Salats extends Component<SalatsPropsType> {
  constructor(props: SalatsPropsType) {
    super(props);

    this.state = {};
  }

  componentDidMount() {
    const { fetchSalats } = this.props;
    fetchSalats();
  }

  renderCard = () =>
    this.props.salats.map((item) => <Card item={item} key={item.id} />);

  render() {
    return (
      <div className="salats-catalog">
        <div className="salats-catalog-title">
          <h1>Salat Title</h1>
        </div>
        <div className="salats-catalog-content">{this.renderCard()}</div>
      </div>
    );
  }
}

const mapStateToProps = (state: AppStateType) => {
  return {
    salats: state.salats.data,
  };
};

const mapDispatchToProps = {
  fetchSalats,
};

export default connect(mapStateToProps, mapDispatchToProps)(Salats);
