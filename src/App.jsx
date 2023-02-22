import './App.css'
import Navbar from './components/navbar/navbar'
import Itemlistcontainer from './components/itemListContainer/itemListContainer'


const App = ()=> {
  return (
<main className='container'>
<Navbar />
<Itemlistcontainer titulo='NutriFIT'
subitutlo='Aquí encontrarás todos los suplementos que necesitas!' />

</main>
  )
}

export default App
