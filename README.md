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

