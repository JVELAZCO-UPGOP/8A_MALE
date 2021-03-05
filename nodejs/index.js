const http = require('http');
const url = require('url');

const callbackDelServidor = (req, res) => {
    //1. Obtener url desde el objeto request
    const urlActual = req.url;
    const urlParseada = url.parse(urlActual,true);

    //2. Obtener la ruta
    const ruta = urlParseada.pathname;

    //3. Enviar una respuesta dependiendo de la ruta
    if(ruta=='/ruta')
    {
        res.end('Hola estas en /ruta');
    }
    else
    {
        res.end('Hola estas en una ruta que no conozco');
    }

    res.end('Hola mundo');
};

const server = http.createServer(callbackDelServidor);

server.listen(5000 , () => 
{
    console.log('El servidor está escuchando peticiones');
});