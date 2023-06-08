import { useState, useEffect } from 'react';

function Quotes() {
  const [quoteData, setQuoteData] = useState(['Quote here']);
  const [error, setError] = useState(0);
  const [loading, setLoading] = useState(0);

  useEffect(() => {
    setLoading(1);
    fetch('https://api.api-ninjas.com/v1/quotes?category=intelligence', {
      headers: {
        'X-Api-Key': 'l7joY6pxRAtosVpy+GGSVg==tL66pxRY0ioTzgkd',
      },
    })
      .then((res) => {
        if (!res.ok) {
          setError(1);
        }
        return res.json();
      })
      .then((data) => {
        if (Array.isArray(data) && data.length > 0) {
          setLoading(0);
          setQuoteData(data[0]);
        } else {
          setError(1);
        }
      })
      .catch((error) => {
        setError(error);
      });
  }, []);

  if (loading) return <h4>Loading....</h4>;
  if (error) return <h3>Something went wrong!</h3>;

  return (
    <div className="qoute-cont">
      <p>{quoteData && quoteData.quote}</p>
      <h2>{quoteData.author}</h2>
    </div>
  );
}

export default Quotes;
