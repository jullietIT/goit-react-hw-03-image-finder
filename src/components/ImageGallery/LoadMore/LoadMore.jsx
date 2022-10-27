import React, { Component } from 'react';
import PropTypes from 'prop-types';
import s from './LoadMore.module.css';

class LoadMore extends Component {
  clickButton = this.props.buttonClick;

  render() {
    return (
      <button
        type="button"
        className={s.loadMoreButton}
        onClick={this.clickButton}
      >
        Load more
      </button>
    );
  }
}

LoadMore.propTypes = {
  buttonClick: PropTypes.func,
};

export default LoadMore;
