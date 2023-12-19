import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import { Chart } from "chart.js/auto";
import { TbMenu } from "react-icons/tb";
import { GoArrowRight } from "react-icons/go";

const Graph = () => {
  const chartRef = useRef(null);
  const chartInstance = useRef(null);

  useEffect(() => {
    if (chartInstance.current) {
      chartInstance.current.destroy();
    }
    const myChartRef = chartRef.current.getContext("2d");

    chartInstance.current = new Chart(myChartRef, {
      type: "line",
      data: {
        labels: [
          "Label 1",
          "Label 2",
          "Label 3",
          "Label 4",
          "Label 5",
          "Label 6",
          "Label 7",
        ],
        datasets: [
          {
            label: "My First Dataset",
            data: [65, 59, 80, 81, 56, 55, 40],
            fill: false,
            borderColor: "rgb(75, 192, 192)",
            tension: 0.1,
          },
        ],
      },
    });
    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
  }, []);

  return (
    <GraphMain>
      <div className="header">
        <h3>Users by device</h3>
        <TbMenu className="icon" />
      </div>
      <div className="report">
        <input type="date" />
        <a href="#">
          View Full Report <GoArrowRight className="icon" />
        </a>
      </div>
      <div className="pieContainer">
        <canvas ref={chartRef} style={{ width: "100px", height: "150px" }} />
      </div>
    </GraphMain>
  );
};

export default Graph;

const GraphMain = styled.div`
  .header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 2px solid #ebebeb;
    padding: 15px;

    h3 {
      color: #00002b;
      font-weight: 500;
      font-size: 19px;
    }
    .icon {
      color: darkgray;
      font-size: 20px;
    }
  }
  .pieContainer {
    padding: 10px 20px;
  }
  .report {
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 2px solid #ebebeb;
    padding: 15px;
    background-color: #f4f8fb;

    input {
      padding: 10px 20px;
      border: none;
      outline: none;
      border: 1px solid #d6d6d6;
      border-radius: 5px;
      color: #c3c3c3;
    }
    a {
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 10px 20px;
      border: 1px solid #d6d6d6;
      background-color: #fff;
      border-radius: 5px;
      text-decoration: none;
      color: #000;

      .icon {
        margin-left: 5px;
      }
    }
  }
`;
