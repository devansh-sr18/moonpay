import React,{useState} from 'react';
import { MoonPayBuyWidget } from '@moonpay/moonpay-react';

const HomePage = () => {
    const [visible, setVisible] = useState(false);
  return (
    <div>
      <header>
        <h1>My Simple React Home Page</h1>
      </header>
      <main>
      <button onClick={() => setVisible(!visible)}>
            Toggle widget
        </button>
        <p>Welcome to my simple React home page! This is a basic example of a React project.</p>
        <img src="https://via.placeholder.com/300" alt="Placeholder" />
      </main>
      <MoonPayBuyWidget
            variant="overlay"
            baseCurrencyCode="usd"
            baseCurrencyAmount="100"
            defaultCurrencyCode="eth"
            visible={visible}
        />
    </div>
  );
}

export default HomePage;