import React from 'react';

export default class DeleteItem extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            InitialMataUang: []
        }
        this.onClickDelete = this.onClickDelete.bind(this);
      }
      onClickDelete() {
        //call removeItem method
        var index = parseInt(this.props.index);
        this.props.removeItem(index);
      }
      
      render () {

        return(
                <button type="button" onClick={this.onClickDelete}>
                    -
                </button>   
        );
      }
}