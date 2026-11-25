# What is a Tuple?
# A Tuple in Python is used to store multiple values in a single variable.
# - A tuple is written using round brackets ( ).
# - It can store different types of data.
# - It allows duplicate values.
# - A tuple is immutable (unchangeable). It means we cannot add, remove or update items after creating it

#examples:

# fruits = ("Apple", "Mango", "Banana", "Orange")
# print(fruits)

# 2. How to Access Tuple Items?
# We can access tuple items using their index number.
# Index starts from 0.

#examples:
# print(fruits[0])  # Output: Apple
# print(fruits[1])  # Output: Mango

# 3. Tuple Methods
# Python has only two main built-in tuple methods.

#1.count() - Returns the number of times a specified value occurs in a tuple.
# Example:
# fruits = ("Apple", "Mango", "Banana", "Orange", "Mango")
# print(fruits.count("Mango"))  # Output: 2

#2.index() - Returns the index of the first occurrence of a specified value.
# Example:
# fruits = ("Apple", "Mango", "Banana", "Orange")
# print(fruits.index("Banana"))  # Output: 2

# 4. Loop Through a Tuple
# We can use a for loop to print all tuple items one by one.

#examples:
# fruits = ("Apple", "Mango", "Banana", "Orange")
# for fruit in fruits:
    # print(fruit)

#5. Tuple Packing and Unpacking
# Packing: Storing multiple values in one tuple.
#example:
# fruits = ("Apple", "Mango", "Banana", "Orange")
# Unpacking: Assigning tuple values to different variables.
#example:
# fruit1, fruit2, fruit3, fruit4 = fruits
# print(fruit1)  # Output: Apple

# 6. Important Features of Tuple
# Tuple uses round brackets ( ).
# Tuple is ordered.
# Tuple allows duplicate values.
# Tuple can store different data types.
# Tuple is immutable (unchangeable).
# Index starts from 0.