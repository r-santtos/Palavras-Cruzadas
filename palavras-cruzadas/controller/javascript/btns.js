// BTN Linha 1 Coluna 2
//-----------------------------------------------------------------------------
//-----------------------------------------------------------------------------
// Variáveis
const btnOpenl1c2 = document.querySelector('#l01c02');
const inputElement = document.querySelector('#linha1Coluna2 input');
const buttomElement = document.querySelector('#salvar');

// Abrir e Fechar Formulário
function linha1Coluna2Open() {
    document.getElementById("linha1Coluna2").style.width = "100%";
}
function linha1Coluna2Close() {
    document.getElementById("linha1Coluna2").style.width = "0px";
}

// Criar Key Storage
function linha1Coluna2() {
    if (!inputElement.value == "" && inputElement.value.length > 7) {
        const linha1Coluna2 = inputElement.value;
        localStorage.setItem('linha1Coluna2', JSON.stringify(linha1Coluna2));
        linha1Coluna2Close();
        render();
    } else {
        alert('Você não digitou 8 letras');
    }
}

// Eventos onClick
buttomElement.onclick = linha1Coluna2;
btnOpenl1c2.onclick = linha1Coluna2Open;

//-----------------------------------------------------------------------------
//-----------------------------------------------------------------------------
// BTN Linha 1 Coluna 7
// Variáveis
const btnOpenl1c7 = document.querySelector('#l01c07');
const inputElementC7 = document.querySelector('#linha1Coluna7 input');
const buttomElementC7 = document.querySelector('#salvar-c7');

// Abrir e Fechar Formulário
function linha1Coluna7Open() {
    document.getElementById("linha1Coluna7").style.width = "100%";
}
function linha1Coluna7Close() {
    document.getElementById("linha1Coluna7").style.width = "0px";
}

// Criar Key Storage
function linha1Coluna7() {
    if (!inputElementC7.value == "" && inputElementC7.value.length > 8) {
        const linha1Coluna7 = inputElementC7.value;
        localStorage.setItem('linha1Coluna7', JSON.stringify(linha1Coluna7));
        linha1Coluna7Close();
        render();
    } else {
        alert('Você não digitou 9 letras');
    }
}

// Eventos onClick
buttomElementC7.onclick = linha1Coluna7;
btnOpenl1c7.onclick = linha1Coluna7Open;

//-----------------------------------------------------------------------------
//-----------------------------------------------------------------------------
// BTN Linha 1 Coluna 9
// Variáveis
const btnOpenl1c9 = document.querySelector('#l01c09');
const inputElementC9 = document.querySelector('#linha1Coluna9 input');
const buttomElementC9 = document.querySelector('#salvar-c9');

// Abrir e Fechar Formulário
function linha1Coluna9Open() {
    document.getElementById("linha1Coluna9").style.width = "100%";
}
function linha1Coluna9Close() {
    document.getElementById("linha1Coluna9").style.width = "0px";
}

// Criar Key Storage
function linha1Coluna9() {
    if (!inputElementC9.value == "" && inputElementC9.value.length > 6) {
        const linha1Coluna9 = inputElementC9.value;
        localStorage.setItem('linha1Coluna9', JSON.stringify(linha1Coluna9));
        linha1Coluna9Close();
        render();
    } else {
        alert('Você não digitou 7 letras');
    }
}

// Eventos onClick
buttomElementC9.onclick = linha1Coluna9;
btnOpenl1c9.onclick = linha1Coluna9Open;

//-----------------------------------------------------------------------------
//-----------------------------------------------------------------------------
// BTN Linha 1 Coluna 10
// Variáveis
const btnOpenl1c10 = document.querySelector('#l01c10');
const inputElementC10 = document.querySelector('#linha1Coluna10 input');
const buttomElementC10 = document.querySelector('#salvar-c10');

// Abrir e Fechar Formulário
function linha1Coluna10Open() {
    document.getElementById("linha1Coluna10").style.width = "100%";
}
function linha1Coluna10Close() {
    document.getElementById("linha1Coluna10").style.width = "0px";
}

