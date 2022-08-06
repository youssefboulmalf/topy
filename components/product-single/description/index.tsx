import { descriptionType } from "types";

type descriptionMakeType = {
  description: descriptionType[]
}

const Description = ( {description} : descriptionMakeType) => {
  return (
    <section className="product-single__description">
      {description.map((day: descriptionType, index: number) => {
        return (
          <div key={index} className="product-description-block">
            <div className="product-description-head">
            <div className="product-description-number-block">{index + 1}</div>
            <div className="product-description-name">{day.name}</div>
            </div>
            <p>{day.text}</p>
          </div>
        );
      })}
    </section>
  );
};

export default Description;
