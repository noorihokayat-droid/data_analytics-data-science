# String in Python

A **string** is a sequence of characters enclosed in either single quotes or double quotes.

## Creating Strings

```python
name = "Python"
message = 'Welcome'
paragraph = """This is
a multiline string."""
```

## String Indexing

Each character in a string has a position called an **index**. Python indexing starts at `0`.

```python
text = "Python"

print(text[0])  # P
print(text[1])  # y
print(text[-1]) # n
```

## String Slicing

Slicing extracts a part of a string using the format:

```text
string[start:end]
```

```python
text = "Python"

print(text[0:3])  # Pyt
print(text[2:])   # thon
print(text[:4])   # Pyth
print(text[::-1]) # nohtyP
```

## String Length

The `len()` function returns the number of characters in a string.

```python
text = "Python"

print(len(text))  # 6
```

## String Operations

### Concatenation

```python
first_name = "Rahul"
last_name = "Sharma"

full_name = first_name + " " + last_name
print(full_name)  # Rahul Sharma
```

### Repetition

```python
text = "Python "

print(text * 3)  # Python Python Python
```

## Common String Methods

```python
text = "Python Programming"

print(text.upper())       # PYTHON PROGRAMMING
print(text.lower())       # python programming
print(text.title())       # Python Programming
print(text.strip())       # Removes spaces from both ends
print(text.replace("Python", "Java"))  # Java Programming
print(text.split())       # ['Python', 'Programming']
```

## String Formatting

### Using f-strings

```python
name = "Rahul"
age = 21

print(f"My name is {name} and I am {age} years old.")
```

### Using format()

```python
name = "Rahul"
age = 21

print("My name is {} and I am {} years old.".format(name, age))
```

## Strings Are Immutable

Strings cannot be changed after they are created.

```python
text = "Hello"
text = "Hello " + "Python"

print(text)  # Hello Python
```
