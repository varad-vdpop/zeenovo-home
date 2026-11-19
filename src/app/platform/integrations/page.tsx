import { shareMeta } from "@/lib/metadata";
import BlockPage from "@/components/blocks/BlockPage";
import { platformPages } from "@/content/pages/platform";

const page = platformPages["/platform/integrations"];
export const metadata = shareMeta(page.meta);
export default function Page() { return <BlockPage page={page} />; }
