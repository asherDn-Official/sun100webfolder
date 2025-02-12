import * as Mui from "@mui/material";

export const OrderButton = ({
  coin,
  order,
  handleBuy,
  handleSell,
  onOrderChange, // Add this prop
}: orderButton.Props) => (
  <Mui.Stack
    direction="row"
    justifyContent="space-between"
    spacing={1}
    id="orderType"
  >
    <Mui.Button
      size="small"
      variant={order === "sell" ? "contained" : "outlined"}
      color="error"
      fullWidth
      onClick={() => {
        handleSell();
        onOrderChange(); // Reset amount and total amount
      }}
    >
      Sell {coin}
    </Mui.Button>
    <Mui.Button
      size="small"
      variant={order === "buy" ? "contained" : "outlined"}
      color="success"
      fullWidth
      onClick={() => {
        handleBuy();
        onOrderChange(); // Reset amount and total amount
      }}
    >
      Buy {coin}
    </Mui.Button>
  </Mui.Stack>
);

export declare namespace orderButton {
  export interface Props {
    coin: string;
    order: "buy" | "sell";
    handleBuy: () => void;
    handleSell: () => void;
    onOrderChange: () => void; // Add new prop
  }
}
