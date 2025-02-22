import "../blocks/app.css";
import Header from "../components/Header";
import Main from "../components/Main";

function App() {
  //const [count, setCount] = useState(0)

  return (
    <div className="page">
      <div className="page__content">
       <Header />
       <Main />
      </div>
    </div>
  )
}

export default App;
