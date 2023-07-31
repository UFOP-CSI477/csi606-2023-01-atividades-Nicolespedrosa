function connect(parameters) {
    console.log("Connecting database ...");
    console.log("Database: ".concat(parameters.database));
    console.log("Connection: ".concat(parameters.connection));
    console.log("Number of connections: ".concat(parameters.pools));
}
console.log("Starting server... ");
var parameters = {
    database: "Mysql",
    connection: "root@localhost",
    pools: 10
};
connect(parameters);
console.log("Server is running");
