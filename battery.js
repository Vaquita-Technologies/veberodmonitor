function updateBatteryDisplay(battery_level) {
	var level = battery_level * 100;
	level = level.toFixed(0);
	var batteryLevel = jQuery('.battery .battery-level');
	batteryLevel.css('width', level + '%');
	batteryLevel.text(level + '%');
    if (level > 50) {  
	    batteryLevel.addClass('high');  
	    batteryLevel.removeClass('charging');
	    batteryLevel.removeClass('medium');  
	    batteryLevel.removeClass('low');  
	} else if (level >= 25 ) {  
	    batteryLevel.addClass('medium');  
	    batteryLevel.removeClass('charging');
	    batteryLevel.removeClass('high');  
	    batteryLevel.removeClass('low');  
	} else {  
	    batteryLevel.addClass('low');  
	    batteryLevel.removeClass('charging');
	    batteryLevel.removeClass('high');  
	    batteryLevel.removeClass('medium');  
	}
}



