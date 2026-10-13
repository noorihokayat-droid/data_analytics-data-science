# what is module in python ?
# A Module is a small piece of code which can be used in other python programs. 
# It is a file containing Python definitions and statements. 
# The file name is the module name with the suffix .py added.
# module is reuseable we can use same module in another file.


# types of modules in python
# 1. Built-in Modules
# 2. User-defined Modules
# 3. third-party Modules

# user define module 
#name="noori"
#print(name)

# pridefine module 


#import math
#number=2
#res=math.pow(number,3)
#print("power of 2 and 3 is: ",res)

import pandas as pd 

data={
    "name":["rutvi","komal","khushali"],
    "age":[24,21,20]
} 
df=pd.DataFrame(data);
print(df)



