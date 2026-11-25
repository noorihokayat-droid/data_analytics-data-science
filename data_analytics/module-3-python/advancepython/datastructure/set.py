#  What is a Set?
# A Set in Python is used to store multiple values in a single variable.
# - A set is written using curly brackets { }.
# - It does not allow duplicate values.
# - It is unordered (items do not have a fixed position).
# - A set is mutable (we can add or remove items).
# - It can store different types of data.

#examples:
# fruits = {"Apple", "Mango", "Banana", "Orange"}
# print(fruits)

# 2. Duplicate Values in Set
# A set does not allow duplicate values. If we try to add a duplicate value, it will be ignored.
# Example:
# fruits = {"Apple", "Mango", "Banana", "Orange", "Mango"}
# print(fruits)  # Output: {"Apple", "Mango", "Banana", "Orange"}

# 3. Set Methods
# Python provides different methods to work with sets.

#1.add() - Adds one item
# Example:
# fruits = {"Apple", "Mango", "Banana", "Orange"}
# fruits.add("Grapes")
# print(fruits)  # Output: {"Apple", "Mango", "Banana", "Orange", "Grapes"}

#2.update() - Adds multiple items
# Example:
# fruits = {"Apple", "Mango", "Banana", "Orange"}
# fruits.update(["Grapes", "Pineapple"])
# print(fruits)  # Output: {"Apple", "Mango", "Banana", "Orange", "Grapes", "Pineapple"}

# 3.remove() - Removes the specified item. If the item does not exist, it raises a KeyError.
# Example:
# fruits = {"Apple", "Mango", "Banana", "Orange"}
# fruits.remove("Mango")
# print(fruits)  # Output: {"Apple", "Banana", "Orange"}

#4.discard()=removes an item if it exists. If the item does not exist, it does nothing (no error).
# Example:
# fruits = {"Apple", "Mango", "Banana", "Orange"}
# fruits.discard("Mango")
# print(fruits)  # Output: {"Apple", "Banana", "Orange"}

#5.pop()-removes an random item from the set. Since sets are unordered, we cannot predict which item will be removed.
# Example:
# fruits = {"Apple", "Mango", "Banana", "Orange"}
# fruits.pop()
# print(fruits)  # Output: {"Mango", "Banana", "Orange"} (or any other random item)

# 6.clear() - Removes all items from the set.
# Example:
# fruits = {"Apple", "Mango", "Banana", "Orange"}
# fruits.clear()
# print(fruits)  # Output: set()

#7union()-combines two sets and returns a new set containing all unique items from both sets.
# Example:
# set1 = {"Apple", "Mango", "Banana"}
# set2 = {"Orange", "Grapes", "Mango"}
# set3 = set1.union(set2)
# print(set3)  # Output: {"Apple", "Mango", "Banana", "Orange", "Grapes"}

#8.intersection()-returns a common items from both sets.
# Example:
# set1 = {"Apple", "Mango", "Banana"}
# set2 = {"Orange", "Grapes", "Mango"}
# set3 = set1.intersection(set2)
# print(set3)  # Output: {"Mango"}

#9.difference()-returns items that are in the first set but not in the second set.
# Example:
# set1 = {"Apple", "Mango", "Banana"}
# set2 = {"Orange", "Grapes", "Mango"}
# set3 = set1.difference(set2)
# print(set3)  # Output: {"Apple", "Banana"}

#6. Important Features of Set
# 1. Set uses { } curly brackets.
# 2. Set does not allow duplicate values.
# 3. Set is unordered.
# 4. Set is mutable (changeable).
# 5. Set does not support indexing.
# 6. Set can store different data types.

# Important: An empty set is created using set(), not {}. Because {} creates an empty dictionary.