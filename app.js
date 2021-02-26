const raiseTheBar = {};

raiseTheBar.apiUrl = `https://api.openbrewerydb.org/breweries?by_city=atlanta`;

// I think we are going to have to search by one of the parameters laid out in the API

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
            // console.log(jsonResponse);
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
        console.log(formEl.name);
        
        // const selectElement = document.getElementById('country-name').selectedIndex;
        // console.log(selectElement);

        const userChoice = formEl.name;

        raiseTheBar.getInfo(userChoice);
       
    })
}


raiseTheBar.init = () => {
    //i call people into action
    raiseTheBar.getInfo();
    raiseTheBar.getUserChoice();
    raiseTheBar.displayPuns();
}

raiseTheBar.init();

