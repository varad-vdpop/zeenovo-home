import { shareMeta } from "@/lib/metadata";
import BlockPage from "@/components/blocks/BlockPage";
import { companyPages } from "@/content/pages/company";

const page = companyPages["/resources/case-studies"];
export const metadata = shareMeta(page.meta);
export default function Page() { return <BlockPage page={page} />; }
