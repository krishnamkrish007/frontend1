import axios from 'axios';


export const getMyModels = () => (dispatch) => {

    axios.get('https://localhost:3000/api/models')
        .then(res => {
        
            console.log("MyModel Axios success ");
                    dispatch({
                        type:"GET_MODELS",
                        payload: res.data
                    })
        
        })
        .catch(err => {
            console.log("MyModel Axios error ")
            
        });


};

export const getModel = () => (dispatch) => {

    axios.get('/api/model/:id')
        .then(res => {
        
            console.log("MyModel Axios success ");
                    dispatch({
                        type:"GET_MODEL",
                        payload: res.data
                    })
        
        })
        .catch(err => {
            console.log("MyModel Axios error ")
            
        });


};


