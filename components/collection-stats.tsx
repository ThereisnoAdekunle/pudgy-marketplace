import { Card, CardContent } from "@/components/ui/card"
import { getCollectionStats } from "@/lib/nft-data"
import { TrendingUp, Users, BarChart3, Clock } from "lucide-react"

export default function CollectionStats() {
  const stats = getCollectionStats()

  return (
    <section className="w-full py-12 bg-gray-50 dark:bg-gray-900">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card>
            <CardContent className="flex flex-row items-center justify-between p-6">
              <div className="space-y-1">
                <p className="text-sm text-gray-500 dark:text-gray-400">Floor Price</p>
                <h3 className="text-2xl font-bold">{stats.floorPrice} ETH</h3>
                <p className={`text-xs ${stats.floorPriceChange >= 0 ? "text-green-500" : "text-red-500"}`}>
                  {stats.floorPriceChange >= 0 ? "+" : ""}
                  {stats.floorPriceChange}% (24h)
                </p>
              </div>
              <TrendingUp className="h-8 w-8 text-gray-400" />
            </CardContent>
          </Card>

          <Card>
            <CardContent className="flex flex-row items-center justify-between p-6">
              <div className="space-y-1">
                <p className="text-sm text-gray-500 dark:text-gray-400">Owners</p>
                <h3 className="text-2xl font-bold">{stats.owners}</h3>
                <p className="text-xs text-gray-500">{stats.ownerPercentage}% unique owners</p>
              </div>
              <Users className="h-8 w-8 text-gray-400" />
            </CardContent>
          </Card>

          <Card>
            <CardContent className="flex flex-row items-center justify-between p-6">
              <div className="space-y-1">
                <p className="text-sm text-gray-500 dark:text-gray-400">Volume</p>
                <h3 className="text-2xl font-bold">{stats.volume} ETH</h3>
                <p className={`text-xs ${stats.volumeChange >= 0 ? "text-green-500" : "text-red-500"}`}>
                  {stats.volumeChange >= 0 ? "+" : ""}
                  {stats.volumeChange}% (24h)
                </p>
              </div>
              <BarChart3 className="h-8 w-8 text-gray-400" />
            </CardContent>
          </Card>

          <Card>
            <CardContent className="flex flex-row items-center justify-between p-6">
              <div className="space-y-1">
                <p className="text-sm text-gray-500 dark:text-gray-400">Avg. Sale (24h)</p>
                <h3 className="text-2xl font-bold">{stats.averageSale} ETH</h3>
                <p className={`text-xs ${stats.averageSaleChange >= 0 ? "text-green-500" : "text-red-500"}`}>
                  {stats.averageSaleChange >= 0 ? "+" : ""}
                  {stats.averageSaleChange}% (24h)
                </p>
              </div>
              <Clock className="h-8 w-8 text-gray-400" />
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

