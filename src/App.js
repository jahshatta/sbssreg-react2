import React from 'react';
import { Card } from 'antd';
import { Route } from 'wouter';
import Form from './components/Form';
import Confirm from './components/Confirm';
import 'react-phone-input-2/lib/plain.css';
import 'react-phone-number-input/style.css';
import './App.less';

function App() {
  return (
    <div className="App">
      <Route path="/">
        <Card>
          <Form />
        </Card>
      </Route>
      <Route path="/confirm/:token?">{(params) => <Confirm token={params.token} />}</Route>
    </div>
  );
}

export default App;
