import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { asyncGetProducts } from '../store/actions/ProductActions';

const Products = () => {
    const { products } = useSelector((state) => state.ProductReducer);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(asyncGetProducts());
    }, []);

    return (
        <div className="m-auto first-letter: w-1/2 rounded-md container p-10 mt-5 bg-red-100">
            <h1 className="text-2xl font-bold text-red-900">Product List</h1>

            <ul>
                {products &&
                    products.map((product, index) => {
                        return (
                            <>
                                <li key={product.id}>
                                    <h1>
                                        {product.title}{' '}
                                        <span
                                            onClick={() => DeleteHandler(index)}
                                            className="text-red-500 font-bold cursor-pointer"
                                        >
                                            X
                                        </span>
                                    </h1>
                                </li>
                            </>
                        );
                    })}
            </ul>
        </div>
    );
};

export default Products;
