function solve(arr) {
    let towns = [];

    for (let i = 1; i < arr.length; i++) {
        let [Town, Latitude, Longitude] = arr[i].split(' | ');
        Town = Town.slice(2);
        Latitude = Number(Latitude).toFixed(2);
        Longitude = Number(Longitude.slice(0, Longitude.length - 2)).toFixed(2);
        Latitude = (Latitude === '0.00') ? 0 : Number(Latitude);
        Longitude = (Longitude === '0.00') ? 0 : Number(Longitude);

        towns.push({Town, Latitude, Longitude});
    }

    console.log(JSON.stringify(towns));
}