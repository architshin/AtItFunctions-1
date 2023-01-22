import http from "node:http";
import url from "node:url";
import {jsonData} from "./data.js";

const server = http.createServer(
    (request, response) => {
        const parsedUrl = url.parse(request.url, true);
        const responseData = {...jsonData, ...parsedUrl.query};
        response.writeHead(200, {"Content-Type": "application/json; charset=utf-8"});
        response.write(JSON.stringify(responseData));
        response.end();
    }
);
server.listen(8000);
