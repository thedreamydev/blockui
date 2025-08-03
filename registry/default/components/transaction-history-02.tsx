import { ArrowDownLeft, ArrowRightLeft, ArrowUpRight } from "lucide-react";

import { cn } from "@/lib/utils";

interface Transaction {
  type: "buy" | "sell" | "transfer";
  status: "completed" | "pending" | "failed";
  amount: number;
  symbol: string;
  price: number;
  timestamp: Date;
  hash: string;
}

type TransactionProps = {
  transaction: Transaction;
};

const Transaction: React.FC<TransactionProps> = ({ transaction }) => {
  const getTransactionStyles = (type: Transaction["type"]) => {
    switch (type) {
      case "buy":
        return {
          icon: ArrowUpRight,
          bgColor: "bg-green-200",
          iconColor: "text-green-600",
        };
      case "sell":
        return {
          icon: ArrowDownLeft,
          bgColor: "bg-red-200",
          iconColor: "text-red-600",
        };
      case "transfer":
        return {
          icon: ArrowRightLeft,
          bgColor: "bg-blue-200",
          iconColor: "text-blue-600",
        };
    }
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(price);
  };

  const formatTimestamp = (timestamp: Date) => {
    return (
      timestamp.toLocaleDateString("en-US", {
        month: "short",
        day: "2-digit",
        year: "numeric",
      }) +
      " • " +
      timestamp.toLocaleTimeString("en-US", {
        hour: "numeric",
        minute: "2-digit",
        hour12: true,
      })
    );
  };

  const transactionStyles = getTransactionStyles(transaction.type);
  const TransactionIcon = transactionStyles.icon;

  return (
    <div
      key={transaction.hash}
      className="w-full px-3 py-2 rounded-md group hover:bg-accent cursor-pointer flex items-center justify-between gap-12"
    >
      <div className="flex items-center gap-3">
        <div
          className={cn(
            "w-10 h-10 rounded-sm group-hover:scale-110 transition-transform duration-300",
            "flex items-center justify-center",
            transactionStyles.bgColor,
            transactionStyles.iconColor
          )}
        >
          <TransactionIcon className="size-5" />
        </div>

        <div className="space-y-1">
          <h1 className="font-semibold capitalize">{transaction.type}</h1>
          <p className="text-sm text-muted-foreground">
            Tx: {transaction.hash}
          </p>
          <p className="text-sm text-muted-foreground font-mono">
            {formatTimestamp(transaction.timestamp)}
          </p>
        </div>
      </div>

      <div className="space-y-1 flex flex-col items-end">
        <h1 className="font-semibold">
          <span>{transaction.amount}</span>
          <span className="text-sm ml-1">{transaction.symbol}</span>
        </h1>
        <h3 className="text-sm font-medium text-muted-foreground">
          {formatPrice(transaction.amount * transaction.price)}
        </h3>
        <div
          className={cn(
            "text-sm font-mono capitalize px-1 rounded-sm",
            transaction.status === "completed" &&
              "text-green-600 bg-green-200 dark:text-green-400 dark:bg-green-900",
            transaction.status === "pending" &&
              "text-amber-600 bg-amber-200 dark:text-amber-400 dark:bg-amber-900",
            transaction.status === "failed" &&
              "text-red-600 bg-red-200 dark:text-red-400 dark:bg-red-900"
          )}
        >
          {transaction.status}
        </div>
      </div>
    </div>
  );
};

// Dummy Data Array
const transactions: Transaction[] = [
  {
    type: "buy",
    status: "completed",
    amount: 0.5,
    symbol: "BTC",
    price: 43250.0,
    timestamp: new Date("2024-08-03T10:30:00"),
    hash: "0x1a2b3...5e6f",
  },
  {
    type: "sell",
    status: "failed",
    amount: 2.5,
    symbol: "ETH",
    price: 2650.0,
    timestamp: new Date("2024-08-03T09:15:00"),
    hash: "0x7g8h9...1k2l",
  },
  {
    type: "transfer",
    status: "pending",
    amount: 10,
    symbol: "SOL",
    price: 125.0,
    timestamp: new Date("2024-08-02T16:20:00"),
    hash: "0x3m4n5...7q8r",
  },
];

const TransactionHistoryCard = () => {
  return (
    <div className="flex flex-col gap-4 p-3 mx-auto">
      {transactions.map((transaction) => (
        <Transaction key={transaction.hash} transaction={transaction} />
      ))}
    </div>
  );
};

export default TransactionHistoryCard;
