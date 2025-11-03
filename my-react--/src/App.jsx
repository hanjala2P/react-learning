import Actor from './actor';
import Singer from './singer';
import Library from './Library';
import './App.css';


function App() {
  const actors = ['manna','sakib','salman','jack','jasim'];
  const singers=[
    { id:1, name : 'dr.Hanjala', age:68},
    { id:2, name : 'tahsan', age:64},
    { id:3, name : 'farin', age:42}
  ];
  const books = [
    {id: 1, name:'tomar jonno javaScript', price:'860'},
    {id: 2, name:'java', price:'860'},
    {id: 3, name:'chemistry', price:'860'},
    {id: 4, name:'math', price:'860'},
    {id: 5, name:'biology', price:'860'},
  ]

  return (
    <>
      <h2 className="read-the-docs">
        Click on the Vite and React logos to learn more
      </h2>
      <Library books={books}></Library>
      {
        singers.map(singer=> <Singer key={singer.id} singer={singer}></Singer>)
      }
      {
        actors.map(actor=><Actor actor={actor}></Actor>)
      }
    </>
  )
}

export default App
