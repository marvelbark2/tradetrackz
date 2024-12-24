import Layout from "@/components/Layout";
import type { Product } from "@/types";

import useSWR from "swr";


export default function Toto() {
  const { data, isLoading } = useSWR<Product[]>("/api/products", async (url: string) => {
    const res = await fetch(url);
    return res.json();
  });
  return (
    <Layout>
      <h1>Hello here</h1>

      <p>Welcome to Product page</p>

      {isLoading && <p>Loading...</p>}


      {!isLoading && data && (
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">First</th>
              <th scope="col">Last</th>
              <th scope="col">Handle</th>
            </tr>
          </thead>
          <tbody>
            {data.map((product) => (
              <tr key={product.id}>
                <th scope="row">{product.id}</th>
                <td>{product.first}</td>
                <td>{product.last}</td>
                <td>{product.handle}</td>
              </tr>
            ))}
            
          </tbody>
        </table>
      )}
    </Layout>
  )
}

