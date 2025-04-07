import Link from "next/link"
import { Button } from "@/components/ui/button"
import FeaturedNFTs from "@/components/featured-nfts"
import CollectionStats from "@/components/collection-stats"
import { ArrowRight } from "lucide-react"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-950">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                  Discover Pudgy Penguins NFTs
                </h1>
                <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
                  Explore, collect, and trade the cutest penguin NFTs on the blockchain. Join the waddle today!
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link href="/marketplace">
                  <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                    Explore Collection
                  </Button>
                </Link>
                <Link href="/connect">
                  <Button size="lg" variant="outline">
                    Connect Wallet
                  </Button>
                </Link>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <div className="relative w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] lg:w-[500px] lg:h-[500px]">
                <img
                  alt="Pudgy Penguin Hero"
                  className="rounded-xl object-cover"
                  src="/placeholder.svg?height=500&width=500"
                  style={{
                    aspectRatio: "1/1",
                    objectFit: "cover",
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Collection Stats */}
      <CollectionStats />

      {/* Featured NFTs */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Featured Penguins</h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Check out these adorable Pudgy Penguins that are making waves in the NFT world.
              </p>
            </div>
          </div>
          <FeaturedNFTs />
          <div className="flex justify-center mt-8">
            <Link href="/marketplace">
              <Button variant="outline" size="lg" className="gap-1">
                View All Penguins
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

