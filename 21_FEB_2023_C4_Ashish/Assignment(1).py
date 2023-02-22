#Program for finding the value using a formula
#Author - Ashish kumar singh
#Created Date - 21-02-2023

#Importing of Libraries
import math
import numpy as np

#Defining a function 
def assone(n):
    #Seeding the value for generating the random number
    np.random.seed(0)
    #Generating the random numbers
    a= np.random.randint(low=0,high=100,size=n)

    #Assigning of blank array for storing all outputs for find sum
    arr=[]

    #For loop for ittrate the equation
    for i in range(1,n):
        #Calculation
        val=1/math.factorial(a[i])
        #Storing the value of calculation into the array
        arr.append(val)

    #Finding the sum and print the output
    print(sum(arr))
#Ending of assone function

#User input of nuber of element into the array
a=int(input("Enter Number of elements"))   
#Calling of function
assone(a)