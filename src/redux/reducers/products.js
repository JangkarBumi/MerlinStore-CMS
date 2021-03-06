import {
  ADD_PRODUCT,
  DELETE_PRODUCT,
  EDIT_PRODUCT,
  GET_PRODUCTS,
  UPDATE_PRODUCT,
} from '../actions/types';

const initialState = {
  products: [],
  product: [],
  loading: true,
  error: {},
};

const products = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_PRODUCTS:
      return { ...state, products: payload, loading: false };
    case ADD_PRODUCT:
      return {
        ...state,
        products: [payload, ...state.products],
        loading: false,
      };
    case DELETE_PRODUCT:
      return {
        ...state,
        products: state.products.filter(product => product._id !== payload),
        loading: false,
      };
    case EDIT_PRODUCT:
      return {
        ...state,
        product: [payload],
        loading: false,
      };
    case UPDATE_PRODUCT:
      return {
        ...state,
        products: state.products.map(item => {
          // Find the item with the matching id

          if (item._id === payload._id) {
            // Return a new object

            return {
              ...item, // copy the existing item
              title: payload.title,
              price: payload.price,
              description: payload.description,
              img: payload.img,
              dl: payload.dl,
            };
          }
          // Leave every other item unchanged

          return item;
        }),

        loading: false,
      };
    default:
      return state;
  }
};

export default products;
