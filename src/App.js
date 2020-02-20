import React from 'react';
import CalendarView from './components/calendar';
import './App.css';

class App extends React.Component {
  
  render() {
    return (
      <div style={{ padding: '20px' }}>
        <CalendarView />
      </div>
    );
  }
}

export default App;
