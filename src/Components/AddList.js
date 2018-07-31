import React from 'react';
//Class Untuk Menghandle Tambah Mata Uang
export default class AddList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: '',
            InitialMataUang: []
        };
        
        this.handleChange = this.handleChange.bind(this);
        this.createAddList = this.createAddList.bind(this);
      }
    
    handleChange(event) {
        this.setState({value: event.target.value});
    }  
    createAddList (event){
        //call AddListKurs methods
        event.preventDefault();
        this.props.AddListKurs(this.state.value);    
    }
    
    render(){
        return(
            <form onSubmit={this.createAddList}>
              <div>
                <label>
                  Mata Uang :
                  <input type="text" value={this.state.value} placeholder="Contoh : IDR" onChange={this.handleChange} />
                </label>
              </div>
              <button type="submit" >TAMBAH</button>
            </form>
        )
    }
}