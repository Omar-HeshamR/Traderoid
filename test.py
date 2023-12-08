import math
import numpy as np
import sympy as sp
from sympy import isprime, nextprime
from sympy.ntheory.modular import solve_congruence
from sympy.ntheory import factorint

def gcd(a, b):
    """
    Compute the Greatest Common Divisor (GCD) of two numbers a and b using the Euclidean algorithm.
    """
    while b:
        a, b = b, a % b
    return a

def legendre_symbol(m, n):
    if m == 0:
        return 0
    Legendre = pow(m, (n - 1) // 2, n)
    return 1 if Legendre == 1 else -1

def get_QR(a, p):
    if pow(a, (p - 1) // 2, p) != 1:
        return None
    q, s = p - 1, 0
    while q % 2 == 0:
        q //= 2
        s += 1
    z = 2
    while pow(z, (p - 1) // 2, p) != p - 1:
        z += 1
    m, c, t, r = s, pow(z, q, p), pow(a, q, p), pow(a, (q + 1) // 2, p)
    while t != 1:
        i = 1
        t2 = t * t % p
        while t2 != 1:
            t2 = t2 * t2 % p
            i += 1
        b = pow(c, 2 ** (m - i - 1), p)
        m, c, t, r = i, b * b % p, t * b * b % p, r * b % p
    return (r, p - r)

def find_factor_base(n):
    B = int(sp.ceiling(sp.exp(sp.sqrt(sp.log(n) * sp.log(sp.log(n)))) ** (1/2)))
    factor_base = [-1, 2]  # Initialize with -1 and 2
    current_prime = 3       # Start checking from the first odd prime
    while current_prime <= B:
        if sp.legendre_symbol(n, current_prime) == 1:
            factor_base.append(current_prime)
        current_prime = sp.nextprime(current_prime)
    return factor_base

def quadratic_sieve(n, lev,tracker,start):
    B = int(sp.ceiling(sp.exp(sp.sqrt(sp.log(n) * sp.log(sp.log(n)))) ** (1/2)))
    prime_list = [ -1 , 2 ]
    t_list = []
    for i in range(3,B):
        if(legendre_symbol(n,b) == 1 and isprime(b)):
            prime_list.append(b)
            t_list.append(get_QR(n,b))
    p = 0
    q = 0
    for i in range(prime_list[-1] * 10, 10000):
        if lj(n, i) == 1 and sympy.isprime(i):
            p = i
            q = get_QR(n, i)  
            prime_list.append(i)
            break
    N = math.ceil(math.sqrt(n))  
    K = prime_list - 1
    count = 0
    smooth_numbers = []
    factor_list = []
    a = start
    for i in range(1,11)
        limit = k + 1 + i
            


# Varibles
list_of_n = [
    3215031751,
    9912409831,
    37038381852397,
    341550071728321,
    31868712526338419047
]

# Call the quadratic sieve function with these parameters
n = list_of_n[3]
result = quadratic_sieve(n)
print(result)

# ----------------------------- OLD SHIT ----------------------------------

# print(tuple(find_factor_base(n)[1:]), "K=", len(find_factor_base(n)[1:]) )
# smooth_numbers, factorizations = quadratic_sieve(n)
# print(tuple(smooth_numbers))
# for i in range(len(smooth_numbers)):
#     print(smooth_numbers[i], ": List=", factorizations[i])

# def quadratic_sieve_old(n):
#     B = int(sp.ceiling(sp.exp(sp.sqrt(sp.log(n) * sp.log(sp.log(n)))) ** (1/2)))
#     factor_base = find_factor_base(n)
#     N = math.ceil(math.sqrt(n))  
#     K = len(factor_base) - 1
#     count = 0
#     smooth_numbers = []
#     factorizations = []
#     a = 0
#     while count < K + 2:
#         x_pos = N + a
#         x_neg = N - a
#         for x in [x_pos, x_neg]:
#             val = x**2 - n
#             temp_factors = []
#             original_val = val
#             if val < 0:
#                 val = -val
#                 temp_factors.append(-1)
#             for prime in factor_base[1:]:  # Include 2 in the factorization process
#                 while val % prime == 0:
#                     val //= prime
#                     temp_factors.append(prime)
#             if val == 1:  # Check if completely factorized
#                 smooth_numbers.append(x)
#                 factorizations.append(temp_factors)
#                 count += 1
#         a += 1
#         if count >= K + 2:  # Break if enough smooth numbers are found
#             break
#     return smooth_numbers, factorizations
