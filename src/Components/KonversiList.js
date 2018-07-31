import React from 'react'
//Class untuk menghandle Konversi Mata Uang
export default class KonversiList extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            value: '',
            InitialMataUang: 
            []
        };
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmitKonversi = this.handleSubmitKonversi.bind(this);
      }

      handleChange(event) {
        //alert(event.target.value);
        this.setState({value: event.target.value});
        
      }

      handleSubmitKonversi(event){
        //call Konversi method
        event.preventDefault();
        this.props.Konversi(this.state.value)
    }

    render(){
        return (
            <div>
                <form onSubmit={this.handleSubmitKonversi}>
                    <label>
                    USD :
                        <input type="text" value={this.state.value} onChange={this.handleChange} />
                    </label>
                    <input type="submit" value="Submit" />
                </form>
                <div id="kurs"></div>
            </div>
            
        )
    }
}