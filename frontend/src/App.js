import {BrowserRouter,Route,Routes} from 'react-router-dom';

import { Event } from './components/Event/event';





function App() {
  return (
    <>
  <BrowserRouter>
    <Routes>
    <Route path='/Event' element={<Event/>}/>

      
    </Routes>
    </BrowserRouter>
    
    </>
  )
}

export default App
