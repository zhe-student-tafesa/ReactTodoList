

//import PropTypes from 'prop-types';
import React from 'react';
//Fragment
import {Fragment} from 'react';
//import { CSSTransition } from 'react-transition-group';

import './style.css';
class TryCSS extends React.Component{
    constructor(props){
        super(props);
        this.state={
            show:true
        };
        this.handleToggle=this.handleToggle.bind(this);
    }
    render(){
        return (
                <Fragment>
                    <div className={this.state.show? 'show' : 'hide'}>CSS666</div>
                    <button onClick={this.handleToggle}>toggle</button>
                </Fragment>
            )
    }
    handleToggle(){
        if (this.state.show) {
            this.setState(()=>{
                return {show:false}
                }
                );
        }else{
            this.setState(()=>{
                return {show:true}
                }
                );
        }
    }

}
  export default TryCSS;//导出 