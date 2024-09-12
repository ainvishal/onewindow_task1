
import './App.css'
import data from './assets/data'
import Cardcomponent from './components/Cardcomponent'
function App() {
  

  return (
    <>
        <div className='title'>
            <h2>Abroad Studies</h2>
        </div>
        <CardList/>
    </>
  )
}

function CardList() {

  return(
      <>
      <div className='cardList'>
      {data.map(item => <Cardcomponent  item={item}/>)}
      </div>
        
      </>
  )
}

export default App
