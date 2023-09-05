import jwt from 'jsonwebtoken'
const authJWT = (req,res ,next)=>{
    console.log(req.url)
    const token = req.headers.authorization;
    if(token === null){
        res.sendStatus(403)
        return;
    }

    jwt.verify(token,'robertoRomero',(err, data)=>{
        if(err){
            res.sendStatus(403)
            return;
        }
        console.log(data)
        next();
    })
    
}
export default authJWT