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
        
        const name = document.createElement('h3');
        name.innerText = bar.name;

        const breweryType = document.createElement('p');
        breweryType.innerText = `${bar.brewery_type} brewery`

        const street = document.createElement('p')
        street.innerText = bar.street;


        const city = bar.city;
        const state = bar.state;
        const address = document.createElement('p');
        address.innerText = `${city}, ${state}`
        
        const website = document.createElement('a');
        website.target = '_blank';
        website.title = 'go to brewery website'
        website.href = bar.website_url;
        website.innerText = "Here's the link!";
        
        const searchResults = document.createElement('li');
        listContainer.appendChild(searchResults);
        searchResults.append(name,breweryType,street,address,website);


    });

        


        


}


raiseTheBar.getUserChoice = () => {
    
    addEventListener('submit', (event) => { 
        event.preventDefault();
        // the following code puts the select element on the form element. 
        const formEl = document.querySelector('form');
        const selectElement = document.getElementById('state-name');
        const country = selectElement.value;
        formEl.name = country;
        
        const userChoice = formEl.name;
        raiseTheBar.getInfo(userChoice);


        // Alternative logic written by Rebecca
        // const selectElement = document.getElementById('country-name').selectedIndex;
        // const allOptionsFromSelector = document.getElementById('country-name').options;
        // const selectedOption = allOptionsFromSelector[selectElement];

        // raiseTheBar.getInfo(selectedOption.value);
    })
}


raiseTheBar.init = () => {
    raiseTheBar.getInfo();
    raiseTheBar.getUserChoice();
    raiseTheBar.displayPuns();
}

raiseTheBar.init();

