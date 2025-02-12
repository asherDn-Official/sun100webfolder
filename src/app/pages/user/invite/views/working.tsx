import * as Mui from "@mui/material";
import * as Components from "src/app/components";
import * as Constants from "src/constants";

export const Working = () => (
  <Components.Global.Container direction="column">
    <Mui.Typography variant="h4">How it Works?</Mui.Typography>
    <Mui.Stack direction={{xs: 'column', md: 'row' }} gap={2} sx={{ p: {xs: 1, md: 4}, mt: 1 }}>
        {Constants.Works.map((label, index) => (
          <Mui.Stack alignItems='center' gap={1.075}>
            <Mui.Stack direction='row' justifyContent='center' alignItems='center' width={60} height={60} bgcolor='#fcb92321' borderRadius='50%'>
              <Mui.CardMedia
                    src={label.pic}
                    component="img"
                    sx={{
                      width: 20,
                      height: 20,
                    }}
              />
            </Mui.Stack>
            <Mui.Typography color="text.primary" variant="h6" fontSize={{xs: '16px', md: '20px'}}>
              {label.label}
            </Mui.Typography>
            <Mui.Typography color='text.disabled' variant="subtitle2" textAlign='center'>
              {label.description}
            </Mui.Typography>
          </Mui.Stack>
        ))}
    </Mui.Stack>
  </Components.Global.Container>
);
