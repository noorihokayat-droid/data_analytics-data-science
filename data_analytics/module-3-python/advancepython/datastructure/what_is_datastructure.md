# Data Structures in Python

A **data structure** is a way to organize and store data in Python so that it can be used efficiently.

The individual values stored in a data structure are called **elements** or **items**.

## Built-in Data Structure Types

| Data Structure | Syntax Example | Element Type | Changeable | Ordered |
|---|---|---|---|---|
| List | `[10, 20, 30]` | Elements/Items | Yes | Yes |
| Tuple | `(10, 20, 30)` | Elements/Items | No | Yes |
| Set | `{10, 20, 30}` | Unique elements | Yes | No |
| Dictionary | `{"name": "Rahul", "age": 21}` | Key-value pairs | Yes | Yes |

## 1. List

A **list** is an ordered, changeable collection that allows duplicate values.

```python
numbers = [10, 20, 30, 40]

print(numbers[0])       # 10
print(len(numbers))     # 4
```

## 2. Tuple

A **tuple** is an ordered, unchangeable collection.

```python
coordinates = (10, 20)

print(coordinates[0])   # 10
print(coordinates[1])   # 20
```

## 3. Set

A **set** is an unordered collection that contains no duplicate values.

```python
numbers = {10, 20, 30}

print(numbers)
```

## 4. Dictionary

A **dictionary** stores data as key-value pairs. Each key must be unique.

```python
student = {
    "name": "Rahul",
    "age": 21
}

print(student["name"])  # Rahul
print(student["age"])   # 21
```

## Mixed Elements

Python data structures can contain different types of elements.

```python
data = [1, "Python", 3.5, True]
```

## Other Data Structures

- **Stack:** Stores elements using Last-In, First-Out (LIFO).
- **Queue:** Stores elements using First-In, First-Out (FIFO).
- **Linked List:** Stores elements as connected nodes.
- **Tree:** Stores elements hierarchically.
- **Graph:** Stores elements and their relationships.