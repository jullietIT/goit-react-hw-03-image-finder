import React, { Component } from 'react';
import { Bars } from 'react-loader-spinner';
import s from './Loader.modulle.css';

class Loader extends Component {
  render() {
    return (
      <div className={s.loaderBox}>
        <Bars
          height="80"
          width="80"
          color="#4B0082"
          ariaLabel="bars-loading"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
        />
      </div>
    );
  }
}

export default Loader;
