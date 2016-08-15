var USER_CURRENT_LOCATION = "USER_CURRENT_LOCATION";
var WeatherWidget = React.createClass({

    getInitialState: function(){

        return {};
    },

	onLocationFoundSuccess: function (position) {
		var latitude  = position.coords.latitude;
		var longitude = position.coords.longitude;

		var url = 'http://api.openweathermap.org/data/2.5/forecast?lat='+latitude+'&lon='+longitude+'&APPID=657ef7aabd3d5f744eb93ca11e2a19d4';

		this.updateWeather(url);
	},

	onLocationFoundError: function () {
		console.log("Unable to retrieve your location");
		this.setState({responce: {cod: 404}});
	},
	
	tryToFindUserLocation: function(){
		navigator.geolocation.getCurrentPosition(this.onLocationFoundSuccess, this.onLocationFoundError);
	},
	
	updateWeather: function(url){
		$.get(url, function (result) {
			console.log(result);
			this.setState({responce: result});
		}.bind(this));
	},	  
	
	updateWeatherURL: function(){
		if(this.props.currentLocation == USER_CURRENT_LOCATION){
			this.tryToFindUserLocation();
		}else{
			var url = 'http://api.openweathermap.org/data/2.5/forecast?q='+this.props.currentLocation+'&APPID=657ef7aabd3d5f744eb93ca11e2a19d4';
			this.updateWeather(url);
		}
	},
	
    componentDidMount: function(){
        this.timer = setInterval(this.tick, 30000);
		this.updateWeatherURL();
    },

    componentWillUnmount: function(){
        clearInterval(this.timer);
		
    },
	
	componentDidUpdate: function(prevProps, prevState){
		
		if(this.props.currentLocation != prevProps.currentLocation){
			this.setState({responce: null});
			this.updateWeatherURL();
		}
		
	},

    tick: function(){
        this.updateWeatherURL();
    },

    render: function() {
		if(typeof this.state.responce == 'undefined' || this.state.responce == null){
			return <h2 className="error">Not load yet!</h2>;
		}
		
		if(this.state.responce.cod != 200){
			return <h2 className="error">Error loading location {this.props.currentLocation}!</h2>;
		}
		
		
		var threeHoursForecast = [];
		for (var i = 0; i < 3; i++) {
			var imgSource = "http://openweathermap.org/img/w/" + this.state.responce.list[i].weather[0].icon + ".png";
			
			threeHoursForecast.push(
				<li key={i}>
                   <div className="day">{this.state.responce.list[i].dt_txt}</div>
                   <div className="temp"><img src={imgSource} alt="" />{(this.state.responce.list[i].main.temp-273).toFixed(1)}</div>
                   <div className="clText">
                     <p>{this.state.responce.list[i].weather[0].description}</p>
		             <p>Wind {Math.round(this.state.responce.list[i].wind.speed)} m.s.</p>
                   </div>
                    
                </li>
			);
		}
		
		var futureForecast = [];
		for (var i = 8; i < this.state.responce.list.length; i+=8) {
			var imgSource = "http://openweathermap.org/img/w/" + this.state.responce.list[i].weather[0].icon + ".png";
			
			futureForecast.push(
				<li key={i}>
			   	   <div className="day">{this.state.responce.list[i].dt_txt}</div>
	             	<div className="temp"><img src={imgSource} alt="" />{(this.state.responce.list[i].main.temp-273).toFixed(1)}</div>
                   <div className="clText">
                     <p>{this.state.responce.list[i].weather[0].description}</p>
                     <p>Wind {Math.round(this.state.responce.list[i].wind.speed)} m.s.</p>
                    </div>
                    
                </li>
			);
		}
        return (
		<div className="weather-container">
		
			<h2>{this.state.responce.city.name},{this.state.responce.city.country}</h2>
			<h2>Three hours weather forecast </h2>
            <ul>
				{threeHoursForecast}
            </ul>
			
			<h2>Future weather forecast </h2>
            <ul>
				{futureForecast}
            </ul>
		
        </div>
		);
    }
});

