import * as Mui from "@mui/material";

export const WhyusCard = ({
  image,
  title,
  content,
  imageBackground = false,
}: whyusCard.Props) => (
  <Mui.Card
    component={Mui.Stack}
    gap={2}
    direction="column"
    alignItems="flex-start"
    justifyContent='center'
    sx={{
      py: { xs: 2, md: 4 },
      px: { xs: 2, md: 4 },
      borderRadius: 4,
      minHeight: {xs: 180, md: 225},
      width: { xs: 260, md: 340 },
      maxWidth: 340,
      // mx: "20px !important",
      boxShadow: "0px 4px 53.2px 7px rgba(255, 178, 13, 0.10)",
      //   boxShadow: (theme) => `0px 20px 25px -30px ${theme.palette.text.primary}`,
      //   "&:hover": {
      //     bgcolor: (theme) =>
      //       imageBackground ? `${theme.palette.primary.main}30` : undefined,
      //   },
    }}
  >
    <Mui.Stack direction={{xs: 'row', md: 'column'}} alignItems={{xs: 'center', md: 'flex-start'}} gap={1}>
      <Mui.Stack
        sx={{
          width: 40,
          heigth: 40,
          boxShadow: imageBackground
            ? `0 0 5px ${Mui.colors.grey[400]}`
            : undefined,
        }}
      >
        <Mui.CardMedia
          component="img"
          src={image}
          sx={{ width: 40, heigth: 40 }}
        />
      </Mui.Stack>
      <Mui.Typography
        color="#002237"
        fontWeight={700}
        fontSize={{ xs: "20px", md: "24px" }}
        variant="h5"
      >
        {title}
      </Mui.Typography>
    </Mui.Stack>
    <Mui.Typography
      variant="h6"
      color="#002237"
      fontWeight={400}
      fontSize={{ xs: "14px", md: "20px" }}
    >
      {content}
    </Mui.Typography>
  </Mui.Card>
);

export declare namespace whyusCard {
  export interface Props {
    image: string;
    title: string;
    content: string;
    imageBackground?: boolean;
  }
}
