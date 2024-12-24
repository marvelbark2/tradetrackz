import type { NextApiRequest, NextApiResponse } from "next";

import fs from "fs"
import path from "path";
import type { Product } from "@/types";



export default function handler(_: NextApiRequest, res: NextApiResponse) {

  const p = path.join(process.cwd(), "products.json")
  const data = fs.readFileSync(p, "utf-8")
  const products: Product[] = JSON.parse(data)

  return res.status(200).json(products)
}