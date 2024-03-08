# Aqua Duct Tape for Cloudless Functions 🌊🦆🩹

Aquaduct is the [Aqua](https://github.com/fluencelabs/aqua) framework that simplifies making [Cloudless functions](https://fluence.dev).

## Usage

```sh
fluence dep i @fluencelabs/aquaduct
```

## Code structure

Everything interesting resides inthe  [src/aqua](src/aqua) folder.

- [compute](src/aqua/compute.aqua): abstraction for Compute functions that run on a single worker
- [cloudless](src/aqua/cloudless/): makers, yielders, executors, and basic types for distributed Cloudless functions
- [promise](src/aqua/promise.aqua): simple Promise pattern implementation for Aqua
- [logger](src/aqua/logger.aqua): simple & reusable Logger