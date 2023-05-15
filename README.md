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
<br/>
This code sets up the routing for a React application using React Router. Let's go through it step by step:
<br/>
The line import './App.css'; imports the CSS file for styling the components in the application.
<br/>
The line import React from 'react'; imports the necessary modules from the React library.
<br/>
The lines import Home from './Home';, import NotFound from './NotFound';, and import Download from './Download'; import the components that will be rendered for specific routes.
<br/>
The line import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; imports the necessary components from the React Router library.
<br/>
The App function is a React functional component that serves as the entry point for the application.
<br/>
Inside the App component, the Router component is used to set up the routing configuration.
<br/>
The Routes component is used as a container for defining individual routes.
<br/>
The Route components define the routes and specify which component should be rendered when a specific route is matched.
<br/>
The first Route component has a path prop set to '/' and an element prop set to <Home />. It indicates that when the root path is accessed, the Home component should be rendered.
<br/>
The second Route component has a path prop set to '/download' and an element prop set to <Download />. It specifies that when the /download path is accessed, the Download component should be rendered.
<br/>
The third Route component has a path prop set to '*' which acts as a wildcard, matching any path that hasn't been matched by the previous routes. The element prop is set to <NotFound />, indicating that if none of the defined routes match, the NotFound component should be rendered.
<br/>
The Router and Routes components are wrapped around the content of the App component.
<br/>
Finally, the App component is exported as the default export of the module.
<br/>
This code sets up the basic routing structure for the application, rendering different components based on the accessed URL paths. The Home, Download, and NotFound components are used as placeholders for the actual components that will be rendered for each route.
<hr/>
<h2>Home.js</h2>
<br/>
This code defines the Home component, which represents the content of the home page in a React application. Let's go through the code step by step:
<br/>
The line import React from 'react'; imports the necessary modules from the React library.
<br/>
The line import Navigation from './Navigation'; imports the Navigation component, which represents the navigation bar of the application.
<br/>
The line import "./Home.css"; imports the CSS file that contains styles specific to the Home component.
<br/>
The line import { Link } from 'react-router-dom'; imports the Link component from React Router, which allows creating links to other routes in the application.
<br/>
The Home function is a React functional component that represents the home page of the application.
<br/>
Inside the Home component, the Navigation component is rendered. It will display the navigation bar on the home page.
<br/>
The JSX code within the return statement represents the structure and content of the home page.
<br/>
The JSX code is wrapped in a <div> element.
<br/>
The <section> element represents a section within the page.
<br/>
There are three <div> elements with the class name "Colour" that are used to create colored background sections.
<br/>
Inside the fourth <div> element with the class name "Box", there are six <div> elements with the class name "Square". These elements create a grid-like structure.
<br/>
The sixth <div> element with the class name "Container" wraps the form.
<br/>
Inside the "Container", the "Form" <div> element contains a button.
<br/>
The button has the class name "box" and wraps a <Link> component from React Router. The <Link> component creates a link to the "/download" route, and the text "SUBMIT" is displayed inside the button.
<br/>
Finally, the Home component is exported as the default export of the module.
<hr/>
  <h2>Chart.js</h2>
  <br/>
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
  <hr/>
  <h2>Navigation.js</h2>
  <br/>
  This code defines the Navigation component, which represents the navigation bar in a React application. Let's break down the code:
<br/>
The line import React from 'react'; imports the necessary modules from the React library.
<br/>
The line import { Link } from 'react-router-dom'; imports the Link component from React Router, which allows creating links to other routes in the application.
<br/>
The line import './Navbar.css' imports the CSS file that contains styles specific to the navigation bar component.
<br/>
The Navigation function is a React functional component that represents the navigation bar.
<br/>
Inside the Navigation component, the JSX code within the return statement represents the structure and content of the navigation bar.
<br/>
The navigation bar is wrapped in a <nav> element with the class name "navbar".
<br/>
The <Link> component with the class name "logo" represents the application logo or title. It links to the root path ("/") using the to prop.
<br/>
The '<ul>' element with the class name "nav-links" represents the list of navigation links.
<br/>
Inside the list, there is a single navigation item represented by an '<li>' element.
<br/>
The navigation link is created using the <Link> component. It has the class name "plain-link" and links to the root path ("/") using the to prop. The link text is "Home".
<br/>
Finally, the Navigation component is exported as the default export of the module.
<br/>
