type GalleryProductType = {
  images: string[]
}

const Gallery = ({ images }: GalleryProductType) => {
  const featImage = images[0];

  return (
    <section className="product-gallery">
      <div className="product-gallery__thumbs">
        {images.map(image => (
          <div key={image} className="product-gallery__thumb">
            <img referrerPolicy="no-referrer" src={image} alt="" />
          </div>
        ))}
      </div>

      <div className="product-gallery__image">
        <img referrerPolicy="no-referrer" src={featImage} alt="" />
      </div>
    </section>
  );
};
  
export default Gallery;
  