import './content.css';
import {  Select,Input,Upload, Icon,Button,Form } from '@alifd/next';


const FormItem = Form.Item;
const Option = Select.Option;
const formItemLayout = {
    labelCol: {span: 4},
    wrapperCol: {span: 20}
};


function Content() {
 
    return (
        <div className='my-content'>
        <div className='text-top'>第一步：<span className='span-one'>填写注册信息</span></div>
        <div className=''>
        <Form {...formItemLayout} labelAlign="top"  style={{maxWidth: '800px'}}>
                    <FormItem required label="类型">
                        <Select placeholder='请选择...'  style={{width: '100%'}}>
                            <Option value="small">老客户</Option>
                            <Option value="medium">新客户</Option>
                        </Select>
                    </FormItem>
                    <FormItem required label="公司名称">
                        <Input placeholder="请输入营业执照上公司的名称..." id="companyName" name="公司名称"/>
                    </FormItem>
                    <FormItem required label="法人姓名">
                        <Input  placeholder="张富贵" id="legalName" name="法人姓名"/>
                    </FormItem>
                    <FormItem required label="法人身份证号" maxLength={20}>
                        <Input   placeholder="请输入完成的法人身份证号..." id="legalIdNum" name="法人身份证号"/>
                    </FormItem>
                    <FormItem required label="联系人名称" >
                        <Input  placeholder="请输入完成的联系人名称..."  id="userName" name="联系人名称"/>
                    </FormItem>
                    <FormItem required label="联系人电话" format='tel'>
                        <Input  placeholder="请输入完成的联系人电话..." id="telNum" name="联系人电话"/>
                    </FormItem>
                    <FormItem required label="联系人邮箱" format='email'>
                        <Input  placeholder="请输入完成的联系人邮箱..." id="email" name="联系人邮箱"/>
                    </FormItem>
                    <FormItem style={{marginTop:-15}} >
                    <div className='text-mid'><span className='star-red'>*</span>营业执照扫描件(仅限正面照片一张)<span className='span-btm'>单个文件不超过5M,仅支持JPG文件</span></div>
                    <div>
                    <Upload
                    listType="text"
                    accept="image/jpg"
                    >
                    <Button style={{width:800}}><Icon type='add'/>点击上传营业执照</Button>
                 </Upload>
                 </div>
                    </FormItem>
                    <FormItem style={{marginTop:-15}} >
                    <div className='text-mid'><span className='star-red'>*</span>法人身份证扫描件<span className='span-btm'>单个文件不超过5M,仅支持JPG文件</span></div>
                    <div style={{float:'left'}}>
                    <Upload
                    listType="text"
                    accept="image/jpg"
                    >
                    <Button style={{width:395}}><Icon type='add'/>点击上传身份证正面</Button>
                 </Upload>
                 </div>
                 <div style={{float:'right'}}>
                    <Upload
                    action="www.baidu.com"
                    listType="image"
                    accept="image/jpg"
                    >
                    <Button style={{width:395}}><Icon type='add'/>点击上传身份证反面</Button>
                 </Upload>
                 </div>
                    </FormItem>
                    <FormItem label=" " style={{textAlign:'center'}}>
                    <Form.Submit validate type="primary" onClick={(v) => console.log(v)} style={{backgroundColor:'blue',width:200,borderRadius:20,height:35,color:'white'}}>下一步</Form.Submit>
                    </FormItem>
                </Form>
                </div>

        </div>
    )
}

     //暴露Content组件
     export default Content;