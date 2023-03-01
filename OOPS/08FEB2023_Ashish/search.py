#Program for searching into a search space
#Author - Ashish kumar singh 
#Created on - 08-02-2023



#Function of search
def sea(x,y):

    #Find the lenght
    n = len(x)
    for i in range(0,n):
        
        if x[i] == y:
            print(y,"is in the",i,"th position")
            break
        if i+1 == n and x[i] != y:
            print("Element not found")
        
        
#Search Space
x=[5,4,3,2,1,6,7,8,9,10]
#Element to be search
y=   int(input("Enter the element to be searched"))

#Calling of function
sea(x,y)