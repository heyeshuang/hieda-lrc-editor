export function secondsToTime(secs) {
	var hours = Math.floor(secs / (60 * 60));

	var divisor_for_minutes = secs % (60 * 60);
	var minutes = Math.floor(divisor_for_minutes / 60);

	var divisor_for_seconds = divisor_for_minutes % 60;
	var seconds = Math.floor(divisor_for_seconds);
	var centiseconds = Math.ceil((secs-Math.floor(secs))*100);


	var time = "";

	if(hours > 0) {
		time += hours + ":";
	}

	time += timeUnitFormat(minutes) + ":";
	time += timeUnitFormat(seconds) + ".";
	time += timeUnitFormat(centiseconds);
	return time;
}

export function timeUnitFormat(time) {
	if (time < 1) {
		return "00";
	} else if (time < 10) {
		return "0" + time;
	} else {
		return time;
	}
}
