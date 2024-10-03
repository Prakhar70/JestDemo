//Setup and clean

const { mathOperation } = require("../calculator");

//2->before each and after each
//2->before all and after all

describe("Calculator test",()=>{
    var inp1 =0;
    var inp2 =0;
    beforeAll(()=>{
        console.log("Before All");
    })
    afterAll(()=>{
        console.log("After All");
    })
    beforeEach(()=>{
        console.log("Before Each");
        inp1 = 1;
        inp2 = 2;
    })
    afterEach(()=>{
        console.log("After Each");
    })
    test('add', ()=>{
        var res = mathOperation.sum(inp1,inp2);
        expect(res).toBe(3)
    })
    test('diff', ()=>{
        var res = mathOperation.diff(inp2,inp1);
        expect(res).toBe(1)
    })
})
