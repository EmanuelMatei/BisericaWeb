let calendarDiv = document.getElementById("calendar");

//let calendarioDiv = document.getElementById("calendario");


function getOggi() {
    const oggi = new Date();
    const giorno = oggi.getDate().toString().padStart(2, "0");
    let mese = (oggi.getMonth() + 1);
    console.log(mese)
    switch (mese) {
        case 1:
            mese = "Jan"
            break;
        case 2:
            mese = "Feb"
            break;
        case 3:
            mese = "Mar"
            break;
        case 4:
            mese = "Apr"
            break;
        case 5:
            mese = "Mai"
            break;
        case 6:
            mese = "Iun"
            break;
        case 7:
            mese = "Iul"
            break;
        case 8:
            mese = "Aug"
            break;
        case 9:
            mese = "Sep"
            break;
        case 10:
            mese = "Oct"
            break;
        case 11:
            mese = "Nov"
            break;
        case 12:
            mese = "Dec"
            break;

    }

    return `${giorno} ${mese}`;
}


//calendarioDiv.innerText += getOggi();

calendarDiv.innerText += getOggi();

/*calendarioDiv.addEventListener("click", function () {
    window.location.href = "https://starchanges.fr/calendarul-zilei-doxologia";
});*/
let linkDiv = document.getElementById("linkDiv");
linkDiv.addEventListener("click", function () {
    window.location.href = "https://starchanges.fr/calendarul-zilei-doxologia";
});