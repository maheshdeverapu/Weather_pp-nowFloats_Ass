import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './home';
import SearchWeather from './search';
const Router =()=>{
  
return(
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/search' element={<SearchWeather/>}/>
        </Routes>
    </BrowserRouter>
)
}
export default Router;