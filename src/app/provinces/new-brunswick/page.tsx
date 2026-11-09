import ProvincePage from "../ProvincePage";
import { provinceMeta, provincePages } from "@/content/pages/provinces";

export const metadata = provinceMeta["new-brunswick"];
export default function Page() { return <ProvincePage province={provincePages["new-brunswick"]} />; }
