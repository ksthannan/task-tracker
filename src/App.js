import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Task from './components/Task';
function App() {
  return (
    <div className="main-wrap">
    <Header title="Task Tracker" />
    <Task />
    <Footer text="Copyright &copy; 2021. All Rights Reserved."/>
    </div>
  );
}

export default App;
