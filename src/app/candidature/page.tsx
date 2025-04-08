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
     <h1 style={{marginBottom: '1rem'}}>Formulaire de candidature</h1>
      
          <Form
    {...layout}
    name="nest-messages"
    onFinish={onFinish}
    style={{ maxWidth: 600}}
    validateMessages={validateMessages}
  >
    <Form.Item name={['user', 'name']} label="Name" rules={[{ required: true }]}>
      <Input />
    </Form.Item>
    <Form.Item name={['user', 'email']} label="Email" rules={[{ type: 'email' }]}>
      <Input />
    </Form.Item>
    <Form.Item name={['user', 'Github']} label="Github">
      <Input />
    </Form.Item>
    <Form.Item name={['user', 'Experiences']} label="Experiences">
      <Input.TextArea />
    </Form.Item>
    <Form.Item name={['user', 'Motivation']} label="Explique tes motivations" >
      <Input.TextArea />
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

