interface ICandidats{
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
}

export default async function CandidatsPage() {
    const res= await fetch('https://reqres.in/api/users');
    const data: ICandidats = await res.json();

    return(
    <div>
    <h1>Liste des candidats</h1>
  
      <p>{data.first_name} {data.last_name}</p>
   
    </div>

    )
  }