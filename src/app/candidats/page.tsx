"use client"
import { Button } from "antd";
import Link from "next/link";
import { candidats } from "../candidatsList";
import i18n from "../../../i18n";
import { useTranslation } from 'react-i18next';

export default function CandidatsPage() {
  const {t} = useTranslation();

  console.log(i18n.language)
    return(
    <div>
    <h1 style={{textAlign:'center'}}>{t('candidatsList')}</h1>
    <Button href='/' style={{position: 'absolute', top: '0.5rem', left:'0.5rem'}}>{t('hpRedirectBtn')}</Button>
    <Button style={{position: 'absolute', top: '0.5rem', right:'0.5rem'}} onClick={() => i18n.changeLanguage('en')}>English</Button>
      <Button style={{position: 'absolute', top: '0.5rem', right:'5.5rem'}}onClick={() => i18n.changeLanguage('fr')}>Français</Button>

    
    {candidats.map((candidat)=>{
      return <Link  href={`/candidat/${candidat.id}`} key={candidat.id} style={{fontWeight:'bold', margin: '1rem 0.5rem', display:'flex', justifyContent:'center'}}>{candidat.name}</Link>
      })}
    </div>

    )
  }