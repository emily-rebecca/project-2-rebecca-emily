const raiseTheBar = {};

raiseTheBar.apiUrl = "https://api.openbrewerydb.org/breweries";

raiseTheBar.getInfo = () => {
    //FETCH THE URL AND RETURN WITH JSON
    const url = new URL(raiseTheBar.apiUrl);

    fetch(url)
        .then((response)=>{
            return response.json();
        })
        .then((jsonResponse) => {
            console.log(jsonResponse);
            raiseTheBar.displayInfo(jsonResponse);
            raiseTheBar.getUserChoice(jsonResponse);
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

        const countryName = bar.country;
        console.log(countryName);
        

        

        const searchResults = document.createElement('li');
        listContainer.appendChild(searchResults);
        searchResults.append(name, website);
    });

}

raiseTheBar.getUserChoice = (countryChoice) => {
    
    const formInJs = document.querySelector('form');
    console.log(formInJs, "submitted");
    
    addEventListener('submit', () => { 
        // event.preventDefault();
        
       
        





        // console.log(event);
    //    const userChoice = event.target.value;
    //     raiseTheBar.getInfo(userChoice);
        // console.log('it submitted');
        // const selectElement = document.querySelector('#country-name');
        // console.log(selectElement.value);
        //when a country in the dropdown is selected
        //find breweires with a value of that country
        //return a list of objects that match that query 
        // const countryProperty = raiseThebar.jsonResponse.country;
        // console.log(countryProperty);
        // console.log(countryChoice);

        // const countryProperty = countryChoice.country;
        

        
    })
}


raiseTheBar.init = () => {
    //i call people into action
    raiseTheBar.getInfo();
    raiseTheBar.getUserChoice();
}

raiseTheBar.init();

