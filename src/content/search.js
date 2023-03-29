import { useDispatch, useSelector } from "react-redux";
import { getAllDatas } from "../stateManagement/createSlice";
import React, { useEffect, useState, useContext } from "react";
import { AppContext } from "../stateManagement/useContext";
import "./search.css"
const SearchWeather = () => {
    const [searchState, setSearchState] = useState("");
    const [searchArea, setSearchArea] = useState([])
    const [searchForcast, setSearchForcast] = useState([]);
    const [isState, setIsState] = useState(false)
    const [isForcastState, setIsForcastState] = useState(false)

    const { favoriteLocations } = useContext(AppContext)

    useEffect(() => {
        searchHandling()
    }, [favoriteLocations])

    const searchHandling = async (e) => {
        if (e) { e.preventDefault(); }
        let arr = [];
        let savedLocation = favoriteLocations
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${searchState || savedLocation}&appid=0d038ed3980cf2432f78d78a92010698&units=metric`)
            .then(res => res.json())
            .then((response) => {
                if (response.message == 'Nothing to geocode' || response.message == 'city not found') {
                    setIsState(false);
                    return alert('please enter valid data')
                }
                else {
                    savedLocation = "";
                    setIsState(true)
                    setSearchState("");
                    console.log(response)
                    setSearchArea(response)
                    arr = JSON.parse(localStorage.getItem("recentSearch"))
                    if (arr.length <= 5) {

                        arr.push(searchState)
                    } else {
                        if(!searchState==""){
                            
                            arr.splice(0, 1);
                            arr.push(searchState)
                        }
                    }
                    localStorage.setItem("recentSearch", JSON.stringify(arr))
                }
            }).catch((err) => { setIsState(false); console.log(err); })
        fetch(`https://api.openweathermap.org/data/2.5/forecast/?q=${searchState || savedLocation}&appid=0d038ed3980cf2432f78d78a92010698&units=metric`)
            .then(res => res.json())
            .then((response) => {
                if (response) {
                    console.log(...response.list)
                    setSearchForcast(response.list);
                    setIsForcastState(true)
                }
                else {
                    setIsForcastState(false);
                }

            })
            .catch((err) => { setIsForcastState(false); console.log(err); })
    }

    return (
        <div className="search_content">
            <div className="search_main_content">

                <input className="input_cont" onChange={(e) => { setSearchState(e.target.value) }} placeholder="search by City / State / Country name" value={searchState} />
                <button className="button_cont" onClick={(e) => { searchHandling(e) }}>Search</button>
            </div>
            {!isState ? "" :
                <div className="searched_cont">
                    <p className="current_location">current Weather in {searchArea.name}</p>
                    <p className="location_data">temp:{searchArea.main.temp}°C</p>

                    <img src={`https://openweathermap.org/img/wn/${searchArea.weather[0].icon}@2x.png`} alt={searchArea.weather[0].description}></img>
                    <p className="location_data_des">{searchArea.weather[0].description}</p>
                    <p className="location_data">Humidity:{searchArea.main.humidity}%</p>
                    <p className="location_data">Wind :{searchArea.wind.speed}km/hr</p>

                </div>
            }
            {isForcastState && <h2 className="six_day_forcast">Six days forcast weather</h2>}
            <div className="forcast_content">
                {isForcastState ? searchForcast.map((ele, i) => {
                    return (
                        <div key={i} className="forcast_inner_content" >

                            <p>{new Date(ele.dt * 1000).toLocaleDateString()}</p>
                            <p>{new Date(ele.dt_txt).toLocaleTimeString()}</p>

                            <img src={`https://openweathermap.org/img/wn/${ele.weather[0].icon}@2x.png`} alt={searchArea.weather[0].description}></img>
                            <p>{ele.weather[0].description}</p>
                            <p>Wind :{ele.wind.speed} km/hr</p>

                        </div>
                    )
                }) : ""}
            </div>

        </div>
    )
}
export default SearchWeather;