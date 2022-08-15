import Image from "next/image";

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
            <Image layout="fixed" width={100} height={100} alt={"product image single"} referrerPolicy="no-referrer" src={image}  />
          </div>
        ))}
      </div>

      <div className="product-gallery__image">
      <Image layout='responsive' width={500} height={500} alt={"destination image"}  src={featImage} />
      </div>
    </section>
  );
};
  
export default Gallery;
  