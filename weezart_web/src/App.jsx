
import Login from './Pages/Authentication/Login';
import SignUp from "./Pages/Authentication/SignUp";
import Search from './Pages/Search/Search';
import HomePage from './Pages/HomePage/HomePage';


function App() {
  return (
    <div className="App">
      {/* <Login/> */}
      {/* <SignUp/> */}
      <HomePage/>
    </div>
  );
}


export default App;

// import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import Login from './Pages/Login/Login';
// import SignUp from './Pages/Signup/Signup';



// const App = () => {

// 	return (

// 		<BrowserRouter> 
// 			<Routes>
        
// 				<Route path={'/'} element={<Login />}></Route>

// 				<Route path={'/signup'} element={<SignUp/>} > </Route>

// 			</Routes>
//     </BrowserRouter> 
// 	);
// };

// export default App;
