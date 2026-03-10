import { buildMetadata } from "@/utils/seoConfig";
import HomePageClient from "@/components/home/HomePageClient";

export const metadata = buildMetadata("home");

export default function HomePage() {
  return <HomePageClient />;
}
