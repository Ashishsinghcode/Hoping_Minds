#Program for bubble sort 
#Author - Ashish kumar singh 
#Created on - 06-02-2023

# Array to be sorted
x = [5,4,3,2,1,6,7,8,9,10]
y = [10,20,30,40,50,60,70,80]
z = [10,9,8,7,6,5,4,3,2,1]

#Lenght of the array


#Function to perform bubble sorting
def bubbleace(x):
    l = len(x)-1
    k = len(x)
     #Define blank array
    y=[]
     #Outer loop for perform check repeatation
    for m in range(0,k):
         if sorted(x) == x :
             print("\nArray Sorted",x)
             break       
         #Inner loop for perform swapping
         for i in range(0,l):
             j=i+1
             if x[i] > x[j]:
                n=x[i]
                x[i] = x[j]
                x[j] = n 
                 #Printing of value of array
             print("Sorting of",x)
#Function to perform bubble sorting
def bubbledec(x):
    l = len(x)-1
    k = len(x)
    #Define blank array
    y=[]
    #Outer loop for perform check repeatation
    for m in range(0,k):
        if sorted(x, reverse=True) == x :
            print("\nArray Sorted",x)
            break       
        #Inner loop for perform swapping
        for i in range(0,l):
            j=i+1
            if x[i] < x[j]:               
                n=x[i]
                x[i] = x[j]
                x[j] = n
                #Printing of value of array
            print("Sorting of",x)
            
#Call of function with parameter x 
bubbleace(x)
bubbledec(x)
bubbleace(y)
bubbledec(y)
bubbleace(z)
bubbledec(z)

 
