#Program for find probablity
#Author - Ashish kumar singh 
#Created on - 16-02-2023

#Function for find probablity
def pro(b,r,s):
    t=b+r
    pr = r/t 
    pb = b/t 
    print("Probablity of Red : ",pr)
    print("Probablity of Blue : ",pb)
    l=len(s)-1
    n=0
    m=0
    for i in range(0,l):
        
        if s[i] == "R" and s[i+1] == "B":
            n=n+1
        elif s[i] == "B" and s[i+1] == "R":
            m=m+1

    a= (n-pr)/pb 
    x= (m-pb)/pr
    print("Prob of Red after Blue :",a) 
    print("Prob of Red after Blue :",x) 
    

b=4
r=8
sample =['R','B','B','R','B','R']
pro(b,r,sample)