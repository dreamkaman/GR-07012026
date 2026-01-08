export interface IGetSvg {
  name: string;
  className: string;
}

export interface ITransaction {
  id: string;
  type: "Payment" | "Credit";
  amount: number;
  expense?: number;
  transactionName: string;
  description: string;
  date: string;
  isPending: boolean;
  authorizedUser: string;
  icon: string;
}
