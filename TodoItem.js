//import logo from './logo.svg';
import './App.css';
import React from 'react';
//Fragment
import {Fragment} from 'react';
class TodoItem extends React.Component{ //定义 Todolist类 继承 了 Component  ， render函数必须有 返回值
    constructor(props){
        super(props);//调用父类的构造函数  inputValue:'',//保存输入  list[]//保存TODOlist
        //通过bind(this)对handleItemClick函数的指向做一个修改

        this.handleItemClick=this.handleItemClick.bind(this);/////1111111111111在构造函数 绑定this


    }
  render(){
    const { content }=this.props;//{content} 即this.props.content
 
  //父组件通过 属性向子组件传递数据  //父组件通过 属性向子组件传递数据 AAAAAAA
    return (  
      <Fragment>
       <div onClick={this.handleItemClick}>
         {content}
       </div>
      </Fragment>

    )
 
  }

  //修改list[]中的数据，来实现删除组件
  handleItemClick(){//在子组件的单击响应函数里（先传过来），再调用父组件的deleteItem方法
    //this.handleItemClick
    //console.log(1);
    const {deleteItem,index } = this.props;///////////做结构赋值
    //console.log(this.props.index);//2222222已经 在构造函数 绑定this
    //this.props.deleteItem(this.props.index); //优化成下边的编码
    deleteItem(index);

  }
}


  export default TodoItem;//导出  Todolist