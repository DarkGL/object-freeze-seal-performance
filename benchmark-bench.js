const { Suite } = require('bench-node');

const iterations = 1000000;

const normalObject = { a: 1, b: 2, c: 3 };
const sealedObject = Object.seal({ a: 1, b: 2, c: 3 });
const frozenObject = Object.freeze({ a: 1, b: 2, c: 3 });
const noProtoObject = Object.setPrototypeOf({ a: 1, b: 2, c: 3 }, null);
const sealedNoProtoObject = Object.seal(Object.setPrototypeOf({ a: 1, b: 2, c: 3 }, null));
const frozenNoProtoObject = Object.freeze(Object.setPrototypeOf({ a: 1, b: 2, c: 3 }, null));

const normalArray = [1, 2, 3];
const sealedArray = Object.seal([1, 2, 3]);
const frozenArray = Object.freeze([1, 2, 3]);
const noProtoArray = Object.setPrototypeOf([1, 2, 3], null);
const sealedNoProtoArray = Object.seal(Object.setPrototypeOf([1, 2, 3], null));
const frozenNoProtoArray = Object.freeze(Object.setPrototypeOf([1, 2, 3], null));

const suite = new Suite();

suite.add('Normal Object Access', function() {
    for (let i = 0; i < iterations; i++) {
        let a = normalObject.a;
        let b = normalObject.b;
        let c = normalObject.c;
    }
});

suite.add('Sealed Object Access', function() {
    for (let i = 0; i < iterations; i++) {
        let a = sealedObject.a;
        let b = sealedObject.b;
        let c = sealedObject.c;
    }
});

suite.add('Frozen Object Access', function() {
    for (let i = 0; i < iterations; i++) {
        let a = frozenObject.a;
        let b = frozenObject.b;
        let c = frozenObject.c;
    }
});

suite.add('No Prototype Object Access', function() {
    for (let i = 0; i < iterations; i++) {
        let a = noProtoObject.a;
        let b = noProtoObject.b;
        let c = noProtoObject.c;
    }
});

suite.add('Sealed No Prototype Object Access', function() {
    for (let i = 0; i < iterations; i++) {
        let a = sealedNoProtoObject.a;
        let b = sealedNoProtoObject.b;
        let c = sealedNoProtoObject.c;
    }
});

suite.add('Frozen No Prototype Object Access', function() {
    for (let i = 0; i < iterations; i++) {
        let a = frozenNoProtoObject.a;
        let b = frozenNoProtoObject.b;
        let c = frozenNoProtoObject.c;
    }
});

suite.add('Normal Array Access', function() {
    for (let i = 0; i < iterations; i++) {
        let a = normalArray[0];
        let b = normalArray[1];
        let c = normalArray[2];
    }
});

suite.add('Sealed Array Access', function() {
    for (let i = 0; i < iterations; i++) {
        let a = sealedArray[0];
        let b = sealedArray[1];
        let c = sealedArray[2];
    }
});

suite.add('Frozen Array Access', function() {
    for (let i = 0; i < iterations; i++) {
        let a = frozenArray[0];
        let b = frozenArray[1];
        let c = frozenArray[2];
    }
});

suite.add('No Prototype Array Access', function() {
    for (let i = 0; i < iterations; i++) {
        let a = noProtoArray[0];
        let b = noProtoArray[1];
        let c = noProtoArray[2];
    }
});

suite.add('Sealed No Prototype Array Access', function() {
    for (let i = 0; i < iterations; i++) {
        let a = sealedNoProtoArray[0];
        let b = sealedNoProtoArray[1];
        let c = sealedNoProtoArray[2];
    }
});

suite.add('Frozen No Prototype Array Access', function() {
    for (let i = 0; i < iterations; i++) {
        let a = frozenNoProtoArray[0];
        let b = frozenNoProtoArray[1];
        let c = frozenNoProtoArray[2];
    }
});

suite.run();
