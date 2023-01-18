import { useReducer } from "react";
import { APPACTIONS } from "../actions/app-actions";

function AppReducer(state, action) {
  switch (action.type) {
    case APPACTIONS.UPDATE:
      return { ...state, user: action.payload.user };
    case APPACTIONS.INCREMENT:
      return { count: state.count + 1 };
    case APPACTIONS.DECREMENT:
      return { count: state.count - 1 };
    // case APPACTIONS.DECREMENT:
    //   return { name: someFunWithAlotOfCode(action.payload.name) }; // the function returns the name we want
    default:
      throw new Error();
  }
}

export default AppReducer;

// function Counter() {
//   const [state, dispatch] = useReducer(AppReducer, { count: 0 }); //name might be state, or other names or something like todo

//   return (
//     <>
//       <p>Count: {state.count}</p>
//       <button onClick={() => dispatch({ type: "increment" })}>Increment</button>
//       <button onClick={() => dispatch({ type: "decrement" })}>Decrement</button>
//     </>
//   );
// }

// import { useReducer } from "react";

// const initialState = {
//   loading: false,
//   data: null,
//   error: null,
// };

// function dataFetchReducer(state, action) {
//   switch (action.type) {
//     case "FETCH_INIT":
//       return {
//         ...state,
//         loading: true,
//         error: null,
//       };
//     case "FETCH_SUCCESS":
//       return {
//         ...state,
//         loading: false,
//         data: action.payload,
//       };
//     case "FETCH_FAILURE":
//       return {
//         ...state,
//         loading: false,
//         error: action.payload,
//       };
//     default:
//       throw new Error();
//   }
// }

// function DataFetcher({ url }) {
//   const [state, dispatch] = useReducer(dataFetchReducer, initialState);

//   useEffect(() => {
//     let didCancel = false;

//     async function fetchData() {
//       dispatch({ type: "FETCH_INIT" });

//       try {
//         const response = await fetch(url);
//         const data = await response.json();

//         if (!didCancel) {
//           dispatch({ type: "FETCH_SUCCESS", payload: data });
//         }
//       } catch (error) {
//         if (!didCancel) {
//           dispatch({ type: "FETCH_FAILURE", payload: error.message });
//         }
//       }
//     }

//     fetchData();

//     return () => {
//       didCancel = true;
//     };
//   }, [url]);

//   return (
//     <>
//       {state.loading ? (
//         <p>Loading...</p>
//       ) : state.error ? (
//         <p>Error: {state.error}</p>
//       ) : (
//         <pre>{JSON.stringify(state.data, null, 2)}</pre>
//       )}
//     </>
//   );
// }

//======================
// import { useReducer, useCallback } from "react";

// const initialState = {
//   loading: false,
//   data: null,
//   error: null,
// };

// const dataFetchReducer = (state, action) => {
//   switch (action.type) {
//     case "FETCH_INIT":
//       return {
//         ...state,
//         loading: true,
//         error: null,
//       };
//     case "FETCH_SUCCESS":
//       return {
//         ...state,
//         loading: false,
//         data: action.payload,
//       };
//     case "FETCH_FAILURE":
//       return {
//         ...state,
//         loading: false,
//         error: action.payload,
//       };
//     default:
//       throw new Error();
//   }
// };

// const DataFetcher = ({ url }) => {
//   const [state, dispatch] = useReducer(dataFetchReducer, initialState);

//   const fetchData = useCallback(async () => {
//     dispatch({ type: "FETCH_INIT" });

//     try {
//       const response = await fetch(url);
//       const data = await response.json();

//       dispatch({ type: "FETCH_SUCCESS", payload: data });
//     } catch (error) {
//       dispatch({ type: "FETCH_FAILURE", payload: error.message });
//     }
//   }, [url]);

//   useEffect(() => {
//     fetchData();
//   }, [fetchData]);

//   return (
//     <>
//       {state.loading ? (
//         <p>Loading...</p>
//       ) : state.error ? (
//         <p>Error: {state.error}</p>
//       ) : (
//         <pre>{JSON.stringify(state.data, null, 2)}</pre>
//       )}
//     </>
//   );
// };
