import { Button } from "antd";
import Link from "next/link";
import { candidats } from "../candidatsList";


export default async function CandidatsPage() {

    return(
    <div>
    <h1 style={{textAlign:'center'}}>Liste des candidats</h1>
    <Button href='/' style={{position: 'absolute', top: '0.5rem', left:'0.5rem'}}>Accueil</Button>
    {candidats.map((candidat)=>{
      return <Link  href={`/candidat/${candidat.id}`} key={candidat.id} style={{fontWeight:'bold', margin: '1rem 0.5rem', display:'flex', justifyContent:'center'}}>{candidat.name}</Link>
      })}
    </div>

    )
  }