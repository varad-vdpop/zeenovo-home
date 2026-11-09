import BlockPage from "@/components/blocks/BlockPage";
import { productPages } from "@/content/pages/products";

const page = productPages["/products/magistral"];
export const metadata = page.meta;
export default function Page() { return <BlockPage page={page} />; }
