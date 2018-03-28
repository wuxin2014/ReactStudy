import React from 'react';
import './login.css';


const Login = () => {
  return (
    <div className="login_wrap">
      <p><span>LOAD</span> 登录</p>
      <form>
        <label>用户名： <input type="text" /></label><br />
        <label>密码： <input type="text" /></label>
        <button>登录</button>
      </form>
    </div>
  );
};

export default Login;
