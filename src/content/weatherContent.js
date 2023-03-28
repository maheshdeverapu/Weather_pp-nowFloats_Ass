import { useSelector } from "react-redux";
import { getAllDatas } from "../stateManagement/createSlice";
import "./weatherContent.css"
const WeatherContent=()=>{
    const data = useSelector(getAllDatas)
    return(
        <div className="home_content">
        <div className="header">
            <h2>Weather Application</h2>
        </div>
        <div onClick={()=>{}}>
            <p className="current_location">current Weather in {data.name}</p>
            <p className="location_data">temp:{data.temp}°C</p>
            <p className="location_data">{data.icon}</p>

            <img src={`https://openweathermap.org/img/wn/${data.icon}@2x.png`} alt={data.description}></img>
            <p className="location_data_des">{data.description}</p>
            <p className="location_data">Humidity:{data.humidity}%</p>
            <p className="location_data">Wind :{data.speed}km/hr</p>
            <p className="location_data">feels_like:{data.feels_like}</p>
            <p className="location_data">lat:{data.lat}</p>
            <p className="location_data">lon:{data.lon}</p>
            <p className="location_data">pressure:{data.pressure}</p>
            <p className="location_data">grnd_level:{data.grnd_level}</p>
            <p className="location_data">gust:{data.gust}</p>
            <p className="location_data">main:{data.main}</p>
            <p className="location_data">sea_level:{data.sea_level}</p>
            <p className="location_data">temp_max:{data.temp_max}</p>
            <p className="location_data">temp_min:{data.temp_min}</p>
            <p className="location_data">deg:{data.deg}</p>
        </div>
       
    </div>
    )
}
export default WeatherContent;