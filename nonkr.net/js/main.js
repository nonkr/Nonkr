(function () {
	clock();
	setInterval(clock, 1000);
})();

function clock() {
	var now = new Date(),
		hour = now.getHours(),
		min = now.getMinutes(),
		sec = now.getSeconds(),
		hourAngle = hour * Math.PI / 12 - Math.PI / 2,
		minAngle = min * Math.PI / 30 - Math.PI / 2,
		secAngle = sec * Math.PI / 30 - Math.PI / 2;
	$("hour_text").innerHTML = hour;
	$("min_text").innerHTML = min;
	$("sec_text").innerHTML = sec;
	
	var ctx = $("hour").getContext("2d");
	ctx.clearRect(0,0,115,115);
	ctx.strokeStyle = "rgb(255,136,17)";
	ctx.lineWidth = 10;
	ctx.beginPath();
    ctx.arc(75,75,35,-Math.PI/2,hourAngle,false);
	ctx.stroke();
	
	ctx = $("min").getContext("2d");
	ctx.clearRect(0,0,115,115);
	ctx.strokeStyle = "rgb(49,152,202)";
	ctx.lineWidth = 10;
	ctx.beginPath();
    ctx.arc(75,75,35,-Math.PI/2,minAngle,false);
	ctx.stroke();
	
	ctx = $("sec").getContext("2d");
	ctx.clearRect(0,0,115,115);
	ctx.strokeStyle = "rgb(148,214,37)";
	ctx.lineWidth = 10;
	ctx.beginPath();
    ctx.arc(75,75,35,-Math.PI/2,secAngle,false);
	ctx.stroke();
}