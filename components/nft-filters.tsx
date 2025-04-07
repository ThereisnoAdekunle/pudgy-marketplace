"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Filter, SlidersHorizontal } from "lucide-react"

export default function NFTFilters() {
  const [showFilters, setShowFilters] = useState(false)
  const [priceRange, setPriceRange] = useState([0, 10])

  return (
    <div className="w-full">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
        <div className="flex items-center gap-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => setShowFilters(!showFilters)}
            className="flex items-center gap-2"
          >
            <SlidersHorizontal className="h-4 w-4" />
            Filters
          </Button>
          <Select defaultValue="recently-listed">
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Sort by" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="recently-listed">Recently Listed</SelectItem>
              <SelectItem value="price-low-high">Price: Low to High</SelectItem>
              <SelectItem value="price-high-low">Price: High to Low</SelectItem>
              <SelectItem value="most-rare">Most Rare</SelectItem>
              <SelectItem value="most-common">Most Common</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="w-full sm:w-auto">
          <div className="relative">
            <Filter className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
            <Input type="search" placeholder="Search by name or ID..." className="w-full sm:w-[300px] pl-9" />
          </div>
        </div>
      </div>

      {showFilters && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6 mb-6 bg-gray-50 dark:bg-gray-900 rounded-lg">
          <div>
            <h3 className="font-medium mb-4">Price Range (ETH)</h3>
            <div className="space-y-6">
              <Slider defaultValue={[0, 10]} max={10} step={0.1} value={priceRange} onValueChange={setPriceRange} />
              <div className="flex items-center space-x-4">
                <div>
                  <Label htmlFor="min-price">Min</Label>
                  <Input
                    id="min-price"
                    type="number"
                    value={priceRange[0]}
                    onChange={(e) => setPriceRange([Number.parseFloat(e.target.value), priceRange[1]])}
                    min={0}
                    max={priceRange[1]}
                    step={0.1}
                  />
                </div>
                <div>
                  <Label htmlFor="max-price">Max</Label>
                  <Input
                    id="max-price"
                    type="number"
                    value={priceRange[1]}
                    onChange={(e) => setPriceRange([priceRange[0], Number.parseFloat(e.target.value)])}
                    min={priceRange[0]}
                    max={10}
                    step={0.1}
                  />
                </div>
              </div>
            </div>
          </div>

          <div>
            <h3 className="font-medium mb-4">Status</h3>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <input type="checkbox" id="buy-now" className="rounded border-gray-300" />
                <Label htmlFor="buy-now">Buy Now</Label>
              </div>
              <div className="flex items-center space-x-2">
                <input type="checkbox" id="on-auction" className="rounded border-gray-300" />
                <Label htmlFor="on-auction">On Auction</Label>
              </div>
              <div className="flex items-center space-x-2">
                <input type="checkbox" id="new" className="rounded border-gray-300" />
                <Label htmlFor="new">New</Label>
              </div>
              <div className="flex items-center space-x-2">
                <input type="checkbox" id="has-offers" className="rounded border-gray-300" />
                <Label htmlFor="has-offers">Has Offers</Label>
              </div>
            </div>
          </div>

          <div>
            <h3 className="font-medium mb-4">Attributes</h3>
            <Accordion type="multiple" className="w-full">
              <AccordionItem value="background">
                <AccordionTrigger>Background</AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <input type="checkbox" id="bg-blue" className="rounded border-gray-300" />
                      <Label htmlFor="bg-blue">Blue</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <input type="checkbox" id="bg-green" className="rounded border-gray-300" />
                      <Label htmlFor="bg-green">Green</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <input type="checkbox" id="bg-red" className="rounded border-gray-300" />
                      <Label htmlFor="bg-red">Red</Label>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="outfit">
                <AccordionTrigger>Outfit</AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <input type="checkbox" id="outfit-suit" className="rounded border-gray-300" />
                      <Label htmlFor="outfit-suit">Suit</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <input type="checkbox" id="outfit-hoodie" className="rounded border-gray-300" />
                      <Label htmlFor="outfit-hoodie">Hoodie</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <input type="checkbox" id="outfit-sweater" className="rounded border-gray-300" />
                      <Label htmlFor="outfit-sweater">Sweater</Label>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="accessory">
                <AccordionTrigger>Accessory</AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <input type="checkbox" id="acc-glasses" className="rounded border-gray-300" />
                      <Label htmlFor="acc-glasses">Glasses</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <input type="checkbox" id="acc-hat" className="rounded border-gray-300" />
                      <Label htmlFor="acc-hat">Hat</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <input type="checkbox" id="acc-necklace" className="rounded border-gray-300" />
                      <Label htmlFor="acc-necklace">Necklace</Label>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      )}
    </div>
  )
}

