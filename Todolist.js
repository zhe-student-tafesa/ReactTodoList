//import logo from './logo.svg';
import './App.css';
import React from 'react';
import TodoItem from './TodoItem';
//Fragment
import {Fragment} from 'react';
class Todolist extends React.Component{//定义 Todolist类 继承 了 Component  ， render函数必须有 返回值
    constructor(props){
        super(props);//调用父类的构造函数  inputValue:'',//保存输入  list[]//保存TODOlist
        //变量 放在 state里面
        this.state={
            inputValue:'',
            list:[]
        };

    }
  render(){
// 必须使用大括号，使用.bind(this)改变 this指向    value={this.state.inputValue}//22222222React根据数据改变Dom
//onChange  C必须大写，事件绑定
    return (  
    <Fragment>

      <div>
        <input
            value={this.state.inputValue}
            onChange={this.handleInputChange.bind(this)}
        />
        <button onClick={this.handleBtnClick.bind(this)}>提交</button>
      </div>
      <ul>
        
            {this.state.list.map(
                (item,index)=>{
                    return <TodoItem key={index} index={index} content={item} 
                               deleteItem={this.handleItemClick.bind(this)}
                            />
                    {/*return <li key={index}
                                onClick={this.handleItemClick.bind(this,index)}
                            >
                                {item}
                            </li>*/}
                }
                )
            }

       
        
      </ul>

    </Fragment>

          )
  }
  handleInputChange(e){
    //console.log(e.target.value);
    //console.log(this);//使用.bind(this)后，this变成 Todolist
    this.setState({inputValue:e.target.value});//11111111111111输入 并设置变量inputValue
  }
    handleBtnClick(){
      this.setState({list:[...this.state.list,this.state.inputValue]});//把list拆包，然后加上最新输入的数据
      this.setState({inputValue:""});//清空 输入框

    }
    handleItemClick(index){
      const myList=this.state.list;//建立副本
      myList.splice(index,1);// 从指定的索引，删除一个元素
      this.setState({list:myList});//把删除 后的 数组赋值 给显示的数组


    }
  }


  export default Todolist;//导出  Todolist
