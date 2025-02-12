import * as Mui from "@mui/material";
import * as MuiIcons from "@mui/icons-material";
import * as Router from "react-router-dom";
import * as Components from "src/app/components";
import * as Constants from "src/constants";
import * as Hooks from "src/app/hooks";

export const OrderBox = ({
  coinWalletDetails,
}: {
  coinWalletDetails: Hooks.User.coinsWallet[];
}) => {
  const navigate = Router.useNavigate();
  const { verified } = Hooks.User.useUserKYC(false);
  const { coin, type } = Router.useParams();
  const handleNavigate = () => {
    navigate(
      verified
        ? `${Constants.API_CONFIG.base}p2p/${coin}/${type}/new-order`
        : `${Constants.API_CONFIG.base}kyc/warning`,
      {
        state: coinWalletDetails,
      }
    );
  };
  return (
    <Components.Global.Container
      direction="column"
      alignItems='center'
      spacing={3}
      sx={{ py: 4, height: "100%", backgroundColor: 'transparent' }}
      
    >
      <Mui.Typography variant="h5" fontWeight={900}>
        Buy/Sell Your Asset Locally
      </Mui.Typography>
      <Mui.Typography variant="body1" textAlign='center' sx={{width: {md: '59%'}}}>
        Peer-to-peer exchange (or P2P exchange) is a marketplace where people
        can trade asset directly with each other on their own terms, in
        virtually any country.
      </Mui.Typography>
      <Mui.Stack direction="row" gap={1.5}>
        <Mui.Button
          id="postOrder"
          startIcon={<Mui.CardMedia
            src="images/Bag.png"
            component="img"
            sx={{
              width: 20,
              height: 20,
            }}
          />}
          variant="contained"
          onClick={handleNavigate}
          size="large"
          sx={{
            width: 150,
            fontWeight: 900,
            border: 'none',
            borderRadius: 2,
            padding: 1.25,
            boxShadow: 'none',
            "&:hover": { 
              bgcolor: 'primary.main',
              boxShadow: 'none' 
            },
          }}
        >
          <Mui.Typography variant="body1">New Order</Mui.Typography>
        </Mui.Button>

        <Mui.Button
          id="myads"
          component={Router.Link}
          variant="outlined"
          to="my-orders"
          size="large"
          sx={{
            width: 150,
            fontWeight: 900,
            border: '1px solid #FCB923',
            borderRadius: 2,
            bgcolor: '#fff',
            color: '#002237',
            "&:hover": { bgcolor: '#fff' },
          }}
        >
          <Mui.Typography variant="body2" fontWeight={500}>My Orders</Mui.Typography>
        </Mui.Button>
      </Mui.Stack>
    </Components.Global.Container>
  );
};
