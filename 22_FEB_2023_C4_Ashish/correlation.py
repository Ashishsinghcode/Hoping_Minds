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
    
x=[15,25,54,58,42,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67]
y=[30,50,62,65,35,82,45,78,21,54,68,69,88,22,55,45,65,98,62,34]
correlation(x,y)