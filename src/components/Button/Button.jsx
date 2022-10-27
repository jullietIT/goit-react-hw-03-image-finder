import React, { Component } from 'react';
import { throttle } from 'throttle-debounce';
import { IoArrowUpSharp } from 'react-icons/io5';
import s from './Button.Modulle.css';

class Button extends Component {
  state = {
    status: 'hide',
  };

  componentDidMount() {
    window.addEventListener(
      'scroll',
      throttle(500, e => this.scrollWatch())
    );
  }

  scrollWatch() {
    let scroll_position = window.scrollY;
    scroll_position > 140
      ? this.setState({ status: 'visible' })
      : this.setState({ status: 'hide' });
  }

  toTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  render() {
    const { status } = this.state;

    if (status === 'hide') {
      return <></>;
    }

    if (status === 'visible') {
      return (
        <button type="button" className={s.Button} onClick={this.toTop}>
          <IoArrowUpSharp />
        </button>
      );
    }
  }
}

export default Button;
