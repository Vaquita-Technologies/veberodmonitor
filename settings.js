document.addEventListener('DOMContentLoaded', function () {
    var elems = document.querySelectorAll('select');
    var instances = M.FormSelect.init(elems, {});
});
$(document).ready(function () {
    if (!localStorage.stationid)
        localStorage.stationid = 10;
    if (!localStorage.param1)
        localStorage.param1 = "temperature";
    if (!localStorage.param2)
        localStorage.param2 = "ph";
    if (!localStorage.param3)
        localStorage.param3 = "oxygendissolved";
    if (!localStorage.param4)
        localStorage.param4 = "electricalconductivity";
    if (!localStorage.param5)
        localStorage.param5 = "bga";
    if (!localStorage.param6)
        localStorage.param6 = "turbidity";

    document.getElementById("sel_stationid").value = localStorage.stationid;
    document.getElementById("sel_param1").value = localStorage.param1;
    document.getElementById("sel_param2").value = localStorage.param2;
    document.getElementById("sel_param3").value = localStorage.param3;
    document.getElementById("sel_param4").value = localStorage.param4;
    document.getElementById("sel_param5").value = localStorage.param5;
    document.getElementById("sel_param6").value = localStorage.param6;

    document.getElementById("updatesettings").addEventListener("click", () => {
        localStorage.stationid = document.getElementById("sel_stationid").value;
        localStorage.param1 = document.getElementById("sel_param1").value;
        localStorage.param2 = document.getElementById("sel_param2").value;
        localStorage.param3 = document.getElementById("sel_param3").value;
        localStorage.param4 = document.getElementById("sel_param4").value;
        localStorage.param5 = document.getElementById("sel_param5").value;
        localStorage.param6 = document.getElementById("sel_param6").value;

    });

});


