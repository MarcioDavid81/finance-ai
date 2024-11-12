import {
  TransactionCategory,
  TransactionPaymentMethod,
  TransactionType,
} from "@prisma/client";
import { z } from "zod";

export const upsertTransactionSchema = z.object({
  name: z.string().trim().min(1),
  type: z.nativeEnum(TransactionType),
  category: z.nativeEnum(TransactionCategory),
  description: z.string().trim().min(1),
  amount: z.number().positive(),
  paymentMethod: z.nativeEnum(TransactionPaymentMethod),
  date: z.date(),
});
