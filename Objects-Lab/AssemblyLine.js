function createAssemblyLine() {
    let assemblyLine = {};
    assemblyLine.hasClima = function (x) {
        x.temp = Number(21);
        x.tempSettings = Number(21);
        x.adjustTemp = function () {
            if (this.temp < this.tempSettings) {
                this.temp += 1;
            } else if (this.temp > this.tempSettings) {
                this.temp -= 1;
            }
        }
    }

    assemblyLine.hasAudio = function (x) {
        x.currentTrack = { 'name': '', 'artist': '' };
        x.nowPlaying = function () {
            if (x.currentTrack !== null) {
                console.log(`Now playing '${x.currentTrack.name}' by ${x.currentTrack.artist}`)
            }
        }
    }

    assemblyLine.hasParktronic = function (x) {
        x.checkDistance = function (distance) {
            if (distance < 0.1) {
                console.log('Beep! Beep! Beep!');
            } else if (distance >= 0.1 && distance < 0.25) {
                console.log('Beep! Beep!');
            } else if (distance >= 0.25 && distance < 0.5) {
                console.log('Beep!');
            } else {
                console.log('');

            }
        }

    }
    return assemblyLine;

}

const assemblyLine = createAssemblyLine();

const myCar = {
    make: 'Toyota',
    model: 'Avensis'
};

assemblyLine.hasParktronic(myCar);
myCar.checkDistance(0.4);
myCar.checkDistance(0.2);
console.log(myCar);

