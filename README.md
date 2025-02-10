# Bank Statement Analyzer

A responsive web application for analyzing bank statements. It allows users to upload a CSV file, view transactions in a table, see a financial summary, and visualize data using charts.

## Features
- **File Upload**: Upload a CSV file containing bank transactions.
- **Transaction Table**: View transactions with details like date, description, amount, type, and category.
- **Financial Summary**: Display aggregated metrics like total income, total expenses, and net balance.
- **Data Visualization**: Visualize transaction categories using a pie chart and trends over time using a line chart.
- **Dark/Light Mode**: Toggle between dark and light themes for better user experience.
- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices.

## Setup Instructions
### Prerequisites
- Node.js (v22)
- npm (v10)

### Steps to Run the Project
1. **Clone the Repository**:
  
   git clone https://github.com/your-username/Banks.git
   cd Banks



Install Dependencies: npm install

Start the Mock API Server: npx json-server --watch db.json --port 3001

Start the React App: npm start

Open the App:
Visit http://localhost:3000 in your browser.

Design Decisions
1. Responsive Design
The app is designed to be fully responsive, ensuring a seamless experience across devices (desktop, tablet, mobile).

Media Queries were used to adjust the layout and font sizes for smaller screens.

Flexbox and CSS Grid were used for flexible and dynamic layouts.

2. Dark/Light Mode
A toggle button in the header allows users to switch between dark and light modes.

The dark mode uses a dark background (#121212) and light text (#ffffff) to reduce eye strain in low-light environments.

The light mode uses a light background (#f4f4f9) and dark text (#333) for better readability in bright environments.

3. Data Visualization
Chart.js and react-chartjs-2 were used to create interactive charts.

A Pie Chart visualizes the distribution of transaction categories (e.g., Income, Expenses, Loan Payments).

A Line Chart shows trends in transaction amounts over time.

4. Error Handling
The app includes error handling for file uploads and API requests.

User-friendly error messages are displayed if the uploaded file is not a valid CSV or if the API fails to fetch data.

5. Modular Code Structure
The app is structured into reusable components:

Header: Displays the app title and navigation links.

FileUpload: Handles file uploads and validation.

TransactionTable: Displays transactions in a table.

Summary: Shows aggregated financial metrics.

Chart: Visualizes data using charts.

This modular approach makes the codebase easier to maintain and extend.

6. Performance Optimization
Lazy Loading: Components are loaded only when needed to improve performance.

Memoization: React's useMemo and useCallback hooks are used to optimize rendering and avoid unnecessary re-renders.

Trade-Offs
1. Mock API
For simplicity, a mock API (json-server) is used instead of a real backend. This allows for quick development and testing but lacks advanced features like authentication or database integration.

2. CSV Parsing
The app assumes the uploaded CSV file follows a specific format. In a real-world scenario, additional validation and parsing logic would be required to handle different file formats and edge cases.

3. Chart Responsiveness
While the charts are responsive, they may not look perfect on very small screens (e.g., mobile devices). This could be improved by dynamically adjusting chart dimensions based on screen size.

Technologies Used
Frontend: React, Chart.js, Axios

Styling: CSS (Flexbox, Media Queries)

Mock API: json-server


Screenshots
Light Mode
![My Photo](/light.PNG)

Dark Mode Screenshot

![My Photo](/dark.PNG)


