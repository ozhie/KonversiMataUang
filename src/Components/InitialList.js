import React from 'react';
import DeleteItem from './DeleteItem'

//Class untuk menghandle List mata uang
export default class InitialList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '',
            InitialMataUang: [
                
            ]
          };
      }

    render(){
           
            return(
                this.props.InitialMataUang.map((post, index) =>
                <div key={index}>
                    <h5>{post.kurs} : {post.nilai} <DeleteItem key={index} item={post} index={index} removeItem={this.props.removeItem} InitialMataUang={this.props.InitialMataUang}/></h5>
                </div>
                )
            )
        
    }
}
