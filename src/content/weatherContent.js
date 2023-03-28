import { useSelector } from "react-redux";
import { getAllDatas } from "../stateManagement/createSlice";

const WeatherContent=()=>{
    const data = useSelector(getAllDatas)
    return(
        <div>
        <div>
            <h2>Weather Application</h2>
        </div>
        <div onClick={()=>{}}>
            <p>current Weather in {data.name}</p>
            <p>temp:{data.temp}°C</p>
            <p>{data.icon}</p>

            <img src={`https://openweathermap.org/img/wn/${data.icon}@2x.png`} alt={data.description}></img>
            <p>{data.description}</p>
            <p>Humidity:{data.humidity}%</p>
            <p>Wind :{data.speed}km/hr</p>
            <p>feels_like:{data.feels_like}</p>
            <p>lat:{data.lat}</p>
            <p>lon:{data.lon}</p>
            <p>pressure:{data.pressure}</p>
            <p>grnd_level:{data.grnd_level}</p>
            <p>gust:{data.gust}</p>
            <p>main:{data.main}</p>
            <p>sea_level:{data.sea_level}</p>
            <p>temp_max:{data.temp_max}</p>
            <p>temp_min:{data.temp_min}</p>
            <p>deg:{data.deg}</p>
        </div>
       
    </div>
    )
}
export default WeatherContent;