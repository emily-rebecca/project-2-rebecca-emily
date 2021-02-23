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

        console.log(name, website);
        

        const searchResults = document.createElement('li');
        listContainer.appendChild(searchResults);
        searchResults.append(name, website);
    });

}


raiseTheBar.init = () => {
    //i call people into action
    raiseTheBar.getInfo();
}

raiseTheBar.init();

