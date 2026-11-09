import ProvincePage from "../ProvincePage";
import { provinceMeta, provincePages } from "@/content/pages/provinces";

export const metadata = provinceMeta["nova-scotia"];
export default function Page() { return <ProvincePage province={provincePages["nova-scotia"]} />; }
