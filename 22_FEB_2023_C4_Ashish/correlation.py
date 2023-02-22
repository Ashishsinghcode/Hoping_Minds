import math
def correlation(x,y):
    arr=[]
    arr1=[]
    arr2=[]
    mean_x=sum(x)/len(x)
    mean_y=sum(y)/len(y)
    
    for i in range(0,len(x)):
        a=(x[i]-mean_x)
        b=(y[i]-mean_y)
        arr.append(a*b)
        c=pow(a,2)
        d=pow(b,2)
        arr1.append(c)
        arr2.append(d)
        sume1=sum(arr1)
        sume2=sum(arr2)
        sume1=math.sqrt(sume1)
        sume2=math.sqrt(sume2)
    print(sum(arr)/(sume1*sume2))
    
x=[15,25,54,58,42,53]
y=[30,50,62,65,35,82]
correlation(x,y)