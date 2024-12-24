import Layout from "@/components/Layout";
import { useRouter } from "next/router";

export default function Toto() {

  const router = useRouter()

  const id = router.query.id;
  return (
    <Layout>
      <h1>Hello there</h1>
      <p>Welcome to my page product with this id: {id}</p>
    </Layout>
  )
}