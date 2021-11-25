

//import PropTypes from 'prop-types';
import React from 'react';
//Fragment
import {Fragment} from 'react';
import { CSSTransition } from 'react-transition-group';

import './style.css';
class MyCssTransition extends React.Component{
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
                    <CSSTransition
                        timeout={1000}
                        in={this.state.show}
                        classNames='fade'
                        unmountOnExit
                        onEntered={(el)=>{
                            el.style.color='blue';//使用js修改属性（进入后激活 这个钩子）
                        }}
                        appear={true}
                    >
                        <div>CSS666Transition</div>
                    </CSSTransition>    
                    <button onClick={this.handleToggle}>toggle--transition</button>
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
  export default MyCssTransition;//导出 