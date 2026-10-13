# Python Modules — 20 Basic Questions

<h2>1. What is a module in Python?</h2>

**ANS**:  Module = A Python file that contains code you can reuse.
 ```
    import math
```
here math is module .
------------------------------------------------------------------------
<h2>2. How do you create a module in Python?<h2>

**ANS**: To create a module in Python, save Python code in a file with a .py extension.
**step-1 : Create a file named mymodule.py**
```
def add():
    print(10+20)
```
**step-2 : use the module in another file**
```
import add
    add.add()

> 1st add = module name (add.py)
> 2nd add() = function name inside the module. 
```
------------------------------------------------------------------------

<h2> 3. How do you import a module in Python?</h2>

**ANS :** Import a module using import keyword.

```
import module_name

example : import math 
                print(math.sqrt(25))
```
------------------------------------------------------------------------

4. What is the purpose of the `import` statement?
**ANS :**The purpose of the import statement is to use code from another module in your program.
Import = Bring code from another file/module. ✅
------------------------------------------------------------------------

5. How do you import a specific function from a module?
**ANS :** 
------------------------------------------------------------------------

6. What is the difference between `import module` and `from module import function`?
------------------------------------------------------------------------

7. How do you give an alias to a module while importing it?
------------------------------------------------------------------------

8. What is the use of the `as` keyword with modules?
------------------------------------------------------------------------

9. Name any three built-in Python modules.
------------------------------------------------------------------------

10. What is the purpose of the `math` module?
------------------------------------------------------------------------
11. How can you generate a random number using the `random` module?
------------------------------------------------------------------------

12. What is the purpose of the `datetime` module?
------------------------------------------------------------------------
13. How can you find the current date and time using a Python module?

------------------------------------------------------------------------

14. What happens if you try to import a module that does not exist?
------------------------------------------------------------------------

15. How can you check which functions and variables are available in a module?
------------------------------------------------------------------------

16. What is the `__name__` variable in a Python module?
------------------------------------------------------------------------

17. What is the purpose of `if __name__ == "__main__":`?
------------------------------------------------------------------------

18. What is the difference between a module and a package in Python?
------------------------------------------------------------------------

19. How can you import your own custom module?
------------------------------------------------------------------------

20. Why are modules useful in Python programming?
------------------------------------------------------------------------