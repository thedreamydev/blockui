import { TokenUNI, TokenBTC, TokenUSDC } from "@web3icons/react";

import { cn } from "@/lib/utils";

interface Transaction {
  type: "sent" | "received";
  hash: string;
  from: string;
  to: string;
  value: string;
  symbol: string;
  status: "success" | "pending" | "failed";
  timestamp: string;
}

type TransactionProps = {
  transaction: Transaction;
};

const Transaction: React.FC<TransactionProps> = ({ transaction }) => {
  const getTokenIcon = (symbol: string) => {
    switch (symbol) {
      case "UNI":
        return <TokenUNI variant="background" size="40" />;
      case "BTC":
        return <TokenBTC variant="background" size="40" />;
      case "USDC":
        return <TokenUSDC variant="background" size="40" />;
      default:
        return (
          <div className="w-full h-full rounded-full bg-muted text-muted-foreground flex items-center justify-center">
            ?
          </div>
        );
    }
  };

  return (
    <div
      key={transaction.hash}
      className="w-full px-3 py-2 rounded-md hover:bg-accent cursor-pointer flex items-center justify-between gap-12"
    >
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full flex items-center justify-center overflow-hidden">
          {getTokenIcon(transaction.symbol)}
        </div>

        <div className="flex flex-col items-start gap-0.5">
          <h1 className="font-semibold text-sm text-foreground capitalize">
            {transaction.type}
          </h1>

          <p className="text-sm text-muted-foreground">
            {`${
              transaction.type === "sent"
                ? `To: ${transaction.to}`
                : `From: ${transaction.from}`
            }`}
          </p>
        </div>
      </div>

      <div className="flex flex-col items-end gap-0.5">
        <p
          className={cn(
            "font-semibold text-foreground text-sm",
            transaction.type === "sent" && "text-red-600",
            transaction.type === "received" && "text-green-600"
          )}
        >
          {`${transaction.type === "sent" ? "-" : "+"}${transaction.value} ${
            transaction.symbol
          }`}
        </p>
        <p className="text-sm text-muted-foreground">{transaction.timestamp}</p>
      </div>
    </div>
  );
};

// Dummy Data Array
const transactions: Transaction[] = [
  {
    type: "sent",
    hash: "0x113...abc",
    from: "0xabc...def",
    to: "0xdef...789",
    value: "3.81",
    symbol: "UNI",
    timestamp: "55 min ago",
    status: "pending",
  },
  {
    type: "received",
    hash: "0x113...abe",
    from: "0xabc...def",
    to: "0xdef...789",
    value: "0.55",
    symbol: "BTC",
    timestamp: "2 hours ago",
    status: "failed",
  },
  {
    type: "sent",
    hash: "0x113...abd",
    from: "0xabc...def",
    to: "0xdef...789",
    value: "75.00",
    symbol: "USDC",
    timestamp: "3 days ago",
    status: "success",
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
