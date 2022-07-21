import {mult, sum} from "./01";

test('sum shold be correct', () => {
        //data
        let a;
        let b;
        let c;

        beforeEach(()=>{
            a=1;
            b=2;
            c=3;
    })

        //action
        const result = sum(a, b);
        a=100;
        const result2 = sum(b, c)

        //expect result
        expect(result).toBe(3)
        expect(result2).toBe(102)
    }
)

test('multiply should be correct', () => {
        //data
        const a = 1;
        const b = 2;
        const c = 3;

        //action
        const result1 = mult(a, b)
        const result2 = mult(b, c)

        //expect result
        expect(result1).toBe(2)
        expect(result2).toBe(6)
    }
)

// test('spliting into word shold be correct', () => {
//     //data
//     const sent1 = "Hello my friend!";
//     //
//
//     //action
//     const result1 = splitIntoWord(sent1)
//     //
//
//     //expect result
//     expect(result1.length).toBe(3)
//     expect(result1[0]).toBe("hello")
//     expect(result1[1]).toBe("my")
//     expect(result1[2]).toBe("frined")
// })
//
//
