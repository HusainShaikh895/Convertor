var meterInput = document.querySelector('#meter > input');
var centimeterInput = document.querySelector('#centimeter > input');
var inchInput = document.querySelector('#inch > input');
var kilometerInput = document.querySelector('#kilometer > input');

meterInput.addEventListener('input', function(){
	var meter = parseFloat(meterInput.value);
	var ccent = meter / 0.01;
	var cinch = meter * 39.37;
	var ckm = meter * 0.001;
	meter = meter * 100;
	meter = parseInt(meter);
	meter = meter/100;

	ccent = ccent * 100;
	ccent = parseInt(ccent);
	ccent = ccent/100;

	cinch = cinch * 100;
	cinch = parseInt(cinch);
	cinch = cinch/100;

	ckm = ckm * 100;
	ckm = parseInt(ckm);
	ckm = ckm/100;

	centimeterInput.value = ccent + " cm";
	inchInput.value = cinch + " inches";
	kilometerInput.value = ckm + " km";
});


centimeterInput.addEventListener('input', function(){
	var centimeter = parseFloat(centimeterInput.value);
	var cmeter = parseFloat(centimeter / 100);
	var cinch = cmeter * 39.37;
	var ckm = cmeter / 1000;

	cmeter = cmeter * 100;
	cmeter = parseInt(cmeter);
	cmeter = cmeter/100;

	centimeter = centimeter * 100;
	centimeter = parseInt(centimeter);
	centimeter = centimeter/100;

	cinch = cinch * 100;
	cinch = parseInt(cinch);
	cinch = cinch/100;

	ckm = ckm * 100;
	ckm = parseInt(ckm);
	ckm = ckm/100;
	
	meterInput.value = cmeter + " m";
	inchInput.value = cinch + " inches";
	kilometerInput.value = ckm + " km";
});

inchInput.addEventListener('input', function(){
	var inch = parseFloat(inchInput.value);
	var cmeter = inch / 39.37;
	var ccent = cmeter * 100;
	var ckm = cmeter * 0.001;
	cmeter = cmeter * 100;
	cmeter = parseInt(cmeter);
	cmeter = cmeter/100;

	ccent = ccent * 100;
	ccent = parseInt(ccent);
	ccent = ccent/100;

	inch = inch * 100;
	inch = parseInt(inch);
	inch = inch/100;

	ckm = ckm * 100;
	ckm = parseInt(ckm);
	ckm = ckm/100;
	centimeterInput.value = ccent + " cm";
	meterInput.value = cmeter + " m";
	kilometerInput.value = ckm + " km";
});

kilometerInput.addEventListener('input', function(){
	var km = parseFloat(kilometerInput.value);
	var cmeter = km * 1000;
	var ccent = cmeter * 100;
	var cinch = cmeter * 39.37;

	cmeter = cmeter * 100;
	cmeter = parseInt(cmeter);
	cmeter = cmeter/100;

	ccent = ccent * 100;
	ccent = parseInt(ccent);
	ccent = ccent/100;

	cinch = cinch * 100;
	cinch = parseInt(cinch);
	cinch = cinch/100;

	km = km * 100;
	km = parseInt(km);
	km = km/100;
	centimeterInput.value = ccent + " cm";
	meterInput.value = cmeter + " m";
	inchInput.value = cinch + " inch";
});
