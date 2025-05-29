import { ConnectButton } from "@/components/ConnectButton";
import { InfoList } from "@/components/InfoList";
import { ActionButtonList } from "@/components/ActionButtonList";
import Image from 'next/image';

export default function Home() {

  return (
    <div className={"pages"}>
      <h1>Reown SDK</h1>

      <ConnectButton />
      <ActionButtonList />
    </div>
  );
}