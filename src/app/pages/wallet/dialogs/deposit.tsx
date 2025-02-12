import { useContext } from "react";
import { UserContext } from "../../../contexts/index";
import * as Mui from "@mui/material";
import * as MuiIcons from "@mui/icons-material";
import * as Router from "react-router-dom";
import QRCode from "react-qr-code";
import * as Components from "src/app/components";
import * as Hooks from "src/app/hooks";
import React, { useCallback } from "react";

export const Deposit = () => {
  const { coinList } = useContext(UserContext);
  const [selectedCoin, setSelectedCoin] = React.useState(coinList?.[0] || null);

  const { state } = Router.useLocation() as { state: Hooks.User.coinsWallet };

  const { contentCopy } = Hooks.User.useUtils();
  const networks = React.useMemo(
    () => state?.network?.split(";").filter(Boolean) || [],
    [state?.network]
  );

  const [selectedNetwork, setSelectedNetwork] = React.useState<string>(
    networks[0] || ""
  );
  const prevNetworkRef = React.useRef<string | null>(null);

  const { walletDetail, loading } = Hooks.User.useWalletAddress(
    selectedCoin?.coinId || "",
    state?.type,
    selectedNetwork
  );

  React.useEffect(() => {
    if (walletDetail?.userWallet?.[0]?.network) {
      const walletNetworks = walletDetail?.userWallet?.[0]?.network
        .split(";")
        .filter(Boolean);

      if (walletNetworks.length > 0) {
        setSelectedNetwork((prev) => prev || walletNetworks[0]);
      }
    }
  }, [walletDetail?.userWallet?.[0]?.network]);

  React.useEffect(() => {
    if (selectedNetwork && selectedNetwork !== prevNetworkRef.current) {
      prevNetworkRef.current = selectedNetwork;
    }
  }, [selectedNetwork]);

  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    const newNetwork = event.target.value as string;
    setSelectedNetwork(newNetwork);

    // Ensure the log captures the latest state in the next render
    setTimeout(() => {
      console.log("Updated Selected Network:", newNetwork);
    }, 0);
  };

  return state ? (
    loading && state?.walletAddress === "" ? (
      <Components.Global.GlobalLoader />
    ) : (
      <Components.Global.Dialog maxWidth="xs" icon>
        <Mui.DialogTitle>
          <Mui.Stack direction="row" gap={1}>
            <Mui.Typography variant="h6">Deposit</Mui.Typography>
            <Mui.Typography
              sx={{ mt: 0.5 }}
              variant="subtitle1"
              color="text.secondary"
            >
              ({state?.typeId})
            </Mui.Typography>
          </Mui.Stack>
          <Mui.Divider sx={{ mt: 1 }} />
        </Mui.DialogTitle>
        <Mui.Stack
          component={Mui.DialogContent}
          justifyContent="center"
          alignItems="center"
          spacing={2}
        >
          <Mui.Stack
            sx={{
              p: 3,
              width: "auto",
              bgcolor: (theme) => `${theme.palette.warning.light}20`,
              borderRadius: 2,
              border: (theme) => `0px solid ${theme.palette.warning.light}50`,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <QRCode
              value={`${selectedNetwork}:${
                walletDetail?.userWallet?.[0]?.walletAddress || ""
              }`}
              size={160}
            />
            <Mui.Typography align="center">
              Scan this QR code to deposit
            </Mui.Typography>
          </Mui.Stack>
          <Mui.Box sx={{ display: "flex", alignItems: "baseline" }}>
            <Mui.Typography align="center" textTransform="capitalize">
              Network :
            </Mui.Typography>
            {networks.length > 0 ? (
              <Mui.FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
                <Mui.Select
                  labelId="network-select-label"
                  id="network-select"
                  value={selectedNetwork}
                  onChange={handleChange}
                  label="Network"
                  sx={{
                    textTransform: "capitalize",
                  }}
                >
                  {networks.map((item) => (
                    <Mui.MenuItem
                      key={item}
                      value={item}
                      sx={{
                        textTransform: "capitalize",
                      }}
                    >
                      {item}
                    </Mui.MenuItem>
                  ))}
                </Mui.Select>
              </Mui.FormControl>
            ) : null}
          </Mui.Box>
          <Mui.TextField
            variant="outlined"
            size="small"
            value={
              walletDetail?.userWallet?.[0]?.walletAddress ||
              "Unable to fetch wallet address, Please Try Again Later"
            }
            sx={{
              borderRadius: 1,
              bgcolor: "primary.main",
              "& fieldset": { borderWidth: 0 },
              "& input": { color: "#fff" },
            }}
            InputProps={{
              endAdornment: (
                <Mui.InputAdornment position="end">
                  <Mui.IconButton
                    onClick={() =>
                      contentCopy(
                        walletDetail?.userWallet?.[0]?.walletAddress ||
                          "Unable to fetch wallet address, Please try again later"
                      )
                    }
                  >
                    <MuiIcons.ContentCopy sx={{ color: "#fff" }} />
                  </Mui.IconButton>
                </Mui.InputAdornment>
              ),
            }}
            contentEditable={false}
            fullWidth
          />
          <Mui.Alert severity="info" icon={false}>
            <Mui.Typography variant="subtitle1" noWrap>
              Note:
            </Mui.Typography>
            <Mui.Typography variant="caption">
              Scan this QR code to deposit the required amount in your wallet.
              Please verify your account details before initiating the
              transaction.
            </Mui.Typography>
            {/* <Mui.Typography variant="caption" fontWeight="bold">
              {JSON.stringify(
                JSON.parse(
                  walletDetail?.userWallet?.[0]?.additionalAddressInfo || "{}"
                ),
                null,
                4
              ).replaceAll(/([\{\}\,\"\:]|title|details)/g, "")}
            </Mui.Typography> */}
          </Mui.Alert>
        </Mui.Stack>
      </Components.Global.Dialog>
    )
  ) : (
    <Components.Global.GlobalLoader />
  );
};
