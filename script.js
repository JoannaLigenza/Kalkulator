document.addEventListener('DOMContentLoaded', function() {
	const digits = document.getElementsByClassName("digits");
	//console.log(digits[2].value);
	
	// Wyswietlanie cyfry w okienku wyniku
	for (i=0; i < digits.length; i++) { 
	let one_digit = digits[i]									// Pojedyncza cyfra
	one_digit.addEventListener("click", function(e){			// Klikajac na pojedynczy button z cyfra wywolaj funkcje
		let digit_value = e.target.closest(".digits").value;	// ktora sprawdzi wartosc kliknietego buttona z cyfra 
		if (document.getElementById("result").value == 0 && document.getElementById("result").value !== "0."){
			document.getElementById("result").value = digit_value;
			document.getElementById("display").value = digit_value;
		} else { 
		document.getElementById("result").value += digit_value;	// i wyswietli ja w okienku "result", dodajac nastepne cyfry
		document.getElementById("display").value += digit_value; }
		console.log(digit_value);
	})}
	
	// Dzialania
	
	const adding = document.getElementById("add");
	const subtraction = document.getElementById("substract");
	const equal = document.getElementById("equal");
	const multiplication = document.getElementById("multiply");
	const division = document.getElementById("division");
	const ac = document.getElementById("ac");
	const dot = document.getElementById("dot");
	let memory = "";
	let memory2 = "";
	let memory3 = "";
	let memory_operator = "";
	
	// Dodawanie
	
	adding.addEventListener("click", function(){
		memory_operator = document.getElementById("add").value		// pobieram znak dzialania i dodaje go do zmiennej memory_opertor
		memory = document.getElementById("result").value			// zmienna memory czyta wartosc z wynik2
		if (document.getElementById("result2").value == ""){ 		// jesli wartosc z wynik2 jest pusta, 
			document.getElementById("result2").value = memory; 		// to przypisz jej wartosc z memory, czyli pierwszego inputu - wartosc "przeskakuje" z pierwszego inputu do drugiego. Ale jesli w drugim inpucie wartosc nie jest pusta, czyli jest tam jakas liczba (wynik dzialania), to nie przeskakuje. Dzieki temu przy kliknieciu rowna sie pierwsza operacja ma dwie liczby do dodania, na kazda kolejna operacja jako druga wartosc ma wynik z poprzedniego dzialania (bo nie jest on zamieniany na wartosc z pierwszego inputu i nie przeskakuje, tylko zostaje).
			document.getElementById("display").value = memory; }	// wyswietlaczowi tez przypisz wartosc z pamieci
		else{
			let adding_button = parseFloat(document.getElementById("result2").value) + parseFloat(document.getElementById("result").value);
		document.getElementById("result2").value = adding_button; 	// jesli wartosc z wynik2 nie jest pusta to dodaj do niej wartosc odczytana z wynik1
		document.getElementById("display").value = adding_button; } 
		document.getElementById("result").value = 0;				// Ustaw pierwszy input na 0
		
		//console.log(result);
		console.log(memory_operator);
	})
	
	// Odejmowanie
	
	subtraction.addEventListener("click", function(){
		memory_operator = document.getElementById("substract").value
		memory = document.getElementById("result").value
		if (document.getElementById("result2").value == ""){ 
		document.getElementById("result2").value = memory; 
		document.getElementById("display").value = memory; }
		else{
			let subtraction_button = parseFloat(document.getElementById("result2").value) - parseFloat(document.getElementById("result").value);
		document.getElementById("result2").value = subtraction_button; 
		document.getElementById("display").value = subtraction_button;}
		document.getElementById("result").value = 0;

		console.log(memory_operator);
	})
	
	// Mnozenie
	
	multiplication.addEventListener("click", function(){
		memory_operator = document.getElementById("multiply").value
		memory = document.getElementById("result").value
		if (document.getElementById("result2").value == ""){ 											// jesli result2 jest puste to
		document.getElementById("result2").value = memory / memory;										// ustaw je na wartosc z memory (pobrana wczesniej z result) - to powoduje, ze przy pierwszym wpisaniu liczba mnozona jest przez siebie sama (bo wynika to z ponizszego zapisu else), dlatego tutaj dziele ja przez sama siebie
		document.getElementById("display").value = memory; }											// i wyswietl ta wartosc na wyswietlaczu
		if (document.getElementById("result").value == "0" && document.getElementById("result2").value != "0" && document.getElementById("result2").value != "") {
			let multiplication_button2 = parseFloat(document.getElementById("result2").value) * 1;		// przy powyzszym warunku, kiedy w result jest 0 nastepuje mnozenie przez 0, co daje nieprawidlowy wynik, dlatego najpierw trzeba przemnozyc liczbe przez 1, aby uzyskac w wyniku ta sama liczbe (dzieje sie tak w przypadku wcisniecia przycisku mnozenia zaraz po wcisnieciu przycisku rowna sie, kiedy chce sie pomnozyc otrzymany wynik)
		document.getElementById("result2").value = multiplication_button2; 
		document.getElementById("display").value = multiplication_button2;
		}
		else {
			let multiplication_button = parseFloat(document.getElementById("result2").value) * parseFloat(document.getElementById("result").value);
		document.getElementById("result2").value = multiplication_button; 
		document.getElementById("display").value = multiplication_button; }
		document.getElementById("result").value = 0;

		console.log(memory_operator);
	})
	
	// Dzielenie
	
	division.addEventListener("click", function(){
		memory_operator = document.getElementById("division").value
		memory = document.getElementById("result").value
		if (document.getElementById("result2").value == ""){ 
		document.getElementById("result2").value = memory * memory; 
		document.getElementById("display").value = memory; }
		if (document.getElementById("result").value == "0" && document.getElementById("result2").value != "0" && document.getElementById("result2").value != "") {
			let division_button2 = parseFloat(document.getElementById("result2").value) * 1;
		document.getElementById("result2").value = division_button2; 
		document.getElementById("display").value = division_button2;
		}
		else{
			let division_button = parseFloat(document.getElementById("result2").value) / parseFloat(document.getElementById("result").value);
		document.getElementById("result2").value = division_button;
		document.getElementById("display").value = division_button; }
		document.getElementById("result").value = 0;

		console.log(memory_operator);
	})
	
	// Wynik
	
	equal.addEventListener("click", function(result){
		console.log("=");
		 memory = document.getElementById("result").value;
		 memory2 = document.getElementById("result2").value;
		 		 
		 if (memory_operator == "+") {
		 result = parseFloat(memory2) + parseFloat(memory);
		 document.getElementById("result2").value = result;
		 document.getElementById("display").value = result;
		 console.log(result);
		 }
		 if (memory_operator == "-") { 
		 result = parseFloat(memory2) - parseFloat(memory);
		 document.getElementById("result2").value = result;
		 document.getElementById("display").value = result;
		 console.log(result);
		 }
		  if (memory_operator == "*") { 
		 result = parseFloat(memory2) * parseFloat(memory);
		 document.getElementById("result2").value = result;
		 document.getElementById("display").value = result;
		 console.log(result);
		 }
		 if (memory_operator == "/") { 
			if (parseFloat(document.getElementById("result").value) == 0) {
			document.getElementById("result2").value = "";
			document.getElementById("display").value = "error";
			return;
		}
		 result = parseFloat(memory2) / parseFloat(memory);
		 document.getElementById("result2").value = result;
		 document.getElementById("display").value = result;
		 console.log(result);
		 }
		 if (document.getElementById("result").value == 0) {
			 document.getElementById("result2").value = "";
		 }
		 document.getElementById("result").value = 0;
	})
	
	// AC button
	
	ac.addEventListener("click", function(){
		document.getElementById("result").value = 0;
		document.getElementById("result2").value = "";
		document.getElementById("display").value = 0;
	})
	
	// dot button
	
	dot.addEventListener("click", function(){
		document.getElementById("result").value += ".";
		document.getElementById("display").value += ".";
	})	
})