var CityWidget = React.createClass({

    getInitialState: function(){
        return {city: this.props.city};
    },
	
	deleteClick: function() {
		this.props.deleteCallback(this.state.city);
	},

	captionClick: function() {
		this.props.clickCallback(this.state.city);
	},
	
    render: function() {
        return (
			<div className="city-container">
				<div onClick={this.captionClick} className="city">
					{this.state.city.caption}
				</div>
				{this.state.city.caption != USER_CURRENT_LOCATION ? <span className="delete" onClick={this.deleteClick}>x</span> : null}
			</div>
			
		);
    }
});

var CityListWidget = React.createClass({

    getInitialState: function(){
		var citiesList = [{id:"id1", caption: USER_CURRENT_LOCATION }];
		var currentCity = {id:"id1", caption: USER_CURRENT_LOCATION };
		if(localStorage.getItem('citiesList')){
			citiesList = JSON.parse(localStorage.getItem('citiesList'));
		}
		
		if(localStorage.getItem('currentCity')){
			currentCity = JSON.parse(localStorage.getItem('currentCity'));
		}
		
		return {citiesList : citiesList, currentCity: currentCity };	
    },


	addCity: function(){
		var newCitiesList = this.state.citiesList;
		var uniq = 'id' + (new Date()).getTime();
	
		var inputValue = this.refs.cityCaptionInput.value.replace(/[^a-zA-Z _-]+/g, "");
		if(inputValue.length > 3){
			
		
		var newCity = {id:uniq, caption: inputValue};
	
		newCitiesList.push(newCity);
		this.setState({citiesList:newCitiesList});
		localStorage.setItem('citiesList', JSON.stringify(this.state.citiesList));
		this.refs.cityCaptionInput.value = '';
		}
		else{
			return;
		}
	},
	
	deleteCity: function(city){
		var newCitiesList = this.state.citiesList;
		
		for (var n = 0 ; n < newCitiesList.length ; n++) {
			if (newCitiesList[n].id == city.id) {
			  var removedObject = newCitiesList.splice(n,1);
			  removedObject = null;
			  break;
			}
		}
		
		localStorage.setItem('citiesList', JSON.stringify(newCitiesList));
		this.setState({citiesList: newCitiesList});
		
		if(city == this.state.currentCity){
			this.onCityClick(newCitiesList[newCitiesList.length-1]);
		}
		
	},
	  
	
	onCityClick: function(city){
		console.log(city.caption);
		this.setState({currentCity: city});
		localStorage.setItem('currentCity', JSON.stringify(city));
		this.props.cityChangeCallback(city.caption);
	}, 
	
    render: function() {
		console.log(this.state);
		var cityWidgetList = [];
		
		for (var i = 0; i < this.state.citiesList.length; i++) {
			var city = this.state.citiesList[i];
			var style = this.state.citiesList[i].id == this.state.currentCity.id ? {color: "#FFF"} : {color: "#000"};
			cityWidgetList.push(			
				<div style={style} key={this.state.citiesList[i].id}>
					<CityWidget city={city} clickCallback={this.onCityClick} deleteCallback={this.deleteCity}/>
                </div>
			);
		}
        return (
			<div className="cities-container">
				<input type="text" ref="cityCaptionInput" placeholder="Enter city caption"/>
                <button onClick={this.addCity} type="button" name="button">Add city</button> 
				<div className="cities">
					{cityWidgetList}
				</div>
				
				
			</div>
		);
    }
});

var App = React.createClass({

    getInitialState: function(){
		var currentLocation = USER_CURRENT_LOCATION;
		
		if(localStorage.getItem('currentCity')){
			currentLocation = JSON.parse(localStorage.getItem('currentCity')).caption;
		}
        return {currentLocation: currentLocation};
    },
	
	onCityChange: function(caption){
		this.setState({currentLocation : caption});
	},

    render: function() {
        return (
			<div className="wrapper">				
				<CityListWidget cityChangeCallback={this.onCityChange}/>
				<WeatherWidget currentLocation={this.state.currentLocation}/>
			</div>
		);
    }
});

ReactDOM.render(
  <App/>,
  document.getElementById("app")
);

