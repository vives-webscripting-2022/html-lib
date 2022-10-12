
import { Heading, P } from './lib/HtmlLib.js'
import chalk from 'chalk'
import net from 'net'
import { connect } from 'http2'

const PORT = 80

const document = [ 
    new Heading('Hello World', 1),
    new P('Lorem Ipsum'),
    new P('Another Paragraph'),
    new Heading('subtitle', 2)
]

const server = net.createServer()

server.listen(PORT, () => {
    console.log(chalk.bgBlue(`Listening on port ${PORT}...`))
})

const sendResponse = (connection, response) => {
    const { protocol, statusCode, statusMessage, body} = response
    const data = `${protocol} ${statusCode} ${statusMessage}\r\n\r\n${body}`
    connection.write(data)
    connection.end()
}

server.on('connection', (connection) => {
    console.log("New connection established!")
    connection.on('data', (data) => {
        const lines = data.toString().split('\r\n')

        const [ method ,path, protocol ] = lines[0].split(' ')
        const request = { method, path, protocol }
        console.log(request)

        const response = {
            protocol: "HTTP/1.1",
            statusCode: 400,
            statusMessage: 'document not found',
            body: 'document not found 404'
        }
        
        if(request.path === '/') {
            response.statusCode = 200
            response.statusMessage = 'OK'
            response.body = document.join('')
        } 

        sendResponse(connection, response)
    })
} )

