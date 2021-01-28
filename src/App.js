import {  Grid } from '@alifd/next';
import Title from './components/left/title/title';
import Content from './components/right/content';
import './App.css';

const { Row, Col } = Grid;
 
function App() {
  return (
    <div className="app">
      <Row >
        <Col fixedSpan='25'>
          <div className='left-menu'>
            <Title/>
          </div>
        </Col>
        <Col>
          <div className="main-content">
          <Content/>
        </div>
        </Col>
      </Row>
    </div>
  );
}

//暴露App组件
export default App;