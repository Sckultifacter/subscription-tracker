import aj from "../config/arcjet.js";

const arcjectMidleware = async (req,res,next)=>{
try{
 const decision=await aj.protect(req,{requested: 1});

 if(decision.isDenied()){
    if(decision.reason.isRateLimit()) return res.status(429).json({message:"Rate Limit Exceeded"});
    if(decision.reason.isBot()) return res.status(403).json({message:"Bot detected"});

    return res.status(403).json({message:"Request Denied"});
 }
 next();
}catch(error){
    console.log(`Arcjet MiddleWare error:${error}`);
    next();
}
}

export default arcjectMidleware;