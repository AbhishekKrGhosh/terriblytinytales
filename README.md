<h1>TerriblyTinyTales</h1>


<h2>Histogram Data Visualization</h2>



Live link: https://ttt-by-abhishek.netlify.app/

<hr/>

This is a React component for visualizing histogram data using the Recharts library. The component fetches text data from a remote server, counts the occurrence of each word, and displays the top 20 most frequent words in a bar chart.



![image](https://github.com/AbhishekKrGhosh/terriblytinytales/assets/92973940/6e29651f-77fb-45ef-9458-8ebde3826ac2)


![image](https://github.com/AbhishekKrGhosh/terriblytinytales/assets/92973940/9bf21b84-2477-445e-b170-cc302f9dbfd3)


<br/>

<h3>Installation</h3>

To use this component in your React project, you need to have react, react-router-dom, recharts and axios installed. You can install them by running the following command:
<br/>
npm install
<br/>
npm install axios
<br/>
npm install react-router-dom
<br/>
npm install recharts
<br/>

<h3>Component Explanation </h3>
<li>App.js</li>
<li>Home.js</li>
<li>Chart.js</li>
<li>Navigation.js</li>
<br/>
<h2>App.js</h2>
br/>
This code sets up the routing for a React application using React Router. Let's go through it step by step:

The line import './App.css'; imports the CSS file for styling the components in the application.

The line import React from 'react'; imports the necessary modules from the React library.

The lines import Home from './Home';, import NotFound from './NotFound';, and import Download from './Download'; import the components that will be rendered for specific routes.

The line import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; imports the necessary components from the React Router library.

The App function is a React functional component that serves as the entry point for the application.

Inside the App component, the Router component is used to set up the routing configuration.

The Routes component is used as a container for defining individual routes.

The Route components define the routes and specify which component should be rendered when a specific route is matched.

The first Route component has a path prop set to '/' and an element prop set to <Home />. It indicates that when the root path is accessed, the Home component should be rendered.

The second Route component has a path prop set to '/download' and an element prop set to <Download />. It specifies that when the /download path is accessed, the Download component should be rendered.

The third Route component has a path prop set to '*' which acts as a wildcard, matching any path that hasn't been matched by the previous routes. The element prop is set to <NotFound />, indicating that if none of the defined routes match, the NotFound component should be rendered.

The Router and Routes components are wrapped around the content of the App component.

Finally, the App component is exported as the default export of the module.

This code sets up the basic routing structure for the application, rendering different components based on the accessed URL paths. The Home, Download, and NotFound components are used as placeholders for the actual components that will be rendered for each route.






  
The Chart component has the following features:
<br/>
It uses the useState hook to manage the state of histogramData and loading.
 <br/> 
The useEffect hook is used to fetch data from the server when the component mounts.
  <br/>
The fetchData function makes an asynchronous request to the server using axios.get and processes the response data.
  <br/>
The processed data is stored in the histogramData state variable.
  <br/>
The exportData function converts the histogramData to CSV format and initiates the download of the CSV file.
  <br/>
The component renders a bar chart using the BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, and Legend components from the Recharts library.
  <br/>
The bar chart is only rendered when there is data available in the histogramData.
  <br/>
A button is provided to export the histogram data as a CSV file.
  <br/>

