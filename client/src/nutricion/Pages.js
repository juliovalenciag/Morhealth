import React from 'react';
import {Route, Routes } from 'react-router-dom';
import Veggie from './Veggie';
import Popular from './Popular';

function Pages() {
  return (
    <div>
        <Veggie/>
        <Popular/>
    </div>
  )
}

export default Pages