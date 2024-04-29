const AsyncHandler = (fun) =>{
    return (req,res,next)=>{
        Promise.resolve(fun(req,res,next)).catch((error)=>next(error))
    }
}

module.exports={AsyncHandler}