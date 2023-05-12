const assert = require('chai').assert;
const index = require('../index');

const helloWorld = index.helloWorld();

const sum = index.sum(4,6);
//Puede tener mas de un test 
describe('index tests', function(){
    it('Hello world text is as expected', function(){
        assert.equal(helloWorld, 'Hello world');
    });

    it('Sum is as expected', function(){
        assert.equal(sum, 10);
    });
})