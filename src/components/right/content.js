import './content.css';
import {  Select,Input,Upload, Icon,Button,Form,Dialog} from '@alifd/next';


const FormItem = Form.Item;
const Option = Select.Option;
const formItemLayout = {
    labelCol: {span: 4},
    wrapperCol: {span: 20}
};
const showImg = (url) => {
    Dialog.show({
        title: 'img preview',
        content: <img src={url} style={{width: 400, height: 400}}/>,
        footer: false,
    });
};

const actionRender = (file) => {
    console.log(file);
    return (<span >
        <Button text component="a" href={file.url} target="_blank" style={{marginRight:10}}>
            <span style={{cursor: 'pointer'}}>重新上传</span>
        </Button>
        <Button text onClick={e=> {e.preventDefault(); showImg(file.url);}} >
            <span  style={{ cursor: 'pointer'}} >查看</span>
        </Button>
    </span>);
};

function Content() {
    return (
        <div className='my-content'>
        <div className='text-top'>第一步：<span className='span-one'>填写注册信息</span></div>
        <div className=''>
        <Form {...formItemLayout} labelAlign="top"  style={{maxWidth: '800px'}}>
                    <FormItem required label="类型" requiredMessage="请选择客户类型">
                        <Select placeholder='请选择...'  style={{width: '100%'}}>
                            <Option value="existedCustomer ">老客户</Option>
                            <Option value="newCustomer">新客户</Option>
                        </Select>
                    </FormItem>
                    <FormItem required label="公司名称" requiredMessage="请输入营业执照上公司的名称">
                        <Input placeholder="请输入营业执照上公司的名称..." id="companyName" name="companyName"/>
                    </FormItem>
                    <FormItem required label="法人姓名" requiredMessage="请输入法人姓名">
                        <Input  placeholder="张富贵" id="legalName" name="legalName"/>
                    </FormItem>
                    <FormItem required label="法人身份证号" maxLength={20} minmaxLengthMessage="法人身份证号长度不得超过20位" requiredMessage="请输入正确的法人身份证号" >
                        <Input   placeholder="请输入完成的法人身份证号..." id="legalIdNum" name="legalIdNum" />
                    </FormItem>
                    <FormItem required label="联系人名称" requiredMessage="请输入联系人名称">
                        <Input  placeholder="请输入完成的联系人名称..."  id="userName" name="userName"/>
                    </FormItem>
                    <FormItem required label="联系人电话" format='tel'requiredMessage="请输入联系人电话" formatMessage='请输入正确的电话号码格式'>
                        <Input  placeholder="请输入完成的联系人电话..." id="telNum" name="telNum"/>
                    </FormItem>
                    <FormItem required label="联系人邮箱" format='email' formatMessage='请输入正确的电子邮箱格式'>
                        <Input  placeholder="请输入完成的联系人邮箱..." id="email" name="email"/>
                    </FormItem>
                    <FormItem style={{marginTop:-15}} >
                    <div className='text-mid'><span className='star-red'>*</span>营业执照扫描件(仅限正面照片一张)<span className='span-btm'>单个文件不超过5M,仅支持JPG文件</span></div>
                    <div>
                    <Upload
                    action="https://www.easy-mock.com/mock/5b713974309d0d7d107a74a3/alifd/upload"
                    autoUpload={false}
                    listType="text"
                    accept="image/jpg, image/jpeg"
                    useDataURL={true}
                    limit={1}
                    actionRender={actionRender}
                    >
                    <Button style={{width:800}}><Icon type='add'/>点击上传营业执照</Button>
                 </Upload>
                 </div>
                    </FormItem>
                    <FormItem style={{marginTop:-15}} >
                    <div className='text-mid'><span className='star-red'>*</span>法人身份证扫描件<span className='span-btm'>单个文件不超过5M,仅支持JPG文件</span></div>
                    <div style={{float:'left',width:395}}>
                    <Upload
                    action="https://www.easy-mock.com/mock/5b713974309d0d7d107a74a3/alifd/upload"
                    autoUpload={false}
                    listType="text"
                    accept="image/jpg, image/jpeg"
                    useDataURL={true}
                    limit={1}
                    actionRender={actionRender}
                    >
                    <Button style={{width:395}}><Icon type='add'/>点击上传身份证正面</Button>
                 </Upload>
                 </div>
                 <div style={{float:'right',width:395}}>
                    <Upload
                    action="https://www.easy-mock.com/mock/5b713974309d0d7d107a74a3/alifd/upload"
                    autoUpload={false}
                    listType="text"
                    accept="image/jpg, image/jpeg"
                    useDataURL={true}
                    limit={1}
                    actionRender={actionRender}
                    >
                    <Button style={{width:395}}><Icon type='add'/>点击上传身份证反面</Button>
                 </Upload>
                 </div>
                    </FormItem>
                    <FormItem label=" " style={{textAlign:'center',paddingTop:10}}>
                    <Form.Submit validate type="primary" onClick={(v) => console.log(v)} style={{backgroundColor:'blue',width:200,borderRadius:20,height:35,color:'white'}}>下一步</Form.Submit>
                    </FormItem>
                </Form>
                </div>

        </div>
    )
}

     //暴露Content组件
     export default Content;