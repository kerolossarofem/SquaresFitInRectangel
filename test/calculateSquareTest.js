
var expect = require('chai').expect;
var calculateSquare = require('../api/process/calculateSquare');

describe('getResult()', function () {
    it('Calculate max square area fit in rectangle With one row', function () {
      const rectangle ={
        width: 10,
        hight: 1
    };
      // 1. ARRANGE
      var width = 10;
      var hight = 1;
      var expectedResult ={
        squareDimension: 1,
        rows: 1,
        column: 10,
        numberOfSquares: 10
      };
  
      // 2. ACT
      var actualResult = calculateSquare.getResult(rectangle);
  
      // 3. ASSERT
      expect(expectedResult.squareDimension).to.be.equal(actualResult.squareDimension);
      expect(expectedResult.rows).to.be.equal(actualResult.rows);
      expect(expectedResult.column).to.be.equal(actualResult.column);
      expect(expectedResult.numberOfSquares).to.be.equal(actualResult.numberOfSquares);
    });
  });

  describe('getResult()', function () {
    it('Calculate max square area fit in rectangle With multiple rows and one column', function () {
      const rectangle ={
        width: 1,
        hight: 10
    };
      // 1. ARRANGE
    
      var expectedResult ={
        squareDimension: 1,
        rows: 10,
        column: 1,
        numberOfSquares: 10
      };
  
      // 2. ACT
      var actualResult = calculateSquare.getResult(rectangle);
  
      // 3. ASSERT
      expect(expectedResult.squareDimension).to.be.equal(actualResult.squareDimension);
      expect(expectedResult.rows).to.be.equal(actualResult.rows);
      expect(expectedResult.column).to.be.equal(actualResult.column);
      expect(expectedResult.numberOfSquares).to.be.equal(actualResult.numberOfSquares);
    });
  });

  describe('getResult()', function () {
    it('Calculate max square area fit in rectangle With square', function () {
      const rectangle ={
        width: 10,
        hight: 10
    };
      // 1. ARRANGE
    
      var expectedResult ={
        squareDimension: 10,
        rows: 1,
        column: 1,
        numberOfSquares: 1
      };
  
      // 2. ACT
      var actualResult = calculateSquare.getResult(rectangle);
  
      // 3. ASSERT
      expect(expectedResult.squareDimension).to.be.equal(actualResult.squareDimension);
      expect(expectedResult.rows).to.be.equal(actualResult.rows);
      expect(expectedResult.column).to.be.equal(actualResult.column);
      expect(expectedResult.numberOfSquares).to.be.equal(actualResult.numberOfSquares);
    });
  });

  describe('validateRectangle()', function () {
    it('Validate rectangle input before run the calculation-negative value', function () {
      const rectangle ={
        width: -10,
        hight: 10
    };
      // 1. ARRANGE
    
      var expectedErrorMsg ='Please have the Rectangel hight and width as positive number';
  
      // 2. ACT
      var actualErrorMsg = calculateSquare.validateRectangle(rectangle);
  
      // 3. ASSERT
      expect(expectedErrorMsg).to.be.equal(actualErrorMsg);
    });
  });

  describe('validateRectangle()', function () {
    it('Validate rectangle input before run the calculation-No Error', function () {
      const rectangle ={
        width: 100,
        hight: 10
    };
      // 1. ARRANGE
    
      var expectedErrorMsg ='';
  
      // 2. ACT
      var actualErrorMsg = calculateSquare.validateRectangle(rectangle);
  
      // 3. ASSERT
      expect(expectedErrorMsg).to.be.equal(actualErrorMsg);
    });
  });

  describe('validateRectangle()', function () {
    it('Validate rectangle input before run the calculation-Width is string', function () {
      const rectangle ={
        width: 'Test',
        hight: 10
    };
      // 1. ARRANGE
    
      var expectedErrorMsg ='Please have the Rectangel hight and width as number';
  
      // 2. ACT
      var actualErrorMsg = calculateSquare.validateRectangle(rectangle);
  
      // 3. ASSERT
      expect(expectedErrorMsg).to.be.equal(actualErrorMsg);
    });
  });
  describe('validateRectangle()', function () {
    it('Validate rectangle input before run the calculation-hight is string', function () {
      const rectangle ={
        width: 10,
        hight: 'test'
    };
      // 1. ARRANGE
    
      var expectedErrorMsg ='Please have the Rectangel hight and width as number';
  
      // 2. ACT
      var actualErrorMsg = calculateSquare.validateRectangle(rectangle);
  
      // 3. ASSERT
      expect(expectedErrorMsg).to.be.equal(actualErrorMsg);
    });
  });
  describe('validateRectangle()', function () {
    it('Validate rectangle input before run the calculation-both are string', function () {
      const rectangle ={
        width: 'test',
        hight: 'test'
    };
      // 1. ARRANGE
    
      var expectedErrorMsg ='Please have the Rectangel hight and width as number';
  
      // 2. ACT
      var actualErrorMsg = calculateSquare.validateRectangle(rectangle);
  
      // 3. ASSERT
      expect(expectedErrorMsg).to.be.equal(actualErrorMsg);
    });
  });

  describe('validateRectangle()', function () {
    it('Validate rectangle input before run the calculation-number in string', function () {
      const rectangle ={
        width: '10',
        hight: '10'
    };
      // 1. ARRANGE
    
      var expectedErrorMsg ='';
  
      // 2. ACT
      var actualErrorMsg = calculateSquare.validateRectangle(rectangle);
  
      // 3. ASSERT
      expect(expectedErrorMsg).to.be.equal(actualErrorMsg);
    });
  });

  describe('validateRectangle()', function () {
    it('Validate rectangle input before run the calculation-Width is not found', function () {
      const rectangle ={
        hight: 10
    };
      // 1. ARRANGE
    
      var expectedErrorMsg ='Please have the Rectangel hight and width as number';
  
      // 2. ACT
      var actualErrorMsg = calculateSquare.validateRectangle(rectangle);
  
      // 3. ASSERT
      expect(expectedErrorMsg).to.be.equal(actualErrorMsg);
    });
  });

  describe('validateRectangle()', function () {
    it('Validate rectangle input before run the calculation-hight is not found', function () {
      const rectangle ={
        width: 10
    };
      // 1. ARRANGE
    
      var expectedErrorMsg ='Please have the Rectangel hight and width as number';
  
      // 2. ACT
      var actualErrorMsg = calculateSquare.validateRectangle(rectangle);
  
      // 3. ASSERT
      expect(expectedErrorMsg).to.be.equal(actualErrorMsg);
    });
  });

  describe('validateRectangle()', function () {
    it('Validate rectangle input before run the calculation-both are not found', function () {
      const rectangle ={
       
    };
      // 1. ARRANGE
    
      var expectedErrorMsg ='Please have the Rectangel hight and width as number';
  
      // 2. ACT
      var actualErrorMsg = calculateSquare.validateRectangle(rectangle);
  
      // 3. ASSERT
      expect(expectedErrorMsg).to.be.equal(actualErrorMsg);
    });
  });

  describe('validateRectangle()', function () {
    it('Validate rectangle input before run the calculation-Width is empty', function () {
      const rectangle ={
        width:'',
        hight: 10
    };
      // 1. ARRANGE
    
      var expectedErrorMsg ='Please have the Rectangel hight and width as number';
  
      // 2. ACT
      var actualErrorMsg = calculateSquare.validateRectangle(rectangle);
  
      // 3. ASSERT
      expect(expectedErrorMsg).to.be.equal(actualErrorMsg);
    });
  });
  describe('validateRectangle()', function () {
    it('Validate rectangle input before run the calculation-hight is empty', function () {
      const rectangle ={
        width:10,
        hight: ''
    };
      // 1. ARRANGE
    
      var expectedErrorMsg ='Please have the Rectangel hight and width as number';
  
      // 2. ACT
      var actualErrorMsg = calculateSquare.validateRectangle(rectangle);
  
      // 3. ASSERT
      expect(expectedErrorMsg).to.be.equal(actualErrorMsg);
    });
  });

  describe('validateRectangle()', function () {
    it('Validate rectangle input before run the calculation-both are not empty', function () {
      const rectangle ={
        width:'',
        hight: ''
    };
      // 1. ARRANGE
    
      var expectedErrorMsg ='Please have the Rectangel hight and width as number';
  
      // 2. ACT
      var actualErrorMsg = calculateSquare.validateRectangle(rectangle);
  
      // 3. ASSERT
      expect(expectedErrorMsg).to.be.equal(actualErrorMsg);
    });
  });

  describe('validateRectangle()', function () {
    it('Validate rectangle input before run the calculation-Width is zero', function () {
      const rectangle ={
        width:0,
        hight: 10
    };
      // 1. ARRANGE
    
      var expectedErrorMsg ='Please have the Rectangel hight and width as positive number';
  
      // 2. ACT
      var actualErrorMsg = calculateSquare.validateRectangle(rectangle);
  
      // 3. ASSERT
      expect(expectedErrorMsg).to.be.equal(actualErrorMsg);
    });
  });
  describe('validateRectangle()', function () {
    it('Validate rectangle input before run the calculation-hight is zero', function () {
      const rectangle ={
        width:10,
        hight: 0
    };
      // 1. ARRANGE
    
      var expectedErrorMsg ='Please have the Rectangel hight and width as positive number';
  
      // 2. ACT
      var actualErrorMsg = calculateSquare.validateRectangle(rectangle);
  
      // 3. ASSERT
      expect(expectedErrorMsg).to.be.equal(actualErrorMsg);
    });
  });

  describe('validateRectangle()', function () {
    it('Validate rectangle input before run the calculation-both are zero', function () {
      const rectangle ={
        width:10,
        hight: 0
    };
      // 1. ARRANGE
    
      var expectedErrorMsg ='Please have the Rectangel hight and width as positive number';
  
      // 2. ACT
      var actualErrorMsg = calculateSquare.validateRectangle(rectangle);
  
      // 3. ASSERT
      expect(expectedErrorMsg).to.be.equal(actualErrorMsg);
    });
  });
