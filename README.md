# fibonacci
After the brouhaha with Abiodun and co over the "Almighty Fibonacci Sequence", lol... I decided to take it for a spin with this simple function.
The function takes a length n and returns a fibonacci sequence of length n in an array. This requires Node as I use the "perf_hooks" module to measure how long it takes the function to run and print the result.

To test it, you can pass the length n as an argument from the command line. E.g:
node index 20

When you don't, n defaults to 10.