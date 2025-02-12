import * as Mui from "@mui/material";

export const KickStartCard = ({
  image,
  title,
  content,
  step,
}: kickCard.Props) => {
  const theme = Mui.useTheme();
  const isMobile = Mui.useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <Mui.Card
      component={Mui.Stack}
      // direction='column'
      // alignItems="center"
      height={{xs: '600px', md:"665px"}}
      gap={8}
      sx={{
        bgcolor: "#F2F2F2",
        borderRadius: 5,
        py: { xs: 2, lg: 7 },
        px: { xs: 2, lg: 5 },
        "&:hover": {
          bgcolor: "primary.main",
          "& .step": {
            color: "#002237 !important",
            backgroundColor: "#fff !important",
          },
        },
      }}
    >
      {step !== "2" && !isMobile ? (
        <>
          <Mui.Stack justifyContent="center" alignSelf="center">
            <Mui.CardMedia component="img" src={image} sx={{alignSelf: 'center', height: 358}}/>
          </Mui.Stack>
          <Mui.Stack gap={1}>
            <Mui.Typography
              display="flex"
              alignItems="center"
              gap={1}
              sx={{ textAlign: "left" }}
            >
              Step:{" "}
              <span
                className="step"
                style={{
                  backgroundColor: "#FCB923",
                  borderRadius: "50%",
                  color: "#fff",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  width: "40px",
                  height: "40px",
                }}
              >
                {step}
              </span>
            </Mui.Typography>
            <Mui.Typography
              sx={{
                textAlign: "left",
                fontWeight: "600",
                fontSize: { xs: "18px", md: "24px" },
              }}
              variant="h5"
            >
              {title}
            </Mui.Typography>
            <Mui.Typography variant="body2" sx={{ textAlign: "left" }}>
              {content}
            </Mui.Typography>
          </Mui.Stack>
        </>
      ) : (
        <>
          <Mui.Stack gap={1}>
            <Mui.Typography
              display="flex"
              alignItems="center"
              gap={1}
              sx={{ textAlign: "left" }}
            >
              Step:
              <span
                className="step"
                style={{
                  backgroundColor: "#FCB923",
                  borderRadius: "50%",
                  color: "#fff",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  width: "40px",
                  height: "40px",
                }}
              >
                {step}
              </span>
            </Mui.Typography>
            <Mui.Typography
              sx={{
                textAlign: "left",
                fontWeight: "600",
                fontSize: { xs: "18px", md: "24px" },
              }}
              variant="h5"
            >
              {title}
            </Mui.Typography>
            <Mui.Typography variant="body2" sx={{ textAlign: "left" }}>
              {content}
            </Mui.Typography>
          </Mui.Stack>
          <Mui.Stack justifyContent="center" alignSelf="center">
            <Mui.CardMedia component="img" src={image}  sx={{alignSelf: 'center', height: 358}}/>
          </Mui.Stack>
        </>
      )}
    </Mui.Card>
  );
};

export declare namespace kickCard {
  export interface Props {
    image: string;
    title: string;
    content: string;
    step: string;
  }
}
