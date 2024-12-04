# TypeScript Type System Doesn't Prevent Number/String Addition

This example demonstrates a subtle error in TypeScript where the type system doesn't prevent the addition of a number and a string.  This results in a runtime error rather than a compile-time error.

## Problem
The `add` function is designed to add two numbers.  However, if a string is passed as an argument, TypeScript doesn't flag it as an error during compilation. The runtime will implicitly convert the string to a number which results in an unexpected NaN output.

## Solution
To prevent this issue we can use type guards or a stricter type check in function definition.