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



raiseTheBar.displayInfo = ()=>{
    //displaying data on the page
       

}


raiseTheBar.init = () => {
    //i call people into action
    raiseTheBar.getInfo();
    raiseTheBar.displayInfo();
}

raiseTheBar.init();

