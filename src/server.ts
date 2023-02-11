import config from "config";
import http from 'node:http';
import app from "./app";
import dbConnect from "./lib/dbConnect";

const server = http.createServer(app);
await dbConnect();

server.listen(config.get("http.port"), config.get("http.host"), () => {
    console.log(
        `Server started on http://${config.get("http.host")}:${config.get("http.port")}`
    );
});
