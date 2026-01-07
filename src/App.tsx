import Hello from './Hello';
import Avatar from './components/Avatar';
import './App.css'

function App() {

  const Bart = {
    image: "https://www.stickees.com/files/cartoon/the-simpsons/2239-bart-simpson-.png",
    firstName: "Bart",
    lastName: "Simpson",
    city: "Springfield",
    age: 15,
  };
  const Homer = {
    image: "https://www.stickees.com/files/cartoon/the-simpsons/2246-homer-simpson-donut-2.png",
    firstName: "Homer",
    lastName: "Simpson",
    city: "Springfield",
    age: 55,
  };

  return (
    <>
     <Hello />
     <Avatar firstname={Bart.firstName} lastanme={Bart.lastName} image={Bart.image} />
     <Avatar firstname={Homer.firstName} lastanme={Homer.lastName} image={Homer.image} />
    </>
  )
}

export default App
