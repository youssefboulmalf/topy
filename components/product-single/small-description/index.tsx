import React from "react";
type descriptionProps = {
  smallDescription: string,
}

const SmallDescription = ({smallDescription} : descriptionProps) => {

    return (
      <section className="product-small__description">
        <div className="product-small-description-block">
          <p>{smallDescription}</p>
        </div>
      </section>
    );
  };
    
  export default SmallDescription;
      