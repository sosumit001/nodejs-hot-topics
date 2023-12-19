import {createServer} from 'http'
import { createReadStream } from 'fs'

// function sendFile -> req
const sendFile = (res, status, type, filePath) => {
	res.writeHead(status, {"Content-Type": type})
	createReadStream(filePath).pipe(res)
}


const server = createServer((req, res) => {
	switch(req.url) {
		case '/': return sendFile(res, 200, "text/html", "./index.html")
		case '/style.css': return sendFile(res, 200, "text/css", "./style.css")
		case '/profile.png': return sendFile(res, 200, "image/png", "./profile.png")

		default:  return sendFile(res, 200, "text/html", "./error.html")
	}
})

server.listen(3000)
console.log('server is running on localhost: 3000')