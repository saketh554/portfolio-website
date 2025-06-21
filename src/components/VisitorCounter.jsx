import React, { useEffect, useState } from 'react';

const VisitorCounter = () => {
  const [count, setCount] = useState(null);

  useEffect(() => {
    const url = 'https://api.counterapi.dev/v2/portfolio-team/website-visits/up';

    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        if (data?.data?.up_count !== undefined) {
          setCount(data.data.up_count);
        }
      })
      .catch((error) => console.error('Error fetching counter:', error));
  }, []);

  return (
    <div className="text-center text-white mt-4 text-sm">
      {count !== null ? (
        <p>👀 {count} people have visited this site!</p>
      ) : (
        <p>Loading visitor count...</p>
      )}
    </div>
  );
};

export default VisitorCounter;
