# create a 20 basics function based task question only in python in .md formate


#Solve all 20 tasks using Python functions. Write a separate function for each task and call it to display the output.
#Questions

#1. Addition Function: Write a function add(a, b) that takes two numbers and returns their sum.

def add(a , b):
    return a + b
print(add(5,3)) 

#2. Subtraction Function: Write a function subtract(a, b) that takes two numbers and returns their difference.

def sub(a , b):
    return a - b
print(sub(5,3))

#3. Multiplication Function: Write a function multiply(a, b) that takes two numbers and returns their product.

def mul(a ,b):
    return a*b
print(mul(5,3))

#4. Division Function: Write a function divide(a, b) that divides two numbers and handles division by zero.

def dv(a ,b):
    return a/b if b != 0 else "Division by zero is not allowed"
print(dv(5,0))

#5. Even or Odd: Write a function check_even_odd(n) that checks whether a given number is even or odd.

def check_even_odd(n):
    if n % 2 == 0:
        return "Even"
    else:
        return "Odd"
print(check_even_odd(5))

#6. Positive, Negative or Zero: Write a function check_number(n) that checks whether a number is positive, negative, or zero.

def check_number(n):
    if n > 0:
        return "Positive"
    elif n < 0:
        return "Negative"
    else:
        return "Zero"
print(check_number(5))

#7. Square of a Number: Write a function square(n) that returns the square of a given number.

def square(n):
    return n * n
print(square(5))

#8. Cube of a Number: Write a function cube(n) that returns the cube of a given number.

def cube(n):
    return n * n * n
print(cube(5))

#9. Find Maximum: Write a function find_max(a, b, c) that returns the largest among three numbers.

def find_max(a, b, c):
    return max(a, b, c)
print(find_max(5, 3, 8))

#10. Find Minimum: Write a function find_min(a, b, c) that returns the smallest among three numbers.

def find_min(a, b, c):
    return min(a, b, c)
print(find_min(5, 3, 8))

#11. Factorial: Write a function factorial(n) that calculates the factorial of a given number.

def factorial(n):
    if n == 0:
        return 1
    else:
        return n * factorial(n-1)
print(factorial(5))

#12. Prime Number: Write a function is_prime(n) that checks whether a given number is prime.

def is_prime(n):
    if n <= 1:
        return False
    for i in range(2, int(n**0.5) + 1):
        if n % i == 0:
            return False
    return True
print(is_prime(5))

#13. Multiplication Table: Write a function table(n) that prints the multiplication table of a given number from 1 to 10.

def table(n):
    for i in range(1, 11):
        print(n, "x", i, "=", n * i)

print("Multiplication Table")
table(5)

#14. Sum of Natural Numbers: Write a function sum_natural(n) that returns the sum of natural numbers from 1 to n.

def sum_natural(n):
    return sum(range(1, n + 1))
print(sum_natural(5))

#15. Reverse a String: Write a function reverse_string(s) that returns the reverse of a given string.

def reverse_string(s):
    return s[::-1]
print(reverse_string("hello"))

#16. Count Vowels: Write a function count_vowels(s) that counts the number of vowels in a given string.

def count_vowels(s):
    vowels = "aeiouAEIOU"
    count = 0
    for char in s:
        if char in vowels:
            count += 1
    return count
print(count_vowels("hello"))

#17. Palindrome Check: Write a function is_palindrome(s) that checks whether a given string is a palindrome.

def is_palindrome(s):
    cleaned = ''.join(c.lower() for c in s if c.isalnum())
    return cleaned == cleaned[::-1]
print(is_palindrome("racecar"))

#18. Calculate Area of Rectangle: Write a function rectangle_area(length, width) that returns the area of a rectangle.

def rectangle_area(length, width):
    return length * width
print(rectangle_area(5, 3))

#19. Celsius to Fahrenheit: Write a function celsius_to_fahrenheit(c) that converts Celsius temperature into Fahrenheit.

def celsius_to_fahrenheit(c):
    return (c * 9/5) + 32
print(celsius_to_fahrenheit(0))

#20. Count Digits: Write a function count_digits(n) that counts the total number of digits in a given integer.

def count_digits(n):
    return len(str(abs(n)))
print(count_digits(12345))