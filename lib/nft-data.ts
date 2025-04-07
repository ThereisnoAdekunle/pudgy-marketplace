export interface NFT {
  id: string
  tokenId: string
  name: string
  description: string
  image: string
  price: number
  priceUSD: number
  lastSale: number
  owner: {
    address: string
    username?: string
    avatar?: string
  }
  attributes: {
    trait_type: string
    value: string
    rarity?: number
  }[]
  rarity: string
  history: {
    event: string
    price?: number
    from: string
    to: string
    date: Date
    txHash: string
  }[]
}

export interface CollectionStats {
  floorPrice: number
  floorPriceChange: number
  owners: number
  ownerPercentage: number
  volume: number
  volumeChange: number
  averageSale: number
  averageSaleChange: number
}

// Mock data for the NFTs
const nfts: NFT[] = [
  {
    id: "1",
    tokenId: "1234",
    name: "Pudgy Penguin #1234",
    description: "A cute and adorable Pudgy Penguin with a blue background and cool sunglasses.",
    image: "/placeholder.svg?height=500&width=500",
    price: 2.5,
    priceUSD: 4500,
    lastSale: 2.2,
    owner: {
      address: "0x1234567890abcdef1234567890abcdef12345678",
      username: "PenguinLover",
      avatar: "/placeholder.svg?height=50&width=50",
    },
    attributes: [
      { trait_type: "Background", value: "Blue", rarity: 12 },
      { trait_type: "Body", value: "Classic", rarity: 45 },
      { trait_type: "Face", value: "Happy", rarity: 30 },
      { trait_type: "Outfit", value: "Hoodie", rarity: 15 },
      { trait_type: "Accessory", value: "Sunglasses", rarity: 8 },
    ],
    rarity: "Rare",
    history: [
      {
        event: "Sale",
        price: 2.2,
        from: "0xabcdef1234567890abcdef1234567890abcdef12",
        to: "0x1234567890abcdef1234567890abcdef12345678",
        date: new Date(2023, 5, 15),
        txHash: "0x123456789abcdef",
      },
      {
        event: "List",
        price: 2.5,
        from: "0x1234567890abcdef1234567890abcdef12345678",
        to: "0x0000000000000000000000000000000000000000",
        date: new Date(2023, 5, 16),
        txHash: "0x123456789abcdef",
      },
    ],
  },
  {
    id: "2",
    tokenId: "5678",
    name: "Pudgy Penguin #5678",
    description: "A rare Pudgy Penguin with a red background and a crown.",
    image: "/placeholder.svg?height=500&width=500",
    price: 3.8,
    priceUSD: 6840,
    lastSale: 3.5,
    owner: {
      address: "0xabcdef1234567890abcdef1234567890abcdef12",
      username: "NFTWhale",
      avatar: "/placeholder.svg?height=50&width=50",
    },
    attributes: [
      { trait_type: "Background", value: "Red", rarity: 8 },
      { trait_type: "Body", value: "Golden", rarity: 5 },
      { trait_type: "Face", value: "Smirk", rarity: 20 },
      { trait_type: "Outfit", value: "Royal Robe", rarity: 3 },
      { trait_type: "Accessory", value: "Crown", rarity: 2 },
    ],
    rarity: "Legendary",
    history: [
      {
        event: "Mint",
        from: "0x0000000000000000000000000000000000000000",
        to: "0xfedcba0987654321fedcba0987654321fedcba09",
        date: new Date(2023, 1, 10),
        txHash: "0xabcdef123456789",
      },
      {
        event: "Sale",
        price: 3.5,
        from: "0xfedcba0987654321fedcba0987654321fedcba09",
        to: "0xabcdef1234567890abcdef1234567890abcdef12",
        date: new Date(2023, 4, 20),
        txHash: "0xabcdef123456789",
      },
      {
        event: "List",
        price: 3.8,
        from: "0xabcdef1234567890abcdef1234567890abcdef12",
        to: "0x0000000000000000000000000000000000000000",
        date: new Date(2023, 4, 21),
        txHash: "0xabcdef123456789",
      },
    ],
  },
  {
    id: "3",
    tokenId: "9012",
    name: "Pudgy Penguin #9012",
    description: "A common Pudgy Penguin with a green background and a beanie.",
    image: "/placeholder.svg?height=500&width=500",
    price: 1.2,
    priceUSD: 2160,
    lastSale: 1.0,
    owner: {
      address: "0x9876543210fedcba9876543210fedcba98765432",
    },
    attributes: [
      { trait_type: "Background", value: "Green", rarity: 25 },
      { trait_type: "Body", value: "Classic", rarity: 45 },
      { trait_type: "Face", value: "Neutral", rarity: 40 },
      { trait_type: "Outfit", value: "T-Shirt", rarity: 30 },
      { trait_type: "Accessory", value: "Beanie", rarity: 15 },
    ],
    rarity: "Common",
    history: [
      {
        event: "Sale",
        price: 1.0,
        from: "0x123456789abcdef123456789abcdef123456789a",
        to: "0x9876543210fedcba9876543210fedcba98765432",
        date: new Date(2023, 6, 5),
        txHash: "0x987654321abcdef",
      },
      {
        event: "List",
        price: 1.2,
        from: "0x9876543210fedcba9876543210fedcba98765432",
        to: "0x0000000000000000000000000000000000000000",
        date: new Date(2023, 6, 6),
        txHash: "0x987654321abcdef",
      },
    ],
  },
  {
    id: "4",
    tokenId: "3456",
    name: "Pudgy Penguin #3456",
    description: "An uncommon Pudgy Penguin with a purple background and a bowtie.",
    image: "/placeholder.svg?height=500&width=500",
    price: 1.8,
    priceUSD: 3240,
    lastSale: 1.5,
    owner: {
      address: "0x567890abcdef1234567890abcdef1234567890a",
      username: "PenguinCollector",
    },
    attributes: [
      { trait_type: "Background", value: "Purple", rarity: 18 },
      { trait_type: "Body", value: "Spotted", rarity: 22 },
      { trait_type: "Face", value: "Wink", rarity: 25 },
      { trait_type: "Outfit", value: "Suit", rarity: 12 },
      { trait_type: "Accessory", value: "Bowtie", rarity: 10 },
    ],
    rarity: "Uncommon",
    history: [
      {
        event: "Sale",
        price: 1.5,
        from: "0xfedcba9876543210fedcba9876543210fedcba98",
        to: "0x567890abcdef1234567890abcdef1234567890a",
        date: new Date(2023, 5, 25),
        txHash: "0xfedcba987654321",
      },
      {
        event: "List",
        price: 1.8,
        from: "0x567890abcdef1234567890abcdef1234567890a",
        to: "0x0000000000000000000000000000000000000000",
        date: new Date(2023, 5, 26),
        txHash: "0xfedcba987654321",
      },
    ],
  },
  {
    id: "5",
    tokenId: "7890",
    name: "Pudgy Penguin #7890",
    description: "A rare Pudgy Penguin with a yellow background and a top hat.",
    image: "/placeholder.svg?height=500&width=500",
    price: 2.8,
    priceUSD: 5040,
    lastSale: 2.5,
    owner: {
      address: "0xabcdef1234567890abcdef1234567890abcdef12",
      username: "NFTWhale",
      avatar: "/placeholder.svg?height=50&width=50",
    },
    attributes: [
      { trait_type: "Background", value: "Yellow", rarity: 15 },
      { trait_type: "Body", value: "Tuxedo", rarity: 10 },
      { trait_type: "Face", value: "Monocle", rarity: 8 },
      { trait_type: "Outfit", value: "Formal", rarity: 12 },
      { trait_type: "Accessory", value: "Top Hat", rarity: 5 },
    ],
    rarity: "Rare",
    history: [
      {
        event: "Sale",
        price: 2.5,
        from: "0x123456789abcdef123456789abcdef123456789a",
        to: "0xabcdef1234567890abcdef1234567890abcdef12",
        date: new Date(2023, 6, 10),
        txHash: "0x123456789abcdef",
      },
      {
        event: "List",
        price: 2.8,
        from: "0xabcdef1234567890abcdef1234567890abcdef12",
        to: "0x0000000000000000000000000000000000000000",
        date: new Date(2023, 6, 11),
        txHash: "0x123456789abcdef",
      },
    ],
  },
  {
    id: "6",
    tokenId: "2345",
    name: "Pudgy Penguin #2345",
    description: "An epic Pudgy Penguin with a pink background and a wizard hat.",
    image: "/placeholder.svg?height=500&width=500",
    price: 4.2,
    priceUSD: 7560,
    lastSale: 3.8,
    owner: {
      address: "0x1234567890abcdef1234567890abcdef12345678",
      username: "PenguinLover",
      avatar: "/placeholder.svg?height=50&width=50",
    },
    attributes: [
      { trait_type: "Background", value: "Pink", rarity: 10 },
      { trait_type: "Body", value: "Magical", rarity: 7 },
      { trait_type: "Face", value: "Mystical", rarity: 6 },
      { trait_type: "Outfit", value: "Robe", rarity: 8 },
      { trait_type: "Accessory", value: "Wizard Hat", rarity: 4 },
    ],
    rarity: "Epic",
    history: [
      {
        event: "Sale",
        price: 3.8,
        from: "0x9876543210fedcba9876543210fedcba98765432",
        to: "0x1234567890abcdef1234567890abcdef12345678",
        date: new Date(2023, 6, 15),
        txHash: "0x9876543210abcdef",
      },
      {
        event: "List",
        price: 4.2,
        from: "0x1234567890abcdef1234567890abcdef12345678",
        to: "0x0000000000000000000000000000000000000000",
        date: new Date(2023, 6, 16),
        txHash: "0x9876543210abcdef",
      },
    ],
  },
]

