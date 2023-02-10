#Program for scientific calculator with some specific operation
#Author - Ashish kumar singh 
#Created on - 09-02-2023


import math
import numpy as np
#List of operation to be choose by user
print("Choose 1 for Add")
print("Choose 2 for Subtract")
print("Choose 3 for Multiply")
print("Choose 4 for Divide")
print("Choose 5 for Floor divide")
print("Choose 6 for Modulus")
print("Choose 7 for Sin")
print("Choose 8 for Cos")
print("Choose 9 for Tan")
print("Choose 10 for Exponent")
print("Choose 11 for Log")


argument = int(input("Choose the opeartion"))

if argument == 7 and argument == 8 and argument == 9:
    z=  float(input("Enter a Number "))
elif argument == 10 :
    x=  list(map(float,input("Elements of array for Value:-").strip().split()))  
    y=  list(map(float,input("Elements of array for exponent :-").strip().split()))  
      
elif argument == 11 :
    x=  list(map(float,input("Elements of array for log:-").strip().split()))  
else:
    x=  float(input("Enter First Number "))  
    y=  float(input("Enter Second Number "))  

    

class arithmatic:
    #Function for addition
    def add():
        return x+y
    #Function for multiplication
    def multiply():
        return x*y   
    #Function for subtraction
    def subtract():
        return x-y
    #Function for division 
    def divide():
        return x/y
    #Function for floor division 
    def floordiv():
        return x//y
    #Function for modulus
    def modulus():
        return x%y

class trignometry:
    #Function for sin
    def sin_():
        return math.sin(z)
    #Function for cos
    def cos_():
        return math.cos(z)
    #Function for tan
    def tan_():
        return math.tan(z)

class exponent:
    def expo():
        return np.power(x,y)
class logarith:

    def log_():
        return np.log(x)

def operation(argument):
    match argument:
        case  1:
            print("Addition is :",round(arithmatic.add(),7))
        case  2:
            print("Subtraction is :",round(arithmatic.subtract(),7))            
        case  3:
            print("Multiplication is :",round(arithmatic.multiply(),7))            
        case  4:
            print("Division is :",round(arithmatic.divide(),7))
        case  5:
            print("Floor division is :",round(arithmatic.floordiv(),7))
        case  6:
            print("Modulus is :",round(arithmatic.modulus(),7))
        case  7:
            print("Sin value is :",round(trignometry.sin_(),7))
        case  8:
            print("Cos value is :",round(trignometry.cos_(),7))
        case  9:
            print("Tan value is :",round(trignometry.tan_(),7))
        case  10:
            print("Exponent is :",exponent.expo())
        case  11:
            print("Log value is :",logarith.log_())
        case default:
                 print("Operation Not Found") 


operation(argument)


