
const { Heading , P } = require('./lib/HtmlLib')

const document = [ 
    new Heading('Hello World', 1),
    new P('Lorem Ipsum'),
    new P('Another Paragraph'),
    new Heading('subtitle', 2)
]

console.log(document.join(''))