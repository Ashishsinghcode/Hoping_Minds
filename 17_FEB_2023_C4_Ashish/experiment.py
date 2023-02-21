# Python program for find the probablity
#Author - Ashish kumar singh 
#Created on - 17    -02-2023

#Importing libraries
import seaborn as sns
import pandas as pd
import matplotlib.pyplot as plt
#Base theorem
def base(s,r,pro):
    l=len(x)-1
    n=0
    m=0
    for i in range(0,l):
        
        if s[i] == r[0] and s[i+1] == r[1]:
            n=n+1
            
        if s[i] == r[1] and s[i+1] == r[0]:
            m=m+1

    a= (n-pro[0])/pro[1] 
    b= (m-pro[1])/pro[0] 
    
    print("Prob of",r[0]," after Blue :",a) 
    print("Prob of",r[1]," after Blue :",b) 
     

    
#Function for Count the array elements and find probablity   
def prob(n):
    sum=[]
    #COnvert into set and then list
    s =list(set(n))
    #Lenght of the array input by user
    l=len(n)
    for i in s:
        #COunt the specific element
        c=n.count(i)
        #Getting probablity
        pro=c/l

        print("Probablity of",i,"is:",pro)
        sum.append(pro)
    coun=len(s)
    print(coun)
    l=[0,1]
    #############################################################
    data={'Element':s,'Value':sum}
    total = pd.DataFrame(data)
    print(total)
    plt.hist(total,bins=coun)
    
    # giving labels to x-axis and y-axis
   
    
    # giving title to the plot
    
    
    # function to show plot
    plt.show()
    #import the seaborn library
    ############################################################
#Input by user
x = list(map(str,input("Enter the elements").strip().split()))
#Calling of function
prob(x)