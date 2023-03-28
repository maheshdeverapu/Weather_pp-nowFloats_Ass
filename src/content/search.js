import { useDispatch, useSelector } from "react-redux";
import { getAllDatas } from "../stateManagement/createSlice";
import React,{ useState } from "react";
import "./search.css"
const SearchWeather =()=>{
    const [searchState,setSearchState] = useState("");
    const [searchArea,setSearchArea] = useState([])
    const [searchForcast,setSearchForcast] = useState([]);
    const [isState,setIsState] = useState(false)
    const [isForcastState,setIsForcastState] = useState(false)
    // const dispatch = useDispatch();
    const data = useSelector(getAllDatas);
    const searchHandling=(e)=>{
        e.preventDefault();
        let arr = [];
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${searchState}&appid=0d038ed3980cf2432f78d78a92010698&units=metric`)
        .then(res=>res.json())
        .then((response)=>{
                // console.log({...response.coord, ...response.main, name:response.name, ...response.weather[0], ...response.wind})
                // setData({...response.coord, ...response.main, name:response.name, ...response.weather[0], ...response.wind})
                // GetWeatherDetails({...response.coord, ...response.main, name:response.name, ...response.weather[0], ...response.wind})
                if(response){ setIsState(true)
                console.log(response)
                 setSearchArea(response)
                 arr = JSON.parse(localStorage.getItem("recentSearch"))
                 if(arr.length <= 5){

                 arr.push(searchState)
                 }else{
                    arr.splice(0,1);
                    arr.push(searchState)
                 }
                 localStorage.setItem("recentSearch",JSON.stringify(arr))
                }
                // dispatch(addDatas({...response.coord, ...response.main, name:response.name, ...response.weather[0], ...response.wind}))
            }).catch((err)=>{setIsState(false);console.log(err); return alert('please enter valid data')})
            fetch(`https://api.openweathermap.org/data/2.5/forecast/?q=${searchState}&appid=0d038ed3980cf2432f78d78a92010698&units=metric`)
            .then(res=>res.json())
            .then((response)=>{
                // console.log({...response.coord, ...response.main, name:response.name, ...response.weather[0], ...response.wind})
                // setData({...response.coord, ...response.main, name:response.name, ...response.weather[0], ...response.wind})
                // GetWeatherDetails({...response.coord, ...response.main, name:response.name, ...response.weather[0], ...response.wind})
                if(response){
                    console.log(...response.list)
                    setSearchForcast(response.list);
                    setIsForcastState(true)
                } 
                // dispatch(addDatas({...response.coord, ...response.main, name:response.name, ...response.weather[0], ...response.wind}))
            })
        .catch((err)=>{setIsForcastState(false);console.log(err); })
    }
// console.log(...searchArea.weather)

    return(
        <div className="search_content">
            <div className="search_main_content">

<input className="input_cont" onChange={(e)=>{setSearchState(e.target.value)}} placeholder="search by City / State / Country name" />
<button className="button_cont" onClick={(e)=>{searchHandling(e)}}>Search</button>
        </div>
        {!isState?"": 
        <div className="searched_cont">
        <p  className="current_location">current Weather in {searchArea.name}</p>
                            <p className="location_data">temp:{searchArea.main.temp}°C</p>

                            <img src={`https://openweathermap.org/img/wn/${searchArea.weather[0].icon}@2x.png`} alt={searchArea.weather[0].description}></img>
                            <p className="location_data_des">{searchArea.weather[0].description}</p>
                            <p className="location_data">Humidity:{searchArea.main.humidity}%</p>
                            <p className="location_data">Wind :{searchArea.wind.speed}km/hr</p>
                            <p className="location_data">feels_like:{searchArea.main.feels_like}</p>

        </div>
}
        <div className="forcast_content">
            {isForcastState?searchForcast.map((ele,i)=>{
                return(
                    <div key={i}  className="forcast_inner_content" >
                        <p>{ele.pop}</p>
                        <p>{ele.dt_txt}</p>
                        <p>{ele.wind.speed} km/hr</p>
                        <p>{ele.weather[0].description}</p>
                        <img src={`https://openweathermap.org/img/wn/${ele.weather[0].icon}@2x.png`} alt={searchArea.weather[0].description}></img>

                    </div>
                )
            }):""}
        </div>

        </div>
    )
}
export default SearchWeather;