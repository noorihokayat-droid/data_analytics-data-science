# what is module in python ? 
# A module is small peace of file that can be saved as .py i.e called module in python
# Module is re-usable one file to another file 
# module are some types ....
# types of module
# user defined module 
# pre defined module 
# third party module 
# user defined module 
# name="brijesh"
# print(name)
# pre defined module 
# import tkinter as tk
# # create a windows 
# root=tk.Tk()
# # create an title 
# root.title("my first windows app")
# # create a windows geometry(size)
# root.geometry("650x550")
# # run the windows app 
# root.mainloop()
# import math
# number=2
# # res=math.pow(number,2)
# res=math.pow(number,3)
# print(res)
# third party module :
# used to install not defined in python 
# need to install via pip install pandas 
import pandas as pd 
data={
    "name":["rutvi","komal","khushali"],
    "age":[24,21,20]
} 
df=pd.DataFrame(data);
print(df)