import { shareMeta } from "@/lib/metadata";
import BlockPage from "@/components/blocks/BlockPage";
import { productPages } from "@/content/pages/products";

const page = productPages["/products/assure/self-assessment"];
export const metadata = shareMeta(page.meta);
export default function Page() { return <BlockPage page={page} />; }
