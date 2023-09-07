function authenticated  (req, res, next) {

    const token = req.query.token
    if(token ==  'this-user-is-authenticated'){
        console.log("authenticated")
           next();
        return 
    }else{
        return res.status(401).json({ message: 'Unauthorized' });
    }

}



module.exports.auth = auth;