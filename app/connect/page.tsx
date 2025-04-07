import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Wallet, ArrowRight } from "lucide-react"

export default function ConnectPage() {
  return (
    <div className="container px-4 py-12 md:px-6 md:py-16 lg:py-24 flex flex-col items-center">
      <div className="max-w-md w-full">
        <h1 className="text-3xl font-bold text-center mb-8">Connect Your Wallet</h1>

        <Card>
          <CardHeader>
            <CardTitle>Choose a wallet</CardTitle>
            <CardDescription>Connect with one of our available wallet providers or create a new one</CardDescription>
          </CardHeader>
          <CardContent className="grid gap-4">
            <Button className="w-full justify-between" variant="outline">
              <div className="flex items-center gap-2">
                <Wallet className="h-5 w-5" />
                <span>MetaMask</span>
              </div>
              <ArrowRight className="h-4 w-4" />
            </Button>
            <Button className="w-full justify-between" variant="outline">
              <div className="flex items-center gap-2">
                <Wallet className="h-5 w-5" />
                <span>Coinbase Wallet</span>
              </div>
              <ArrowRight className="h-4 w-4" />
            </Button>
            <Button className="w-full justify-between" variant="outline">
              <div className="flex items-center gap-2">
                <Wallet className="h-5 w-5" />
                <span>WalletConnect</span>
              </div>
              <ArrowRight className="h-4 w-4" />
            </Button>
            <Button className="w-full justify-between" variant="outline">
              <div className="flex items-center gap-2">
                <Wallet className="h-5 w-5" />
                <span>Rainbow</span>
              </div>
              <ArrowRight className="h-4 w-4" />
            </Button>
          </CardContent>
        </Card>

        <p className="text-center text-sm text-gray-500 mt-6">
          By connecting your wallet, you agree to our Terms of Service and our Privacy Policy.
        </p>
      </div>
    </div>
  )
}