// Criar Key Storage
function linha1Coluna10() {
    if (!inputElementC10.value == "" && inputElementC10.value.length > 8) {
        const linha1Coluna10 = inputElementC10.value;
        localStorage.setItem('linha1Coluna10', JSON.stringify(linha1Coluna10));
        linha1Coluna10Close();
        render();
    } else {
        alert('Você não digitou 9 letras');
    }
}

// Eventos onClick
buttomElementC10.onclick = linha1Coluna10;
btnOpenl1c10.onclick = linha1Coluna10Open;

//-----------------------------------------------------------------------------
//-----------------------------------------------------------------------------
// BTN Linha 1 Coluna 3
// Variáveis
const btnOpenl1c3 = document.querySelector('#l01c03');
const inputElementL1C3 = document.querySelector('#linha1Coluna3 input');
const buttomElementL1C3 = document.querySelector('#salvar-l1c3');

// Abrir e Fechar Formulário
function linha1Coluna3Open() {
    document.getElementById("linha1Coluna3").style.width = "100%";
}
function linha1Coluna3Close() {
    document.getElementById("linha1Coluna3").style.width = "0px";
}

// Criar Key Storage
function linha1Coluna3() {
    if (!inputElementL1C3.value == "" && inputElementL1C3.value.length > 2) {
        const linha1Coluna3 = inputElementL1C3.value;
        localStorage.setItem('linha1Coluna3', JSON.stringify(linha1Coluna3));
        linha1Coluna3Close();
        render();
    } else {
        alert('Você não digitou 3 letras');
    }
}

// Eventos onClick
buttomElementL1C3.onclick = linha1Coluna3;
btnOpenl1c3.onclick = linha1Coluna3Open;

//-----------------------------------------------------------------------------
//-----------------------------------------------------------------------------
// BTN Linha 2 Coluna 1
// Variáveis
const btnOpenl2c1 = document.querySelector('#l02c01');
const inputElementL2C1 = document.querySelector('#linha2Coluna1 input');
const buttomElementL2C1 = document.querySelector('#salvar-l2c1');

// Abrir e Fechar Formulário
function linha2Coluna1Open() {
    document.getElementById("linha2Coluna1").style.width = "100%";
}
function linha2Coluna1Close() {
    document.getElementById("linha2Coluna1").style.width = "0px";
}

// Criar Key Storage
function linha2Coluna1() {
    if (!inputElementL2C1.value == "" && inputElementL2C1.value.length > 2) {
        const linha2Coluna1 = inputElementL2C1.value;
        localStorage.setItem('linha2Coluna1', JSON.stringify(linha2Coluna1));
        linha2Coluna1Close();
        render();
    } else {
        alert('Você não digitou 9 letras');
    }
}

// Eventos onClick
buttomElementL2C1.onclick = linha2Coluna1;
btnOpenl2c1.onclick = linha2Coluna1Open;

//-----------------------------------------------------------------------------
//-----------------------------------------------------------------------------
// BTN Linha 3 Coluna 1
// Variáveis
const btnOpenl3c1 = document.querySelector('#l03c01');
const inputElementL3C1 = document.querySelector('#linha3Coluna1 input');
const buttomElementL3C1 = document.querySelector('#salvar-l3c1');

// Abrir e Fechar Formulário
function linha3Coluna1Open() {
    document.getElementById("linha3Coluna1").style.width = "100%";
}
function linha3Coluna1Close() {
    document.getElementById("linha3Coluna1").style.width = "0px";
}

// Criar Key Storage
function linha3Coluna1() {
    if (!inputElementL3C1.value == "" && inputElementL3C1.value.length > 2) {
        const linha3Coluna1 = inputElementL3C1.value;
        localStorage.setItem('linha3Coluna1', JSON.stringify(linha3Coluna1));
        linha3Coluna1Close();
        render();
    } else {
        alert('Você não digitou 3 letras');
    }
}

