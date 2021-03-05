 export const CAR_LOADING = "CAR_LOADING"
 export const CAR_SUCCESS = "CAR_SUCCESS"
 export const CAR_FAIL = "CAR_FAIL"

  export interface CarLoading{
     type:typeof CAR_LOADING
 }
 export interface CarFail{
    type:typeof CAR_FAIL
    payload:{
        error:string
    }
}

export interface CarSuccess{
    type: typeof CAR_SUCCESS
    payload:{
        cars:any
    }

}