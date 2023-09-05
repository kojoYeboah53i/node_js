function auth  (req, res, next) {

    if(1 == 1){
        console.log("authenticated")
       return next();
    }else{
        return res.status(401).json({ message: 'Unauthorized' });
    }

}



module.exports.auth = auth;