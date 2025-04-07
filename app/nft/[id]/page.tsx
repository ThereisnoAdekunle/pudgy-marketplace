import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { getNFTById } from "@/lib/nft-data"
import { ArrowLeft, ExternalLink, Share2 } from "lucide-react"
import NFTAttributes from "@/components/nft-attributes"
import NFTHistory from "@/components/nft-history"
import NFTOwner from "@/components/nft-owner"

interface NFTPageProps {
  params: {
    id: string
  }
}

export default function NFTPage({ params }: NFTPageProps) {
  const nft = getNFTById(params.id)

  if (!nft) {
    return (
      <div className="container px-4 py-12 md:px-6 md:py-16 lg:py-24 text-center">
        <h1 className="text-3xl font-bold">NFT Not Found</h1>
        <p className="mt-4 text-gray-500">The Pudgy Penguin you're looking for doesn't exist.</p>
        <Link href="/marketplace" className="mt-6 inline-block">
          <Button>Back to Marketplace</Button>
        </Link>
      </div>
    )
  }

  return (
    <div className="container px-4 py-12 md:px-6 md:py-16 lg:py-24">
      <Link
        href="/marketplace"
        className="inline-flex items-center gap-2 mb-8 text-gray-500 hover:text-gray-900 dark:hover:text-gray-300"
      >
        <ArrowLeft className="h-4 w-4" />
        Back to Marketplace
      </Link>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
        <div className="flex flex-col space-y-6">
          <div className="relative aspect-square overflow-hidden rounded-xl border bg-white dark:bg-gray-950">
            <img src={nft.image || "/placeholder.svg"} alt={nft.name} className="h-full w-full object-cover" />
          </div>

          <Card>
            <CardContent className="p-6">
              <h2 className="text-xl font-semibold mb-4">Attributes</h2>
              <NFTAttributes attributes={nft.attributes} />
            </CardContent>
          </Card>
        </div>

        <div className="flex flex-col space-y-6">
          <div className="flex flex-col space-y-2">
            <div className="flex items-center justify-between">
              <h1 className="text-3xl font-bold">{nft.name}</h1>
              <div className="flex items-center gap-2">
                <Button variant="outline" size="icon">
                  <Share2 className="h-4 w-4" />
                </Button>
                <Button variant="outline" size="icon">
                  <ExternalLink className="h-4 w-4" />
                </Button>
              </div>
            </div>
            <NFTOwner owner={nft.owner} />
          </div>

          <Card>
            <CardContent className="p-6">
              <div className="flex flex-col space-y-4">
                <div className="flex items-center justify-between">
                  <div className="text-sm text-gray-500">Current Price</div>
                  <div className="text-sm text-gray-500">#{nft.tokenId}</div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="text-2xl font-bold">{nft.price} ETH</div>
                  <div className="text-sm text-gray-500">(${nft.priceUSD})</div>
                </div>
                <Button className="w-full bg-blue-600 hover:bg-blue-700">Buy Now</Button>
                <Button variant="outline" className="w-full">
                  Make Offer
                </Button>
              </div>
            </CardContent>
          </Card>

          <Tabs defaultValue="details">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="details">Details</TabsTrigger>
              <TabsTrigger value="history">History</TabsTrigger>
              <TabsTrigger value="offers">Offers</TabsTrigger>
            </TabsList>
            <TabsContent value="details" className="p-4">
              <p className="text-gray-500">{nft.description}</p>
            </TabsContent>
            <TabsContent value="history" className="p-4">
              <NFTHistory history={nft.history} />
            </TabsContent>
            <TabsContent value="offers" className="p-4">
              <p className="text-center text-gray-500 py-8">No offers yet</p>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  )
}

