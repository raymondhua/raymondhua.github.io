function showTechnical() {
    $("#general").hide("slow");
    $("#technical").show("slow");
    if (getElement("technical").classList.contains('hide-at-first')) {
        getElement("technical").classList.remove("hide-at-first");
    }
    toggleButtons("technicalButton", "generalButton");
}
function showGeneral() {
    $("#technical").hide("slow");
    $("#general").show("slow");
    toggleButtons("generalButton", "technicalButton");
}
function toggleButtons(active, disactive){
    var activeButton = getElement(active);
    var disactiveButton = getElement(disactive);
    activeButton.disabled = true;
    activeButton.classList.add("--active");
    disactiveButton.disabled = false;
    disactiveButton.classList.remove("--active");
}
function getElement(string){
    return document.getElementById(string);
}
function getButton(string){
    return string + "Button";
}
