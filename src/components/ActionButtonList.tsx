'use client'
import { useDisconnect, useAppKitNetwork  } from '@reown/appkit/react'
import { networks } from '@/config'

export const ActionButtonList = () => {
    const { disconnect } = useDisconnect();
    const { switchNetwork } = useAppKitNetwork();

    const handleDisconnect = async () => {
      try {
        await disconnect();
      } catch (error) {
        console.error("Failed to disconnect:", error);
      }
    }
  return (
    <div>
        
        <button onClick={() => switchNetwork(networks[0]) }>BSC</button>
        <button onClick={() => switchNetwork(networks[1]) }>Ethereum</button>
        <button onClick={handleDisconnect}>Disconnect</button>
    </div>
  )
}
