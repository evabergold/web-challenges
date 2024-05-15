import useSWR from "swr";

const fetcher = async (url) => {
  const res = await fetch(url);
  if (!res.ok) {
    const error = new Error("An error occurred while fetching the data.");
    error.info = await res.json();
    error.status = res.status;
    throw error;
  }
  return res.json();
};

export default function RandomCharacter() {
  const { data, isLoading } = useSWR("/api/random-character", fetcher);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (!data) {
    return <h1>No data available</h1>;
  }

  return (
    <>
      <h1>Random Character</h1>
      <ul>
        <h2>
          Name: {data.firstName} {data.lastName}
        </h2>
        <p>Geohash: {data.geohash}</p>
        <p>Twitter: {data.twitterHandle}</p>
        <p>Age: {data.age}</p>
        <p>Profession: {data.profession}</p>
      </ul>
    </>
  );
}
