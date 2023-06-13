/*eslint-disable*/
import {useState, useEffect} from 'react';

function Quotes() {
  const [quoteData, setQuoteData] = useState(['Quote here']);
  const [error, setError] = useState(0);
  const [loading, setLoading] = useState(0);

  useEffect(() => {
    setLoading(1);
    const getData = async () => {
      try {
        const res = await fetch(
          'https://api.api-ninjas.com/v1/quotes?category=intelligence',
          {
            headers: {
              'X-Api-Key': 'l7joY6pxRAtosVpy+GGSVg==tL66pxRY0ioTzgkd',
            },
          }
        );

        if (!res.ok) {
          setError(1);
          return;
        }

        const data = await res.json();

        if (Array.isArray(data) && data.length > 0) {
          setLoading(0);
          setQuoteData(data[0]);
        } else {
          setError(1);
        }
      } catch (error) {
        setError(error);
      }
    };
    getData();
  }, []);

  if (error) return <h3>Something went wrong!</h3>;
  if (loading) return <h4>Loading....</h4>;

  return (
    <div className='qoute-cont'>
      <p>{quoteData && quoteData.quote}</p>
      <h2 className='author'>~ {quoteData.author}</h2>
    </div>
  );
}

export default Quotes;
