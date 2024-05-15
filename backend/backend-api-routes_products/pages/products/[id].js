import useSWR from "swr";
import { useRouter } from "next/router";

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

export default function ProductDetail() {
  const router = useRouter();
  const { id } = router.query;

  const { data, isLoading } = useSWR(`/api/products/${id}`, fetcher);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (!data) {
    return <h1>No data available</h1>;
  }

  return (
    <>
      <ul>
        <li key={id}>
          <h2>{data.name}</h2>
          <p>{data.description}</p>
          <p>
            Price: {data.price}
            {data.currency}
          </p>
          <p>Category: {data.category}</p>
        </li>
      </ul>
    </>
  );
}
