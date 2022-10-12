
var divResults= document.querySelector("#Resultado");
const verUsers= async ()=>{

    const respuesta= await fetch("https://api.breakingbadquotes.xyz/v1/quotes")
    const json=await respuesta.json();
    console.log(json)
    var sector2=0;
    json(proti=>{
        if(sector2==1){ return;}
let divUser=document.createElement("div");
divUser.className="proti"
divUser.innerHTML=`
<p><b> Frase </b> ${proti.quote}</p>
<p><b> Frase </b> ${proti.author}</p>
`;
divResults.appendChild(divUser);
    });
}