import pegaArquivo from "./index.js";
import validadorURL from "./http.js";
import leituraTexto from "./leitura.js";
import validadorDeArrayURL from './arrayLinks.js';

const caminho = process.argv;

async function processadorDeTexto(caminhoDoArquivo) {
    const resultado = await pegaArquivo(caminhoDoArquivo[2]);

    if (caminho[3] === 'validar') {
        console.log('lista de validados', await validadorURL(resultado));
    } else if (caminho[3] === 'links') {
        console.log('lista de links em array', validadorDeArrayURL(resultado));
    }else if(caminho[3] === 'leitura'){
        console.log('leitura de todo o arquivo', (leituraTexto))
    }
    else {
        console.log('Este arquivo não apresenta nenhum link');
    }
}

processadorDeTexto(caminho);