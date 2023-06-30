import axios from 'axios';
import React, { useEffect, useState } from 'react';
export default function Profile(){
    const [data, setData] = useState([]);

    useEffect(() => {
      fetchData();
    }, []);
  
    const fetchData = async () => {
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/todos');
        setData(response.data);
        console.log("printing got values",data);
      } catch (error) {
        console.log(error);
      }
    };
    
  useEffect(() => {
    console.log("Printing fetched data:", data);
  }, [data]);

    return (
         <><div>
            <h2>Welcome to Profile Page</h2>
            {JSON.stringify(data)}
         </div>

        </>
    )
}
