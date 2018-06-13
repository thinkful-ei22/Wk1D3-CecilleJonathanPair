function createMyObject() {
  return {
    foo: 'bar',
    answerToUniverse: 42,
    ollyolly: 'oxen free',
    sayHello: function() {
      return 'hello';
    }
  };
}


console.log(createMyObject());


function updateObject(obj) {
  obj.foo = 'foo';
  obj.bar = 'bar';
  obj.bizz = 'bizz';
  obj.bang = 'bang';
  return obj;
}