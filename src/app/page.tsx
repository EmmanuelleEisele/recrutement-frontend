'use client'
import styles from "./page.module.css";
import { Button, Form, Input, message} from 'antd';
import '@ant-design/v5-patch-for-react-19';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { useState } from "react";

interface IlogIn{
  username: string;
  password: string | number;
}

export default function Home() {
  const [isConnected, setIsConnected] = useState(false);
  const [error, setError] = useState<null | string>(null);

  const onFinish = ({username , password}: IlogIn) => {
    console.log('Received values of form: ', );
    const userName = username;
    const userPwd = password;

    if( userName === 'admin' && userPwd === 'adminpwd'){
      setIsConnected(true);
      setError('')
   }
   else{
    setError('Veuillez entrer un pseudo et/ou mot de passe correct !')  
    return 
  }
  };
  return (
    <div className={styles.page}>
      <header>

        <h1 style={{textAlign: 'center', marginBottom:'0.5rem', marginTop:'2rem'}}>Recrutement.com</h1>

        {isConnected ?  <Button href="/candidats" style={{position: 'absolute', top: '0.5rem', left:'0.5rem'}}>Candidats</Button> : <></> }

        <Form
      name="login"
      initialValues={{ remember: true }}
      style={{ maxWidth: 360 }}
      onFinish={onFinish}
      >
      <Form.Item
        name="username"
        rules={[{ required: true, message: 'Please input your Username!' }]}
      >
        <Input prefix={<UserOutlined />} placeholder="Username" />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[{ required: true, message: 'Please input your Password!' }]}
      >
        <Input prefix={<LockOutlined />} type="password" placeholder="Password" />
      </Form.Item>

       <Form.Item>
        <Button block type="primary" htmlType="submit" onClick={()=>onFinish}>
          Connexion
        </Button>
        {error && <p style={{color:'red'}}>{error}</p> }

      </Form.Item>
    </Form>

      </header>

      <main className={styles.main}>
        <h1>Pour remplire ta candidature</h1>
        <Button type="primary" href="/candidature">Clique ici</Button>
      </main>
      <footer >
      </footer>
    </div>
  );
}