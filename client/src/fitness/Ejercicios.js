import React, {useState} from 'react';
import { Box } from '@mui/material';

import SearchExercises  from '../fitness/components/SearchExercises';
import Exercises from '../fitness/components/Exercises';


const Ejercicios = () => {

  const [exercises, setExercises] = useState([]);
  const [bodyPart, setBodyPart] = useState('all');

  return (
    <Box>
      <SearchExercises setExercises={setExercises} bodyPart={bodyPart} setBodyPart={setBodyPart}/>
      <Exercises setExercises={setExercises} exercises={exercises} bodyPart={bodyPart}/>
    </Box>
  )
}

export default Ejercicios