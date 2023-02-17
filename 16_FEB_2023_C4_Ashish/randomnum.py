#Program for find no. of existance on graph
#Author - Ashish kumar singh 
#Created on - 16-02-2023

import numpy as np
import seaborn as sns
import pandas as pd
import matplotlib.pyplot as plt
#Generation of random values
a= np.random.randint(low=0,high=100,size=60)
b= np.random.randint(low=0,high=100,size=100)
#Converting ndarray to list
a=list(a)

data={'Total':a}
total = pd.DataFrame(data)

sns.set_theme(style="whitegrid")
ax=sns.countplot(data=total,x='Total')

# giving labels to x-axis and y-axis
ax.set(xlabel ='All values', ylabel ='Count')

# giving title to the plot
plt.title('Range between 1 to 100');

# function to show plot
plt.show()
# import the seaborn library


