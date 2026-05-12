import ProductCard from "./ProductCard.jsx";
import {FaExclamationTriangle} from "react-icons/fa";
import {useDispatch, useSelector} from "react-redux";
import Filter from "./Filter.jsx";
import useProductFilter from "./useProductFilter.jsx";
import {useEffect} from "react";
import {fetchCategories} from "../store/actions/index.js";
import Loader from "./Loader.jsx";

const Products = () => {
    const { isLoading, errorMessage } = useSelector(
        (state) => state.errors
    );
    const { products, categories } = useSelector(
        (state) => state.products
    );

    useProductFilter();

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchCategories());
    }, [dispatch]);

  return (
      <div className="lg:px-14 sm:px-8 px-4 py-14 2xl:w-[90%] 2xl:mx-auto">
          <Filter categories={categories ? categories : []} />
          {isLoading ? (
              <Loader text={"Products Loading..."} />
          ) : errorMessage ? (
              <div className="flex justify-center items-center h-[200px]">
                  <FaExclamationTriangle className="text-slate-800 text-3xl mr-2"/>
                  <span className="text-slate-800 text-lg font-medium">
                      {errorMessage}
                  </span>
              </div>
          ) : (
              <div className="min-h-[700px]">
                <div className="pb-6 pt-14 grid 2xl:grid-cols-2 lg:grid-cols-3 sm:grid-cols-2 gap-y-6 gap-x-6">
                    {products &&
                    products.map((item, i) => <ProductCard key={i} {...item} />
                    )}
                </div>
              </div>
          )}
      </div>
  )
}

export default Products;