import { Badge } from "@/app/_components/ui/badge";
import { Transaction, TransactionType } from "@prisma/client";
import { CircleIcon } from "lucide-react";

interface TransactionTypeBadgeProps {
  transaction: Transaction;
}

const TransactionTypeBadge = ({ transaction }: TransactionTypeBadgeProps) => {
  if (transaction.type === TransactionType.DEPOSIT) {
    return (
      <Badge className="bg-green-700 bg-opacity-20 font-bold text-primary hover:bg-muted">
        <CircleIcon className="mr-2 fill-primary" size={10} />
        Receita
      </Badge>
    );
  }
  if (transaction.type === TransactionType.EXPENSE) {
    return (
      <Badge className="bg-danger text-danger bg-opacity-10 font-bold hover:bg-muted">
        <CircleIcon className="fill-danger mr-2" size={10} />
        Despesa
      </Badge>
    );
  }
  return (
    <Badge className="bg-blue-700 bg-opacity-10 font-bold text-blue-700 hover:bg-muted">
      <CircleIcon className="mr-2 fill-blue-700" size={10} />
      Investimento
    </Badge>
  );
};

export default TransactionTypeBadge;
