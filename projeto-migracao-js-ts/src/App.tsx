import './App.css'


function soma(x: number, y: number): number {
  return x + y;
}

const App = () => {
  return (
    <div>Olá Typescript! 2 + 2 = {soma(2, 2)}</div>
  )
}

export default App