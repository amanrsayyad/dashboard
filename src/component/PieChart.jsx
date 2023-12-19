import React, { useEffect, useRef } from "react";
import Chart from "chart.js/auto";
import styled from "styled-components";
import { TbMenu } from "react-icons/tb";
import { GoArrowRight } from "react-icons/go";

const PieChart = () => {
  const chartRef = useRef(null);
  const chartInstance = useRef(null);

  useEffect(() => {
    if (chartInstance.current) {
      chartInstance.current.destroy();
    }
    const myChartRef = chartRef.current.getContext("2d");
    chartInstance.current = new Chart(myChartRef, {
      type: "pie",
      data: {
        labels: ["Label 1", "Label 2", "Label 3"],
        datasets: [
          {
            data: [300, 50, 100],
            backgroundColor: ["#238DFB", "#83C1FE", "#B6DAFE"],
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
    <PieMain>
      <div className="header">
        <h3>Users by device</h3>
        <TbMenu className="icon" />
      </div>
      <div className="pieContainer">
        <canvas ref={chartRef} style={{ width: "100px", height: "100px" }} />
      </div>
      <div className="footer-pie">
        <select>
          <option>Last Week</option>
        </select>
        <a href="#">
          View full report <GoArrowRight className="icon" />
        </a>
      </div>
    </PieMain>
  );
};

export default PieChart;

const PieMain = styled.div`
  .header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 1rem;
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
    padding: 30px;
  }
  .footer-pie {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px;

    select {
      border: none;
      outline: none;
      border: 1px solid gray;
      padding: 5px 20px;
      border-radius: 5px;
    }
    a {
      display: flex;
      align-items: center;
      justify-content: center;
      text-decoration: none;
      color: #00002b;

      .icon {
        margin-left: 5px;
      }
    }
  }
`;
