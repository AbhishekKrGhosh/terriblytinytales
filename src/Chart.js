import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const Chart = () => {
  const [histogramData, setHistogramData] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await axios.get('https://www.terriblytinytales.com/test.txt');
      const textData = response.data;
      const words = textData.split(/\s+/); // Split the text by whitespace characters
      const wordCountMap = words.reduce((countMap, word) => {
        countMap[word] = (countMap[word] || 0) + 1;
        return countMap;
      }, {});
      const sortedWords = Object.keys(wordCountMap).sort((a, b) => wordCountMap[b] - wordCountMap[a]);
      const top20Words = sortedWords.slice(0, 20).map(word => ({
        word,
        count: wordCountMap[word],
      }));
      setHistogramData(top20Words);
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setLoading(false);
    }
  };

  const exportData = () => {
    const csvContent = [
      'Word,Count',
      ...histogramData.map(item => `${item.word},${item.count}`),
    ].join('\n');
    const blob = new Blob([csvContent], { type: 'text/csv' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'histogram_data.csv';
    link.click();
  };
 

  return (
    <div><section>
    <div className="Colour" ></div>
    <div className="Colour"></div>
    <div className="Colour"></div>
      

      {histogramData.length > 0 && (
        <div>
            <div className='maincl'>
          <BarChart width={1500} height={400} data={histogramData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="word" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar className='barhov' dataKey="count" fill="#2f28b8" />
          </BarChart>
          </div>
          <div style={{ display: 'flex', justifyContent: 'center', marginTop: '30px' }}>
          <button className='box' onClick={exportData}>Export</button>
          </div>
        </div>
      )}
      
      
      </section>
      
    </div>
  );
};

export default Chart;


