
import './App.css'
import Accordion from './app/components/AccordionComponent/Accordion'
import InputComponent from './app/components/InputComponent/InputComponent'
import SplitScreen from './app/components/SplitScreen.tsx/SplitScreen'
// import Editable from './app/components/Editable/Editable'
import Left from './app/components/LeftComp/Left'
import Right from './app/components/RightComp /Right'
import RegularList from './app/components/RegularList/RegularList'
import SmallPeopleList from './app/components/People/SmallPeopleList'
import LargePeopleList from './app/components/People/LargePeopleList'
import SmallProductList from './app/components/Products/SmallProductList'
import LargeProdutsList from './app/components/Products/LargeProdutsList'
import NumberedList from './app/components/NumberedList/NumberedList'

function App() {

  const showValue = (value) => <><p>the value is <strong>{value}</strong></p></>

  const people = [{
    name: 'André',
    age: 30,
    hairColor: 'Preto',
    hobbies: ['nadar', 'bicicleta', ' correr']
  },
  {
    name: 'Pedro',
    age: 25,
    hairColor: 'Castanho',
    hobbies: ['pescar', 'matematica', ' correr']
  },
  {
    name: 'José',
    age: 56,
    hairColor: 'Castanho Claro',
    hobbies: ['golf', 'bicicleta', ' correr']
  },
  {
    name: 'Fernando',
    age: 55,
    hairColor: 'Castanho Escuro',
    hobbies: ['biologia', 'videojogos', ' correr']
  }
  ]

  const products = [{
    name: 'LCD Flat',
    price: '300€',
    description: 'Huge Lcd',
    rating: 4
  },
  {
    name: 'Laptop i9-10000',
    price: '1200€',
    description: 'Super fast',
    rating: 4.5
  },
  {
    name: 'Nike shoe',
    price: '30€',
    description: 'State of art ',
    rating: 4.2
  }
  ]

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


        <NumberedList
          items={products}
          resourceName='products'
          itemComponent={LargeProdutsList}
        />

        <RegularList
          items={products}
          resourceName='products'
          itemComponent={SmallProductList}
        />
        <RegularList
          items={people}
          resourceName='person'
          itemComponent={SmallPeopleList}
        />

        <RegularList
          items={people}
          resourceName='person'
          itemComponent={LargePeopleList}
        />


        <SplitScreen leftWeight={1} rightWeight={3} >
          <Left name={'Left Side'} />
          <Right name={'Right Side'} />
        </SplitScreen>

        < InputComponent renderText={showValue} />
        <br />
        {/* <Editable /> */}
        <InputComponent renderText={multiply} />
      </div>
    </div>

  )
}



export default App
