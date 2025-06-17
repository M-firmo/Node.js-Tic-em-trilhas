// Exporta a função principal responsável por tratar as requisições HTTP
export default function (req, res, dado) {
    // Define o cabeçalho da resposta como JSON com codificação UTF-8
    res.setHeader('Content-Type', 'application/json', 'utf-8');

    // Trata requisições GET para a URL raiz "/"
    if (req.method === 'GET' && req.url === '/') {
        const { conteudo } = dado; // Extrai o conteúdo passado como dado

        res.statusCode = 200; // Define status 200 (OK)

        const resposta = {
            mensagem: conteudo // Resposta em formato JSON
        };

        res.end(JSON.stringify(resposta)); // Envia a resposta
        return; // Encerra a execução da função
    }

    // Trata requisições PUT para a URL "/arquivos"
    if (req.method === 'PUT' && req.url === '/arquivos') {
        const corpo = []; // Cria um array para armazenar os dados recebidos

        // Escuta os dados que chegam em partes (stream)
        req.on('data', (parte) => {
            corpo.push(parte); // Adiciona cada parte no array
        });

        // Quando os dados terminarem de chegar
        req.on('end', () => {
            const arquivo = JSON.parse(corpo); // Converte os dados para objeto JSON

            res.statusCode = 400; // Define status 400 por padrão (Bad Request)

            // Verifica se o atributo 'nome' está presente no objeto enviado
            if (!arquivo?.nome) {
                const resposta = {
                    erro: {
                        mensagem: `O atributo 'nome' não foi encontrado, mas é obrigatório`
                    }
                };

                // Envia resposta de erro
                res.end(JSON.stringify(resposta));
                return;
            }

            // Aqui poderia estar a lógica de sucesso, que ainda não foi implementada
        });

        return; // Importante: evita continuar a execução e cair no 404 abaixo
    }

    // Se a rota não for tratada acima, responde com erro 404
    res.statusCode = 404;

    const resposta = {
        erro: 'Rota não encontrada',
        url: req.url
    };

    res.end(JSON.stringify(resposta)); // Envia resposta de erro
}
