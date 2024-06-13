

//Create input field and search button:
let division = document.createElement('div')
division.innerHTML= `<input type = "text" id="txt">
<button type="button" onclick="breweries()">Search</button>`;
division.setAttribute('id','count')
document.body.append(division);



 async function breweries(){

    try{

        let brewery = document.getElementById("txt").value
        console.log(brewery);

        let result = await fetch(`https://api.openbrewerydb.org/breweries ${brewery}`)

        let output = await result.json();

         console.log( output);

         for(let i=0; i<output.length; i++){
                        console.log(output);
                        console.log(output[i].name);
                       console.log(output[i].brewery_type);
                        console.log(output[i].address_2);
                        console.log(output[i].address_3);
                        console.log(output[i].website_url);
                       console.log(output[i].phone);
                       }
                    }

    catch(err){
                console.log("some error occured" + err)
             }
}
breweries();

