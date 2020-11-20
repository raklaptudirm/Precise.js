# Precise.js
`Precise.js` is a JavaScript library for doing _precise mathematical calculations_. When operating with big numbers, JavaScript changes them to the _scientific __e__ notation_. Like: `10000000000` to `1e+10`, which is undesireable when doing precise calculations which require maximum precision, like encryption.

`Precise.js` does just that. No more precision loss when using large numbers. Just join the `PreciseLib.js` file to your main file, and you would be good to go.

## Input arguments:
The _precise_ functions take the arguments as `string`. Strings are handy because the can be a lot longer than any `int` or `long` value. ALso, JavaScript will not automatically convert them to the _scientific __e__ notation_.

## Available Functions:
The functions available at the moment are:
`preAdd(a, b)`: Adds the variable `a` with `b`

`preMult(a, b)`: Multiplies the variable `a` with `b`

## Roadmap:
- [x] Addition
- [x] Multiplication
- [ ] Subtraction
- [ ] Division
- [ ] Data Type error
- [ ] Not a Number error
- [ ] `NaN` and `infinity` support
