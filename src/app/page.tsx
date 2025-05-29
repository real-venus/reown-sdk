import { ConnectButton } from "@/components/ConnectButton";
import { ActionButtonList } from "@/components/ActionButtonList";

export default function Home() {

  return (
    <div className={"pages"}>
      <h1>Reown SDK</h1>

      <ConnectButton />
      <ActionButtonList />
    </div>
  );
}