// Eventos onClick
buttomElementL3C1.onclick = linha3Coluna1;
btnOpenl3c1.onclick = linha3Coluna1Open;

//-----------------------------------------------------------------------------
//-----------------------------------------------------------------------------
// BTN Linha 3 Coluna 6
// Variáveis
const btnOpenl3c6 = document.querySelector('#l03c06');
const inputElementL3C6 = document.querySelector('#linha3Coluna6 input');
const buttomElementL3C6 = document.querySelector('#salvar-l3c6');

// Abrir e Fechar Formulário
function linha3Coluna6Open() {
    document.getElementById("linha3Coluna6").style.width = "100%";
}
function linha3Coluna6Close() {
    document.getElementById("linha3Coluna6").style.width = "0px";
}

// Criar Key Storage
function linha3Coluna6() {
    if (!inputElementL3C6.value == "" && inputElementL3C6.value.length > 3) {
        const linha3Coluna6 = inputElementL3C6.value;
        localStorage.setItem('linha3Coluna6', JSON.stringify(linha3Coluna6));
        linha3Coluna6Close();
        render();
    } else {
        alert('Você não digitou 4 letras');
    }
}

// Eventos onClick
buttomElementL3C6.onclick = linha3Coluna6;
btnOpenl3c6.onclick = linha3Coluna6Open;

//-----------------------------------------------------------------------------
//-----------------------------------------------------------------------------
// BTN Linha 4 Coluna 1
// Variáveis
const btnOpenl4c1 = document.querySelector('#l04c01');
const inputElementL4C1 = document.querySelector('#linha4Coluna1 input');
const buttomElementL4C1 = document.querySelector('#salvar-l4c1');

// Abrir e Fechar Formulário
function linha4Coluna1Open() {
    document.getElementById("linha4Coluna1").style.width = "100%";
}
function linha4Coluna1Close() {
    document.getElementById("linha4Coluna1").style.width = "0px";
}

// Criar Key Storage
function linha4Coluna1() {
    if (!inputElementL4C1.value == "" && inputElementL4C1.value.length > 2) {
        const linha4Coluna1 = inputElementL4C1.value;
        localStorage.setItem('linha4Coluna1', JSON.stringify(linha4Coluna1));
        linha4Coluna1Close();
        render();
    } else {
        alert('Você não digitou 3 letras');
    }
}

// Eventos onClick
buttomElementL4C1.onclick = linha4Coluna1;
btnOpenl4c1.onclick = linha4Coluna1Open;

//-----------------------------------------------------------------------------
//-----------------------------------------------------------------------------
// BTN Linha 4 Coluna 5
// Variáveis
const btnOpenl4c5 = document.querySelector('#l04c05');
const inputElementL4C5 = document.querySelector('#linha4Coluna5 input');
const buttomElementL4C5 = document.querySelector('#salvar-l4c5');

// Abrir e Fechar Formulário
function linha4Coluna5Open() {
    document.getElementById("linha4Coluna5").style.width = "100%";
}
function linha4Coluna5Close() {
    document.getElementById("linha4Coluna5").style.width = "0px";
}

// Criar Key Storage
function linha4Coluna5() {
    if (!inputElementL4C5.value == "" && inputElementL4C5.value.length > 4) {
        const linha4Coluna5 = inputElementL4C5.value;
        localStorage.setItem('linha4Coluna5', JSON.stringify(linha4Coluna5));
        linha4Coluna5Close();
        render();
    } else {
        alert('Você não digitou 5 letras');
    }
}

// Eventos onClick
buttomElementL4C5.onclick = linha4Coluna5;
btnOpenl4c5.onclick = linha4Coluna5Open;

//-----------------------------------------------------------------------------
//-----------------------------------------------------------------------------
// BTN Linha 10 Coluna 2
// Variáveis
const btnOpenl10c2 = document.querySelector('#l10c02');
const inputElementL10C2 = document.querySelector('#linha10Coluna2 input');
const buttomElementL10C2 = document.querySelector('#salvar-l10c2');

