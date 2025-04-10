'use client'
import React from 'react';
import { Button, Form, Input, InputNumber } from 'antd';

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};

const validateMessages = {
  required: '${label} is required!',
  types: {
    email: '${label} is not a valid email!',
    number: '${label} is not a valid number!',
  },
  number: {
    range: '${label} must be between ${min} and ${max}',
  },
};

const onFinish = (values: string & number) => {
  console.log(values);
};

export default function formPage(){
    return(
     <>
     <h1 style={{marginBottom: '1rem', textAlign: 'center'}}>Formulaire de candidature</h1>
      <Button href='/' style={{position: 'absolute', top: '0.5rem', left:'0.5rem'}}>Accueil</Button>
          <Form
    {...layout}
    name="nest-messages"
    onFinish={onFinish}
    style={{ width: '80%' , display: 'flex', justifyContent:'center', flexDirection:'column'}}
    validateMessages={validateMessages}
  >
    <Form.Item name={['user', 'nom']} label="Nom" rules={[{ required: true }]}>
      <Input placeholder='Nom Prénom'/>
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
        Envoyer
      </Button>
    </Form.Item>
  </Form>
  </> 
    )
};

