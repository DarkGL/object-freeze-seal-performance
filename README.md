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

```
Normal Object Access x 4,021 ops/sec +/- 0.02% (9 runs sampled) min..max=(240.14us ... 252.09us) p75=242.72us p99=252.09us
Sealed Object Access x 3,799 ops/sec +/- 0.09% (12 runs sampled) min..max=(238.60us ... 297.02us) p75=273.38us p99=297.02us
Frozen Object Access x 3,948 ops/sec +/- 0.02% (9 runs sampled) min..max=(244.59us ... 257.27us) p75=247.38us p99=257.27us
No Prototype Object Access x 4,001 ops/sec +/- 0.02% (10 runs sampled) min..max=(237.50us ... 256.92us) p75=241.52us p99=256.92us
Sealed No Prototype Object Access x 4,013 ops/sec +/- 0.02% (9 runs sampled) min..max=(239.06us ... 252.05us) p75=241.11us p99=252.05us
Frozen No Prototype Object Access x 3,992 ops/sec +/- 0.02% (9 runs sampled) min..max=(241.70us ... 257.38us) p75=242.99us p99=257.38us
Normal Array Access x 4,004 ops/sec +/- 0.02% (9 runs sampled) min..max=(240.33us ... 255.79us) p75=242.88us p99=255.79us
Sealed Array Access x 115 ops/sec +/- 0.01% (10 runs sampled) min..max=(8.55ms ... 8.82ms) p75=8.78ms p99=8.82ms
Frozen Array Access x 114 ops/sec +/- 0.01% (11 runs sampled) min..max=(8.65ms ... 8.94ms) p75=8.89ms p99=8.94ms
No Prototype Array Access x 3,995 ops/sec +/- 0.02% (9 runs sampled) min..max=(241.53us ... 257.07us) p75=242.35us p99=257.07us
Sealed No Prototype Array Access x 115 ops/sec +/- 0.01% (10 runs sampled) min..max=(8.63ms ... 8.83ms) p75=8.73ms p99=8.83ms
Frozen No Prototype Array Access x 113 ops/sec +/- 0% (9 runs sampled) min..max=(8.83ms ... 8.88ms) p75=8.87ms p99=8.88ms
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
