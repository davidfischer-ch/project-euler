#!/usr/bin/env python

# Work out the first ten digits of the sum of the following
# one-hundred 50-digit numbers. (In data)

from python_code.decorators import euler_timer
from python_code.functions import get_data

def main(verbose=False):
    number = get_data(13)
    numbers = [int(line) for line in number.split("\n") if line]
    total = sum(numbers)
    return str(total)[:10]

if __name__ == '__main__':
    print euler_timer(13)(main)(verbose=True)