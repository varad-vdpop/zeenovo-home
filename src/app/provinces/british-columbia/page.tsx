import ProvincePage from "../ProvincePage";
import { provinceMeta, provincePages } from "@/content/pages/provinces";

export const metadata = provinceMeta["british-columbia"];
export default function Page() { return <ProvincePage province={provincePages["british-columbia"]} />; }
