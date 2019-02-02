
   // consalidate all the results in one object
   exports.getResult = function (rectangle){
     //if the width== hight then its square and return square with same size  
    var squareDimension= rectangle.width;
    if (rectangle.width != rectangle.hight){
        squareDimension = getMaxSqSize(rectangle.width, rectangle.hight);
    }
    var rows = rectangle.hight/squareDimension;
    var column =rectangle.width/squareDimension;
    var numberOfSquares=rows*column;
    return{
        squareDimension: squareDimension,
        rows: rows,
        column: column,
        numberOfSquares: numberOfSquares
    };
}
// main logic to get the max common factor 
var getMaxSqSize = function(width, hight) {
    if(hight == 0 || width == 0) {
        return hight+width;
    }
    return getMaxSqSize(hight,width%hight);
   }

   // validation function to check the hight and width
   exports.validateRectangle = function(rectangle){
    if (isNaN(rectangle.hight) || isNaN(rectangle.width) || rectangle.width ==='' || rectangle.hight === '') {
        return 'Please have the Rectangel hight and width as number';
    }
    else if (rectangle.hight <= 0 || rectangle.width <=0) {
        return 'Please have the Rectangel hight and width as positive number';
    }

    return '';
    
}

