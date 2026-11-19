import { shareMeta } from "@/lib/metadata";
import BlockPage from "@/components/blocks/BlockPage";
import { provincesOverview } from "@/content/pages/provinces";

export const metadata = shareMeta(provincesOverview.meta);
export default function Page() { return <BlockPage page={provincesOverview} />; }
