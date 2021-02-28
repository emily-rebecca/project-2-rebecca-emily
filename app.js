const raiseTheBar = {};

raiseTheBar.apiUrl = `https://api.openbrewerydb.org/breweries?`;


raiseTheBar.getInfo = (query = raiseTheBar.apiUrl) => {
    //FETCH THE URL AND RETURN WITH JSON
    const url = new URL(raiseTheBar.apiUrl);

    url.search = new URLSearchParams({
        by_state:query
    })

    fetch(url)
        .then((response)=>{
            
            return response.json();
        })
        .then((jsonResponse) => {            
            raiseTheBar.displayInfo(jsonResponse);
            
        })

}

raiseTheBar.displayPuns = () => {
    const puns= ['Love is Ale we need', `don't worry be hoppy`, `if you are hoppy and you know it drink craft`, `life is brewtiful`, 'Here’s some suds to be your buds', 'Wheat love for you to try our brewery app ', 'Beer witness to our Stella app','we are hoptimistic that you will find another round of pubs','this is a shandy app for whatever ales you'];

    function getRandomPun() {
    const punMath = Math.floor(Math.random() * puns.length);
    return puns[punMath];
    } 

    const h2El = document.querySelector('h2');
    h2El.innerHTML = getRandomPun();
}

raiseTheBar.displayInfo = (breweryList)=>{
    //displaying data on the page
    const listContainer = document.querySelector('ul');
    listContainer.innerHTML = ' ';

    breweryList.forEach((bar) => {
        // console.log(bar.name);
        const name = document.createElement('h3');
        name.innerText = bar.name;

        const website = document.createElement('a');
           // artContainer.href = artPiece.link;
        website.href = bar.website_url;

        website.innerText = "Here's the link!";

        

        const searchResults = document.createElement('li');
        listContainer.appendChild(searchResults);
        searchResults.append(name, website);


    });

}

raiseTheBar.getUserChoice = (event) => {
    
    addEventListener('submit', (event) => { 
        event.preventDefault();
        // the following code puts the select element on the form element. 
        const formEl = document.querySelector('form');
        const selectElement = document.getElementById('country-name');
        const country = selectElement.value;
        formEl.name = country;
        // console.log(formEl.name);
        
        const userChoice = formEl.name;
        raiseTheBar.getInfo(userChoice);


        // const selectElement = document.getElementById('country-name').selectedIndex;
        // const allOptionsFromSelector = document.getElementById('country-name').options;
        // const selectedOption = allOptionsFromSelector[selectElement];

        // raiseTheBar.getInfo(selectedOption.value);
    })
}

// //NEW SEARCH PARAMS EXPERIMENT************************************

const raiseTheBar2 = {};

raiseTheBar2.baseUrl = "https://api.openbrewerydb.org/breweries?";

//2.get the info about cities
raiseTheBar2.getCityInfo = (query)=>{
    // console.log("getting cities");
    const url = new URL (`${raiseTheBar2.baseUrl}by_city`);

    fetch(url)
    .then((response)=>{
        return response.json();
    })
    .then((jsonResponse) => {
        raiseTheBar2.displayCityBarInfo(jsonResponse);

        // raiseTheBar2.getUserCityChoice(jsonResponse.Object);
    })
}
raiseTheBar2.displayCityBarInfo = (dataFromApi)=>{
    console.log(dataFromApi);


    // const listContainer = document.querySelector('ul');
    // listContainer.innerHTML = ' ';

//     dataFromApi.forEach((bar) => {
//         const name = document.createElement('h3');
//         name.innerText = bar.name;

//         const website = document.createElement('a');
//            // artContainer.href = artPiece.link;
//         website.href = bar.website_url;

//         website.innerText = "Here's the link!";

//         const searchResults = document.createElement('li');
//         listContainer.appendChild(searchResults);
//         searchResults.append(name, website);
// });
}

raiseTheBar2.getUserCityChoice = (dataFromApi) => {
    addEventListener('submit', (event) => { 
        event.preventDefault();
        console.log(dataFromApi);
        

        // the following code puts the select element on the form element. 
        const inputEl = document.querySelector('input');
        
        const selectElement = document.getElementById('city-search');

        const city = selectElement.value;
        console.log(city);

        const userChoiceCity = dataFromApi.target.value;
        
        raiseTheBar2.getUserCityChoice(userChoiceCity);
        


        // const country = selectElement.value;
        // formEl.name = country;
        // console.log(formEl.name);
        
        // const userChoice = formEl.name;
        // raiseTheBar.getInfo(userChoice);

    });
}


raiseTheBar2.init = () => {
    raiseTheBar2.getCityInfo();
    raiseTheBar2.displayCityBarInfo();
    raiseTheBar2.getUserCityChoice();
}

raiseTheBar2.init();





// raiseTheBar.getCityInfo = (query= raiseTheBar.apiUrl) => {
//     const cityUrl = new URL(raiseTheBar.apiUrl);

//     cityUrl.search = new URLSearchParams({
//         by_city: query
//     })
//     fetch(cityUrl)
//     .then((response)=>{
//         return response.json();
//     })
//     .then((jsonResponse) => {
//         console.log(jsonResponse);
//         // raiseTheBar.displayCityInfo(jsonResponse);
//     })
// }


// raiseTheBar.displayCityInfo = (breweryListByCity)=>{

//     const listContainer = document.querySelector('ul');
//     listContainer.innerHTML = ' ';

//     breweryListByCity.forEach((bar) => {
//         const name = document.createElement('h3');
//         name.innerText = bar.name;

//         const website = document.createElement('a');
//            // artContainer.href = artPiece.link;
//         website.href = bar.website_url;

//         website.innerText = "Here's the link!";

        

//         const searchResults = document.createElement('li');
//         listContainer.appendChild(searchResults);
//         searchResults.append(name, website);
//     });
// }

// raiseTheBar.getUserCityChoice = (event) => {

//     addEventListener('submit', (event) => { 
//         event.preventDefault();
//         // the following code puts the select element on the form element. 
//         const inputEl = document.querySelector('input');
//         const inputByUser = inputEl.value;
//         console.log(inputByUser);

//         // const possibleCity = inputEl
        
        
        


//         // const country = selectElement.value;
//         // formEl.name = country;
//         // console.log(formEl.name);
        
//         // const userChoice = formEl.name;
//         // raiseTheBar.getInfo(userChoice);

//     })
// }

raiseTheBar.init = () => {
    //i call people into action
    raiseTheBar.getInfo();
    raiseTheBar.getUserChoice();
    raiseTheBar.displayPuns();
}


raiseTheBar.init();

