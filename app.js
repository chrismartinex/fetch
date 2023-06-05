let info1 = document.getElementById("info1");
let info2 = document.getElementById("info2");
let info3 = document.getElementById("info3");


let pokeapi;
let asyncPokeApi

async function AsyncGetData() {
    const promise = await fetch("https://pokeapi.co/api/v2/pokemon/snorlax/");
    const data = await promise.json();

    asyncPokeApi = data;

    console.log(asyncPokeApi);
    console.log(asyncPokeApi.abilities[1].ability);

    console.log(asyncPokeApi.moves[9].move.name)

    info1.innerHTML = asyncPokeApi.name
    info2.innerHTML = asyncPokeApi.moves[9].move.name
    info3.innerHTML = asyncPokeApi.moves[83].move.name

}


AsyncGetData()



         // function GetData() {
        //     fetch("https://pokeapi.co/api/v2/pokemon/snorlax/").then(
        //         response =>response.json()
        //     ).then(
        //         data => console.log(data)
        //     )
        // }
        // GetData()


        //async functions able to run whenever its needed, with out resetting our needing all the code
