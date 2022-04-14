import React, { Component } from 'react'
import { connect } from 'react-redux'
class Recipe extends Component{

    render(){
  
        return(
            <div className="container">
                <div className="collection">
                        <li className="collection-item"><b>Total : Rp. {this.props.total}</b></li>
                 </div>
            </div>
        )
    }
}

const mapStateToProps = (state)=>{
    return{
        addedItems: state.addedItems,
        total: state.total
    }
}

const mapDispatchToProps = (dispatch)=>{
    return{
        addShipping: ()=>{dispatch({type: 'ADD_SHIPPING'})},
        substractShipping: ()=>{dispatch({type: 'SUB_SHIPPING'})}
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Recipe)
