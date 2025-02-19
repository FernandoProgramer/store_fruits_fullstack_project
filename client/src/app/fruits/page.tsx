import FruitsCard from "../../components/ui/FruitsCard"
import SearchInput from "@/components/ui/SearchInput";
import { FruitsInterface } from "../../interfaces/fruits.interface";
import { getFruits } from "@/services/fruits.service";

export default async function FruitsPage() {

  const fruits: any = await getFruits();
  return (
    <div>
      <div className="rounded-lg space-y-5">
        <SearchInput />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {fruits.data.length > 0
            ?
            fruits.data.map((fruit: FruitsInterface) => (
              <FruitsCard key={fruit.id} fruit={fruit} />
            ))
            : (<h1>No hay Frutas registradas</h1>)
          }
        </div>
      </div>
    </div>
  )
}
