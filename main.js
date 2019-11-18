let opciones = document.querySelectorAll('.opcion');
let enviar = document.querySelector('.enviar');

let paso1 = document.querySelector('#paso1');
let paso2 = document.querySelector('#paso2');
let r_p1, r_resultado;

for (i = 0; i < opciones.length; i++) {
    opciones[i].addEventListener('click', showFormula);
}

formulas = {
    fsc: {
        nombre: "fsc",
        formula: "<img src='img/fsc.jpg' alt='error' height='80px' width='230px'> "
    },
    fsa: {
        nombre: "fsa",
        formula: "<img src='img/fsa.jpg' alt='error' height='80px' width='230px'> "
    },
    fcs: {
        nombre: "fcs",
        formula: "<img src='img/fcs.jpg' alt='error' height='80px' width='230px'> "
    },
    fas: {
        nombre: "fas",
        formula: "<img src='img/fas.jpg' alt='error' height='80px' width='230px'> "
    },
    fdfa: {
        nombre: "fdfa",
        formula: "<img src='img/fdfa.jpg' alt='error' height='80px' width='230px'> "
    },
    frc: {
        nombre: "frc",
        formula: "<img src='img/frc.jpg' alt='error' height='80px' width='230px'> "
    },
}

enviar.addEventListener('click', solucion);

function showFormula() {
    let opcion = document.querySelector('#formula');
    formula = '';
    opcion.className = '';
    console.log(this.id);
    if (this.id == 'opcion-1') {
        formula = ` ${formulas.fsc.formula}`;
        opcion.classList.add('opcion1');
    }
    if (this.id == 'opcion-2') {
        formula = ` ${formulas.fsa.formula}`;
        opcion.classList.add('opcion2');
    }
    if (this.id == 'opcion-3') {
        formula = ` ${formulas.fcs.formula}`;
        opcion.classList.add('opcion3');
    }
    if (this.id == 'opcion-4') {
        formula = ` ${formulas.fas.formula}`;
        opcion.classList.add('opcion4');
    }
    if (this.id == 'opcion-5') {
        formula = ` ${formulas.fdfa.formula}`;
        opcion.classList.add('opcion5');
    }
    if (this.id == 'opcion-6') {
        formula = ` ${formulas.frc.formula}`;
        opcion.classList.add('opcion6');
    }
    opcion.innerHTML = formula;

}

//FORMULAS

function solucion(e) {

    let v_periodo = document.querySelector('#factor').value;
    let v_interes = document.querySelector('#interes').value;
    let num_periodo = parseInt(v_periodo);
    let interes = parseFloat(v_interes) / 100;

    event.preventDefault();
    let opc = document.querySelector('#formula').className;

    if (opc == 'opcion1') {
        fsc(num_periodo, interes);
    }
    if (opc == 'opcion2') {
        fsa(num_periodo, interes);
    }
    if (opc == 'opcion3') {
        fcs(num_periodo, interes);
    }
    if (opc == 'opcion4') {
        fas(num_periodo, interes);
    }
    if (opc == 'opcion5') {
        fdfa(num_periodo, interes);
    }
    if (opc == 'opcion6') {
        frc(num_periodo, interes);
    }

    paso1.innerHTML = `<p><b>N</b> = ${num_periodo} </p>
    <p><b>I</b> = ${v_interes}% </p>
    <p><b>I</b> = ${interes}`;

}


function fsc(num_periodo, interes) {
    let r_resultado = Math.pow((1 + interes), num_periodo);
    r_p1 = `<p><b>F</b> = ( 1 + ${interes} ) <sup>${num_periodo}</sup></p>
            <p><b>F</b> = ( ${1 + interes} ) <sup>${num_periodo}</sup></p>
            <p><b>F</b> = ${r_resultado}</p>`;
    paso2.innerHTML = r_p1;
}

function fsa(num_periodo, interes) {
    let r_resultado = Math.pow((1 + interes), -(num_periodo));
    r_p1 = `<p><b>F</b> = ( 1 + ${interes} ) <sup>-${num_periodo}</sup></p>
            <p><b>F</b> = ( ${1 + interes} ) <sup>-${num_periodo}</sup></p>
            <p><b>F</b> = ${r_resultado}</p>`;
    paso2.innerHTML = r_p1;
}

function fcs(num_periodo, interes) {
    let r_resultado = ((Math.pow((1 + interes), num_periodo) - 1) / interes);
    r_p1 = `<p><b>F</b> = <span class="dc"><span>( 1 + ${interes} ) <sup>${num_periodo}</sup> - 1</span>
                          <span>${interes}</span></span></p>
            <p><b>F</b> = <span class="dc"><span>${(Math.pow((1 + interes), num_periodo) - 1)}</span>
                          <span>${interes}</span></span></p>
            <p><b>F</b> = ${r_resultado}</p>`;
    paso2.innerHTML = r_p1;
}

function fas(num_periodo, interes) {
    r_resultado = ((Math.pow((1 + interes), num_periodo) - 1) / (Math.pow((1 + interes), num_periodo) * interes));
    r_p1 = `<p><b>F</b> = <span class="dc"><span>( 1 + ${interes} ) <sup>${num_periodo}</sup> - 1</span>
                          <span>${interes} ( 1 + ${interes} ) <sup>${num_periodo}</sup></span></span></p>
            <p><b>F</b> = <span class="dc"><span>${(Math.pow((1 + interes), num_periodo) - 1)}</span>
                          <span>${(Math.pow((1 + interes), num_periodo) * interes)}</span></span></p>
            <p><b>F</b> = ${r_resultado}</p>`;
    paso2.innerHTML = r_p1;
}

function fdfa(num_periodo, interes){
    r_resultado = (interes / (Math.pow((1 + interes), num_periodo) - 1));
    r_p1 = `<p><b>F</b> = <span class="dc"><span>${interes}</span>
                          <span>( 1 + ${interes} ) <sup>${num_periodo}</sup> - 1</span></span></p>
            <p><b>F</b> = <span class="dc"><span>${interes}</span>
                          <span>${(Math.pow((1 + interes), num_periodo) - 1)}</span></span></p>
            <p><b>F</b> = ${r_resultado}</p>`;
    paso2.innerHTML = r_p1;
}

function frc(num_periodo, interes){
    r_resultado = ((Math.pow((1 + interes), num_periodo) * interes) / (Math.pow((1 + interes), num_periodo) - 1));
    r_p1 = `<p><b>F</b> = <span class="dc"><span>${interes} ( 1 + ${interes} ) <sup>${num_periodo}</sup></span>
                          <span>( 1 + ${interes} ) <sup>${num_periodo}</sup> - 1</span></span></p>
            <p><b>F</b> = <span class="dc"><span>${(Math.pow((1 + interes), num_periodo) * interes)}</span>
                          <span>${(Math.pow((1 + interes), num_periodo) - 1)}</span></span></p>
            <p><b>F</b> = ${r_resultado}</p>`;
    paso2.innerHTML = r_p1;

}
