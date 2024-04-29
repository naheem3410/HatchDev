class Laptop{
    keyboard: KeyBoard[] = [];
    nic: NetworkInterfaceCard;
    screen: Display;
    hardDisk: HardDisk;
    powerState: Boolean = false;
    bitKind: BitKind;
    os: OperatingSystem;

    constructor(
        bitKind:BitKind, display: Display, nic: NetworkInterfaceCard, hd: HardDisk, keyBoards: KeyBoard[], os: OperatingSystem
    ){
        this.keyboard = keyBoards;
        this.nic = nic;
        this.screen = display;
        this.hardDisk = hd;
        this.bitKind = bitKind;
        this.powerState = false;
        this.os = os;
    }

    togglePower(){
        this.powerState = !this.powerState;
    }

    update(hardDisk: HardDisk){
        this.hardDisk = hardDisk;
        this.togglePower();

    }
}


class KeyBoard{
    kind: KeyBoardKind
    layout: KeyBoardLayout
}

class NetworkInterfaceCard{
    
    constructor(public readonly name: string){

    }
}

class Display{
    size: number;
    type: DisplayType

    set displaySize(val: number){
        this.size = val;
    }

    setDisplayType(val: DisplayType){
        this.type = val;
    }
}

class HardDisk{
    type: "ssd" | "hdd";
    size: number;
    
}

class OperatingSystem{
    name: OsKind;
}

type KeyBoardKind = "in-built" | "external";
type KeyBoardLayout = "Qwerty" | "Qwerzt" | "Azerty";
type OsKind = "Linux" | "Mac" | "Windows";
type BitKind = "x64" | "x32" | "x86";
type DisplayType = "amoled" | "lcd" | "oled";

const keyboard = new KeyBoard();
keyboard.kind = "in-built";
keyboard.layout = "Qwerty";

const display = new Display();
display.displaySize = 16;
display.setDisplayType("amoled");

const nic = new NetworkInterfaceCard("nitlap");
const hardDisk = new HardDisk();
hardDisk.size = 520;
hardDisk.type = "ssd";


const keyBoardOne = new KeyBoard();
keyBoardOne.kind = "in-built";
keyBoardOne.layout = "Qwerty";
const keyBoardTwo = new KeyBoard();
keyBoardTwo.kind = "external";
keyBoardTwo.layout = "Qwerty";

const os = new OperatingSystem();
os.name = "Windows";

const keyboardArray = [keyBoardOne, keyBoardTwo]


const nitLap = new Laptop("x64", display, nic, hardDisk, keyboardArray,os);
console.log(nitLap);
hardDisk.type = "hdd";
nitLap.update(hardDisk);
console.log(nitLap);