function attachEvents() {
    let locationInput = document.getElementById('location');
    let submitButt = document.getElementById('submit');
    let forecast = document.getElementById('forecast');

    submitButt.addEventListener('click', () => {
        forecast.innerHTML = '';
        forecast.style.display = 'block';

        let current = document.createElement('div');
        current.id = 'current';
        let currentDiv = document.createElement('div')
        currentDiv.classList += 'label';
        currentDiv.textContent = 'Current conditions';
        current.appendChild(currentDiv);

        let upcoming = document.createElement('div');
        upcoming.id = 'upcoming';
        let upcomingDiv = document.createElement('div');
        upcomingDiv.classList += 'label';
        upcomingDiv.textContent = 'Three-day forecast';
        upcoming.appendChild(upcomingDiv);

        forecast.appendChild(current);
        forecast.appendChild(upcoming);

        fetch('http://localhost:3030/jsonstore/forecaster/locations')
            .then(response => response.json())
            .then((data) => {
                let object = data.find(obj => obj.name == locationInput.value);
                locationCode = object.code;

                fetch('http://localhost:3030/jsonstore/forecaster/today/' + locationCode)
                    .then(response => response.json())
                    .then((data) => {
                        let object = data.forecast;
                        let symbolCode = getSymbolCode(object.condition);

                        let conditionSymbol = document.createElement('span');
                        conditionSymbol.classList += 'condtion symbol';
                        conditionSymbol.innerHTML = symbolCode;

                        let rootConditionSpan = document.createElement('span');
                        rootConditionSpan.classList += 'condition';

                        let spanLocation = document.createElement('span');
                        spanLocation.classList += 'forecast-data';
                        spanLocation.textContent = `${data.name}`;

                        let spanTemperature = document.createElement('span');
                        spanTemperature.classList += 'forecast-data';
                        spanTemperature.innerHTML = `${object.low}&#176;/${object.high} &#176;`

                        let spanCondition = document.createElement('span');
                        spanCondition.classList += 'forecast-data';
                        spanCondition.textContent = `${object.condition}`;

                        rootConditionSpan.appendChild(spanLocation);
                        rootConditionSpan.appendChild(spanTemperature);
                        rootConditionSpan.appendChild(spanCondition);

                        let divForecasts = document.createElement('div');
                        divForecasts.classList += 'forecasts';

                        divForecasts.appendChild(conditionSymbol);
                        divForecasts.appendChild(rootConditionSpan);

                        current.appendChild(divForecasts);
                    })

                fetch('http://localhost:3030/jsonstore/forecaster/upcoming/' + locationCode)
                    .then(response => response.json())
                    .then((data) => {
                        let divForecastInfo = document.createElement('div');
                        divForecastInfo.classList += 'forecast-info';

                        data.forecast.forEach(object => {
                            let symbolCode = getSymbolCode(object.condition);

                            let spanContainer = document.createElement('span');
                            spanContainer.classList += 'upcoming';

                            let symbolSpan = document.createElement('span');
                            symbolSpan.classList += 'symbol';
                            symbolSpan.innerHTML = symbolCode;

                            let temperatureSpan = document.createElement('span');
                            temperatureSpan.classList += 'forecast-data';
                            temperatureSpan.innerHTML = `${object.low}&#176;/${object.high}&#176;`

                            let conditionSpan = document.createElement('span');
                            conditionSpan.classList += 'forecast-data';
                            conditionSpan.textContent = object.condition;

                            spanContainer.appendChild(symbolSpan);
                            spanContainer.appendChild(temperatureSpan);
                            spanContainer.appendChild(conditionSpan);

                            divForecastInfo.appendChild(spanContainer);
                        });

                        upcoming.appendChild(divForecastInfo);
                    })

            }).catch(() => {
                forecast.textContent = 'Error: There is no information about this city';
            });
    });

    function getSymbolCode(condition) {
        //its better practise with object
        switch (condition) {
            case 'Sunny':
                return '&#x2600;';
            case 'Partly sunny':
                return '&#x26C5;';
            case 'Overcast':
                return '&#x2601;';
            case 'Rain':
                return '&#x2614;';
        };
    }
}

attachEvents();