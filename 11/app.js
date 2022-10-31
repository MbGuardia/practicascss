const verUsers= async ()=>{

    const respuesta= await fetch("https://api.breakingbadquotes.xyz/v1/quotes")
    const json=await respuesta.json();
    var sector2=frase[0];

let divFrase=document.querySelector("#frase");
divUser.innerHTML=`
<p><b> Frase </b> ${sector2.quote}</p>
<p><b> Frase </b> ${sector2.author}</p>
`;
    };






