//import logo from './logo.svg';

import React from 'react';
import TodoItem from './TodoItem';
import TryCSS from './TryCSS';//
import MyCssTransition from './MyCssTransition';//
import MyCssTransitionGroup from './MyCssTransitionGroup';//MyCssTransitionGroup

import axios from 'axios';
//Fragment
import {Fragment} from 'react';
import './App.css';
class Todolist extends React.Component{//定义 Todolist类 继承 了 Component  ， render函数必须有 返回值
    constructor(props){
        super(props);//调用父类的构造函数  inputValue:'',//保存输入  list[]//保存TODOlist
        //变量 放在 state里面
        this.state={
            inputValue:'',
            list:[]
        };
        this.handleInputChange=this.handleInputChange.bind(this);
        this.handleBtnClick=this.handleBtnClick.bind(this);
        this.handleItemClick=this.handleItemClick.bind(this);

    }
  render(){
// 必须使用大括号，使用.bind(this)改变 this指向    value={this.state.inputValue}//22222222React根据数据改变Dom
//onChange  C必须大写，事件绑定
    console.log('parent render');

    return (  
    <Fragment>

      <div>
        <input
            value={this.state.inputValue}
            onChange={this.handleInputChange}
        />
        <button onClick={this.handleBtnClick}>提交</button>
      </div>
      <ul>
        
            {this.getTodoItem() }

       
        
      </ul>
      <TryCSS/>
      <MyCssTransition/>
      <MyCssTransitionGroup/>

    </Fragment>

          )
  }
  getTodoItem(){// 别忘加 return，调用时别忘加 （）
   return this.state.list.map(
                (item,index)=>{
                    return <TodoItem key={index} index={index} content={item} 
                               deleteItem={this.handleItemClick}
                            />
                   
                }
                )

  }
  handleInputChange(e){
    //console.log(e.target.value);
    //console.log(this);//使用.bind(this)后，this变成 Todolist
    /////this.setState({inputValue:e.target.value});//11111111111111输入 并设置变量inputValue
    //新版React 推荐这么写， setState接收一个函数，而不是 一个 对象,this.setState(  ()=>{}  );,函数必须返回一个对象
    const value = e.target.value;
    this.setState(()=>{//////////////////可以 简写为：this.setState(()=>( {inputValue:value}));
        return {inputValue:value};
    });

  }
    handleBtnClick(){
        //第1版
      // this.setState({list:[...this.state.list,this.state.inputValue]});//把list拆包，然后加上最新输入的数据
      // this.setState({inputValue:""});//清空 输入框
      //第2版
      // this.setState(()=>( {
      //   list:[...this.state.list,this.state.inputValue],
      //   inputValue:""
      // }));
      // //第3版
        this.setState((prevState)=>( {//prevState为 上一个状态，即修改前的状态，用prevState代替this.state
        list:[...prevState.list,prevState.inputValue],
        inputValue:""
      }));
    }


    handleItemClick(index){//删除 li
      // const myList=this.state.list;//建立副本
      // myList.splice(index,1);// 从指定的索引，删除一个元素
      //this.setState({list:myList});//把删除 后的 数组赋值 给显示的数组
      this.setState((prevState)=>{ 
        const myList=prevState.list;
        myList.splice(index,1);
        return {list:myList} 
        });


    }
    componentWillUpdate(){
      console.log('componentWillUpdate');

    }

    //React 如何发送AJAX请求，如何让组件与 请求 建立关系！！！！！！！！！！！！！！！！！！
    componentDidMount(){//调用get方法，请求的地址是  /api/todolist  发AJAX请求
      //如果成功 打印 succ，如果失败 打印 error
       axios.get('/api/todolist')
       .then((res)=>{
          //alert('succ')
          console.log(res.data);
          this.setState(()=>{
            return {list:res.data};
          });
        })
       .catch(()=>{alert('error')})
    }
  }


  export default Todolist;//导出  Todolist
