# Python program for find the probablity
#Author - Ashish kumar singh 
#Created on - 17    -02-2023

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