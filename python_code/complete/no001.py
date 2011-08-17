#!/usr/bin/env python

# Find the sum of all the multiples of 3 or 5 below 1000.

from python_code.decorators import euler_timer

def main(verbose=False):
    multiples = [i for i in range(1, 1000) if i % 3 == 0 or i % 5 == 0]
    return sum(multiples)

if __name__ == '__main__':
    print euler_timer(1)(main)(verbose=True)