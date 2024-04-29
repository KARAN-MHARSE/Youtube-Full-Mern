import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    currentUser:false,
    error:null,
    loading:false,
    isSignInPage:false
}

const userSlice = createSlice({
    name:'user',
    initialState,
    reducers:{
        signInStart: (state)=>{
            state.loading = true;
        },
        signInSuccess:(state,action)=>{
            state.currentUser =  action.payload;
            state.error = false;
            state.loading=false
        },
        signInfailed:(state,action)=>{
            state.error = true;
            state.loading=false
        },
        setIsSignInPage:(state,action)=>{
            state.isSignInPage = action.payload;
        }
    }
})

export const {signInStart,signInSuccess,signInfailed,setIsSignInPage} = userSlice.actions
export default userSlice.reducer