import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from './components/Header';
import FileUpload from './components/FileUpload';
import TransactionTable from './components/TransactionTable';
import Summary from './components/Summary';
import Chart from './components/Chart';
import './App.css';

const App = () => {
  const [transactions, setTransactions] = useState([]);
  const [summary, setSummary] = useState({ totalIncome: 0, totalExpenses: 0, netBalance: 0 });
  const [chartData, setChartData] = useState({ labels: [], values: [] });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [darkMode, setDarkMode] = useState(false);

  const fetchData = async () => {
    setLoading(true);
    try {
      const transactionsResponse = await axios.get('http://localhost:3001/transactions');
      const summaryResponse = await axios.get('http://localhost:3001/summary');
      setTransactions(transactionsResponse.data);
      setSummary(summaryResponse.data);
      setChartData({
        labels: ['Income', 'Expenses', 'Loan Payments'],
        values: [summaryResponse.data.totalIncome, summaryResponse.data.totalExpenses, 500], // Example data
      });
    } catch (err) {
      console.error('Error fetching data:', err);
      setError('Failed to fetch data. Please check if the mock server is running.');
    } finally {
      setLoading(false);
    }
  };

  const handleFileUpload = (file) => {
    // Simulate file upload and data processing
    console.log('Uploaded file:', file);
    fetchData(); // Fetch data after upload
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  useEffect(() => {
    fetchData(); // Fetch data on component mount
  }, []);

  return (
    <div className={`app ${darkMode ? 'dark-mode' : ''}`}>
      <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <FileUpload onFileUpload={handleFileUpload} />
      {loading && <p className="loading">Loading...</p>}
      {error && <p className="error">{error}</p>}
      <TransactionTable transactions={transactions} />
      <Summary {...summary} />
      <Chart data={chartData} />
    </div>
  );
};

export default App;