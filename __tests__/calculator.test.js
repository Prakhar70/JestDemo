const { mathOperation } = require("../calculator")

describe("calculator test", ()=>{
    test("add test" ,()=>{
        expect(mathOperation.sum(1,2)).toBe(3);
        expect(mathOperation.sum(1,2)).not.toBe(4);
    }),
    
        
    test('subtract test',()=>{
        var result = mathOperation.diff(10, 2);
        expect(result).toBe(8);
    })
})