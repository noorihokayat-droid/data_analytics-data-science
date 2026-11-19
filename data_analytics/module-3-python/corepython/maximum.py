# check max number from 3 numbers

num1 = int(input("Enter first number: "))
num2 = int(input("Enter second number: "))
num3 = int(input("Enter third number: "))

if (num1 >= num2) and (num1 >= num3):
    max_num = num1
elif (num2 >= num1) and (num2 >= num3):
    max_num = num2
else:
    max_num = num3
    print("Maximum number is:", max_num)
