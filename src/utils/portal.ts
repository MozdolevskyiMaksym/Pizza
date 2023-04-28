import { Component } from 'react';
import ReactDOM from 'react-dom';

type PortalPropsType = {
  className?: string;
  children: React.ReactNode;
};

type PortalStateType = {
  element: HTMLElement;
};

class Portal extends Component<PortalPropsType, PortalStateType> {
  constructor(props: PortalPropsType) {
    super(props);
    this.state = {
      element: document.createElement('div'),
    };
  }

  componentDidMount() {
    const { className = '' } = this.props;
    this.state.element.classList.add(className);
    document.body.appendChild(this.state.element);
  }

  componentWillUnmount() {
    document.body.removeChild(this.state.element);
  }

  render() {
    const { children } = this.props;
    return ReactDOM.createPortal(children, this.state.element);
  }
}

export default Portal;
