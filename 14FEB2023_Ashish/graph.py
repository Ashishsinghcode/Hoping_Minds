#Program for graph representation
#Author - Ashish kumar singh 
#Created on - 14-02-2023


def graph(x):
    weight = {
    ('A', 'B') : 2,
    ('B', 'C') : 4,
    ('B', 'E') : 7,
    ('C', 'E') : 3,
    ('A', 'F') : 1,
    ('B', 'D') : 9,
    ('C', 'D') : 5,
    ('A', 'C') : 8,
    ('A', 'D') : 6
}
    T=[]
    l=len(x)
    s=0
    for i  in range(0,l):
        
        for j in range(s,l):
            if i == j:
                print("")
            else:
                t=[]
                t.append(x[i]) 
                t.append(x[j])
                m=tuple(t)
                T.append(m)
                #print(T)
        s=s+1
    lenth =len(T)
    lent =len(weight)
    out={}
    c=0
    for k in range(0,lenth):
        out[T[k]]=0
        for n in range(c,lent):
            if T[k] == list(weight.keys())[n]:
               out[list(weight.keys())[n]]= weight[list(weight.keys())[n]]
            
                  
                 
    print(out)

x=["A","B","C","D","E","F"]
graph(x)