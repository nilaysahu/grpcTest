let grpc = require("grpc");
var protoLoader = require("@grpc/proto-loader");
 
const server = new grpc.Server();
const SERVER_ADDRESS = "0.0.0.0:5001";
 
// Load protobuf
let proto = grpc.loadPackageDefinition(
  protoLoader.loadSync("chat.proto", {
    keepCase: true,
    longs: String,
    enums: String,
    defaults: true,
    oneofs: true
  })
);
 

function getNotes(_,callback){
	const notes = { id: '1', title: 'Note 1', content: 'Content 1'};
	callback(null,notes)
}
 
// Define server with the methods and start it
server.addService(proto.example.NoteService.service, { list: getNotes });
server.bind(SERVER_ADDRESS, grpc.ServerCredentials.createInsecure());
server.start();