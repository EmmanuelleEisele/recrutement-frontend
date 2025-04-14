"use client"
import { Button } from "antd";
import Link from "next/link";
import { candidats } from "../candidatsList";
import i18n from "../../../i18n";
import { useTranslation } from 'react-i18next';
import './candidatsPage.css'
import '../headerBtn.css'

export default function CandidatsPage() {
  const {t} = useTranslation();

  console.log(i18n.language)
    return(
    <div>
    <Button className="lng-btn-en" onClick={() => i18n.changeLanguage('en')}>English</Button>
    <Button className="lng-btn-fr" onClick={() => i18n.changeLanguage('fr')}>Français</Button>
    <Button className="redirect-hp-btn" href="/">{t('hpRedirectBtn')}</Button>

    <h1 style={{textAlign:'center'}}>{t('candidatsList')}</h1>
    
    {candidats.map((candidat)=>{
      return <Link className="candidats-link"  href={`/candidat/${candidat.id}`} key={candidat.id} >{candidat.name}</Link>
      })}
    </div>

    )
  }