import * as Mui from "@mui/material";

export const CoinCard = ({
  image,
  title,
  content,
  percent,
}: coinCard.Props) => (
  <Mui.Card
    component={Mui.Stack}
    direction="row"
    alignItems="center"
    width={300}
    maxWidth={300}
    gap={4}
    p={2}
    sx={{
      // backgroundColor: "transparent",
    }}
  >
    <Mui.Stack sx={{ width: { xs: 100, md: 120 }, height: {xs: 100, md: 120} }}>
      <Mui.CardMedia
        component="img"
        src={image}
        sx={{ width: { xs: 100, md: 120 }, height: {xs: 100, md: 120} }}
      />
    </Mui.Stack>
    <Mui.Stack gap={1}>
      <Mui.Typography sx={{ textAlign: "left" }}>{content}</Mui.Typography>
      <Mui.Typography
        sx={{ textAlign: "left", fontWeight: "600", fontSize:{xs: '18px', md: '24px'} }}
        variant="h5"
      >
        {title}
      </Mui.Typography>
      <Mui.Typography bgcolor="#fff" borderRadius='50px' py={0.025} px={1} color="#00C38E" boxShadow='0px 0px 45px 4px rgba(50, 50, 71, 0.20)' sx={{ textAlign: "left", width: 'fit-content' }}>
        {percent}
      </Mui.Typography>
    </Mui.Stack>
  </Mui.Card>
);

export declare namespace coinCard {
  export interface Props {
    image: string;
    title: string;
    content: string;
    percent: string;
  }
}