// Abrir e Fechar Formulário
function linha10Coluna2Open() {
    document.getElementById("linha10Coluna2").style.width = "100%";
}
function linha10Coluna2Close() {
    document.getElementById("linha10Coluna2").style.width = "0px";
}

// Criar Key Storage
function linha10Coluna2() {
    if (!inputElementL10C2.value == "" && inputElementL10C2.value.length > 7) {
        const linha10Coluna2 = inputElementL10C2.value;
        localStorage.setItem('linha10Coluna2', JSON.stringify(linha10Coluna2));
        linha10Coluna2Close();
        render();
    } else {
        alert('Você não digitou 8 letras');
    }
}

// Eventos onClick
buttomElementL10C2.onclick = linha10Coluna2;
btnOpenl10c2.onclick = linha10Coluna2Open;

//-----------------------------------------------------------------------------
//-----------------------------------------------------------------------------
// BTN Linha 5 Coluna 1
// Variáveis
const btnOpenl5c1 = document.querySelector('#l05c01');
const inputElementL5C1 = document.querySelector('#linha5Coluna1 input');
const buttomElementL5C1 = document.querySelector('#salvar-l5c1');

// Abrir e Fechar Formulário
function linha5Coluna1Open() {
    document.getElementById("linha5Coluna1").style.width = "100%";
}
function linha5Coluna1Close() {
    document.getElementById("linha5Coluna1").style.width = "0px";
}

// Criar Key Storage
function linha5Coluna1() {
    if (!inputElementL5C1.value == "" && inputElementL5C1.value.length > 4) {
        const linha5Coluna1 = inputElementL5C1.value;
        localStorage.setItem('linha5Coluna1', JSON.stringify(linha5Coluna1));
        linha5Coluna1Close();
        render();
    } else {
        alert('Você não digitou 5 letras');
    }
}

// Eventos onClick
buttomElementL5C1.onclick = linha5Coluna1;
btnOpenl5c1.onclick = linha5Coluna1Open;

//-----------------------------------------------------------------------------
//-----------------------------------------------------------------------------
// BTN Linha 5 Coluna 3
// Variáveis
const btnOpenl5c3 = document.querySelector('#l05c03');
const inputElementL5C3 = document.querySelector('#linha5Coluna3 input');
const buttomElementL5C3 = document.querySelector('#salvar-l5c3');

// Abrir e Fechar Formulário
function linha5Coluna3Open() {
    document.getElementById("linha5Coluna3").style.width = "100%";
}
function linha5Coluna3Close() {
    document.getElementById("linha5Coluna3").style.width = "0px";
}

// Criar Key Storage
function linha5Coluna3() {
    if (!inputElementL5C3.value == "" && inputElementL5C3.value.length > 4) {
        const linha5Coluna3 = inputElementL5C3.value;
        localStorage.setItem('linha5Coluna3', JSON.stringify(linha5Coluna3));
        linha5Coluna3Close();
        render();
    } else {
        alert('Você não digitou 5 letras');
    }
}

// Eventos onClick
buttomElementL5C3.onclick = linha5Coluna3;
btnOpenl5c3.onclick = linha5Coluna3Open;

//-----------------------------------------------------------------------------
//-----------------------------------------------------------------------------
// BTN Linha 5 Coluna 5
// Variáveis
const btnOpenl5c5 = document.querySelector('#l05c05');
const inputElementL5C5 = document.querySelector('#linha5Coluna5 input');
const buttomElementL5C5 = document.querySelector('#salvar-l5c5');

// Abrir e Fechar Formulário
function linha5Coluna5Open() {
    document.getElementById("linha5Coluna5").style.width = "100%";
}
function linha5Coluna5Close() {
    document.getElementById("linha5Coluna5").style.width = "0px";
}

