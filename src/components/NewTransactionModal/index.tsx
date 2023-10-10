import * as S from "./styles";
import * as Dialog from "@radix-ui/react-dialog";
import * as z from "zod";

import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { ArrowCircleUp, ArrowCircleDown, X } from "phosphor-react";

const newTransactionFormSchema = z.object({
    description: z.string(),
    price: z.number(),
    category: z.string(),
    type: z.enum(["income", "outcome"])
});

type NewTransactionFormInputs = z.infer<typeof newTransactionFormSchema>;

export function NewTransactionModal() {

    const { register, handleSubmit, formState: { isSubmitting }, control } = useForm<NewTransactionFormInputs>({
        resolver: zodResolver(newTransactionFormSchema),
        defaultValues: {
            type: "income"
        }
    });

    async function handleCreateNewTransaction(data: NewTransactionFormInputs) {
        await new Promise(resolve => setTimeout(resolve, 2000));
        console.log(data);
    }

    return (
        <Dialog.Portal>
            <S.Overlay />
            <S.Content>
                <Dialog.Title>Nova Transação</Dialog.Title>
                <S.CloseButton>
                    <X size={24} />
                </S.CloseButton>

                <form onSubmit={handleSubmit(handleCreateNewTransaction)}>
                    <input
                        type="text"
                        placeholder="Descrição"
                        required
                        {...register("description")}
                    />
                    <input
                        type="number"
                        placeholder="Preço"
                        {...register("price", { valueAsNumber: true })}
                    />
                    <input
                        type="text"
                        placeholder="Categoria"
                        required
                        {...register("category")}
                    />

                    <Controller
                        control={control}
                        name="type"
                        render={({ field }) => (
                            <S.TransactionType onValueChange={field.onChange} value={field.value}>
                                <S.TransactionTypeButton value="income" $variant="income">
                                    <ArrowCircleUp size={24} />
                                    Entrada
                                </S.TransactionTypeButton>
                                <S.TransactionTypeButton value="outcome" $variant="outcome">
                                    <ArrowCircleDown size={24} />
                                    Saída
                                </S.TransactionTypeButton>
                            </S.TransactionType>
                        )}
                    />

                    <button type="submit" disabled={isSubmitting}>Cadastrar</button>
                </form>

            </S.Content>
        </Dialog.Portal>
    )
}