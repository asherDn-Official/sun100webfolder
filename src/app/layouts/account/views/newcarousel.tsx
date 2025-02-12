import * as Mui from "@mui/material";
import React from "react";

export const NewCarousel = () => {
  const [index, setIndex] = React.useState(0);
  const handleClick = (value: number) => setIndex(value);
  React.useEffect(() => {
    const id = setInterval(
      () => setIndex((prev) => (prev < 2 ? prev + 1 : 0)),
      5000
    );
    return () => clearInterval(id);
  }, []);
  return (
    <>
      <Mui.Stack
        sx={{
          position: "absolute",
          top: {xs: '40%', md: "65%", lg: '60%', xl: '50%'},
          left: "50%",
          transform: "translate(-50%,-50%)",
          textAlign: "center",
          width: {xs: 300, md: 750, lg: 800, xl: 1000},
        }}
      >
        <Mui.Box sx={{ position: "relative" }}>
          {[0, 1, 2].map((val, i) => (
            <Mui.Box
              key={i}
              sx={{
                position: "absolute",
                top: '-85px',
                display: index === i ? "block" : "none",
              }}
            >
              {
                {
                  0: (
                    <Mui.Stack
                      direction="row"
                      justifyContent="center"
                      alignItems="center"
                      gap={4}
                      sx={{
                        width: "100%",
                        flexDirection: { xs: "column", md: "row" },
                      }}
                    >
                      <Mui.Card sx={{borderRadius: '10px', display: 'flex', flexDirection: 'column', alignItems: 'center', px: {xs: 2, md: 3}, pt: {xs: 2, md: 3}, pb: 0 }}>
                        <Mui.CardHeader sx={{pt: 0}}
                          avatar={
                            <Mui.Avatar aria-label="Alejandro Nicolas">
                              AN
                            </Mui.Avatar>
                          }
                          title="Alejandro Nicolas"
                          subheader="Ingenieria, Argentina"
                        />
                        <Mui.CardContent sx={{p: 0}}>
                          <Mui.Typography variant="h6">
                            All your crypto in one place
                          </Mui.Typography>
                          <Mui.Typography
                            variant="body2"
                            color="text.secondary"
                          >
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum has been the
                            industry's standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type and
                            scrambled.
                          </Mui.Typography>
                        </Mui.CardContent>
                      </Mui.Card>
                      <Mui.Card sx={{borderRadius: '10px', display: {xs: 'none', md: 'flex'}, flexDirection: 'column', alignItems: 'center', px: {xs: 2, md: 3}, pt: {xs: 2, md: 3}, pb: 0 }} >
                        <Mui.CardHeader sx={{pt: 0}}
                          avatar={
                            <Mui.Avatar aria-label="Hector Colombo">
                              HC
                            </Mui.Avatar>
                          }
                          title="Hector Colombo"
                          subheader="Ingenieria, Argentina"
                        />
                        <Mui.CardContent sx={{p: 0}}>
                          <Mui.Typography variant="h6">
                            All your crypto in one place
                          </Mui.Typography>
                          <Mui.Typography
                            variant="body2"
                            color="text.secondary"
                            p={0}
                          >
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum has been the
                            industry's standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type and
                            scrambled.
                          </Mui.Typography>
                        </Mui.CardContent>
                      </Mui.Card>
                    </Mui.Stack>
                  ),
                  1: (
                    <Mui.Stack
                      direction="row"
                      justifyContent="center"
                      alignItems="center"
                      gap={4}
                      sx={{
                        width: "100%",
                        flexDirection: { xs: "column", md: "row" },
                      }}
                    >
                      <Mui.Card sx={{borderRadius: '10px', display: 'flex', flexDirection: 'column', alignItems: 'center', px: {xs: 2, md: 3}, pt: {xs: 2, md: 3}, pb: 0 }}>
                        <Mui.CardHeader sx={{pt: 0}}
                            avatar={
                              <Mui.Avatar aria-label="Hector Colombo">
                                HC
                              </Mui.Avatar>
                            }
                            title="Hector Colombo"
                            subheader="Ingenieria, Argentina"
                        />
                        <Mui.CardContent sx={{p: 0}}>
                          <Mui.Typography variant="h6">
                            All your crypto in one place
                          </Mui.Typography>
                          <Mui.Typography
                            variant="body2"
                            color="text.secondary"
                          >
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum has been the
                            industry's standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type and
                            scrambled.
                          </Mui.Typography>
                        </Mui.CardContent>
                      </Mui.Card>
                      <Mui.Card sx={{borderRadius: '10px', display: {xs: 'none', md: 'flex'}, flexDirection: 'column', alignItems: 'center', px: {xs: 2, md: 3}, pt: {xs: 2, md: 3}, pb: 0 }}>
                        <Mui.CardHeader sx={{pt: 0}}
                            avatar={
                              <Mui.Avatar aria-label="Alejandro Nicolas">
                                AN
                              </Mui.Avatar>
                            }
                            title="Alejandro Nicolas"
                            subheader="Ingenieria, Argentina"
                        />
                        <Mui.CardContent sx={{p: 0}}>
                          <Mui.Typography variant="h6">
                            All your crypto in one place
                          </Mui.Typography>
                          <Mui.Typography
                            variant="body2"
                            color="text.secondary"
                          >
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum has been the
                            industry's standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type and
                            scrambled.
                          </Mui.Typography>
                        </Mui.CardContent>
                      </Mui.Card>
                    </Mui.Stack>
                  ),
                  2: (
                    <Mui.Stack
                      direction="row"
                      justifyContent="center"
                      alignItems="center"
                      gap={4}
                      sx={{
                        width: "100%",
                        flexDirection: { xs: "column", md: "row" },
                      }}
                    >
                      <Mui.Card sx={{borderRadius: '10px', display: 'flex', flexDirection: 'column', alignItems: 'center', px: {xs: 2, md: 3}, pt: {xs: 2, md: 3}, pb: 0 }}>
                        <Mui.CardHeader sx={{pt: 0}}
                          avatar={
                            <Mui.Avatar aria-label="Alejandro Nicolas">
                              AN
                            </Mui.Avatar>
                          }
                          title="Alejandro Nicolas"
                          subheader="Ingenieria, Argentina"
                        />
                        <Mui.CardContent sx={{p: 0}}>
                          <Mui.Typography variant="h6">
                            All your crypto in one place
                          </Mui.Typography>
                          <Mui.Typography
                            variant="body2"
                            color="text.secondary"
                          >
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum has been the
                            industry's standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type and
                            scrambled.
                          </Mui.Typography>
                        </Mui.CardContent>
                      </Mui.Card>
                      <Mui.Card sx={{borderRadius: '10px', display: {xs: 'none', md: 'flex'}, flexDirection: 'column', alignItems: 'center', px: {xs: 2, md: 3}, pt: {xs: 2, md: 3}, pb: 0 }}>
                        <Mui.CardHeader sx={{pt: 0}}
                          avatar={
                            <Mui.Avatar aria-label="Hector Colombo">
                              HC
                            </Mui.Avatar>
                          }
                          title="Hector Colombo"
                          subheader="Ingenieria, Argentina"
                        />
                        <Mui.CardContent sx={{p: 0}}>
                          <Mui.Typography variant="h6">
                            All your crypto in one place
                          </Mui.Typography>
                          <Mui.Typography
                            variant="body2"
                            color="text.secondary"
                          >
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum has been the
                            industry's standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type and
                            scrambled.
                          </Mui.Typography>
                        </Mui.CardContent>
                      </Mui.Card>
                    </Mui.Stack>
                  ),
                }[index]
              }
            </Mui.Box>
          ))}
        </Mui.Box>
      </Mui.Stack>
      <Mui.Stack
        justifyContent="center"
        direction="row"
        sx={{
          position: "absolute",
          top: {xs: '85%', md: '92%', lg: "88%", xl: '85%'},
          left: "50%",
          transform: "translate(-50%,-50%)",
          textAlign: "center",
          width: 500,
        }}
        spacing={1}
      >
        {[0, 1, 2].map((val, i) => (
          <Mui.Box
            key={i}
            sx={{
              borderRadius: "100%",
              bgcolor: (theme) => theme.palette.primary.main,
              height: 10,
              width: 10,
              border: index === i ? "2px solid #fff" : undefined,
            }}
            onClick={() => handleClick(val)}
          />
        ))}
      </Mui.Stack>
    </>
  );
};
