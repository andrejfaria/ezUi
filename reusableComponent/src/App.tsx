
import './App.css'
import Accordion from './app/components/AccordionComponent/Accordion'
import InputComponent from './app/components/InputComponent/InputComponent'
// import Editable from './app/components/Editable/Editable'


function App() {

  const showValue = (value) => <><p>the value is <strong>{value}</strong></p></>


  function multiply(value) {
    return (
      <>
        <p>
          the value is {value * 10}
        </p>
      </>)

  }

  return (
    <div className="App">
      <div>

        <Accordion />
        <InputComponent renderText={showValue} />
        <br />
        {/* <Editable /> */}
        <InputComponent renderText={multiply} />
      </div>
    </div>

  )
}

export default App
