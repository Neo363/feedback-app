import './App.css';
import FeedbackForm from './components/FeedbackForm';
import FeedbackList from './components/FeedbackList';
import FeedbackStats from './components/FeedbackStats';
import Header from './components/Header';
import { FeedbackProvider } from './context/FeedbackContext';

function App() {
  return (
    <FeedbackProvider>
      <div className="App">
        <Header />
        
        <div className="container">
          <FeedbackForm />

          <FeedbackStats />

          <FeedbackList />
        </div>
      </div>
    </FeedbackProvider>
  );
}

export default App;
