import {BrowserRouter,Route,Routes} from 'react-router-dom';
import { SignIn } from './components/signin/signin.js';
import { SignUp } from './components/signup/signup.js';
import {  ForgotPassword } from './components/Forgotpassword/forgotpassword.js';
import { Students } from './components/students/student.js';




function App() {
  return (
    <>
  <BrowserRouter>
    <Routes>
      <Route path='/signIn' element={<SignIn/>}/>
      <Route path='/signup' element={<SignUp/>}/>
      <Route path='/students' element={<Students/>}/>
      <Route path='/forgotpassword' element={<ForgotPassword/>}/>
    </Routes>
    </BrowserRouter>
    
    </>
  )
}

export default App
