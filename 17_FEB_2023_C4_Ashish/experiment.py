# Python program for find the probablity
#Author - Ashish kumar singh 
#Created on - 17    -02-2023

#Function for Count the array elements and find probablity   
def prob(x):
    sum=0
    #COnvert into set and then list
    s =list(set(x))
    #Lenght of the array input by user
    l=len(x)
    for i in s:
        #COunt the specific element
        c=x.count(i)
        #Getting probablity
        pro=c/l
        print("Probablity of",i,"is:",pro)
        sum=sum+pro
    print("Verification of the output :",sum)
#Input by user
x = list(map(str,input("Enter the elements").strip().split()))
#Calling of function
prob(x)