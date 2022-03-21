$(document).ready(function () {   
    
    localStorage.stationid = 21;

    if (!localStorage.stationid)
        localStorage.stationid = 21;

        localStorage.param0 = "batterylevel";
        localStorage.param1 = "temperature";
        localStorage.param2 = "ph";
        localStorage.param3 = "electricalconductivity";
        localStorage.param4 = "turbidity";
        localStorage.param5 = "oxygendissolved";
        localStorage.param6 = "bga";

        if (!localStorage.param0)
        localStorage.param0 = "batterylevel";
    if (!localStorage.param1)
        localStorage.param1 = "temperature";
    if (!localStorage.param2)
        localStorage.param2 = "ph";
    if (!localStorage.param3)
        localStorage.param3 = "electricalconductivity";
    if (!localStorage.param4)
        localStorage.param4 = "turbidity";
    if (!localStorage.param5)
        localStorage.param5 = "oxygendissolved";
    if (!localStorage.param6)
        localStorage.param6 = "bga";
    
    var chartText ="<i class='material-icons tooltipped right' data-position='bottom' data-tooltip='Click to see trends!' style='font-size: 20px;margin-right:5px;margin-top:2px;color: #F5AD45;'>insert_chart</i>";

    $("#lb_param1").html(nameMapping[localStorage.param1]+chartText);
    $("#lb_param2").html(nameMapping[localStorage.param2]+chartText);
    $("#lb_param3").html(nameMapping[localStorage.param3]+chartText);
    $("#lb_param4").html(nameMapping[localStorage.param4]+chartText);
    $("#lb_param5").html(nameMapping[localStorage.param5]+chartText);
    $("#lb_param6").html(nameMapping[localStorage.param6]+chartText);

    // document.getElementById("span_resetall").addEventListener("click", () => {
    //     localStorage.clear();
    //     location.reload();
    // },false);
    

    document.getElementById("a_param0").addEventListener("click", () => {
        localStorage.selectedparam = localStorage.param0;
    },false);

    document.getElementById("a_param1").addEventListener("click", () => {
        localStorage.selectedparam = localStorage.param1;
    },false);

    document.getElementById("a_param2").addEventListener("click", () => {
        localStorage.selectedparam = localStorage.param2;
    },false);

    document.getElementById("a_param3").addEventListener("click", () => {
        localStorage.selectedparam = localStorage.param3;
    },false);

    document.getElementById("a_param4").addEventListener("click", () => {
        localStorage.selectedparam = localStorage.param4;
    },false);

    document.getElementById("a_param5").addEventListener("click", () => {
        localStorage.selectedparam = localStorage.param5;
    },false);

    document.getElementById("a_param6").addEventListener("click", () => {
        localStorage.selectedparam = localStorage.param6;
    },false);
    
    updateBatteryDisplay(0.5);

    updateTelemetry();
    // $(".spincontainer").css("cssText", "display: none;");            
    // $(".batterycontainer").css("cssText", "display:block;");
    // $(".telemetrycontainer").css("cssText", "display:block;");
    // $(".lastlogcontainer").css("cssText", "display:block;");

    var elems = document.querySelectorAll('.tooltipped');
    var instances = M.Tooltip.init(elems, {});

  

});


function updateTelemetry(){
    var url ="https://europe-west3-vaquita-technologies.cloudfunctions.net/veberodpilottelemetry?stationid="+ localStorage.stationid + "&maxlimit=1";    
    $.ajax({url:url,
        success:function(data,status,xhr){

            $(".spincontainer").css("cssText", "display: block;");            
            $(".batterycontainer").css("cssText", "display:none;");
            $(".telemetrycontainer").css("cssText", "display:none;");
            $(".lastlogcontainer").css("cssText", "display:none;");

            $('#sp_statid').html("Station ID <span class='stationidcontainer badge black-text' style='background-color:#F5AD45'>"+"va-21"+"</span>");

            var res = JSON.parse(data);
            if(res.length==0){
                alert("No data available");
                $(".spincontainer").css("cssText", "display: none;");
                return;
            }                   
            var d = new Date(res[0].LoggedAt);                     
            $('#valLL').html(d.toLocaleString());
            
            $('#val_param1').html(GetTelemetryValue(res[0],localStorage.param1));
            $('#val_param2').html(GetTelemetryValue(res[0],localStorage.param2));
            $('#val_param3').html(GetTelemetryValue(res[0],localStorage.param3));
            $('#val_param4').html(GetTelemetryValue(res[0],localStorage.param4));
            $('#val_param5').html(GetTelemetryValue(res[0],localStorage.param5));
            $('#val_param6').html(GetTelemetryValue(res[0],localStorage.param6));     
            
            
            $('#unit_param1').html(unitMapping[localStorage.param1]);
            $('#unit_param2').html(unitMapping[localStorage.param2]);
            $('#unit_param3').html(unitMapping[localStorage.param3]);
            $('#unit_param4').html(unitMapping[localStorage.param4]);
            $('#unit_param5').html(unitMapping[localStorage.param5]);
            $('#unit_param6').html(unitMapping[localStorage.param6]);

            
            var blevel =res[0].BatteryLevel;
            updateBatteryDisplay(blevel.toFixed(2));
            
            $(".spincontainer").css("cssText", "display: none;");            
            $(".batterycontainer").css("cssText", "display:block;");
            $(".telemetrycontainer").css("cssText", "display:block;");
            $(".lastlogcontainer").css("cssText", "display:block;");

        },
        error:function(jqXhr, textStatus, errorMessage){
            alert('Cannot access server!')
        }
    });
}
function convertUTCDateToLocalDate(date) {
    var newDate = new Date(date);
    newDate.setMinutes(date.getMinutes() - date.getTimezoneOffset());
    return newDate;
}
(function(d, s, id) {
    if (d.getElementById(id)) {
        if (window.__TOMORROW__) {
            window.__TOMORROW__.renderWidget();
        }
        return;
    }
    const fjs = d.getElementsByTagName(s)[0];
    const js = d.createElement(s);
    js.id = id;
    js.src = "https://www.tomorrow.io/v1/widget/sdk/sdk.bundle.min.js";

    fjs.parentNode.insertBefore(js, fjs);
})(document, 'script', 'tomorrow-sdk');