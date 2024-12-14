import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS } from 'chart.js/auto';
import { Link } from 'react-router-dom'; // Import Link for navigation
import './DashboardPage.css';

function Dashboard() {
  // Data for Bar Chart representing competition participation rate
  const competitionData = {
    labels: ['Dhruv', 'Ayush', 'Dheeraj', 'Jasu'],
    datasets: [
      {
        label: 'Competition Participation',
        data: [80, 70, 85, 95], // Example participation rates
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 1,
      },
    ],
  };

  // Data for the games progress chart
  const gamesData = {
    labels: ['Game 1', 'Game 2', 'Game 3', 'Game 4'],
    datasets: [
      {
        label: 'Scores',
        data: [120, 200, 300, 150], // Example scores for each game
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="dashboard-container">

      {/* Main Dashboard Content with Student Info and Progress side by side */}
      <div className="dashboard-content">
        <div className="student-info">
          <h3>Student Information</h3>
          <p><strong>Name:</strong> Jaskiran</p>
          <p><strong>Student Code:</strong> 12345AB</p>
          <p><strong>Age:</strong> 10</p>
          <p><strong>Level:</strong> Foundation Level 4 </p>
        </div>

        <div className="student-progress">
          <h3>Student Progress</h3>
          <p><strong>Latest Score:</strong> 95%</p>
          <p><strong>Current Level:</strong> Level 4</p>
          <p><strong>Hours Spent:</strong> 20 hours</p>
          <p><strong>Improvement:</strong> +15%</p>
          
          {/* Progress Bar (Line Chart) */}
          <div className="progress-bar-container">
            <p><strong>Progress</strong></p>
            <div className="progress-bar">
              <div className="progress" style={{ width: '75%' }}></div>
            </div>
          </div>
        </div>
      </div>

      {/* Gift Points section in the top-right corner */}
      <div className="gift-points">
        <h3>Gift Points</h3>
        <p>1000 points</p>
        <p>Earned for completing tasks and practicing regularly!</p>
      </div>

      {/* Friends, Dictation, and Gameplay Progress Section */}
      <div className="progress-sections">
        <div className="friends-group">
          <h3>Your Friends</h3>
          <ul>
            <li>Jaskiran - Foundation Level 4 </li>
            <li>Dhruv - Foundation Level 3 </li>
            <li>Dheeraj - Foundation Level 4 </li>
          </ul>
        </div>

        <div className="dictation-section">
          <h3>Dictation Progress</h3>
          <p>Latest Dictation: 90%</p>
          <p>Average Speed: 5 sums per minute</p>
        </div>

        <div className="games-section">
          <h3>Games Played</h3>
          <p>Total Games Played: 12</p>
          <p>Last Game: "Addition Master"</p>
          <p>Best Score: 250 points</p>

          {/* Bar Chart for Games Scores */}
          <div className="games-chart">
            <Bar data={gamesData} options={{ responsive: true }} />
          </div>
        </div>

        {/* Internal Competition Participation Rate Chart */}
        <div className="competition-section">
          <h3>Competition Participation Rate</h3>
          <div className="competition-chart">
            <Bar data={competitionData} options={{ responsive: true }} />
          </div>
        </div>
      </div>

      {/* Button to Redirect to Dictation Page */}
      <div className="redirect-button">
        <Link to="/dictation">
          <button className="dictation-btn">Go to Dictation</button>
        </Link>
      </div>
    </div>
  );
}

export default Dashboard;
