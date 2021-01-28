import './title.css';
import Nav from '../nav/nav';
function Title() {
    return (
      <div className="title">
          <div className='title-top'><span className='span-left'>小项目</span><span className='span-mid'>·</span><span className='span-left'>项目测验</span></div>
          <div className='title-mid'>Hi.欢迎注册</div>
          <div className='title-btm'>请实现这个表单</div>
          <Nav/>
      </div>
    );
  }


  //暴露Title组件
export default Title;