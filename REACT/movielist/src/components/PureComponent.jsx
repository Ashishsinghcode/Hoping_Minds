import React, { PureComponent } from 'react'

export default class Rockstar extends PureComponent {
    
  constructor(){
    super();
    this.state={
        count:0,
        text:'Counter Example',
        book:{
          title:'Harry Potter',
          author:'J.K. Rowling'
        }
    }
  }
    render() {
        console.log('Render is called......');
    return(
      <div className='text-center'>
        <h2>Heading :{this.state.text}</h2>
        <p>{this.state.book.title} - {this.state.book.author}</p>
        <br/>
        <button onClick ={()=>{this.setState({book:{title:'Beauty and Beast',author:'J.K. Rowling'}})}}>Change Name</button>
        <button onClick={()=>{this.setState({text:'Pure Component Example'})}}>Change Heading</button>
        <hr/>
        <hr/>
        <button  className='mx-3' onClick={()=>{this.setState({count:this.state.count+1})}}>+</button>
        Count :{this.state.count}
        <button className='mx-3' onClick={()=>{this.setState({count:this.state.count-1})}}>-</button>
      </div>
    )
  }
}


