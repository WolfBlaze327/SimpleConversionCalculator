function Kilogram()
{
	var iweight = parseFloat(document.getElementById('iweight').value);

	document.getElementById('rweight').value = iweight/1000 + " kg"
}

function Pound()
{
	var iweight = parseFloat(document.getElementById('iweight').value);

	document.getElementById('rweight').value = iweight*0.0022 + " lbs"
}

function Ounces()
{
	var iweight = parseFloat(document.getElementById('iweight').value);

	document.getElementById('rweight').value = iweight*0.035274 + " oz"
}




function Inch()
{
	var ilength = parseFloat(document.getElementById('ilength').value);

	document.getElementById('rlength').value = ilength*0.393701 + " in"
}
function Feet()
{
	var ilength = parseFloat(document.getElementById('ilength').value);

	document.getElementById('rlength').value = ilength*0.0328 + " ft"
}
function Meter()
{
	var ilength = parseFloat(document.getElementById('ilength').value);

	document.getElementById('rlength').value = ilength*0.01 + " m"
}




function Milisecond()
{
	var itime = parseFloat(document.getElementById('itime').value);

	document.getElementById('rtime').value = itime*60000 + " ms"
}
function Second()
{
	var itime = parseFloat(document.getElementById('itime').value);

	document.getElementById('rtime').value = itime*60 + " sec"
}
function Hours()
{
	var itime = parseFloat(document.getElementById('itime').value);

	document.getElementById('rtime').value = itime/60 + " hr"
}




function Fahrenheit()
{
	var itemp = parseFloat(document.getElementById('itemp').value);

	document.getElementById('rtemp').value = (itemp*1.8)+32 + "°F";
}
function Kelvin()
{
	var itemp = parseFloat(document.getElementById('itemp').value);

	document.getElementById('rtemp').value = itemp+273 + "K"
}