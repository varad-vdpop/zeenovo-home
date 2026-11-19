import { shareMeta } from "@/lib/metadata";
import ProvincePage from "../ProvincePage";
import { provinceMeta, provincePages } from "@/content/pages/provinces";

export const metadata = shareMeta(provinceMeta["alberta"]);
export default function Page() { return <ProvincePage province={provincePages["alberta"]} />; }
