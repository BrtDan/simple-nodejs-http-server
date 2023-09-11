// Importa il modulo http per creare un server HTTP.
const http = require('http');

// Configura le informazioni del server (indirizzo IP e porta).
const hostname = '127.0.0.1';
const port = 3000;

// Crea il server HTTP e definisce la funzione di gestione delle richieste.
const server = http.createServer((req, res) => {
    // Imposta l'intestazione della risposta HTTP.
    res.setHeader('Content-Type', 'text/plain');

    // Invia una risposta al client.
    res.end('Hello, world!\n');
});

// Avvia il server in ascolto sulla porta specificata e indirizzo IP.
server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
