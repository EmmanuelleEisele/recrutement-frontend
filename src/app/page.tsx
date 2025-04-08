'use client'
import Image from "next/image";
import styles from "./page.module.css";
import {Breadcrumb, Button, Form, Input, Space} from 'antd';
import '@ant-design/v5-patch-for-react-19';
import { EyeInvisibleOutlined, EyeTwoTone, HomeOutlined, UserOutlined } from '@ant-design/icons';
import { useState } from "react";
import Link from "next/link";

export default function Home() {
  const [passwordVisible, setPasswordVisible] = useState(false);
   
  function showConnection(){
    
    return (
      
      <form>
        <Input type="email" placeholder="Email Admin" style={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}/>

        <Space direction="horizontal">
         <Input.Password
          placeholder="Mot de passe"
          visibilityToggle={{ visible: passwordVisible, onVisibleChange: setPasswordVisible }}
         />
        </Space>
        <Button>se connecter</Button>
      </form>
      
    )
   }

  return (
    <div className={styles.page}>
      <header>

        <h1 style={{textAlign: 'center'}}>Recrutement.com</h1>
         <Button  onClick={showConnection}>
         se connecter
         </Button>
        
      </header>

      <main className={styles.main}>
        <h1>Pour remplire ta candidature</h1>
        <Button type="primary">Clique ici</Button>
      </main>
      <footer >
      </footer>
    </div>
  );
}
