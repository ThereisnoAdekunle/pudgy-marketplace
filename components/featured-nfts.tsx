import Link from "next/link"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { getFeaturedNFTs } from "@/lib/nft-data"

export default function FeaturedNFTs() {
  const featuredNFTs = getFeaturedNFTs()

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
      {featuredNFTs.map((nft) => (
        <Link href={`/nft/${nft.id}`} key={nft.id} className="group">
          <Card className="overflow-hidden transition-all hover:shadow-lg">
            <div className="aspect-square overflow-hidden">
              <img
                src={nft.image || "/placeholder.svg"}
                alt={nft.name}
                className="h-full w-full object-cover transition-transform group-hover:scale-105"
              />
            </div>
            <CardContent className="p-4">
              <h3 className="font-semibold text-lg">{nft.name}</h3>
              <p className="text-sm text-gray-500">#{nft.tokenId}</p>
            </CardContent>
            <CardFooter className="p-4 pt-0 flex justify-between items-center">
              <div className="font-medium">{nft.price} ETH</div>
              <div className="text-sm text-gray-500">Last Sale: {nft.lastSale} ETH</div>
            </CardFooter>
          </Card>
        </Link>
      ))}
    </div>
  )
}

