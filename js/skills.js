technicalButton.disabled = false;
function showTechnical() {
    $("#softSkills").hide("slow");
    $("#technical").show("slow");
    toggleButtons("technicalButton", "softSkillsButton");
}
function showSoftSkills() {
    $("#technical").hide("slow");
    $("#softSkills").show("slow");
    if (getElement("softSkills").classList.contains('hide-at-first')) {
        getElement("softSkills").classList.remove("hide-at-first");
    }
    toggleButtons("softSkillsButton", "technicalButton");
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
