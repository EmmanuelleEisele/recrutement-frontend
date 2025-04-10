
interface ICandidats{
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
}

export default async function CandidatsPage() {
  const res= await fetch('https://reqres.in/api/users');
  const response = await res.json();
  console.log(response)
    return(
    <div>
    <h1 style={{textAlign:'center'}}>Liste des candidats</h1>

    {response.data.map((d: ICandidats)=>{
      return <p key={d.id} style={{fontWeight:'bold', textAlign:'center'}}>{d.first_name}</p>
      })}
    </div>

    )
  }