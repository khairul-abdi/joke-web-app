// src/components/Error.js
import React from 'react';

const Error = ({ message }) => (
    <div className="text-center text-red-500 p-4">
      Error: {message}
    </div>
);

export default Error;
