'use client'
import React from 'react';
import { Button, Form, Input, InputNumber } from 'antd';
import i18n from '../../../i18n';
import { useTranslation } from 'react-i18next';
import '../headerBtn.css'

export default function formPage(){
  const {t} = useTranslation();
  
  const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
  };
  
  const validateMessages = {

    required: t('validateMsgRequired'),
    types: {
      email: t('validateMsgEmail')
    }
  };
  
  const onFinish = (values: string & number) => {
    console.log(values);
  };
  
 
    return(
     <>
      <Button href='/' style={{position: 'absolute', top: '0.5rem', left:'0.5rem'}}>{t('hpRedirectBtn')}</Button>
      <Button className='lng-btn-en' onClick={() => i18n.changeLanguage('en')}>English</Button>
      <Button className='lng-btn-fr'onClick={() => i18n.changeLanguage('fr')}>Français</Button>
     <h1 style={{marginBottom: '1rem', textAlign: 'center'}}>{t('candidaturePageTitle')}</h1>


          <Form
    {...layout}
    name="nest-messages"
    onFinish={onFinish}
    style={{ width: '80%' , display: 'flex', justifyContent:'center', flexDirection:'column'}}
    validateMessages={validateMessages}
  >
    <Form.Item name={['user', 'nom']} label= {t('formName')} rules={[{ required: true }]}>
      <Input placeholder= {t('formNamePlaceholder')}/>
    </Form.Item>
    <Form.Item name={['user', 'email']} label="Email" rules={[{ type: 'email',required: true }]}>
      <Input placeholder='Email'/>
    </Form.Item>
    <Form.Item name={['user', 'Github']} label="Github" rules={[{ required: true }]}>
      <Input placeholder='Github'/>
    </Form.Item>
    <Form.Item name={['user', 'Experiences']} label="Experiences" rules={[{ required: true }]}>
      <Input.TextArea  placeholder='Experiences'/>
    </Form.Item>
    <Form.Item name={['user', 'Motivation']} label="Motivations" rules={[{ required: true }]}>
      <Input.TextArea placeholder='Motivations' />
    </Form.Item>

    <Form.Item label={null}>
      <Button type="primary" htmlType="submit" >
        {t('formBtn')}
      </Button>
    </Form.Item>
  </Form>
  </> 
    )
};

