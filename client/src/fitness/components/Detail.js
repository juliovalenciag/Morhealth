import React from 'react';
import { Typography, Stack, Button } from '@mui/material';

import BodyPartImage from '../../assets/img/body-part.png';
import TargetImage from '../../assets/img/target.png';
import EquipmentImage from '../../assets/img/equipment.png';


const Detail = ({exerciseDetail}) => {
  const { bodyPart, gifUrl, name, target, equipment } = exerciseDetail;


  const extraDetail = [
    {
      icon: BodyPartImage,
      name: bodyPart,
    },
    {
      icon: TargetImage,
      name: target,
    },
    {
      icon: EquipmentImage,
      name: equipment,
    },
  ];

  return (
    <Stack gap="60px" sx={{ flexDirection: { lg: 'row' }, p: '20px', alignItems: 'center' }}>
      <img src={gifUrl} alt={name} loading="lazy" className="detail-image" />
      <Stack sx={{ gap: { lg: '35px', xs: '20px' } }}>
        <Typography sx={{ fontSize: { lg: '64px', xs: '30px' } }} fontWeight={700} textTransform="capitalize">
            {name}
        </Typography>
        <Typography sx={{ fontSize: { lg: '24px', xs: '18px' } }} color="#4F4C4C">
          Ejercicios que te mantienen fuerte.{' '}
          <span style={{ textTransform: 'capitalize' }}>{name}</span> es uno de los mejores <br /> ejercicios que trabajan {target}. Te ayudarán a mejorar tu condición,{' '}
          <br /> tu humor y obtener energía.
        </Typography>
        {extraDetail?.map((item) => (
          <Stack key={item.name} direction="row" gap="24px" alignItems="center">
            <Button sx={{ background: '#216B91', borderRadius: '50%', width: '100px', height: '100px' }}>
              <img src={item.icon} alt={bodyPart} style={{ width: '50px', height: '50px' }} />
            </Button>
            <Typography textTransform="capitalize" sx={{ fontSize: { lg: '30px', xs: '20px' } }}>
              {item.name}
            </Typography>
          </Stack>
        ))}
      </Stack>
    </Stack>
  )
}

export default Detail