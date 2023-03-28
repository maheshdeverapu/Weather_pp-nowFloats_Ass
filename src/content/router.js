import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './home';
import SearchWeather from './search';
import WeatherContent from './weatherContent';
const Router =()=>{
  
return(
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/weatherContent' element={<WeatherContent/>}/>
            <Route path='/search' element={<SearchWeather/>}/>
        </Routes>
    </BrowserRouter>
)
}
export default Router;