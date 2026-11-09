import BlockPage from "@/components/blocks/BlockPage";
import { solutionPages } from "@/content/pages/solutions";

const page = solutionPages["/solutions/pharmacy-owners"];
export const metadata = page.meta;
export default function Page() { return <BlockPage page={page} />; }
