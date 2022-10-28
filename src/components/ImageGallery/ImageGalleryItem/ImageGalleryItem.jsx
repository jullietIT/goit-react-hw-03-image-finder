import React, { Component } from 'react';
import PropTypes from 'prop-types';
import s from './ImageGallery.moduleItem.css';

class ImageGalleryItem extends Component {
  // toggleModal = () => {
  //   this.state(({ showModal }) => ({ showModal: !showModal }));
  // };
  onModal = e => {
    e.preventDefault();
    return this.props.imgIdToUp(e.currentTarget.id);
  };

  render() {
    const { webformatURL, tags, largeImageURL, id } = this.props.arr;

    return (
      <a
        href={largeImageURL}
        id={id}
        className={s.ImageGalleryItemLink}
        onClick={this.onModal}
        // onClick={e => {
        //   e.preventDefault();
        //   return this.props.imgIdToUp(e.currentTarget.id);
        // }}
      >
        <img
          src={webformatURL}
          alt={tags}
          className={s.ImageGalleryItemImage}
        />
      </a>
    );
  }
}

ImageGalleryItem.propTypes = {
  webformatURL: PropTypes.string,
  tags: PropTypes.string,
  id: PropTypes.number,
};

export default ImageGalleryItem;
