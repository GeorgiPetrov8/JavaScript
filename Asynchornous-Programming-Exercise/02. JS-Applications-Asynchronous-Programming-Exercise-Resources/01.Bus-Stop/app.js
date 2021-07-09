function getInfo() {
    let baseUrl = 'http://localhost:3030/jsonstore/bus/businfo/';
    let stopId = document.getElementById('stopId').value;
    fetch(baseUrl + stopId)
        .then((response) => response.json())
        .then((data) => {
            let divStopName = document.getElementById('stopName');
            let busesList = document.getElementById('buses');
            divStopName.textContent = '';
            busesList.innerHTML = '';

            let stopName = data.name;
            divStopName.textContent = stopName;

            for (let busId in data.buses) {
                let listItem = document.createElement('li');
                listItem.textContent = `Bus ${busId} arrives in ${data.buses[busId]} minutes`;
                busesList.appendChild(listItem);
            }
        })
        .catch(() => divStopName.textContent = 'Error');
}