// LINHA UM COLUNA DOIS
function render() {
    if (localStorage.getItem('linha1Coluna2')) {
        const string = JSON.parse(localStorage.getItem('linha1Coluna2'));
        let resposta = string.toLowerCase();
    
        let array = string.split('');
        console.log(array);
        document.getElementById("l02c02").innerHTML = array[0];
        document.getElementById("l03c02").innerHTML = array[1];
        document.getElementById("l04c02").innerHTML = array[2];
        document.getElementById("l05c02").innerHTML = array[3];
        document.getElementById("l06c02").innerHTML = array[4];
        document.getElementById("l07c02").innerHTML = array[5];
        document.getElementById("l08c02").innerHTML = array[6];
        document.getElementById("l09c02").innerHTML = array[7];

        if (resposta === "peculiar") {
            let classe = document.querySelector("span#l01c02");
            classe.setAttribute("class", "container verde");
        }
    }

    // LINHA UM COLUNA TRÊS*
    if (localStorage.getItem('linha1Coluna3')) {
        const stringC1 = JSON.parse(localStorage.getItem('linha1Coluna3'));
        let resposta = stringC1.toLowerCase();
    
        let array = stringC1.split('');
        console.log(array);
        document.getElementById("l01c04").innerHTML = array[0];
        document.getElementById("l01c05").innerHTML = array[1];
        document.getElementById("l01c06").innerHTML = array[2];

        if (resposta === "ato") {
            let classe = document.querySelector("span#l01c03");
            classe.setAttribute("class", "container verde");
        }
    }

    // LINHA UM COLUNA SETE
    if (localStorage.getItem('linha1Coluna7')) {
        const stringC7 = JSON.parse(localStorage.getItem('linha1Coluna7'));
        let resposta = stringC7.toLowerCase();
    
        let array = stringC7.split('');
        console.log(array);
        document.getElementById("l02c07").innerHTML = array[0];
        document.getElementById("l03c07").innerHTML = array[1];
        document.getElementById("l04c07").innerHTML = array[2];
        document.getElementById("l05c07").innerHTML = array[3];
        document.getElementById("l06c07").innerHTML = array[4];
        document.getElementById("l07c07").innerHTML = array[5];
        document.getElementById("l08c07").innerHTML = array[6];
        document.getElementById("l09c07").innerHTML = array[7];
        document.getElementById("l10c07").innerHTML = array[8];

        if (resposta === "incidente") {
            let classe = document.querySelector("span#l01c07");
            classe.setAttribute("class", "container verde");
        }
    }

    // LINHA UM COLUNA NOVE
    if (localStorage.getItem('linha1Coluna9')) {
        const stringC9 = JSON.parse(localStorage.getItem('linha1Coluna9'));
        let resposta = stringC9.toLowerCase();
    
        let array = stringC9.split('');
        console.log(array);
        document.getElementById("l02c09").innerHTML = array[0];
        document.getElementById("l03c09").innerHTML = array[1];
        document.getElementById("l04c09").innerHTML = array[2];
        document.getElementById("l05c09").innerHTML = array[3];
        document.getElementById("l06c09").innerHTML = array[4];
        document.getElementById("l07c09").innerHTML = array[5];
        document.getElementById("l08c09").innerHTML = array[6];

        if (resposta === "acalmar") {
            let classe = document.querySelector("span#l01c09");
            classe.setAttribute("class", "container verde");
        }
    }

    // LINHA UM COLUNA DEZ
    if (localStorage.getItem('linha1Coluna10')) {
        const stringC10 = JSON.parse(localStorage.getItem('linha1Coluna10'));
        let resposta = stringC10.toLowerCase();
    
        let array = stringC10.split('');
        console.log(array);
        document.getElementById("l02c10").innerHTML = array[0];
        document.getElementById("l03c10").innerHTML = array[1];
        document.getElementById("l04c10").innerHTML = array[2];
        document.getElementById("l05c10").innerHTML = array[3];
        document.getElementById("l06c10").innerHTML = array[4];
        document.getElementById("l07c10").innerHTML = array[5];
        document.getElementById("l08c10").innerHTML = array[6];
        document.getElementById("l09c10").innerHTML = array[7];
        document.getElementById("l10c10").innerHTML = array[8];

        if (resposta === "zarolhice") {
            let classe = document.querySelector("span#l01c10");
            classe.setAttribute("class", "container verde");
        }
    }

    // LINHA DOIS COLUNA UM
    if (localStorage.getItem('linha2Coluna1')) {
        const stringL2C1 = JSON.parse(localStorage.getItem('linha2Coluna1'));
        let resposta = stringL2C1.toLowerCase();
    
        let array = stringL2C1.split('');
        console.log(array);
        document.getElementById("l02c02").innerHTML = array[0];
        document.getElementById("l02c03").innerHTML = array[1];
        document.getElementById("l02c04").innerHTML = array[2];
        document.getElementById("l02c05").innerHTML = array[3];
        document.getElementById("l02c06").innerHTML = array[4];
        document.getElementById("l02c07").innerHTML = array[5];
        document.getElementById("l02c08").innerHTML = array[6];
        document.getElementById("l02c09").innerHTML = array[7];
        document.getElementById("l02c10").innerHTML = array[8];

        if (resposta === "perspicaz") {
            let classe = document.querySelector("span#l02c01");
            classe.setAttribute("class", "container verde");
        }
    }

    // LINHA TRÊS COLUNA UM
    if (localStorage.getItem('linha3Coluna1')) {
        const stringL3C1 = JSON.parse(localStorage.getItem('linha3Coluna1'));
        let resposta = stringL3C1.toLowerCase();
    
        let array = stringL3C1.split('');
        console.log(array);
        document.getElementById("l03c02").innerHTML = array[0];
        document.getElementById("l03c03").innerHTML = array[1];
        document.getElementById("l03c04").innerHTML = array[2];

        if (resposta === "ego") {
            let classe = document.querySelector("span#l03c01");
            classe.setAttribute("class", "container verde");
        }
    }

    // LINHA TRÊS COLUNA SEIS
    if (localStorage.getItem('linha3Coluna6')) {
        const stringL3C6 = JSON.parse(localStorage.getItem('linha3Coluna6'));
        let resposta = stringL3C6.toLowerCase();
    
        let array = stringL3C6.split('');
        console.log(array);
        document.getElementById("l03c07").innerHTML = array[0];
        document.getElementById("l03c08").innerHTML = array[1];
        document.getElementById("l03c09").innerHTML = array[2];
        document.getElementById("l03c10").innerHTML = array[3];

        if (resposta === "nuca") {
            let classe = document.querySelector("span#l03c06");
            classe.setAttribute("class", "container verde");
        }
    }

    // LINHA QUATRO COLUNA UM
    if (localStorage.getItem('linha4Coluna1')) {
        const stringL4C1 = JSON.parse(localStorage.getItem('linha4Coluna1'));
        let resposta = stringL4C1.toLowerCase();
    
        let array = stringL4C1.split('');
        console.log(array);
        document.getElementById("l04c02").innerHTML = array[0];
        document.getElementById("l04c03").innerHTML = array[1];
        document.getElementById("l04c04").innerHTML = array[2];

        if (resposta === "cor") {
            let classe = document.querySelector("span#l04c01");
            classe.setAttribute("class", "container verde");
        }
    }

    // LINHA QUATRO COLUNA CINCO
    if (localStorage.getItem('linha4Coluna5')) {
        const stringL4C5 = JSON.parse(localStorage.getItem('linha4Coluna5'));
        let resposta = stringL4C5.toLowerCase();
    
        let array = stringL4C5.split('');
        console.log(array);
        document.getElementById("l04c06").innerHTML = array[0];
        document.getElementById("l04c07").innerHTML = array[1];
        document.getElementById("l04c08").innerHTML = array[2];
        document.getElementById("l04c09").innerHTML = array[3];
        document.getElementById("l04c10").innerHTML = array[4];

        if (resposta === "achar") {
            let classe = document.querySelector("span#l04c05");
            classe.setAttribute("class", "container verde");
        }
    }

    // LINHA DEZ COLUNA DOIS
    if (localStorage.getItem('linha10Coluna2')) {
        const stringL10C2 = JSON.parse(localStorage.getItem('linha10Coluna2'));
        let resposta = stringL10C2.toLowerCase();
    
        let array = stringL10C2.split('');
        console.log(array);
        document.getElementById("l10c03").innerHTML = array[0];
        document.getElementById("l10c04").innerHTML = array[1];
        document.getElementById("l10c05").innerHTML = array[2];
        document.getElementById("l10c06").innerHTML = array[3];
        document.getElementById("l10c07").innerHTML = array[4];
        document.getElementById("l10c08").innerHTML = array[5];
        document.getElementById("l10c09").innerHTML = array[6];
        document.getElementById("l10c10").innerHTML = array[7];

        if (resposta === "alicerce") {
            let classe = document.querySelector("span#l10c02");
            classe.setAttribute("class", "container verde");
        }
    }

    // LINHA CINCO COLUNA UM
    if (localStorage.getItem('linha5Coluna1')) {
        const stringL5C1 = JSON.parse(localStorage.getItem('linha5Coluna1'));
        let resposta = stringL5C1.toLowerCase();
    
        let array = stringL5C1.split('');
        console.log(array);
        document.getElementById("l06c01").innerHTML = array[0];
        document.getElementById("l07c01").innerHTML = array[1];
        document.getElementById("l08c01").innerHTML = array[2];
        document.getElementById("l09c01").innerHTML = array[3];
        document.getElementById("l10c01").innerHTML = array[4];

        if (resposta === "brado") {
            let classe = document.querySelector("span#l05c01");
            classe.setAttribute("class", "container verde");
        }
    }

    // LINHA CINCO COLUNA TRÊS
    if (localStorage.getItem('linha5Coluna3')) {
        const stringL5C3 = JSON.parse(localStorage.getItem('linha5Coluna3'));
        let resposta = stringL5C3.toLowerCase();
    
        let array = stringL5C3.split('');
        console.log(array);
        document.getElementById("l06c03").innerHTML = array[0];
        document.getElementById("l07c03").innerHTML = array[1];
        document.getElementById("l08c03").innerHTML = array[2];
        document.getElementById("l09c03").innerHTML = array[3];
        document.getElementById("l10c03").innerHTML = array[4];

        if (resposta === "corja") {
            let classe = document.querySelector("span#l05c03");
            classe.setAttribute("class", "container verde");
        }
    }

    // LINHA CINCO COLUNA CINCO
    if (localStorage.getItem('linha5Coluna5')) {
        const stringL5C5 = JSON.parse(localStorage.getItem('linha5Coluna5'));
        let resposta = stringL5C5.toLowerCase();
    
        let array = stringL5C5.split('');
        console.log(array);
        document.getElementById("l06c05").innerHTML = array[0];
        document.getElementById("l07c05").innerHTML = array[1];
        document.getElementById("l08c05").innerHTML = array[2];
        document.getElementById("l09c05").innerHTML = array[3];
        document.getElementById("l10c05").innerHTML = array[4];

        if (resposta === "herói") {
            let classe = document.querySelector("span#l05c05");
            classe.setAttribute("class", "container verde");
        }
    }

    // LINHA CINCO COLUNA SEIS
    if (localStorage.getItem('linha5Coluna6')) {
        const stringL5C6 = JSON.parse(localStorage.getItem('linha5Coluna6'));
        let resposta = stringL5C6.toLowerCase();
    
        let array = stringL5C6.split('');
        console.log(array);
        document.getElementById("l06c06").innerHTML = array[0];
        document.getElementById("l07c06").innerHTML = array[1];
        document.getElementById("l08c06").innerHTML = array[2];

        if (resposta === "paz") {
            let classe = document.querySelector("span#l05c06");
            classe.setAttribute("class", "container verde");
        }
    }

    // LINHA SEIS COLUNA QUATRO
    if (localStorage.getItem('linha6Coluna4')) {
        const stringL6C4 = JSON.parse(localStorage.getItem('linha6Coluna4'));
        let resposta = stringL6C4.toLowerCase();
    
        let array = stringL6C4.split('');
        console.log(array);
        document.getElementById("l07c04").innerHTML = array[0];
        document.getElementById("l08c04").innerHTML = array[1];

        if (resposta === "rá") {
            let classe = document.querySelector("span#l06c04");
            classe.setAttribute("class", "container verde");
        }
    }

    // LINHA 5 COLUNA 8
    if (localStorage.getItem('linha5Coluna8')) {
        const stringL5C8 = JSON.parse(localStorage.getItem('linha5Coluna8'));
        let resposta = stringL5C8.toLowerCase();
    
        let array = stringL5C8.split('');
        console.log(array);
        document.getElementById("l06c08").innerHTML = array[0];
        document.getElementById("l07c08").innerHTML = array[1];
        document.getElementById("l08c08").innerHTML = array[2];
        document.getElementById("l09c08").innerHTML = array[3];
        document.getElementById("l10c08").innerHTML = array[4];

        if (resposta === "sanar") {
            let classe = document.querySelector("span#l05c08");
            classe.setAttribute("class", "container verde");
        }
    }
}