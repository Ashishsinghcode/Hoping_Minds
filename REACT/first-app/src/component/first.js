import React,{Component} from 'react';

import './first.css'

class Welcome extends Component{
    render()
    {
        return (
            <table>
                <tr>
                    <td rowSpan='2'>Fruits</td>
                    <td>Apple</td>
                </tr>
                <tr>
                    <td>Mango</td>
                </tr>
                <tr>
                    <td rowSpan='2'>Animals</td>
                    <td>Dog</td>
                </tr>
                <tr>
                    <td>Cat</td>
                </tr>
            </table>
        );
        
    }
}
  let First2=()=>{
      return (
          <table>
              <tr>
                  <td rowSpan='2'></td>
                  <td>a1</td>
              </tr>
              <tr>
                  <td>a1</td>
              </tr>
              <tr>
                  <td rowSpan='2'></td>
                  <td>a1</td>
              </tr>
              <tr>
                  <td>a1</td>
              </tr>
          </table>
      );
  }


export { Welcome,First2}