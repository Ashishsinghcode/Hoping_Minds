#Program for merge sort 
#Author - Ashish kumar singh 
#Created on - 07-02-2023

# Function define for merge sort
def mergesort(arr):
    if len(arr) > 1:

        #  r is the point where the arr is divided into two subarrays
        M = len(arr)//2
        L = arr[:M]
        R = arr[M:]
        
       
        # Sort the two parts
        mergesort(L)
        mergesort(R)

        i = j = k = 0

        
        # elements  L and M and place them in the correct position
        while i < len(L) and j < len(R):
            if L[i] < R[j]:
                arr[k] = L[i]
               
                i += 1
                print(arr)
            else:
                arr[k] = R[j]
               
                j += 1
                print(arr)
            k += 1

       
        # After sorting of elements put down the remaining elements into the array
        while i < len(L):
            arr[k] = L[i]
            i += 1
            k += 1

        while j < len(R):
            arr[k] = R[j]
            j += 1
            k += 1


# Function define for merge sort
def mergesortdec(arr):
    if len(arr) > 1:

        #  r is the point where the arr is divided into two subarrays
        M = len(arr)//2
        L = arr[:M]
        R = arr[M:]
        
       
        # Sort the two parts
        mergesort(L)
        mergesort(R)

        i = j = k = 0

        
        # elements  L and M and place them in the correct position
        while i < len(L) and j < len(R):
            if L[i] < R[j]:
                arr[k] = L[i]
               
                i += 1
                print(arr)
            else:
                arr[k] = R[j]
               
                j += 1
                print(arr)
            k += 1

       
        # After sorting of elements put down the remaining elements into the array
        while i < len(L):
            arr[k] = L[i]
            i += 1
            k += 1

        while j < len(R):
            arr[k] = R[j]
            j += 1
            k += 1


#Exicution  of program program

arr = [5,4,3,2,1,6,7,8,9,10]

mergesortdec(arr)

print("Sorted arr is: ")
print(arr)