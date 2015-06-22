var five = require("johnny-five");
var SerialPort = require("serialport").SerialPort;
var serialPort = require("serialport");

serialPort.list(function (err, ports) {
  ports.forEach(function(port) {
    console.log(port.comName);
    console.log(port.pnpId);
    console.log(port.manufacturer);
  });
});

var myBoard, myLed;
var options = {
    port: new SerialPort(
            "/dev/ttyUSB0", {
            baudrate: 57600
    })
};

myBoard = new five.Board(options);

myBoard.on("ready", function() {

console.log('ready');
//  myLed = new five.Led(13)
//
//  myLed.strobe( 1000 );
//
//  // make myLED available as "led" in REPL
//
//  // try "on", "off", "toggle", "strobe", "stop" (stops strobing)
//
//  this.repl.inject({
//    led: myLed
//  });
  //console.log("You can interact with the RGB LED via the variable 'led' e.g. led.on();\n Hit control-D to exit.\n >> ");
});
