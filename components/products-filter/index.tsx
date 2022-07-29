import { useState } from 'react';
import Checkbox from './form-builder/checkbox';
import Slider from 'rc-slider';

// data
import productsTypes from './../../utils/data/products-types';
import { useDispatch } from 'react-redux';
import { addFilter, removeFilter, addPriceFilter } from 'store/reducers/productPage';

const { createSliderWithTooltip } = Slider;
const Range = createSliderWithTooltip(Slider.Range);

const ProductsFilter = () => {
  const [filtersOpen, setFiltersOpen] = useState(false);
  const dispatch = useDispatch();

const handleChange = (e: any , filter: any) =>{


  if( filter === 'price'){
    dispatch(addPriceFilter(e))
  }
  else{
    if(e.target.checked){
      dispatch(addFilter(filter))
    }
    else{
      dispatch(removeFilter(filter))
    }

  }

}
  return (
    <form className="products-filter" onChange={()=>{}}>
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
            <Range onAfterChange={(e)=>handleChange(e,'price')} min={0} max={3500} defaultValue={[0, 3500]} tipFormatter={value => `${value}$`} />
          </div>
        </div>
        <button type="submit" className="btn btn-submit btn--rounded btn--yellow">Apply</button>
      </div>
    </form>
  )
}

export default ProductsFilter
  