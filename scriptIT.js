let calendarioDiv = document.getElementById("calendario");



function getOggi() {
    const oggi = new Date();
    const giorno = oggi.getDate().toString().padStart(2, "0");
    let mese = (oggi.getMonth() + 1);
    console.log(mese)
    switch (mese) {
        case 1:
            mese = "Gen"
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
            mese = "Mag"
            break;
        case 6:
            mese = "Giu"
            break;
        case 7:
            mese = "Lug"
            break;
        case 8:
            mese = "Ago"
            break;
        case 9:
            mese = "Set"
            break;
        case 10:
            mese = "Ott"
            break;
        case 11:
            mese = "Nov"
            break;
        case 12:
            mese = "Dic"
            break;

    }

    return `${giorno} ${mese}`;
}




calendarioDiv.innerText += getOggi();


let linkDiv = document.getElementById("linkDiv");
linkDiv.addEventListener("click", function () {
    window.location.href = "https://starchanges.fr/calendarul-zilei-doxologia";
});

function toggleCollapse() {
    var content = document.getElementById("collapseContent");
    if (content.style.display === "block") {
        content.style.display = "none";
    } else {
        content.style.display = "block";
    }
};