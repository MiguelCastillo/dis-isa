var expect = require('chai').expect;
var types = require("../src/index");

describe("types Suite", function() {
  describe("Getting object type name", function() {
    describe("for object", function() {
      it("it's object", function() {
        expect(types.typeName({})).to.equal("object");
      });
    });

    describe("for object with no prototype", function() {
      it("it's object", function() {
        expect(types.typeName(Object.create(null))).to.equal("object");
      });
    });

    describe("for a regex", function() {
      it("it's regexp", function() {
        expect(types.typeName(/test/)).to.equal("regexp");
      });
    });

    describe("for string", function() {
      it("it's string", function() {
        expect(types.typeName("{}")).to.equal("string");
      });
    });

    describe("for null", function() {
      it("it's null", function() {
        expect(types.typeName(null)).to.equal("null");
      });
    });

    describe("for undefined", function() {
      it("it's undefined", function() {
        expect(types.typeName(undefined)).to.equal("undefined");
      });
    });

    describe("for function", function() {
      it("it's function", function() {
        expect(types.typeName(function() {})).to.equal("function");
      });
    });

    describe("for true", function() {
      it("it's boolean", function() {
        expect(types.typeName(true)).to.equal("boolean");
      });
    });

    describe("for false", function() {
      it("it's boolean", function() {
        expect(types.typeName(true)).to.equal("boolean");
      });
    });

    describe("for 1", function() {
      it("it's number", function() {
        expect(types.typeName(1)).to.equal("number");
      });
    });

    describe("for 1.3", function() {
      it("it's number", function() {
        expect(types.typeName(1.3)).to.equal("number");
      });
    });
  });

  describe("when isPlainObject", function() {
    describe("empty object", function() {
      it("is true", function() {
        expect(types.isPlainObject({})).to.equal(true);
      });
    });

    describe("instance of object", function() {
      it("is true", function() {
        expect(types.isPlainObject({})).to.equal(true);
      });
    });

    describe("object with no prototype", function() {
      it("is true", function() {
        expect(types.isPlainObject(Object.create(null))).to.equal(true);
      });
    });

    describe("object with prototype", function() {
      it("is true", function() {
        expect(types.isPlainObject(Object.create({}))).to.equal(false);
      });
    });

    describe("false", function() {
      it("is false", function() {
        expect(types.isPlainObject(false)).to.equal(false);
      });
    });

    describe("true", function() {
      it("is false", function() {
        expect(types.isPlainObject(true)).to.equal(false);
      });
    });

    describe("null", function() {
      it("is false", function() {
        expect(types.isPlainObject(null)).to.equal(false);
      });
    });

    describe("new Date", function() {
      it("is false", function() {
        expect(types.isPlainObject(new Date())).to.equal(false);
      });
    });

    describe("undefined", function() {
      it("is false", function() {
        expect(types.isPlainObject(undefined)).to.equal(false);
      });
    });

    describe("anonymous function", function() {
      it("is false", function() {
        expect(types.isPlainObject(function(){})).to.equal(false);
      });
    });

    describe("instance of Foo", function() {
      function Foo() {
      }

      it("is false", function() {
        expect(types.isPlainObject(new Foo)).to.equal(false);
      });
    });
  });

  describe("when isBoolean", function() {
    describe("true", function() {
      it("is boolean", function() {
        expect(types.isBoolean(true)).to.equal(true);
      });
    });

    describe("false", function() {
      it("is boolean", function() {
        expect(types.isBoolean(true)).to.equal(true);
      });
    });

    describe("null", function() {
      it("is not boolean", function() {
        expect(types.isBoolean(null)).to.equal(false);
      });
    });

    describe("undefined", function() {
      it("is not boolean", function() {
        expect(types.isBoolean(undefined)).to.equal(false);
      });
    });

    describe("object", function() {
      it("is not boolean", function() {
        expect(types.isBoolean({})).to.equal(false);
      });
    });
  });

  describe("When isNumber", function() {
    describe("1", function() {
      it("is a number", function() {
        expect(types.isNumber(1)).to.equal(true);
      });
    });

    describe("-1", function() {
      it("is a number", function() {
        expect(types.isNumber(-1)).to.equal(true);
      });
    });

    describe("3.14", function() {
      it("is a number", function() {
        expect(types.isNumber(3.14)).to.equal(true);
      });
    });

    describe("null", function() {
      it("is not a number", function() {
        expect(types.isNumber(null)).to.equal(false);
      });
    });

    describe("undefined", function() {
      it("is not a number", function() {
        expect(types.isNumber(undefined)).to.equal(false);
      });
    });

    describe("string number", function() {
      it("is not a number", function() {
        expect(types.isNumber("1")).to.equal(false);
      });
    });
  });

  describe("when isObject", function() {
    describe("empty object", function() {
      it("is true", function() {
        expect(types.isObject({})).to.equal(true);
      });
    });

    describe("null", function() {
      it("is true", function() {
        expect(types.isObject(null)).to.equal(true);
      });
    });

    describe("new Date", function() {
      it("is true", function() {
        expect(types.isObject(new Date())).to.equal(true);
      });
    });

    describe("array", function() {
      it("is true", function() {
        expect(types.isObject([])).to.equal(true);
      });
    });

    describe("instance", function() {
      it("is true", function() {
        function test(){}
        expect(types.isObject(new test())).to.equal(true);
      });
    });

    describe("true", function() {
      it("is true", function() {
        expect(types.isObject(true)).to.equal(false);
      });
    });

    describe("false", function() {
      it("is false", function() {
        expect(types.isObject(true)).to.equal(false);
      });
    });

    describe("undefined", function() {
      it("is false", function() {
        expect(types.isObject(undefined)).to.equal(false);
      });
    });

    describe("anonymous function", function() {
      it("is false", function() {
        expect(types.isObject(function(){})).to.equal(false);
      });
    });
  });


  describe("when isFunction", function() {
    describe("empty object", function() {
      it("is false", function() {
        expect(types.isFunction({})).to.equal(false);
      });
    });

    describe("null", function() {
      it("is false", function() {
        expect(types.isFunction(null)).to.equal(false);
      });
    });

    describe("new Date", function() {
      it("is false", function() {
        expect(types.isFunction(new Date())).to.equal(false);
      });
    });

    describe("undefined", function() {
      it("is false", function() {
        expect(types.isFunction(undefined)).to.equal(false);
      });
    });

    describe("anonymous function", function() {
      it("is true", function() {
        expect(types.isFunction(function(){})).to.equal(true);
      });
    });
  });
});
