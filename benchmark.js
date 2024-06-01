function performanceTest() {
    const iterations = 1000000;
    const normalObject = { a: 1, b: 2, c: 3 };
    const sealedObject = Object.seal({ a: 1, b: 2, c: 3 });
    const frozenObject = Object.freeze({ a: 1, b: 2, c: 3 });

    const normalArray = [1, 2, 3];
    const sealedArray = Object.seal([1, 2, 3]);
    const frozenArray = Object.freeze([1, 2, 3]);

    function measureTime(label, fn) {
        const start = process.hrtime();
        fn();
        const end = process.hrtime(start);
        console.log(`${label}: ${end[0] * 1000 + end[1] / 1000000} ms`);
    }

    measureTime('Normal Object Access', () => {
        for (let i = 0; i < iterations; i++) {
            let a = normalObject.a;
            let b = normalObject.b;
            let c = normalObject.c;
        }
    });

    measureTime('Sealed Object Access', () => {
        for (let i = 0; i < iterations; i++) {
            let a = sealedObject.a;
            let b = sealedObject.b;
            let c = sealedObject.c;
        }
    });

    measureTime('Frozen Object Access', () => {
        for (let i = 0; i < iterations; i++) {
            let a = frozenObject.a;
            let b = frozenObject.b;
            let c = frozenObject.c;
        }
    });

    measureTime('Normal Array Access', () => {
        for (let i = 0; i < iterations; i++) {
            let a = normalArray[0];
            let b = normalArray[1];
            let c = normalArray[2];
        }
    });

    measureTime('Sealed Array Access', () => {
        for (let i = 0; i < iterations; i++) {
            let a = sealedArray[0];
            let b = sealedArray[1];
            let c = sealedArray[2];
        }
    });

    measureTime('Frozen Array Access', () => {
        for (let i = 0; i < iterations; i++) {
            let a = frozenArray[0];
            let b = frozenArray[1];
            let c = frozenArray[2];
        }
    });
}

performanceTest()