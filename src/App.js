import React from 'react';
import { Card } from 'antd';
import Form from './components/Form';
import 'react-phone-input-2/lib/plain.css';
import 'react-phone-number-input/style.css';
import './App.less';

function App() {
  return (
    <div className="App">
      <Card className="regForm" bodyStyle={{ padding: 0 }}>
        <Form />
      </Card>
    </div>
  );
}

export default App;
