import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { json, useNavigate } from "react-router-dom";
import { addDatas } from "../stateManagement/createSlice";
import { getAllDatas } from "../stateManagement/createSlice";

const Home = () => {
    const dataText = 'harry';
    const dispatch = useDispatch();
    const data = useSelector(getAllDatas);
    const navigate = useNavigate();
    // console.log(JSON.parse(localStorage.getItem("recentSearch")))
    useEffect(()=>{
                        navigator.geolocation.getCurrentPosition((success)=>{
                                const {latitude,longitude} =success.coords
                              
                            fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=0d038ed3980cf2432f78d78a92010698&units=metric`)
                            .then(res=>res.json())
                            .then((response)=>{
                                    console.log({...response.coord, ...response.main, name:response.name, ...response.weather[0], ...response.wind})
                                    // setData({...response.coord, ...response.main, name:response.name, ...response.weather[0], ...response.wind})
                                    // GetWeatherDetails({...response.coord, ...response.main, name:response.name, ...response.weather[0], ...response.wind})
                                     
                                    dispatch(addDatas({...response.coord, ...response.main, name:response.name, ...response.weather[0], ...response.wind}))
                                })
                      
        
                        })
                            },[])

    const currentLocationHandle=(e)=>{
e.preventDefault();
navigate("/weatherContent")
    }
    const searchHandle=(e)=>{
e.preventDefault();
navigate("/search")
    }

    const recentSearchHandling =(e)=>{
        // e.preventDefault();
        navigate("/search");

        // debugger;
    }

    return (
                    <div className="home_content">
                        <div className="header">
                            <h2>Weather Application</h2>
                        </div>
                        <div className="search_icon" onClick={(e)=>{searchHandle(e)}}>
                           search
                        </div>
                        <div className="weather_data" onClick={(e)=>{currentLocationHandle(e)}}>
                            <p>current Weather in {data.name}</p>
                            <p>temp:{data.temp}°C</p>
                            <p>{data.icon}</p>

                            <img src={`https://openweathermap.org/img/wn/${data.icon}@2x.png`} alt={data.description}></img>
                            <p>{data.description}</p>
                            <p>Humidity:{data.humidity}%</p>
                            <p>Wind :{data.speed}km/hr</p>
                            <p>feels_like:{data.feels_like}</p>
                            {/* <p>lat:{data.lat}</p>
                            <p>lon:{data.lon}</p>
                            <p>pressure:{data.pressure}</p>
                            <p>grnd_level:{data.grnd_level}</p>
                            <p>gust:{data.gust}</p>
                            <p>main:{data.main}</p>
                            <p>sea_level:{data.sea_level}</p>
                            <p>temp_max:{data.temp_max}</p>
                            <p>temp_min:{data.temp_min}</p>
                            <p>deg:{data.deg}</p> */}
                        </div>
                        <div className="fav_content">
                            <h3>Favorite Locations</h3>
                            {JSON.parse(localStorage.getItem("recentSearch"))?JSON.parse(localStorage.getItem("recentSearch")).map((ele,i)=>{
                               return(

                               <div>
                                   <p onClick={(e)=>{recentSearchHandling(e)}}> {ele}</p>
                                </div>
                               )
                            }) :""}
                        </div>
                    </div>
                 )
}
export default Home;