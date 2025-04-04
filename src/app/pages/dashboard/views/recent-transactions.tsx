import React from "react";
import * as Mui from "@mui/material";
import * as MuiIcons from "@mui/icons-material";
import * as Components from "src/app/components";
import * as Hooks from "src/app/hooks";

export const RecentTransaction = ({
  transactions,
}: {
  transactions: Hooks.User.useTransactions.transaction[];
}) => {
  const { contentCopy } = Hooks.User.useUtils();
  const [filter, setFilter] = React.useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setFilter(e.target.value);

  const walletData = transactions
    ? transactions
        .sort(
          (a, b) =>
            new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
        )
        .filter((transaction) =>
          `${transaction.type} ${transaction.currency} ${transaction.address} ${transaction.amount} ${transaction.transactionId} ${transaction.status}}`
            .toLowerCase()
            .includes(filter.toLowerCase())
        )
        .map((transaction) => ({
          date: transaction.createdAt,
          type: (
            <Mui.Typography
              // sx={{
              //   bgcolor: (theme) =>
              //     `${
              //       {
              //         completed: theme.palette.success.main,
              //         success: theme.palette.success.main,
              //         failed: theme.palette.error.main,
              //         cancelled: theme.palette.error.main,
              //         pending: theme.palette.warning.main,
              //       }[transaction.status]
              //     }30`,
              //   p: 1,
              //   borderRadius: 1,
              // }}
              // color={
              //   {
              //     completed: "success.light",
              //     success: "success.light",
              //     failed: "error.light",
              //     cancelled: "error.light",
              //     pending: "warning.main",
              //   }[transaction.status]
              // }
              variant="inherit"
              align="left"
            >
              {transaction.type}
            </Mui.Typography>
          ),
          symbol: transaction.currency,
          amount: (
            <Components.Global.Format
              type="number"
              number={transaction.amount}
            />
          ),
          transactionId: (
            <Mui.Stack direction="row" alignItems="center" id="copyContent">
              <Mui.Typography variant="inherit" width={200} noWrap>
                {transaction.transactionId}{" "}
              </Mui.Typography>
              <Mui.IconButton
                size="small"
                onClick={() => contentCopy(transaction.transactionId)}
              >
                <MuiIcons.CopyAll fontSize="inherit" color="primary" />
              </Mui.IconButton>
            </Mui.Stack>
          ),
          status: (
            <Mui.Typography
              color={
                {
                  completed: "success.light",
                  success: "success.light",
                  failed: "error.light",
                  pending: "warning.main",
                }[transaction.status]
              }
              textTransform="capitalize"
              variant="inherit"
            >
              <MuiIcons.Lens sx={{ fontSize: 8 }} /> {transaction.status}
            </Mui.Typography>
          ),
        }))
    : [];

  return (
    <Components.Global.Container direction="column" spacing={2}>
      <Mui.Typography variant="h6" fontWeight={900}>
        Recent Transactions
      </Mui.Typography>
      <Mui.Stack
        direction={{ xs: "column", md: "row" }}
        alignItems="center"
        spacing={1}
        sx={{ width: "100%" }}
      >
        {/* <Mui.Box flexGrow={1} /> */}
        <Mui.TextField
          id="transactionFilter"
          size="small"
          value={filter}
          onChange={handleChange}
          placeholder="Search transactions"
          InputProps={{
            startAdornment: (
              <Mui.CardMedia
                component="img"
                src={"images/search.png"}
                sx={{ width: 25, height: 25 }}
              />
            ),
          }}
          sx={{
            "& .MuiOutlinedInput-root": {
              borderRadius: "20px",
              // padding: 0,
              "& .MuiOutlinedInput-input": {
                padding: "10px 14px",
                // color: '#fff',
              },
            },
          }}
        />
      </Mui.Stack>
      <Components.Global.ResponsiveTable
        titles={[
          "Date",
          "Type",
          "Symbol",
          "Amount",
          "Transaction REF",
          "Status",
        ]}
        data={walletData}
      />

      <Mui.Box flexGrow={1} />
    </Components.Global.Container>
  );
};
