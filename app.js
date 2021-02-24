const raiseTheBar = {};

raiseTheBar.apiUrl = `https://api.openbrewerydb.org/breweries?by_city=atlanta`;

// I think we are going to have to search by one of the parameters laid out in the API

raiseTheBar.getInfo = () => {
    //FETCH THE URL AND RETURN WITH JSON
    const url = new URL(raiseTheBar.apiUrl);

    url.search = new URLSearchParams({
        // by_state:`${userChoice}`
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
    // the following code puts the select element on the form element. 
    const formEl = document.querySelector('form');
    // const country = selectElement.value;
    // formEl.name = country;
    // console.log(formEl.name);
    
    addEventListener('submit', (event) => { 
        event.preventDefault();
        
        const selectElement = document.getElementById('country-name').selectedIndex;
        console.log(selectElement);
        // const userChoice = formEl.name;
        // console.log(userChoice);

        // raiseTheBar.getInfo(userChoice);
       
    })
}


raiseTheBar.init = () => {
    //i call people into action
    raiseTheBar.getInfo();
    raiseTheBar.getUserChoice();
}

raiseTheBar.init();

