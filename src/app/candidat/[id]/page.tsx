'use server'
import { candidats } from "@/app/candidatsList"
import { Button, Card, List } from "antd";
import './page.css';

interface ICandidats {
  id: number;
  name: string;
  email: string;
  Github: string;
  experience: string;
  motivation: string;
}

export default async function CandidatPage({ params }: { params: { id: number } }) {
  const candidat = candidats.find((c) =>  c.id === Number(params.id) );
  console.log(candidat)

  if (!candidat) {
    return <h1>Candidat non trouvé</h1>;
  }

  return (
    <>
      <h1 className="title-candidat">Fiche du candidat N°{candidat.id}</h1>

      <Card className="card" title={candidat.name} variant="borderless" >
        <h3 className="card-title">Nom Github</h3>
        <p className="card-description">{candidat.github}</p>
        <h3 className="card-title">Experiences</h3>
        <p className="card-description">{candidat.experience}</p>
        <h3 className="card-title">Motivations</h3>
        <p className="card-description">{candidat.motivation}</p>
      
      </Card>
      <Button href='/' style={{position: 'absolute', top: '0.5rem', left:'0.5rem'}}>Accueil</Button>
    </>
  );
}