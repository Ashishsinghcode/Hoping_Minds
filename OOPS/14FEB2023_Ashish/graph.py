#Program for graph representation
#Author - Ashish kumar singh 
#Created on - 14-02-2023

#Function for make statructure of graph
def graph(x):
    #Given weight value of the weight values
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
    #Login for finding tthe all the possible combinations for the given coordinates
    T=[]
    #Lenght of the given array
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
        s=s+1
    #Logic for assigning the value of the given coordinates 
    lenth =len(T)
    lent =len(weight)
    out={}
    c=0
    for k in range(0,lenth):
        out[T[k]]=0
        for n in range(c,lent):
            if T[k] == list(weight.keys())[n]:
               out[list(weight.keys())[n]]= weight[list(weight.keys())[n]]  
    #Printing the output           
    print(out)
#Given input to be find the structure
x=["A","B","C","D","E","F"]
graph(x)