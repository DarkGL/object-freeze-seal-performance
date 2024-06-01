# object-freeze-seal-performance

## node

```
Normal Object Access: 0.9921 ms
Sealed Object Access: 1.0964 ms
Frozen Object Access: 0.8383 ms
No Prototype Object Access: 0.7898 ms
Sealed No Prototype Object Access: 0.8094 ms
Frozen No Prototype Object Access: 0.7633 ms

Normal Array Access: 0.9792 ms
Sealed Array Access: 8.8025 ms
Frozen Array Access: 8.9557 ms
No Prototype Array Access: 0.9333 ms
Sealed No Prototype Array Access: 8.758 ms
Frozen No Prototype Array Access: 8.8074 ms
```

## bun

```
Normal Object Access: 1.6849 ms
Sealed Object Access: 0.5254 ms
Frozen Object Access: 0.5586 ms
No Prototype Object Access: 0.5017 ms
Sealed No Prototype Object Access: 0.5097 ms
Frozen No Prototype Object Access: 0.5111 ms

Normal Array Access: 0.6981 ms
Sealed Array Access: 23.5294 ms
Frozen Array Access: 0.684 ms
No Prototype Array Access: 1.186 ms
Sealed No Prototype Array Access: 23.0225 ms
Frozen No Prototype Array Access: 0.6951 ms
```
