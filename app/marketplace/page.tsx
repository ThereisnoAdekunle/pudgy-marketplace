import { Suspense } from "react"
import NFTGrid from "@/components/nft-grid"
import NFTFilters from "@/components/nft-filters"
import { Skeleton } from "@/components/ui/skeleton"

export default function MarketplacePage() {
  return (
    <div className="container px-4 py-12 md:px-6 md:py-16 lg:py-24">
      <div className="flex flex-col space-y-6">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Pudgy Penguins Marketplace</h1>
          <p className="text-gray-500 md:text-xl dark:text-gray-400">
            Browse and collect adorable Pudgy Penguin NFTs from the collection.
          </p>
        </div>

        <NFTFilters />

        <Suspense fallback={<NFTGridSkeleton />}>
          <NFTGrid />
        </Suspense>
      </div>
    </div>
  )
}

function NFTGridSkeleton() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {Array(12)
        .fill(0)
        .map((_, i) => (
          <div key={i} className="flex flex-col space-y-3">
            <Skeleton className="h-[300px] w-full rounded-xl" />
            <Skeleton className="h-6 w-3/4" />
            <Skeleton className="h-4 w-1/2" />
          </div>
        ))}
    </div>
  )
}

