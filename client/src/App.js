
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import ListPage from "./pages/ListPage";
import ProductPage from "./pages/ProductPage";
import './App.css'
import { useEffect } from "react";
import { getAllData } from "./api";
import { useDispatch } from 'react-redux'

function App() {

  const dispatch = useDispatch()

  useEffect(() => {
    getAllData(dispatch)
  }, [])

  return (
    <Router>
        <Routes>
            <Route path="/" element={ <ListPage /> } />
            <Route path="/:id" element={ <ProductPage /> } />
        </Routes>
    </Router>
  );
}

export default App;
