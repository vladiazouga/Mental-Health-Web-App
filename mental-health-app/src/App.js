import React, {useState} from 'react';
import axios from 'axios';

const App = () => {
  const [response, setResponse] = useState('');

  const handleCheckupSubmit = () => {
    axios.post('http://your-backend-api/checkup', { answer: 'User response here' })
      .then(response => setResponse(response.data.message))
      .catch(error => console.error(error));
  };


  return (
    <div>
      <h1>Mental Health Checkup</h1>
      <p>How are you feeling today?</p>
      <textarea
        rows="4"
        cols="50"
        onChange={(e) => setResponse(e.target.value)}
      ></textarea>
      <br />
      <button onClick={handleCheckupSubmit}>Submit</button>
      {response && <p>{response}</p>}
    </div>
  );
};

export default App;
