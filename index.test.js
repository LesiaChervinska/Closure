
var {ticket,getQuntityPostsByAuthor} = require('./index');


describe("ticket", function () {
    it("should be defined", function () {
      expect(ticket).toBeDefined();
    });
    it("should be a function", function () {
      expect(typeof ticket).toBe("function");
    });
    it("argument shoul be an array", function () {
        expect(ticket()).toBe(false);
    });
    it("shoul say yes", function () {
        expect(ticket([25,25,50])).toBe('Yes');
    });
    it("shoul say no", function () {
        expect(ticket([25,100])).toBe('NO. Vasya will not have enough money to give change to 100 dollars');
    });
})


describe("getQuntityPostsByAuthor", function () {
  it("should be defined", function () {
    expect(ticket).toBeDefined();
  });
  it("should be a function", function () {
    expect(typeof getQuntityPostsByAuthor).toBe("function");
  });
  it(" arg must be only  obj and string", function () {
    expect(getQuntityPostsByAuthor(1,false)).toBe(false);
  });

})