//Adag Számolása
function Output() {

    var inputNum = Number(document.getElementById('szam').value);
    //var liszt = Number(inputNum * 0.2);
    const liszt = 0.2;
    const porCukor = 5;
    const szódabikarbóna = 0.5;
    const keverék = 2.3;
    const margarin = 5;
    const méz = 5;
    const tojás = 5;
    const fehérje = 5;
    const porcukor = 5;

    document.getElementById("liszt").innerHTML = (inputNum * liszt).toFixed(2) + ' <b>kg liszt</b>';
    document.getElementById("cukor").innerHTML = (inputNum * porCukor).toFixed(2) + '<b>dkg porcukor</b>';
    document.getElementById("szódabikarbóna").innerHTML = (inputNum * szódabikarbóna).toFixed(2) + '<b> teáskanál</b>';
    document.getElementById("keverék").innerHTML = (inputNum * keverék).toFixed(2) + '<b> mézeskalács fűszerkeverék</b>';
    document.getElementById("margarin").innerHTML = (inputNum * margarin).toFixed(2) + '<b> dkg margarin</b>';
    document.getElementById("méz").innerHTML = (inputNum * méz).toFixed(2) + '<b> ml méz</b>';
    document.getElementById("tojás").innerHTML = (inputNum * tojás).toFixed(2) + '<b> db tojás</b>';
    document.getElementById("fehérje").innerHTML = (inputNum * fehérje).toFixed(2) + '<b> db tojásfehérje</b>';
    document.getElementById("porcukor").innerHTML = (inputNum * porcukor).toFixed(2) + '<b> dkg porcukor</b>';

}

//Összeadás
function add1() {
    var inputNum = Number(document.getElementById('szam').value);
    if (inputNum >= 10) {
        return 10;
    }
    var add = Number(inputNum + 1)

    Number(document.getElementById("szam").value = add);
}

//Kivonás
function sub1() {
    var inputNum = Number(document.getElementById('szam').value);
    if (inputNum < 1) {
        return 0;
    }
    var sub = Number(inputNum - 1)

    Number(document.getElementById("szam").value = sub);
}