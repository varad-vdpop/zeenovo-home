import { shareMeta } from "@/lib/metadata";
import ProvincePage from "../ProvincePage";
import { provinceMeta, provincePages } from "@/content/pages/provinces";

export const metadata = shareMeta(provinceMeta["nova-scotia"]);
export default function Page() { return <ProvincePage province={provincePages["nova-scotia"]} />; }
