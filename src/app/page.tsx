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

  return (
    <div className={styles.page}>
      <header>

        <h1 style={{textAlign: 'center', marginBottom:'0.5rem'}}>Recrutement.com</h1>

        <form style={{ display: 'flex', alignItems: 'center', flexDirection: 'column'}}>
        <Input type="email" placeholder="Email Admin" style={{ width: '13.5rem', marginBottom: '0.5rem'
        }}/>

        <Space direction="horizontal">
         <Input.Password
         style={{ width: '13.5rem', marginBottom: '0.5rem'
         }}
          placeholder="Mot de passe"
          visibilityToggle={{ visible: passwordVisible, onVisibleChange: setPasswordVisible }}
         />
        </Space>
        <Button>se connecter</Button>
      </form>
        
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