// Criar Key Storage
function linha5Coluna5() {
    if (!inputElementL5C5.value == "" && inputElementL5C5.value.length > 4) {
        const linha5Coluna5 = inputElementL5C5.value;
        localStorage.setItem('linha5Coluna5', JSON.stringify(linha5Coluna5));
        linha5Coluna5Close();
        render();
    } else {
        alert('Você não digitou 5 letras');
    }
}

// Eventos onClick
buttomElementL5C5.onclick = linha5Coluna5;
btnOpenl5c5.onclick = linha5Coluna5Open;

//-----------------------------------------------------------------------------
//-----------------------------------------------------------------------------
// BTN Linha 5 Coluna 6
// Variáveis
const btnOpenl5c6 = document.querySelector('#l05c06');
const inputElementL5C6 = document.querySelector('#linha5Coluna6 input');
const buttomElementL5C6 = document.querySelector('#salvar-l5c6');

// Abrir e Fechar Formulário
function linha5Coluna6Open() {
    document.getElementById("linha5Coluna6").style.width = "100%";
}
function linha5Coluna6Close() {
    document.getElementById("linha5Coluna6").style.width = "0px";
}

// Criar Key Storage
function linha5Coluna6() {
    if (!inputElementL5C6.value == "" && inputElementL5C6.value.length > 2) {
        const linha5Coluna6 = inputElementL5C6.value;
        localStorage.setItem('linha5Coluna6', JSON.stringify(linha5Coluna6));
        linha5Coluna6Close();
        render();
    } else {
        alert('Você não digitou 3 letras');
    }
}

// Eventos onClick
buttomElementL5C6.onclick = linha5Coluna6;
btnOpenl5c6.onclick = linha5Coluna6Open;

//-----------------------------------------------------------------------------
//-----------------------------------------------------------------------------
// BTN Linha 5 Coluna 8
// Variáveis
const btnOpenl5c8 = document.querySelector('#l05c08');
const inputElementL5C8 = document.querySelector('#linha5Coluna8 input');
const buttomElementL5C8 = document.querySelector('#salvar-l5c8');

// Abrir e Fechar Formulário
function linha5Coluna8Open() {
    document.getElementById("linha5Coluna8").style.width = "100%";
}
function linha5Coluna8Close() {
    document.getElementById("linha5Coluna8").style.width = "0px";
}

// Criar Key Storage
function linha5Coluna8() {
    if (!inputElementL5C8.value == "" && inputElementL5C8.value.length > 4) {
        const linha5Coluna8 = inputElementL5C8.value;
        localStorage.setItem('linha5Coluna8', JSON.stringify(linha5Coluna8));
        linha5Coluna8Close();
        render();
    } else {
        alert('Você não digitou 5 letras');
    }
}

// Eventos onClick
buttomElementL5C8.onclick = linha5Coluna8;
btnOpenl5c8.onclick = linha5Coluna8Open;

//-----------------------------------------------------------------------------
//-----------------------------------------------------------------------------
// BTN Linha 6 Coluna 4
// Variáveis
const btnOpenl6c4 = document.querySelector('#l06c04');
const inputElementL6C4 = document.querySelector('#linha6Coluna4 input');
const buttomElementL6C4 = document.querySelector('#salvar-l6c4');

// Abrir e Fechar Formulário
function linha6Coluna4Open() {
    document.getElementById("linha6Coluna4").style.width = "100%";
}
function linha6Coluna4Close() {
    document.getElementById("linha6Coluna4").style.width = "0px";
}

// Criar Key Storage
function linha6Coluna4() {
    if (!inputElementL6C4.value == "" && inputElementL6C4.value.length > 1) {
        const linha6Coluna4 = inputElementL6C4.value;
        localStorage.setItem('linha6Coluna4', JSON.stringify(linha6Coluna4));
        linha6Coluna4Close();
        render();
    } else {
        alert('Você não digitou 2 letras');
    }
}

// Eventos onClick
buttomElementL6C4.onclick = linha6Coluna4;
btnOpenl6c4.onclick = linha6Coluna4Open;

