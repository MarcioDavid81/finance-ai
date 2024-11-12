import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import Navbar from "../_components/navbar";
import SumaryCards from "./_components/sumary-cards";
import TimeSelect from "./_components/time-selct";
import { getDashboard } from "../_data/get-dashboard";
import { isMatch } from "date-fns";
import TransactionsPieChart from "./_components/transactions-pie-chart";
import ExpensesPerCategory from "./_components/expenses-per-category";
import LastTransactions from "./_components/last-transactions";
import { canUserAddTransaction } from "../_data/can-user-add-transaction";
import AiReportButton from "./_components/ai-report-button";

interface HomeProps {
  searchParams: {
    month: string;
  };
}

const Home = async ({ searchParams: { month } }: HomeProps) => {
  const { userId } = await auth();
  if (!userId) {
    redirect("/login");
  }
  const monthIsInvalid = !month || !isMatch(month, "MM");
  if (monthIsInvalid) {
    redirect(`?month=${new Date().getMonth() + 1}`);
  }
  const dashboard = await getDashboard(month);
  const userCannAddTransactions = await canUserAddTransaction();

  return (
    <>
      <Navbar />
      <div className="flex flex-col space-y-6 p-6">
        <div className="flex w-full items-center justify-between p-6">
          <h1 className="text-2xl font-bold">Dashboard</h1>
          <div className="flex items-center gap-3">
            <AiReportButton month={month} />
            <TimeSelect />
          </div>
        </div>

        <div className="grid grid-cols-[2fr,1fr] gap-6">
          <div className="flex flex-col gap-6">
            <SumaryCards
              month={month}
              {...dashboard}
              userCanAddTransaction={userCannAddTransactions}
            />
            <div className="grid grid-cols-3 grid-rows-1 gap-6">
              <TransactionsPieChart {...dashboard} />
              <ExpensesPerCategory
                expensesPerCategory={dashboard.totalExpensePerCategory}
              />
            </div>
          </div>
          <LastTransactions lastTransactions={dashboard.lastTransactions} />
        </div>
      </div>
    </>
  );
};

export default Home;
