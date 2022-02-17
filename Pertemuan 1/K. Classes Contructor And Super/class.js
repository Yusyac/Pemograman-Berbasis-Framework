class Holiday{
    constructor(destination,day){
        this.destination = destination;
        this.day = day;
    }

    info(){
        alert(`${this.destination} Will Take ${this.day} Days.`);
    }
}

// sub class

class Expedition extends Holiday{
    constructor(destination,day,gear){
        super(destination,day);
        this.gear = gear;
    }

    info(){
        super.info();
        alert(`Bring Your ${this.gear.join(' And Your ')}`);
    }
}

const tripWithGear = new Expedition ('Semeru', 10 , ['Sunglasess','Flags','Camera']);
tripWithGear.info();