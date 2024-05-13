import Link from "../components/Link";
import QuickActions from "../components/QuickActions";
import Layout from "@/components/Layout";

export default function Actions({
  lights,
  onToggle,
  turnedOnLightsCount,
  toggleAllLights,
}) {
  const allLightsOn = turnedOnLightsCount === lights.length;
  const allLightsOff = turnedOnLightsCount === 0;

  return (
    <Layout isDimmed={allLightsOff}>
      <>
        <Link href="/">← Back home</Link>
        <h1>Quick Actions</h1>
        <QuickActions
          onToggleAllLightsOn={() => toggleAllLights(true)}
          onToggleAllLightsOff={() => toggleAllLights(false)}
          allLightsOn={allLightsOn}
          allLightsOff={allLightsOff}
        />
      </>
    </Layout>
  );
}
