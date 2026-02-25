const ImageWrapper = ({ url, title, img, caption }) => (
  <span className="image-wrapper" style={{ display: 'block' }}>
    {url ?
      <a href={url} title={title} target="_blank" rel="noopener noreferrer">
        <img src={img} alt={title || "Amazing picture"}/>
      </a>
      :
      <img src={img} alt={title || "Amazing picture"}/>
    }
    {caption && <span className="image-caption" style={{ display: 'block' }}>{caption}</span>}
  </span>
);

export default ImageWrapper;
