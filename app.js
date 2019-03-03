function note()
{
	alert("Please Enter the value in the field for which you have the value. If it shows NaN then Click Reset and Continue.");
}


var meterInput = document.querySelector('#meter > input');
var centimeterInput = document.querySelector('#centimeter > input');
var inchInput = document.querySelector('#inch > input');
var kilometerInput = document.querySelector('#kilometer > input');
var footInput = document.querySelector('#foot > input');

meterInput.addEventListener('input', function(){
	var meter = parseFloat(meterInput.value);
	var ccent = meter / 0.01;
	var cinch = meter * 39.37;
	var ckm = meter * 0.001;
	var cfoot = meter * 3.28;
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

	cfoot = cfoot * 100;
	cfoot = parseInt(cfoot);
	cfoot = cfoot/100;

	centimeterInput.value = ccent + " cm";
	inchInput.value = cinch + " inches";
	kilometerInput.value = ckm + " km";
	footInput.value = cfoot + " feet";
});


centimeterInput.addEventListener('input', function(){
	var centimeter = parseFloat(centimeterInput.value);
	var cmeter = parseFloat(centimeter / 100);
	var cinch = cmeter * 39.37;
	var ckm = cmeter / 1000;
	var cfoot = cmeter * 3.28;

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

	cfoot = cfoot * 100;
	cfoot = parseInt(cfoot);
	cfoot = cfoot/100;
	
	meterInput.value = cmeter + " m";
	inchInput.value = cinch + " inches";
	kilometerInput.value = ckm + " km";
	footInput.value = cfoot + " feet";
});

inchInput.addEventListener('input', function(){
	var inch = parseFloat(inchInput.value);
	var cmeter = inch / 39.37;
	var ccent = cmeter * 100;
	var ckm = cmeter * 0.001;
	var cfoot = cmeter * 3.28;

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

	cfoot = cfoot * 100;
	cfoot = parseInt(cfoot);
	cfoot = cfoot/100;

	centimeterInput.value = ccent + " cm";
	meterInput.value = cmeter + " m";
	kilometerInput.value = ckm + " km";
	footInput.value = cfoot + " feet";
});

kilometerInput.addEventListener('input', function(){
	if(km=="NaN km")
	{
		kilometerInput.value = "";
	}
	var km = parseFloat(kilometerInput.value);
	var cmeter = km * 1000;
	var ccent = cmeter * 100;
	var cinch = cmeter * 39.37;
	var cfoot = cmeter * 3.28;

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

	cfoot = cfoot * 100;
	cfoot = parseInt(cfoot);
	cfoot = cfoot/100;

	centimeterInput.value = ccent + " cm";
	meterInput.value = cmeter + " m";
	inchInput.value = cinch + " inch";
	footInput.value = cfoot + " feet";
});


footInput.addEventListener('input', function(){
	var foot = parseFloat(footInput.value);
	var cmeter = foot / 3.28;
	var ccent = cmeter * 100;
	var cinch = cmeter * 39.37;
	var km = cmeter /1000;

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
	kilometerInput.value = km + " km";

});
