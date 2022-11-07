import PropTypes from 'prop-types';
export const ImageGalleryItem = ({ largeImageURL, webformatURL, onClick }) => {
  return (
    <li onClick={() => onClick(largeImageURL)}>
      <img src={webformatURL} alt=""></img>
    </li>
  );
};

ImageGalleryItem.propTypes = {
  largeImageURL: PropTypes.string.isRequired,
  webformatURL: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};
