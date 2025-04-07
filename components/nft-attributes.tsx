interface Attribute {
  trait_type: string
  value: string
  rarity?: number
}

interface NFTAttributesProps {
  attributes: Attribute[]
}

export default function NFTAttributes({ attributes }: NFTAttributesProps) {
  return (
    <div className="grid grid-cols-2 gap-4">
      {attributes.map((attribute, index) => (
        <div key={index} className="bg-gray-50 dark:bg-gray-900 p-3 rounded-lg">
          <div className="text-xs text-gray-500">{attribute.trait_type}</div>
          <div className="font-medium">{attribute.value}</div>
          {attribute.rarity && <div className="text-xs text-blue-500">{attribute.rarity}% have this</div>}
        </div>
      ))}
    </div>
  )
}

