"use client"

import ButtonForm from "@/components/ui/ButtonForm";
import InputForm from "@/components/ui/InputForm";
import LabelForm from "@/components/ui/LabelForm";
import { FieldsAddFruitInterface } from "@/interfaces/registerFruit.interface";
import { SubmitHandler, useForm } from "react-hook-form"
import { GiFruitBowl } from "react-icons/gi";

export default function AddFruits() {

    const { register, formState: { errors }, handleSubmit, watch } = useForm<FieldsAddFruitInterface>();

    const formValues = watch(); // tomar valores y mostrarlos en algun compoentne
    console.log(formValues)

    const onSubmit: SubmitHandler<FieldsAddFruitInterface> = async (data) => {
        console.log(data)
    }

    return (
        <div className="bg-red-600 mx-auto rounded-lg p-6 w-[20rem] m-4 items-center">
            <h1 className="text-xl text-center items-center py-3 text-yellow-400 font-bold flex space-x-2">
                <span>ADD YOUR FRUITS HERE</span>
                <GiFruitBowl className="text-xl" />
            </h1>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <div>
                    <LabelForm name="fruits">
                        Name Fruits
                    </LabelForm>
                    <InputForm
                        name="fruits"
                        register={register}
                        error={errors.fruit}
                    />
                </div>
                <div>
                    <LabelForm name="amount">
                        Amount Fruits
                    </LabelForm>
                    <InputForm
                        name="amount"
                        register={register}
                        error={errors.amount}
                    />
                </div>
                <div>
                    <LabelForm name="price">
                        Price Fruits
                    </LabelForm>
                    <InputForm
                        name="price"
                        register={register}
                        error={errors.price}
                    />
                </div>
                <div>
                    <LabelForm name="description">
                        Description Fruit
                    </LabelForm>
                    <InputForm
                        name="description"
                        register={register}
                        error={errors.description}
                    />
                </div>


                <ButtonForm>
                    Add Fruits
                </ButtonForm>
            </form>
            {/* <div>
                <FruitsCard fruit={fruit} />
            </div> */}
        </div>
    )
}
