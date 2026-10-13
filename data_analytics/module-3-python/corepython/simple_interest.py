#w.a.p to calculate compound interest take input from users.
import math


p = int(input("Enter principal: "))
r = int(input("Enter rate: "))
n = int(input("Enter years: "))

#amount = p * (1 + r/100) ** n
#ci = amount - p

#print("Compound Interest =", ci)

ci=p*math.pow((1+r/100),n)
print("Compound Interest is: ",ci)