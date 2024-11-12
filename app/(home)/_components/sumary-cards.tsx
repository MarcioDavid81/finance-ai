import {
  PiggyBankIcon,
  TrendingDownIcon,
  TrendingUpIcon,
  WalletIcon,
} from "lucide-react";
import SumaryCard from "./sumary-card";

interface SumaryCards {
  month: string;
  balance: number;
  depositsTotal: number;
  investmentsTotal: number;
  expensesTotal: number;
  userCanAddTransaction?: boolean;
}

const SumaryCards = async ({
  balance,
  depositsTotal,
  investmentsTotal,
  expensesTotal,
  userCanAddTransaction,
}: SumaryCards) => {
  return (
    <div className="space-y-6">
      <SumaryCard
        icon={<WalletIcon size={16} />}
        title="Saldo"
        amount={balance}
        size="large"
        userCanAddTransaction={userCanAddTransaction}
      />

      <div className="grid grid-cols-3 gap-6">
        <SumaryCard
          icon={<TrendingUpIcon size={16} className="text-primary" />}
          title="Receitas"
          amount={depositsTotal}
        />

        <SumaryCard
          icon={<TrendingDownIcon size={16} className="text-danger" />}
          title="Despesas"
          amount={expensesTotal}
        />

        <SumaryCard
          icon={<PiggyBankIcon size={16} className="text-blue-700" />}
          title="Investido"
          amount={investmentsTotal}
        />
      </div>
    </div>
  );
};

export default SumaryCards;

///////////////////////////////////////////////////////////////////////////////////////////////////////
