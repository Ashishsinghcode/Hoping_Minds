#Program for finding the value using a formula
#Author - Ashish kumar singh
#Created Date - 21-02-2023

#Importing of Libraries
import math
import numpy as np

#Defining a function 
def asstwo(a,b,c):
    #Generating the random numbers
    x= np.random.randint(low=0,high=100,size=a)
    y= np.random.randint(low=0,high=100,size=b)

    #Converting them into set for finding the intersection
    set_x=set(x)
    set_y=set(y)

    #Finding the intersection
    i=set_x.intersection(set_y)

    #Verify that the values are intersected or not
    if i == set():
        arr=[]
        #First ittration for outer sumession
        for i in range(1,a):
        #Second ittration for inner sumession
            for j in range(1,b):
                #Calculation
                val=1/math.factorial(x[i])-math.factorial(y[j])
                #Appending the array with the calculation outputs
                arr.append(val)
        #Printing the number of counts to find th non intersecting set
        print("Number of counts to find non intersection sets",c)     
        #Printing of output   
        print(sum(arr))
    else:
        #Counting
        c=c+1
        #Recalling of function if the set will be intersecting
        asstwo(a,b,c)
#Ending of asstwo Function

#User inputs for defining the number of elements in the set
a=int(input("Enter First number :"))
b=int(input("Enter Second number :"))
c=0
#Calling of function
asstwo(a,b,c)