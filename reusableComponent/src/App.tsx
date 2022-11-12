
import './App.css'
import Accordion from './app/components/AccordionComponent/Accordion'
import InputComponent from './app/components/InputComponent/InputComponent'
import SplitScreen from './app/components/SplitScreen.tsx/SplitScreen'
// import Editable from './app/components/Editable/Editable'
import Left from './app/components/LeftComp/Left'
import Right from './app/components/RightComp /Right'

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

        <SplitScreen
          left={Left}
          right={Right}
          leftWeight={1}
          rightWeight={3}
        />
        < InputComponent renderText={showValue} />
        <br />
        {/* <Editable /> */}
        <InputComponent renderText={multiply} />
      </div>
    </div>

  )
}

export default App
