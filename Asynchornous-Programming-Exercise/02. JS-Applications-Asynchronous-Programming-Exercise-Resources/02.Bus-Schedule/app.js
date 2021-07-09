function solve() {
    let infoBox = document.getElementById('info');
    let baseUrl = 'http://localhost:3030/jsonstore/bus/schedule/';
    let stopId = 'depot';
    let departButt = document.getElementById('depart');
    let arriveButt = document.getElementById('arrive');

    function depart() {
        fetchFunction('depart');
    }

    function arrive() {
        fetchFunction('arrive');
    }

    function fetchFunction(state) {
        fetch(baseUrl + stopId)
            .then((response) => response.json())
            .then((data) => {
                let message = '';
                if (state == 'depart') {
                    message = `Next stop ${data.name}`;
                    departButt.disabled = true;
                    arriveButt.disabled = false;
                } else {
                    message = `Arriving at ${data.name}`;
                    arriveButt.disabled = true;
                    departButt.disabled = false;
                }
                infoBox.textContent = message;
            })
            .catch(() => infoBox.textContent = 'Error');
    }

    return {
        depart,
        arrive
    };
}

let result = solve();