var expect = require('chai').expect;
var  handleR  = require('../api/process/handleRequest');
const httpMocks = require("node-mocks-http");


describe('handleRequest()', function () {
    it('Handle request and fill up the respose- with positive numbers', function () {
      // 1. ARRANGE
      const mockRequest = httpMocks.createRequest({
        method: "GET",
        url: "/",
        body:{width:10, hight:20}
      });
      const mockResponse = httpMocks.createResponse();
      
      // 2. ACT
      handleR.handleRequest(mockRequest,mockResponse, null);
  
      // 3. ASSERT
      const actualResponseBody = mockResponse._getData();
      const expectedResponseBody = '{"rectangle":{"width":10,"hight":20},"result":{"squareDimension":10,"rows":2,"column":1,"numberOfSquares":2}}';
      expect(expectedResponseBody).to.be.equal( actualResponseBody);
    });
  });

  describe('handleRequest()', function () {
    it('Handle request and fill up the respose- with positive numbers', function () {
      // 1. ARRANGE
      const mockRequest = httpMocks.createRequest({
        method: "GET",
        url: "/",
        body:{width:0, hight:20}
      });
      const mockResponse = httpMocks.createResponse();
      var error='';
      var next = function(err) {error=err};
      // 2. ACT
      handleR.handleRequest(mockRequest,mockResponse, next);
  
      // 3. ASSERT
      const actualResponseBody = mockResponse._getData();
      const expectedResponseBody = '';
      expect(expectedResponseBody).to.be.equal( actualResponseBody);
      expect(error.toString()).to.be.equal('Error: Please have the Rectangel hight and width as positive number');
    });
  });




