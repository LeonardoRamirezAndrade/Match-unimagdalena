const typed = new Typed('.typed', {
    strings: [
        '<i>Match-unimagdalena chess ♛!</i>',
        '<i>Leonardo Ramírez vs Carlos Nuñez</i>',
        '<i>Marcador actual: 1/2 - 1/2</i>'],
    
	stringsElement: '#cadenas-texto', // ID del elemento que contiene cadenas de texto a mostrar.
	typeSpeed: 69, // Velocidad en mlisegundos para poner una letra,
	startDelay: 300, // Tiempo de retraso en iniciar la animacion. Aplica tambien cuando termina y vuelve a iniciar,
	backSpeed: 69, // Velocidad en milisegundos para borrrar una letra,
	smartBackspace: true, // Eliminar solamente las palabras que sean nuevas en una cadena de texto.
	shuffle: false, // Alterar el orden en el que escribe las palabras.
	backDelay: 1500, // Tiempo de espera despues de que termina de escribir una palabra.
	loop: true, // Repetir el array de strings
	loopCount: false, // Cantidad de veces a repetir el array.  false = infinite
	showCursor: true, // Mostrar cursor palpitanto
	cursorChar: '/', // Caracter para el cursor
	contentType: 'html', // 'html' o 'null' para texto sin formato    
});