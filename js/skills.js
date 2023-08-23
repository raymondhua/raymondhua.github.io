function showTechnical() {
    $("#general").hide("slow");
    $("#tools").hide("slow");
    $("#technical").show("slow");
    if (getElement("technical").classList.contains('hide-at-first')) {
        getElement("technical").classList.remove("hide-at-first");
    }
    const disableButtons = ["generalButton", "toolsButton"];
    toggleButtons("technicalButton", disableButtons);
}
function showTools() {
    $("#general").hide("slow");
    $("#technical").hide("slow");
    $("#tools").show("slow");
    if (getElement("tools").classList.contains('hide-at-first')) {
        getElement("tools").classList.remove("hide-at-first");
    }
    const disableButtons = ["generalButton", "technicalButton"];
    toggleButtons("toolsButton", disableButtons);
}
function showGeneral() {
    $("#tools").hide("slow");
    $("#technical").hide("slow");
    $("#general").show("slow");
    const disableButtons = ["toolsButton", "technicalButton"];
    toggleButtons("generalButton", disableButtons);
}
function toggleButtons(active, disactive){
    var activeButton = getElement(active);
    var disactiveButton;
    activeButton.disabled = true;
    activeButton.classList.add("--active");
    for (let i = 0, len = disactive.length; i < len; i++) {
        disactiveButton = getElement(disactive[i]);
        disactiveButton.disabled = false;
        disactiveButton.classList.remove("--active");
    }
}
function getElement(string){
    return document.getElementById(string);
}
function getButton(string){
    return string + "Button";
}
