#Program for finding factorial of a number 
#Author - Ashish kumar singh 
#Created on - 07-02-2023


#Function to find factorial
def fact(x):
    #Check if it is 0 or 1
    if x==0 or x==1 :
        return 1
    else:
        #Return the factorial of the given number
        return x*fact(x-1)
    

#Value to find the factorial
x=5     
#Printing of output
print(fact(x))





