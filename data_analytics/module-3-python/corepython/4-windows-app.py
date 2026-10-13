# import : one type of module ... inbulit module use karne ke liye import keyword ka use karte hai.
# tkinter : used for creating GUI applications in python.
# tkinter is a standard GUI library for python. it provides a fast and easy way to create GUI applications. it is a thin object-oriented layer on top of tcl/tk.

import tkinter as tk

#creating a window
root = tk.Tk()

#create a title for the window
root.title("My First window application")

#create a windows geometry(size)
root.geometry("650x550")

#run the application
root.mainloop()