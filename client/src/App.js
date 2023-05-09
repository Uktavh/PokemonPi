
import {Route,Routes,useLocation,useNavigate} from 'react-router-dom';
import {Home,Landing,Detail,Form,About} from './views'

import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllPokemons, getTypes } from './redux/actions';
import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';

import s from './App.module.css'
import FormCreate from './components/FormCreate/FormCreate';
import Cards from './views/Cards/Cards';


function App() {

  const location = useLocation()
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getAllPokemons())
    dispatch(getTypes())
  }, [])
  
  const allPokes = useSelector(state => state.allPokes)
  const allTypes = useSelector(state => state.allTypes)
  return (
    <div className={s.app}>
      {
        location.pathname !== '/' && <NavBar />
      }
      <Routes>
<Route exact path='/' element={<Landing />} />
<Route path='/home' element={<Home allPokes={allPokes} allTypes={allTypes} />} />
<Route path='/form' element={<Form />} />
<Route path='/detail/:id' element={<Detail />} />
<Route path='/cards' element={<Cards/>}/>
<Route path='/cards/create-card' element={<FormCreate/>}/>
<Route path='/my-work' element={<div/>}/>
<Route path='/play' element={<div/>}/>
<Route path='/blog' element={<div/>}/>
<Route path='/about-me' element={<div/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;