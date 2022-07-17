const result = document.getElementById('result');

function keyPressed(num) {
 	let number = result.value;
    result.value = number + num;
    enableOperators()
}

function operatorPressed(num) {
	if (result.value == '') {

	} else {
		keyPressed(num)
	}
	disabledOperators()
}

function calc() {
	if(result.value != ''){
        let calc = result.value;
        result.value = eval(calc)
    } else {
    	reset()
    }
}

function reset(){
    result.value = '';
}

function del(){
	let del = result.value;
    result.value = del.substring(0, del.length - 1);
}

function disabledOperators() {
	btnSum.disabled = true;
	btnSub.disabled = true;
	btnDiv.disabled = true;
	btnMul.disabled = true;
	btnDecimal.disabled = true;
}

function enableOperators() {
	btnSum.disabled = false;
	btnSub.disabled = false;
	btnDiv.disabled = false;
	btnMul.disabled = false;
	btnDecimal.disabled = false;
}