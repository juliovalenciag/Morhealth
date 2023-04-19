import React from "react";
import Chart from "react-apexcharts";
import styled from "styled-components";

const Progress = () => {
  const data = {
    series: [
      {
        name: "Progreso",
        data: [10, 50, 30, 90, 40, 120, 100],
      },
    ],
    options: {
      chart: {
        type: "area",
        height: '100%', 
        width: '100%',
      },
      fill: {
        colors: ["#3C589E"], 
        type: "gradient",
        gradient: {
          shadeIntensity: 1,
          opacityFrom: 0.7,
          opacityTo: 0.3,
          stops: [0, 90, 100],
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: "smooth",
        colors: ["#3C589E"], 
        width: 3, 
      },
      tooltip: {
        x: {
          format: "dd/MM/yy HH:mm",
        },
      },
      grid: {
        show: false,
      },
      xaxis: {
        type: "datetime",
        categories: [
          "2023-09-19T00:00:00.000Z",
          "2023-09-19T01:30:00.000Z",
          "2023-09-19T02:30:00.000Z",
          "2023-09-19T03:30:00.000Z",
          "2023-09-19T04:30:00.000Z",
          "2023-09-19T05:30:00.000Z",
          "2023-09-19T06:30:00.000Z",
        ],
      },
      yaxis: {
        show: false,
      },
      toolbar: {
        show: false,
      },
    },
  };

  const data2 = {
    series: [
      {
        name: "Progreso",
        data: [10,20, 50, 30, 90, 40, 120, 100],
      },
    ],
    options: {
      chart: {
        type: "area",
        height: '100%', 
        width: '100%',
      },
      fill: {
        colors: ["#3C589E"], 
        type: "gradient",
        gradient: {
          shadeIntensity: 1,
          opacityFrom: 0.7,
          opacityTo: 0.3,
          stops: [0, 50,75, 100],
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: "smooth",
        colors: ["#216B91"], 
        width: 5, 
      },
      tooltip: {
        x: {
          format: "dd/MM/yy HH:mm",
        },
      },
      grid: {
        show: false,
      },
      xaxis: {
        type: "datetime",
        categories: [
          "2023-09-19T00:00:00.000Z",
          "2023-09-19T01:30:00.000Z",
          "2023-09-19T02:30:00.000Z",
          "2023-09-19T03:30:00.000Z",
          "2023-09-19T04:30:00.000Z",
          "2023-09-19T05:30:00.000Z",
          "2023-09-19T06:30:00.000Z",
        ],
      },
      yaxis: {
        categories: ['enero','febrero','marzo'],
        
      },
      toolbar: {
        show: false,
      },
    },
  };

  return (
    <StyledContainer>
      <Title>Progreso</Title>
      <Chart options={data.options} series={data.series} type="area" />
      <Title>Mensual</Title>
      <Chart options={data2.options} series={data2.series} type="area" />
    </StyledContainer>
  );
};

const StyledContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
  padding: 0;
`;

const Title = styled.h2`
  margin-bottom: 1rem;
  color: #031721;
`;

export default Progress;