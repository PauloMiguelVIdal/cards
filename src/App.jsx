
import './App.css';
import InterfaceCards from './components/InterfaceCards.jsx';
import { ArchiveCentralProvider } from './components/ArchiveCentral.jsx';

function App() {
  return (
    <ArchiveCentralProvider>
      <div className="App">
        teste
        <InterfaceCards />
      </div>
    </ArchiveCentralProvider>
  );
}

export default App;
