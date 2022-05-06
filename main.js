function calcular(tipo, valor) {

    if (tipo == 'acao') {

        if (valor === 'c') {
            // Limpar o visor
            document.getElementById('resultado').value = '';
        }

        if (valor === '+' || valor === '-' || valor === '*' || valor === '/' || valor === '.') {
            document.getElementById('resultado').value += valor;
        }

        if (valor === '=') {
            var valor_campo = document.getElementById('resultado').value;
            console.log(valor_campo);
        }
    }
    else if (tipo == 'valor') {
        document.getElementById('resultado').value += valor; // Capturando o valor dentro do ID resultado
    }

}