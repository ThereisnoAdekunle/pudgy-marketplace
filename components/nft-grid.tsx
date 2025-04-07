"use client"

import Link from "next/link"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { getAllNFTs } from "@/lib/nft-data"
import { useState } from "react"

export default function NFTGrid() {
  const allNFTs = getAllNFTs()
  const [visibleNFTs, setVisibleNFTs] = useState(12)

  const loadMore = () => {
    setVisibleNFTs((prev) => prev + 12)
  }

  return (
    <div className="flex flex-col space-y-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {allNFTs.slice(0, visibleNFTs).map((nft) => (
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
                <div className="text-sm text-gray-500">{nft.rarity}</div>
              </CardFooter>
            </Card>
          </Link>
        ))}
      </div>

      {visibleNFTs < allNFTs.length && (
        <div className="flex justify-center">
          <Button onClick={loadMore} variant="outline">
            Load More
          </Button>
        </div>
      )}
    </div>
  )
}

