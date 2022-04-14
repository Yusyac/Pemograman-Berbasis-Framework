import React, { Component } from 'react';
import { connect } from 'react-redux'
import { addToCart } from './actions/cartActions'

 class Home extends Component{
    state = {
        count: 0
      };    
    
    handleClick = (id)=>{
        this.props.addToCart(id); 
        const count = this.state.count;
        this.setState({ count: count + 1 });
    }
    

    render(){
        let itemList = this.props.items.map(item=>{
            return(
                <div className="card" key={item.id}>
                        <div className="card-image">
                            <img src={item.img}/>
                            <span to="/" className="btn-floating btn-large halfway-fab btn-primary float-right" onClick={()=>{this.handleClick(item.id)}}><i className="material-icons">add</i></span>
                        </div>

                        <div className="card-content">
                            <p><b>Harga: Rp.{item.price}</b></p>
                            <p><b>Stock: {item.stock}</b></p>
                        </div>
                 </div>

            )
        })

        return(
            <div className="container">
                <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gridGap: 30 }}>
                    {itemList}
                </div>
            </div>
        )
    }
}
const mapStateToProps = (state)=>{
    return {
      items: state.items
    }
  }
const mapDispatchToProps= (dispatch)=>{
    
    return{
        addToCart: (id)=>{dispatch(addToCart(id))}
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Home)