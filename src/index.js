import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import './index.css';

const request = async (Link, obj = {}, text = false) => {

  let init = {
    mode: 'no-cors',
    method: 'POST',
    body: JSON.stringify(obj)
  }
  const response = await fetch(Link, init);
  if (!response.ok) throw new Error('Error ' + Link);
  if (text) return response.text();
  return response.json();
}
request('https://api-bcv.onrender.com/api/bcv')
.then(console.log)
.catch((err) => {
  if (err.response) {
    // The request was made, but the server responded with a status code that falls out of the 2xx range
    const { status } = err.response;

    if (status === 401) {
      // The client must authenticate itself to get the requested response
    }
    else if (status === 502) {
      // The server got an invalid response
    }
  }
  else if (err.request) {
    // The request was made, but no response was received
  } 
  else {
    // Some other error
  }
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <main className = "container-fluid bg-darkgray d-flex justify-content-center h-100 p-5 px-5">
    <div className = "bg-lightgray rounded-3 shadow-lg h-100 w-75">
      <div className = "d-flex justify-content-center m-5">
        <h1 className = "">
          Tu Cambio
        </h1>
      </div>
    </div>
  </main>
);