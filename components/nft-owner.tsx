interface NFTOwnerProps {
  owner: {
    address: string
    username?: string
    avatar?: string
  }
}

export default function NFTOwner({ owner }: NFTOwnerProps) {
  return (
    <div className="flex items-center gap-2">
      <div className="h-6 w-6 rounded-full overflow-hidden bg-gray-200">
        {owner.avatar ? (
          <img
            src={owner.avatar || "/placeholder.svg"}
            alt={owner.username || "Owner"}
            className="h-full w-full object-cover"
          />
        ) : (
          <div className="h-full w-full bg-blue-500" />
        )}
      </div>
      <div className="text-sm">
        Owned by{" "}
        <span className="font-medium">
          {owner.username || `${owner.address.slice(0, 6)}...${owner.address.slice(-4)}`}
        </span>
      </div>
    </div>
  )
}

