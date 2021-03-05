// import  {CAR_LOADING,CAR_SUCCESS,CAR_FAIL} from '../actions/carActionTypes';
// interface ICar{
//     id:number,
//     name:string,
//     model:string,
//     efficiency:string,
//     price:string,
//     min_months:string,
//     features:string,
//     charging:string,
//     range:string
// }

// interface ICarplural{
//     cars : ICar[],
//     loading:boolean,
//     error:string
// }

// const initialState:ICarplural = {
//     cars:[],
//     loading:false,
//     error:''

// }

// export const apiReducer = (
//     state = initialState,
//     action: any
// ): ICarplural => {

//     switch (action.type) {
//         case CAR_LOADING:
//           return {
//             ...state,
//             loading: true
//           }
//         case CAR_SUCCESS:
//           return {
//               ...state,
//             cars: action.payload.cars,
//             loading: false,
//             error: ''
//           }
//         case CAR_FAIL:
//           return {
//             ...state,
//             cars:[],
//             loading: false,
//             error: action.payload.error
//           }
//         default: 
//           return state
//       }

// }
