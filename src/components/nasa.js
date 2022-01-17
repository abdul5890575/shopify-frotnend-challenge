
import { useState, useEffect } from "react";
import CardList from "./cardlist";
import axios from "axios";

function NASA() {

  const BASEURL = 'https://api.nasa.gov/planetary/apod?api_key='
  const key = 'WCu2zNShfff0aWqlydapBoi2limO2DNnHenZ9dqT'
  const endDate = '2022-01-09'
  const startDate  = '2022-01-01'

  const [cardData,setcardData] = useState([])
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
      const url = BASEURL+key;
      axios.get(url, {
          params: {
            start_date: startDate,
            end_date: endDate
          }
      }).then((res) => {
        for(let i=0; i <res.data.length; i++) {
          res['data'][i]['likes'] = 0
        }
        setcardData((prev) => ( [...prev, res.data]));
        setLoading(false)
        console.log('sssssss',(res.data))
      });
  }, []);

  if (isLoading) {
    return <div className="heading">Loading...</div>;
  }

  return (
    <div className="box">
     <h1 className="heading">Picture of the Day </h1>
        {cardData &&  <CardList cardsData={cardData} setcardData={setcardData} />}
    </div>
  );


  }

  export default NASA;