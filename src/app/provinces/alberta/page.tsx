import ProvincePage from "../ProvincePage";
import { provinceMeta, provincePages } from "@/content/pages/provinces";

export const metadata = provinceMeta["alberta"];
export default function Page() { return <ProvincePage province={provincePages["alberta"]} />; }
