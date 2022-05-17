import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ListMessage from './components/ListMessage';
import AddMessage from './components/AddMessage';
import PageContent from './components/PageContent';

function App() {
  const styles = {
    padding: "100px 200px",
    color: "#b8babb"
  }
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <main style={styles}>
            {/* <ListMessage /> */}
            <AddMessage />
            <PageContent />
          </main>
        </Route>
        <Route path="/message">
          <main style={styles}>
            <ListMessage />
          </main>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
