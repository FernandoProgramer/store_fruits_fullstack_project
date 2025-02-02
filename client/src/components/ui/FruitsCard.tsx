import { FruitsInterface } from '@/interfaces/fruits.interface';
import Link from 'next/link'
import { FaShoppingCart } from "react-icons/fa";

interface FruitsCardProps {
    fruit: FruitsInterface;
}

export default function FruitsCard({ fruit }: FruitsCardProps) {
    return (
        <>
            <div className="bg-gray-800 text-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="px-4 pt-4">
                    <figure className="mb-4 md:mb-[2rem] flex justify-center items-center">
                        <img
                            src="https://www.recetasnestle.com.co/sites/default/files/inline-images/tipos-de-manzana-royal-gala_0.jpg"
                            alt={`Image of ${fruit.fruit}`}
                            className="w-full h-48 object-cover rounded-lg md:w-40 md:h-40"
                        />
                    </figure>

                    <div className="md:flex-1 text-center">
                        <h2 className="text-lg md:text-xl font-semibold text-white mb-2">
                            {fruit.fruit}
                        </h2>
                        <p className="text-gray-300 text-sm mb-4 md:mb-2">
                            {fruit.description}
                        </p>
                        <div className="space-y-2">
                            <p className="text-gray-300">
                                <span className="font-medium text-gray-100">Disposibles:</span> {fruit.amount} Unidades
                            </p>
                            <p className="text-gray-300 text-lg font-semibold">
                                <span>$</span> {fruit.price}
                            </p>
                            <div className="flex justify-start space-x-2">
                                <span className="font-medium text-gray-100">Vendedor:</span>
                                <Link
                                    className="text-blue-400 hover:underline"
                                    href={`profile/seller/${fruit.seller.id}`}
                                >
                                    {fruit.seller.username}
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mt-4 flex h-[3rem] rounded-b-lg overflow-hidden">
                    <button className="bg-red-600 w-full h-full flex items-center justify-center space-x-4 text-yellow-400 hover:bg-red-800 transition-colors">
                        <FaShoppingCart /> <span>Buy Now</span>
                    </button>
                </div>
            </div>

        </>
    )
}
