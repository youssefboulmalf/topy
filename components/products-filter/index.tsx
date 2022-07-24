import { useState } from 'react';
import Checkbox from './form-builder/checkbox';
import Slider from 'rc-slider';

// data
import productsTypes from './../../utils/data/products-types';
import productsMonths from '../../utils/data/products-moths';
import { useDispatch } from 'react-redux';
import { addFilter, removeFilter } from 'store/reducers/productPage';

const { createSliderWithTooltip } = Slider;
const Range = createSliderWithTooltip(Slider.Range);

const ProductsFilter = () => {
  const [filtersOpen, setFiltersOpen] = useState(false);
  const dispatch = useDispatch();

const handleChange = (e: React.ChangeEvent<HTMLInputElement>, filter: any) =>{


  if(e.target.checked){
    dispatch(addFilter(filter))
  }
  else{
    dispatch(removeFilter(filter))
  }
}

  const addQueryParams = () => {
    // query params changes
  }

  return (
    <form className="products-filter" onChange={addQueryParams}>
      <button type="button" 
        onClick={() => setFiltersOpen(!filtersOpen)} 
        className={`products-filter__menu-btn ${filtersOpen ? 'products-filter__menu-btn--active' : ''}`}>
          Add Filter <i className="icon-down-open"></i>
      </button>
      
      <div className={`products-filter__wrapper ${filtersOpen ? 'products-filter__wrapper--open' : ''}`}>
        <div className="products-filter__block">
          <button type="button">Location</button>
          <div className="products-filter__block__content">
            {productsTypes.map(type => (
              <Checkbox 
                key={type.id} 
                name="product-type" 
                label={type.name}
                onChange={handleChange}
                filter={type.location}
              />
            ))}
          </div>
        </div>

        <div className="products-filter__block">
          <button type="button">Price</button>
          <div className="products-filter__block__content">
            <Range min={0} max={3500} defaultValue={[299, 2000]} tipFormatter={value => `${value}$`} />
          </div>
        </div>
        
        <div className="products-filter__block">
          <button type="button">Month</button>
          <div className="products-filter__block__content checkbox-square-wrapper">
            {productsMonths.map(type => (
              <Checkbox 
                type="square" 
                key={type.id} 
                name="product-size" 
                label={type.label} />
            ))}
          </div>
        </div>

        <button type="submit" className="btn btn-submit btn--rounded btn--yellow">Apply</button>
      </div>
    </form>
  )
}
  
export default ProductsFilter
  