import React, { useState, useEffect } from 'react';
import Checkbox from './form-builder/checkbox';
import Slider from 'rc-slider';
// data
import { useRouter } from 'next/router'
import productsCategories from './../../utils/data/products-types';
import { useDispatch } from 'react-redux';
import { addFilter, removeFilter,removeAllFilters ,addPriceFilter } from 'store/reducers/productPage';
import locations from 'utils/data/products-locations';
import { RootState } from "store";
import { useSelector } from 'react-redux';

const { createSliderWithTooltip } = Slider;
const Range = createSliderWithTooltip(Slider.Range);

const ProductsFilter = () => {
  const [filtersOpen, setFiltersOpen] = useState(false);
  const dispatch = useDispatch();
  const router = useRouter()
  const { filters } = useSelector((state: RootState) => state.productPage);

  useEffect(() => {
    dispatch(removeAllFilters())
    const filter : any = router.query.filter as string
    if(filter != undefined){
      dispatch(addFilter(filter))
    }
  },[]);

  

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
          <button type="button">Type</button>
          <div className="products-filter__block__content">
            {productsCategories.map((type, index) => (
              <Checkbox 
                key={index} 
                name="product-type" 
                checked={filters.locations.includes(type) ? true : false}
                label={type}
                onChange={handleChange}
                filter={type}
              />
            ))}
          </div>
        </div>
        <div className="products-filter__block">
          <button type="button">Location</button>
          <div className="products-filter__block__content">
            {locations.map((location, index) => (
              <Checkbox 
                key={index} 
                name="product-type" 
                label={location}
                onChange={handleChange}
                filter={location}
              />
            ))}
          </div>
        </div>
        <div className="products-filter__block">
          <button type="button">Price</button>
          <div className="products-filter__block__content">
            <Range onAfterChange={(e)=>handleChange(e,'price')} min={0} max={8000} defaultValue={[0, 8000]} tipFormatter={value => `${value}$`} />
          </div>
        </div>
        <button type="submit" className="btn btn-submit btn--rounded btn--yellow">Apply</button>
      </div>
    </form>
  )
}

export default ProductsFilter
  