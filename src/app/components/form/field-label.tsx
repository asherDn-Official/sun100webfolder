import * as Mui from "@mui/material";
import React from "react";
import * as Router from "react-router-dom";

export const FieldLabel = ({
  children,
  label,
  error,
  hide
}: Child & { label?: React.ReactNode; error: boolean; hide?: boolean }) => {
  const { pathname } = Router.useLocation();
  return (
    <Mui.Stack spacing={1} /* sx={{ width: "100%" }} */>
      <Mui.FormLabel
        error={error}
        sx={{
          color: pathname.includes("kyc")
            ? "text.primary"
            : Mui.colors.grey[600],
          display: hide ? 'none' : 'block'
        }}
      >
        {label}
      </Mui.FormLabel>
      {children}
    </Mui.Stack>
  );
};
