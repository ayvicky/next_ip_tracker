import {useState, useEffect} from 'react';

function TrackerPage({ip}) {
  // const [ip, setIp] = useState(null);

  // useEffect(() => {
  //   const fetchIp = async () => {
  //     const headers = new Headers();
  //     const response = await fetch('/api/get-ip-address', { headers });
  //     const data = await response.json();
  //     setIp(data);
  //   };
  //   fetchIp();
  // }, []);

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

export async function getServerSideProps(context) {
  const { req } = context;
  const forwarded = req.headers["x-forwarded-for"]
  const ip = forwarded ? forwarded.split(/, /)[0] : req.connection.remoteAddress

  // const ip = req.headers["x-real-ip"] || req.headers['x-forwarded-for'] || req.connection.remoteAddress;
  return { props: { ip} };
}

export default TrackerPage;