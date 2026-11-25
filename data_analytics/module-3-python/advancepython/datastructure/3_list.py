# What is a List?
# A List in Python is used to store multiple values in a single variable.
# - A list is written using square brackets [ ].
# - It can store different types of data.
# - A list is changeable (we can add, remove or update values).
# - List items are separated by commas.
# list is an work as an array in other programming languages.

#examples:
from numpy import insert


fruits = ["Apple", "Mango", "Banana", "Orange"]
# print(fruits)

#2.how to access a list item ?
# list can be access using the index.
# index should be in the range of 0 to length of list - 1.

#examples :
# print(fruits[0])  # Output: Apple
# print(fruits[1])  # Output: Mango
# print(fruits[2])  # Output: Banana
# print(fruits[3])  # Output: Orange
        
# List Methods

# 1.append() - Adds an item to the end of the list.
# Example:
# fruits.append("Grapes")
# print(fruits)  # Output: ['Apple', 'Mango', 'Banana', 'Orange', 'Grapes']

# 2.insert() - Adds an item at the specified index.
# Example:
# fruits.insert(1, "Grapes")
# print(fruits)  # Output: ['Apple', 'Grapes', 'Mango', 'Banana', 'Orange']   

#3.remove() - Removes the first item with the specified value.
# Example:
# fruits.remove("Mango")
# print(fruits)  # Output: ['Apple', 'Banana', 'Orange']

#4.pop() - Removes the item at the specified index (or the last item if no index is specified).
# Example:
# fruits.pop(1)
# print(fruits)  # Output: ['Apple', 'Banana', 'Orange']

#5.sort() - Sorts the list in ascending order.
# Example:
# fruits.sort()
# print(fruits)  # Output: ['Apple', 'Banana', 'Mango', 'Orange']

#6.reverse() - Reverses the order of the list.
# Example:
# fruits.reverse()
# print(fruits)  # Output: ['Orange', 'Mango', 'Banana', 'Apple']

#7.clear() - Removes all items from the list.
# Example:
# fruits.clear()
# print(fruits)  # Output: []

#8.copy() - Returns a copy of the list.
# Example:
# fruits_copy = fruits.copy()
# print(fruits_copy)  # Output: ['Apple', 'Mango', 'Banana', 'Orange']  

#9.count() - Returns the number of times a specified value appears in the list.
# Example:
# print(fruits.count("Apple"))  # Output: 1 

#10.index() - Returns the index of the first item with the specified value.
# Example:
# print(fruits.index("Apple"))  # Output: 0

#important points of list :

# List uses [ ] brackets.
# List index starts from 0.
# List is ordered.
# List allows duplicate values.
# List can store different data types.
# List is mutable (changeable).

