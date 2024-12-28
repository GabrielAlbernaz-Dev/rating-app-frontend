import { Component } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header'
import AppRoutes from './routes/AppRoutes';

class App extends Component {
  render() {
    return <>
      <Header />
      <AppRoutes />
    </>
  }
}

export default App;
