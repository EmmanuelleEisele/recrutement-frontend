'use client'
import { candidats } from "@/app/candidatsList"
import { Button, Card } from "antd";
import './page.css';
import i18n from "../../../../i18n";
import { useTranslation } from "react-i18next";
import '../../headerBtn.css';

interface ICandidats {
  id: number;
  name: string;
  email: string;
  Github: string;
  experience: string;
  motivation: string;
}

export default function CandidatPage({ params }: { params: { id: number } }) {
  const candidat = candidats.find((c) =>  c.id === Number(params.id) );
  // console.log(candidat)

  const {t} = useTranslation();

  if (!candidat) {
    return <h1>Candidat non trouvé</h1>;
  }

  console.log(i18n.language)
  return (
    <>
      <Button className="lng-btn-en" onClick={() => i18n.changeLanguage('en')}>English</Button>
      <Button className="lng-btn-fr" onClick={() => i18n.changeLanguage('fr')}>Français</Button>

      <Button className="redirect-hp-btn" href='/'>{t('hpRedirectBtn')}</Button>
      <Button className="candidats-btn" href="/candidats">Candidats</Button>

      <h1 className="title-candidat">{t('candidatTitle')}{candidat.id}</h1>

      <Card className="card" title={candidat.name} variant="borderless" >
        <h3 className="card-title">Github</h3>
          <p className="card-description">{candidat.github}</p>
        <h3 className="card-title">Experiences</h3>
          <p className="card-description">{candidat.experience}</p>
        <h3 className="card-title">Motivations</h3>
          <p className="card-description">{candidat.motivation}</p>
      
      </Card>

    </>
  );
}