#1. W.a.p to print total length of list
#l1=[15,20,30,35,45,50]
#print(len(l1))
# ans: 6

#---------------------------------------------------------------------------------------------#

#2.W.a.p. print max and min value from list
#l1=[15,20,30,35,45,50]
#print(max(l1))
#print(min(l1))
# ans: 50, 15

#---------------------------------------------------------------------------------------------#

#3.W.a.p to find odd and even from list
#l1=[15,5,65,8,75,3,2]
#i=0
#while i<len(l1):
    #if l1[i]%2==0:
        #print(l1[i],"is even")
    #else:
        #print(l1[i],"is odd")
    #i+=1       
#ans : 15 is odd
#5 is odd
#65 is odd
#8 is even
#75 is odd
#3 is odd
#2 is even

#---------------------------------------------------------------------------------------------#

#4. w.a.p to manipulate a list 1.insert 2.append 3.remove 4.reverse , sort , sort in descending from list

l1=[15,20,30,35,45,50]
#1.insert
#l1.insert(2,25)
#print(l1)
#ans: [15, 20, 25, 30, 35, 45, 50]

#2.append
#l1.append(55)
#print(l1)
#ans: [15, 20, 30, 35, 45, 50, 55]

#3.remove
#l1.remove(30)
#print(l1)
#ans: [15, 20, 35, 45, 50]

#4.reverse
#l1.reverse()   
#print(l1)
#ans: [50, 45, 35, 30, 20, 15]

#5.sort
#l1.sort()
#print(l1)
#ans: [15, 20, 30, 35, 45, 50]

#6.sort in descending
#l1.sort(reverse=True)
#print(l1)
#ans: [50, 45, 35, 30, 20, 15]

#---------------------------------------------------------------------------------------------#

#5. w.a.p. find average from list  element 
#l1=[15,20,30,35,45,50]
#total=sum(l1)
#average=total/len(l1)
#print("Average:", average)
#ans: Average: 32.5

#---------------------------------------------------------------------------------------------#

#6.w.a.p to mergetwo list.
#l1=[15,20,30]
#l2=[35,45,50]
#l3=l1+l2
#print(l3)
#ans: [15, 20, 30, 35, 45, 50]

#7.w.a.p to find element greater than the avg from list
#l1=[15,20,30,35,45,50]
#total=sum(l1)
#average=total/len(l1)
#print("Average:", average)
#greater_elements=[x for x in l1 if x > average]
#print("Elements greater than average:", greater_elements)
#ans: Average: 32.5
#Elements greater than average: [35, 45, 50]