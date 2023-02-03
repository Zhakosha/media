import './App.css';
import Header from './Header';
import Hello from './components/Hello';
import Footer from './components/Footer';

function Articles(props) {
  return(
    <div>
      <p>{props.name}</p>
      <p>{props.link}</p>
      <img src={props.image}/>
    </div>
  )
}

function App() {

  const text = [
    {
        id: 0,
        name: '7 Practical CSS Tips',
        link: 'You not only learn more Python by implementing what you already know but, in the end, you can see how all your hard work pays off.',
        image: './images/2.png',
    },
    {
        id: 1,
        name: '3 Practical JS Tips',
        link: 'Recently, I’ve been automating tasks more than often due to my lack of time. Thanks to that I have 5 new projects that I classified as beginner, intermediate, and advanced. You’ll find links to the full scripts and tutorials to solve each project. Also, I’m leaving a challenge to each of them to test your Python skills.To make things easier, I already created a template for a cover letter. Here’s how the template we’ll use looks...',
        image: './images/3.png',
    },
    
        {
        id: 2,
        name: '5 Practical HTML Tips',
        link: 'Recently, I’ve been automating tasks more than often due to my lack of time. Thanks to that I have 5 new projects that I classified as beginner, intermediate, and advanced. You’ll find links to the full scripts and tutorials to solve each project. Also, I’m leaving a challenge to each of them to test your Python skills.To make things easier, I already created a template for a cover letter. Here’s how the template we’ll use looks...',
        image: './images/4.png',
    }
]


  return (
    <div className="App">
      <Header/>
      <Hello/>
      
     {/* {text.map(function(text, id) {
        return <Articles key={id} name{text.name} summary{text.summary} src{text.src}/>
      })
      } */}
      
      <Footer/>
    </div>
  );
}

export default App;