// Generate more NFTs for the marketplace
for (let i = 7; i <= 30; i++) {
  const tokenId = (i * 1111).toString()
  const price = Number.parseFloat((Math.random() * 5 + 0.5).toFixed(2))
  const lastSale = Number.parseFloat((price * 0.9).toFixed(2))

  const backgrounds = ["Blue", "Red", "Green", "Purple", "Yellow", "Pink", "Orange", "Teal"]
  const bodies = ["Classic", "Golden", "Spotted", "Tuxedo", "Magical", "Cybernetic"]
  const faces = ["Happy", "Smirk", "Neutral", "Wink", "Monocle", "Mystical", "Surprised"]
  const outfits = ["Hoodie", "Royal Robe", "T-Shirt", "Suit", "Formal", "Robe", "Sweater"]
  const accessories = ["Sunglasses", "Crown", "Beanie", "Bowtie", "Top Hat", "Wizard Hat", "None"]

  const rarityLevels = ["Common", "Uncommon", "Rare", "Epic", "Legendary"]
  const rarityIndex = Math.floor(Math.random() * rarityLevels.length)
  const rarity = rarityLevels[rarityIndex]

  const randomBackground = backgrounds[Math.floor(Math.random() * backgrounds.length)]
  const randomBody = bodies[Math.floor(Math.random() * bodies.length)]
  const randomFace = faces[Math.floor(Math.random() * faces.length)]
  const randomOutfit = outfits[Math.floor(Math.random() * outfits.length)]
  const randomAccessory = accessories[Math.floor(Math.random() * accessories.length)]

  nfts.push({
    id: i.toString(),
    tokenId,
    name: `Pudgy Penguin #${tokenId}`,
    description: `A ${rarity.toLowerCase()} Pudgy Penguin with a ${randomBackground.toLowerCase()} background and ${randomAccessory === "None" ? "no accessories" : `a ${randomAccessory.toLowerCase()}`}.`,
    image: "/placeholder.svg?height=500&width=500",
    price,
    priceUSD: Math.round(price * 1800),
    lastSale,
    owner: {
      address: `0x${Math.random().toString(16).substring(2, 42)}`,
    },
    attributes: [
      { trait_type: "Background", value: randomBackground, rarity: Math.floor(Math.random() * 50) },
      { trait_type: "Body", value: randomBody, rarity: Math.floor(Math.random() * 50) },
      { trait_type: "Face", value: randomFace, rarity: Math.floor(Math.random() * 50) },
      { trait_type: "Outfit", value: randomOutfit, rarity: Math.floor(Math.random() * 50) },
      { trait_type: "Accessory", value: randomAccessory, rarity: Math.floor(Math.random() * 50) },
    ],
    rarity,
    history: [
      {
        event: "Sale",
        price: lastSale,
        from: `0x${Math.random().toString(16).substring(2, 42)}`,
        to: `0x${Math.random().toString(16).substring(2, 42)}`,
        date: new Date(2023, Math.floor(Math.random() * 6), Math.floor(Math.random() * 28) + 1),
        txHash: `0x${Math.random().toString(16).substring(2, 42)}`,
      },
      {
        event: "List",
        price,
        from: `0x${Math.random().toString(16).substring(2, 42)}`,
        to: "0x0000000000000000000000000000000000000000",
        date: new Date(2023, Math.floor(Math.random() * 6), Math.floor(Math.random() * 28) + 1),
        txHash: `0x${Math.random().toString(16).substring(2, 42)}`,
      },
    ],
  })
}

// Collection stats
const collectionStats: CollectionStats = {
  floorPrice: 1.2,
  floorPriceChange: 5.2,
  owners: 3240,
  ownerPercentage: 65,
  volume: 12500,
  volumeChange: 12.3,
  averageSale: 2.4,
  averageSaleChange: -3.1,
}

// Functions to get NFT data
export function getFeaturedNFTs(): NFT[] {
  return nfts.slice(0, 6)
}

export function getAllNFTs(): NFT[] {
  return nfts
}

export function getNFTById(id: string): NFT | undefined {
  return nfts.find((nft) => nft.id === id)
}

export function getCollectionStats(): CollectionStats {
  return collectionStats
}

