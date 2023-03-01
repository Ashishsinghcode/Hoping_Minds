#Program for analytics calculatoor
#Author - Ashish kumar singh 
#Created on - 13-02-2023



#Function for MEAN Calculator
def mean(x):
    j=0
    l= len(x)
    x=sorted(x)
    for i in x:
      i=i+j
      j=i
    print("Mean value is:",i/l)

def median(x):
    x=sorted(x)
    l=len(x)
    i=l%2
    if i != 0:
        print("Median value is :",x[(l//2)])
    else:
        l=l/2
        l=int(l)
        print("Median value is :",(x[l]+x[l+1])/2)


def mode(x):
    c=0
    m=[]
    y = [*set(x)]
    y=sorted(y)
    l=len(y)
    for i in range(0,l):
        temp= x.count(y[i])
        if temp >= c:
            c=temp
            m.append(y[i])
    print("Mode value is :",','.join(map(str,m)))

def meand(x):
    k=0
    r=len(x)
    c=len(x[0])
    l=r*c
    for j in range(0,len(x[0])):
           
        for i in range(0,len(x)):
            print(x[j][i])
            s=x[j][i]+k
            k=s
            print(k)
    print("Mean value is:",k/l)
   
        
x=([40,40,60],[80,90,40],[10,20,30])
#mean(x)
#median(x)
#mode(x)
meand(x)