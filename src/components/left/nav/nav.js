// import { Button} from '@alifd/next';
import logo01 from '../../../img/01.svg';
import logo02 from '../../../img/02.svg';
import logo03 from '../../../img/03.svg';
import './nav.css';


function Title() {
    return (
        <div className='my-menu'>
        <div className='text' id='text'>01<span className='span_one'>填写注册信息</span><span className='span_img'><img src={logo01}  alt="logo01" /></span></div>
        <div className='text' >02<span className='span_one'>确认信息</span><span className='span_img'><img src={logo02}  alt="logo02" /></span></div>
        <div className='text' >03<span className='span_one'>注册结果</span><span className='span_img'><img src={logo03}  alt="logo03" /></span></div>
        </div>
        
    )
}



     //暴露Title组件
export default Title;

