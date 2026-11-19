import { shareMeta } from "@/lib/metadata";
import BlockPage from "@/components/blocks/BlockPage";
import { solutionPages } from "@/content/pages/solutions";

const page = solutionPages["/solutions/patients"];
export const metadata = shareMeta(page.meta);
export default function Page() { return <BlockPage page={page} />; }
