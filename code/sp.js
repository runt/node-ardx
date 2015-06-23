/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

// vytvoreni paru virtualnich portu
// socat -d -d pty,raw,echo=0 pty,raw,echo=0




var SerialPort = require("serialport").SerialPort;
var sep = require("serialport");
var serialPort = new SerialPort("/dev/pts/12", {
  baudrate: 57600
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
  console.log('udalost open');
  serialPort.on('data', function(data) {
    console.log('data received: ' + data+'data code='+data.toString().charCodeAt(0));
    //poslat zpet do portu jako echo
    if(data.toString().charCodeAt(0)==13) data="\r\nnovy radek\r\n";
    serialPort.write(data,function(err,result){
	console.log('result z echovani'+result);
    });
  });
});