#Program for binary searching into a search space
#Author - Ashish kumar singh 
#Created on - 08-02-2023



#Function of search
def binarysearch(x,y):
    
    #Sorting of data
    x=sorted(x)

    #Find the lenght
    n = len(x)-1
    s=0
    q=n
    
    
    #Loop for find the value
    for i in range(s,q):
        
        M=s+(q-s)//2
        
        if x[M] == y :
            print(y,"is found at",M,"th position")
            exit()
        elif x[M] < y :
            s=M+1
               
        elif x[M] > y:
            q=M-1
       
                   
#Search Space
x=[5,4,3,2,1,6,7,8,9,10]
#Element to be search

y =  int(input("Enter the element to be searched"))

#Calling of function
res = binarysearch(x,y)
if res == None:
    print("Element not found")