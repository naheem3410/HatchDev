var Laptop = /** @class */ (function () {
    function Laptop(bitKind, display, nic, hd, keyBoards, os) {
        this.keyboard = [];
        this.powerState = false;
        this.keyboard = keyBoards;
        this.nic = nic;
        this.screen = display;
        this.hardDisk = hd;
        this.bitKind = bitKind;
        this.powerState = false;
        this.os = os;
    }
    Laptop.prototype.togglePower = function () {
        this.powerState = !this.powerState;
    };
    Laptop.prototype.update = function (hardDisk) {
        this.hardDisk = hardDisk;
        this.togglePower();
    };
    return Laptop;
}());
var KeyBoard = /** @class */ (function () {
    function KeyBoard() {
    }
    return KeyBoard;
}());
var NetworkInterfaceCard = /** @class */ (function () {
    function NetworkInterfaceCard(name) {
        this.name = name;
    }
    return NetworkInterfaceCard;
}());
var Display = /** @class */ (function () {
    function Display() {
    }
    Object.defineProperty(Display.prototype, "displaySize", {
        set: function (val) {
            this.size = val;
        },
        enumerable: false,
        configurable: true
    });
    Display.prototype.setDisplayType = function (val) {
        this.type = val;
    };
    return Display;
}());
var HardDisk = /** @class */ (function () {
    function HardDisk() {
    }
    return HardDisk;
}());
var OperatingSystem = /** @class */ (function () {
    function OperatingSystem() {
    }
    return OperatingSystem;
}());
var keyboard = new KeyBoard();
keyboard.kind = "in-built";
keyboard.layout = "Qwerty";
var display = new Display();
display.displaySize = 16;
display.setDisplayType("amoled");
var nic = new NetworkInterfaceCard("nitlap");
var hardDisk = new HardDisk();
hardDisk.size = 520;
hardDisk.type = "ssd";
var keyBoardOne = new KeyBoard();
keyBoardOne.kind = "in-built";
keyBoardOne.layout = "Qwerty";
var keyBoardTwo = new KeyBoard();
keyBoardTwo.kind = "external";
keyBoardTwo.layout = "Qwerty";
var os = new OperatingSystem();
os.name = "Windows";
var keyboardArray = [keyBoardOne, keyBoardTwo];
var nitLap = new Laptop("x64", display, nic, hardDisk, keyboardArray, os);
console.log(nitLap);
hardDisk.type = "hdd";
nitLap.update(hardDisk);
console.log(nitLap);
