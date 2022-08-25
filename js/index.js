'use strict'

let data = [
	{
		"name": "Luke Skywalker",
		"height": "172",
		"mass": "77",
		"hair_color": "blond",
		"skin_color": "fair",
		"eye_color": "blue",
		"gender": "male",
	},
	{
		"name": "C-3PO",
		"height": "167",
		"mass": "75",
		"hair_color": "n/a",
		"skin_color": "gold",
		"eye_color": "yellow",
		"gender": "n/a",
	},
	{
		"name": "R2-D2",
		"height": "96",
		"mass": "32",
		"hair_color": "n/a",
		"skin_color": "white, blue",
		"eye_color": "red",
		"gender": "n/a",
	},
	{
		"name": "Darth Vader",
		"height": "202",
		"mass": "136",
		"hair_color": "none",
		"skin_color": "white",
		"eye_color": "yellow",
		"gender": "male",
	},
	{
		"name": "Leia Organa",
		"height": "150",
		"mass": "49",
		"hair_color": "brown",
		"skin_color": "light",
		"eye_color": "brown",
		"gender": "female",
	},
	{
		"name": "Owen Lars",
		"height": "178",
		"mass": "120",
		"hair_color": "brown, grey",
		"skin_color": "light",
		"eye_color": "blue",
		"gender": "male",
	},
	{
		"name": "Beru Whitesun lars",
		"height": "165",
		"mass": "75",
		"hair_color": "brown",
		"skin_color": "light",
		"eye_color": "blue",
		"gender": "female",
	},
	{
		"name": "R5-D4",
		"height": "97",
		"mass": "32",
		"hair_color": "n/a",
		"skin_color": "white, red",
		"eye_color": "red",
		"gender": "n/a",
	},
	{
		"name": "Biggs Darklighter",
		"height": "183",
		"mass": "84",
		"hair_color": "black",
		"skin_color": "light",
		"eye_color": "brown",
		"gender": "male",
	},
	{
		"name": "Obi-Wan Kenobi",
		"height": "182",
		"mass": "77",
		"hair_color": "auburn, white",
		"skin_color": "fair",
		"eye_color": "blue-gray",
		"gender": "male",
	}
];

let mascotas = [
	{
		"tipo": "rabbit",
	},
	{
		"tipo": "canary",
	},
	{
		"tipo": "golden fish",
	},
	{
		"tipo": "horse",
	},
	{
		"tipo": "lizard",
	},
	{
		"tipo": "blue whale",
	},
	{
		"tipo": "domestic cat",
	},
	{
		"tipo": "lion",
	},
	{
		"tipo": "platypus",
	},
	{
		"tipo": "manatee",
	}
];

let corre = document.querySelector('#scroll');
//CON LA FUNCION CAMBIO EL JSON A STRINGS Y LA USO PARA IMPRIMIR Y ORGANIZAR EL TEXTO
function Texto (){
    return JSON.stringify(data, undefined, 4);
};
corre.append(Texto());

//ESTUDIAR ESTA FUNCION FLECHA COMO SE VERIA SI FUERA NORMAL PARA ENTENDERLKA MEJOR
//Esta funcion de abajo me arregla de altos a bajos}
//ESTE ALTOS BAJOS ES EL ARREGLO ORDENADO DE DATA
let altosBajos = data.sort((a, b) => b.height - a.height);
let mostrar = document.querySelector('#show');

function AltosBajos() {
	let nuevoAlBa = [];
	altosBajos.forEach(e => {
		nuevoAlBa += (`* ${e.name}: ${e.height}cm. <br><br>`);

	});
	return mostrar.innerHTML = nuevoAlBa;
};

function Hombres() {
	let hombres = [];
	altosBajos.forEach(e =>{
		if (e.gender === "male"){
        hombres += (`* ${e.name}: ${e.gender}. <br><br>`);
	}
	});
    return mostrar.innerHTML = hombres;
};

function Mujeres() {
	let mujeres = [];
	altosBajos.forEach(e =>{
		if (e.gender === "female"){
        mujeres += (`* ${e.name}: ${e.gender}. <br><br>`);
	}
	});
    return mostrar.innerHTML = mujeres;
};

function AlturaMayor() {
	let alturaIngresada = Number(document.querySelector(".esAltura").value);
	let arrMayor = [];
	altosBajos.forEach(e =>{
		if (e.height >= alturaIngresada && alturaIngresada != "" && alturaIngresada > 95) {
			arrMayor += (`* ${e.name}: ${e.height}cm. <br><br>`);
			return mostrar.innerHTML = arrMayor;
		}else if(alturaIngresada > 202 || alturaIngresada < 95){
			mostrar.innerHTML = `Ingresa una altura entre 96 y 202.`;
	}
});
};

function AlturaMenor() {
	let alturaIngresada = Number(document.querySelector(".esAltura").value);
	let arrMenor = [];
	altosBajos.forEach(e =>{
		if (e.height <= alturaIngresada && alturaIngresada != "" && alturaIngresada > 96) {
			arrMenor += (`* ${e.name}: ${e.height}cm. <br><br>`);
			return mostrar.innerHTML = arrMenor;
		}else if(alturaIngresada > 211 || alturaIngresada < 96){
			mostrar.innerHTML = `Ingresa una altura entre 96 y 202.`;
	}
});
};

function VerTodo() {
	let nuevoAlBa = [];
	altosBajos.forEach(e => {
		nuevoAlBa += (`* ${e.name}: ${e.height}cm, ${e.mass}kg, <br>hair 
		${e.hair_color}, skin ${e.skin_color}, ${e.eye_color} eyes, ${e.gender}.  <br><br>`);

	});
	return corre.innerHTML = nuevoAlBa;
};

function JuntarArreglos() {
	let verMascotas = [];

    altosBajos.map((personaje, index) => {
		const animal = mascotas[index];
        verMascotas += (`*${personaje.name}: ${animal.tipo}. <br><br>`);
	});
	return mostrar.innerHTML = verMascotas;
};


//ESTA FUNCION ES LO MISMO PERO CON LOOPS Y MAS ARREGLOS NUEVOS
// let nombres = [];
// let mascota = [];
// let verMascotas = [];

// function JuntarArreglos() {
// 	for (let i = 0; i < altosBajos.length; i++) {
// 		nombres.push(altosBajos[i].name);
// 	}
// 	for (let j = 0; j < mascotas.length; j++) {
// 		mascota.push(mascotas[j].tipo);
// 	}


// 	nombres.map((personaje, index) => {
// 		const animal = mascota[index];
// 		console.log(personaje, animal);
// 		verMascotas += (`*${personaje}: ${animal}. <br>`);
// 		return mostrar.innerHTML = verMascotas;
// 	});
// };

