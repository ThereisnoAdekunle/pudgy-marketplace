import { formatDistanceToNow } from "date-fns"

interface HistoryItem {
  event: string
  price?: number
  from: string
  to: string
  date: Date
  txHash: string
}

interface NFTHistoryProps {
  history: HistoryItem[]
}

export default function NFTHistory({ history }: NFTHistoryProps) {
  return (
    <div className="space-y-4">
      {history.map((item, index) => (
        <div key={index} className="flex items-center justify-between py-3 border-b last:border-0">
          <div className="flex flex-col">
            <div className="font-medium">{item.event}</div>
            <div className="text-sm text-gray-500">
              From {shortenAddress(item.from)} to {shortenAddress(item.to)}
            </div>
            <div className="text-xs text-gray-400">{formatDistanceToNow(item.date, { addSuffix: true })}</div>
          </div>
          {item.price && <div className="font-medium">{item.price} ETH</div>}
        </div>
      ))}
    </div>
  )
}

function shortenAddress(address: string): string {
  return `${address.slice(0, 6)}...${address.slice(-4)}`
}

