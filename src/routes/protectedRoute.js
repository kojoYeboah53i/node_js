function authenticated  (req, res, next) {

    const token = req.body.token
    if(1 == 1){
        console.log("authenticated")
       return 
    //    next();
    }else{
        return res.status(401).json({ message: 'Unauthorized' });
    }

}



module.exports.auth = auth;