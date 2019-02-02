
const calculateSquare = require('../process/calculateSquare');
// common function to handle request
exports.handleRequest= function (req, res, next){
    const rectangle ={
        width: req.body.width,
        hight: req.body.hight
    };
    var errorMsg=calculateSquare.validateRectangle(rectangle)

    if (errorMsg === ''){
        res.status(200).json({
        rectangle: rectangle,
        result: calculateSquare.getResult(rectangle)
    });
}
else{
    const error = new Error(errorMsg);
    error.status= 422;
   next(error);
}
}
