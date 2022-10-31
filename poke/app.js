const Pokeapi=async ()=>{

    const respuesta= await fetch("https://pokeapi.co/api/v2/pokemon")
    const json=await respuesta.json();
    console.log(json)
    var divResults= document.querySelector("#Resultado");

    json.map(poke=>{
        let divpokes=document.createElement("div");
        divpokes.className="poke"
        divpokes.innerHTML=`
        <p><b> Nombre </b> ${poke.name}</p>
        `;
        divResults.appendChild(divpokes);
            });
        }



