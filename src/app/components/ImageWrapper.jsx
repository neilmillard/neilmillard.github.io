const ImageWrapper = ({ url, title, img, caption }) => (
  <div className="image-wrapper" >
    {url ?
      <a href={url} title={title} target="_blank" rel="noopener noreferrer">
        <img src={img} alt={title || "Amazing picture"}/>
      </a>
      :
      <img src={img} alt={title || "Amazing picture"}/>
    }
    {caption && <p className="image-caption">{caption}</p>}
  </div>
);

export default ImageWrapper;
