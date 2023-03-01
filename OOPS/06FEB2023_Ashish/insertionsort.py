#Program for insertion sort 
#Author - Ashish kumar singh 
#Created on - 07-02-2023

# Function to implement insertion sort in ascending order
def insertionSort(x):   
    for i in range(1, len(x)):
        #Check wheather the array sorted or not
        if(sorted(x) == x):
            print("Array sorted")
            break
        else:
            n = x[i]  
    
            # Move the elements greater than n to one position   
            #move next from their current position  
            j = i-1  
            while j >= 0 and n < x[j] :  
                    x[j + 1] = x[j]  
                    j = j-1  
            x[j + 1] = n
            #Printing of steps of the sorting process
            print(x)
    #Print of final output   
    print("\nAfter sorting array elements are - ")  
    print(x,"\n")  


# Function to implement insertion sort in decending order
def insertionSortdec(x):   
    for i in range(1, len(x)):
        #Check wheather the array sorted or not
        if(sorted(x, reverse=True) == x):
            print("Array sorted")
            break
        else:
            n = x[i]  
    
            # Move the elements greater than n to one position   
            #move next from their current position  
            j = i-1  
            while j >= 0 and n > x[j] :  
                    x[j + 1] = x[j]  
                    j = j-1  
            x[j + 1] = n
            #Printing of steps of the sorting process
            print(x)
    #Print of final output   
    print("\nAfter sorting array elements are - ")  
    print(x,"\n")  

  
# Array to be sorted
x = [5,4,3,2,1,6,7,8,9,10]
y = [10,20,30,40,50,60,70,80]
z = [10,9,8,7,6,5,4,3,2,1] 
print(" sorting steps - ")  

insertionSort(x)  
insertionSort(y)  
insertionSort(z)  
insertionSortdec(x)  
insertionSortdec(y)  
insertionSortdec(z)  
