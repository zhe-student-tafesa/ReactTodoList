import React from 'react';           //引入 React
import ReactDOM from 'react-dom';
import './index.css';              //CSS可以像JS一样可以 被 嵌 进来
//import App from './App';//就是 App.js 文件
import Todolist from './Todolist';//111倒入 组件 Todolist

//import reportWebVitals from './reportWebVitals';

ReactDOM.render(<Todolist />,  document.getElementById('root'));//使用 ReactDOM的render方法 把 Todolist 的返回值 放在 root里

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
