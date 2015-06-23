/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


var SerialPort = require("serialport").SerialPort;
var sep = require("serialport");
var serialPort = new SerialPort("/dev/ttyUSB0", {
  baudrate: 19200
},false);

console.log(sep);

sep.list(function(err,ports){
    if(err){
	console('error on list: '+err);
    }
    else{
	console.log('will list ser. ports:');
	ports.forEach(function(port){
	    console.log(port.comName);
	});
    }
});


serialPort.open(function(error){
    if(error){
	console.log('failed to open : '+error);
    }
    else{
	console.log('opened');
    }
});


serialPort.on("open", function () {
  console.log('opened');
  serialPort.on('data', function(data) {
    console.log('data received: ' + data);
  });
  serialPort.write("ls\n", function(err, results) {
    console.log('err ' + err);
    console.log('results ' + results);
  });
});