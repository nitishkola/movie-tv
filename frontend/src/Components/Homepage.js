import React from 'react';

function Homepage({ loginStatus }) {
  return (
    <div>
      {loginStatus !== null && (
        <p2>
          <center>
            {loginStatus ? 'Login Successful!' : 'Login Successful'}
          </center>
        </p2>
      )}
    </div>
  );
}

export default Homepage;