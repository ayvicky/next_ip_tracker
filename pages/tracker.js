import React from 'react';

function TrackerPage() {
  const [ip, setIp] = useState(null);

  useEffect(() => {
    const fetchIp = async () => {
      const headers = new Headers();
      const response = await fetch('/api/get-ip-address', { headers });
      const data = await response.json();
      setIp(data);
    };
    fetchIp();
  }, []);

  return (
    <div>
      {ip ? (
        <p>Your IP address is: {ip}</p>
      ) : (
        <p>Loading IP...</p>
      )}
    </div>
  );
}

export async function getInitialProps() {
  return {};
}

export default TrackerPage;