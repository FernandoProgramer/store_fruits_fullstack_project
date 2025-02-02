
import FruitsCard from "../../components/ui/FruitsCard"
import { Roboto } from 'next/font/google'
import SearchInput from "@/components/ui/SearchInput";
import { FruitsInterface } from "../../interfaces/fruits.interface";
import { getFruits } from "@/services/fruits.service";

const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
})

export default async function FruitsPage() {
  const fruits: FruitsInterface[] = await getFruits();

  return (
    <div className={roboto.className}>
      <div className="bg-gray-950 p-8 rounded-lg space-y-5">
        <SearchInput />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {fruits.map((fruit: FruitsInterface) => (
            <FruitsCard key={fruit.id} fruit={fruit} />
          ))}
        </div>
      </div>
    </div>
  )
}
