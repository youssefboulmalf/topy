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
            <img alt={"product image single"} referrerPolicy="no-referrer" src={image}  />
          </div>
        ))}
      </div>

      <div className="product-gallery__image">
        <img alt={"product galery image"} referrerPolicy="no-referrer" src={featImage} />
      </div>
    </section>
  );
};
  
export default Gallery;
  