const search=async() => {
    //console.log(countryname.value);
    const response = await fetch(`https://restcountries.com/v3.1/name/${countryname.value}?fullText=true`)
    response.json().then((data)=>{
        console.log(data);
        console.log(data[0]);
        common=data[0].name.common
        console.log(common);
        official=data[0].name.official
        console.log(official);
        for( var cur in data[0].currencies ){
            var name=data[0].currencies[cur].name 
            var symbol=data[0].currencies[cur].symbol
        }
        console.log( name, symbol);
        
        capital=data[0].capital
        console.log(capital);
        NL=[]
        for(var languges in data[0].languages){
            //var lang=data[0].languages[languges]
            NL.push(data[0].languages[languges])
            //console.log(lang);
        }
        console.log(NL);
        
        
        
        border= data[0].borders
        console.log(border);

        area=data[0].area
        console.log(area);

        map=data[0].maps.googleMaps
        console.log(map);

        populations=data[0].population
        console.log(populations);

        time=data[0].timezones
        console.log(time);

        contient= data[0].continents
        console.log(contient);
        flag=data[0].flags.png
        console.log(flag);
        
        countryTable.innerHTML=`<table  class="table table-bordered table-hover mt-4" >
            <tr>
                <th>Flag</th>
                <td><img src=${flag} alt="Country Flag" class="img-fluid rounded" style="max-width: 100px;">
                </td>
            </tr>
            <tr>
              
                <th>Name</th>
                <td >${common}</td>
            </tr>
             <tr>
                <th>Official Name </th>
                <td >${official}</td>
            </tr>
            <tr>
                <th>Capital</th>
                <td >${capital}</td>
            </tr>
            <tr>
                <th>Currency Name </th>
                <td >${name}</td>
            </tr>
            <tr>
                <th>Currency symbol </th>
                <td >${symbol}</td>
            </tr>
            <tr>
                <th>Population</th>
                <td >${populations}</td>
            </tr>
            <tr>
                <th>Languages</th>
                <td>${NL}</td>
            </tr>
            <tr>
                <th>Continent</th>
                <td>${contient}</td>
            </tr>
            <tr>
                <th>Time Zone</th>
                <td>${time}</td>
            </tr>
             <tr>
                <th>Border</th>
                <td>${border}</td>
            </tr>
             <tr>
                <th>Area</th>
                <td>${area}</td>
            </tr>
             <tr>
                <th>Map</th>
                <td>
                <a href="${map}" target="_blank">${map}</a>    </td>
            </tr>
        </table>`
        
        
        
    
        
        
        
      

    })

    
}
  // common
// official
// curency name and symbol
// capital
//languges
// borders
//area
// maps-google maps
//population
//timezones
//contienet 
//flgs -png
// 