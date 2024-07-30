
import { MoonPayProvider } from '@moonpay/moonpay-react';
import HomePage from './Components/Home';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <MoonPayProvider
      apiKey="pk_test_PzGiwO9ZJMJh8BhtWVFkrtkXdEUMsZNV"
      debug
    >
      <div >
        <Router>

          <Routes>
            <Route exact path="/" element={<HomePage />} />
          </Routes>
        </Router>

      </div>
    </MoonPayProvider>
  );
}

export default App;
