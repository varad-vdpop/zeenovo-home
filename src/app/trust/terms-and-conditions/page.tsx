import BlockPage from "@/components/blocks/BlockPage";
import { companyPages } from "@/content/pages/company";

const page = companyPages["/trust/terms-and-conditions"];
export const metadata = page.meta;
export default function Page() { return <BlockPage page={page} />; }
