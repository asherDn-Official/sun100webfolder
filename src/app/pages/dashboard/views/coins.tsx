import * as Mui from "@mui/material";
import * as Compoenents from "src/app/components";

export const Coins = ({
  coin,
  coinName,
  balance,
  amountType,
  amount,
}: coinBox.Props) =>(
  <Mui.Stack
    direction="row"
    // justifyContent="space-between"
    alignItems="center"
    // spacing={2}
    component={Mui.Paper}
    gap={4}
    sx={{
      p: 1.25,
      width: 293,
      height: 90,
      borderRadius: 2,
      border: '1px solid #eeeeee',
      bgcolor: (theme) =>
        theme.palette.mode === "dark" ? undefined : '#fff',
    }}
  >
  <Mui.Stack /* spacing={1} */>
    <Mui.Stack direction="row" spacing={1}>
      <Mui.Avatar
        src={`${import.meta.env.VITE_API_ENCRYPTION}://${
          import.meta.env.VITE_API_IP
        }${import.meta.env.VITE_API_PATH}${coin}`}
        sx={{ height: 35, width: 35 }}
      />
    </Mui.Stack>
  </Mui.Stack>
  <Mui.Stack direction='row' justifyContent="space-between" alignItems="baseline" width='100%'>
    <Mui.Stack spacing={1} gap={1.25}>
      <Mui.Stack direction="row" spacing={1}>
        <Mui.Typography variant="body1">{coinName}</Mui.Typography>
      </Mui.Stack>
      <Mui.Stack direction='row' gap={2}>
        <Mui.Typography variant="h6" noWrap sx={{fontWeight: 800, fontSize: '18px'}}>
          {/* <Compoenents.Global.Format
            type={amountType}
            number={balance * amount}
          /> */}
          {/* {" / "} */}
          <Compoenents.Global.Format type={amountType} number={amount} />
        </Mui.Typography>
        {/* <Mui.Typography variant="body1" noWrap color='#00C38E'>
          .04 %
        </Mui.Typography> */}
      </Mui.Stack>
    </Mui.Stack>
    <Mui.Typography variant="h6" sx={{ fontWeight: 800, fontSize: '18px' }}>
      <Compoenents.Global.Format type="number" number={balance} />
    </Mui.Typography>
  </Mui.Stack>
  </Mui.Stack>
);
export declare namespace coinBox {
  export interface Props {
    coin: string;
    coinName: string;
    balance: number;
    amountType: any;
    amount: number;
  }
}
