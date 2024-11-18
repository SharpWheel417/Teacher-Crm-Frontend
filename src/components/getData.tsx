import { useEffect, useState } from 'react';

const GetData = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('http://localhost:3000')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json().then(data => data.name); // Используем json() для JSON
      })
      .then(data => setData(data))
      .catch(error => setError(error.message));
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      {data ? (
        <pre>{JSON.stringify(data, null, 2)}</pre> // Форматируем JSON для отображения
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default GetData;
