import * as Mui from "@mui/material";
import React from "react";
import * as Components from "src/app/components";

export const ResponsiveTable = ({
  id,
  titles,
  data,
  size,
  rowPerPage = 10,
  count,
  pageNo,
  setPageNo,
  sx,
  hide_pagination,
}: responsiveTable.Props &
  Pick<Mui.TableProps, "size"> & { rowPerPage?: number }) => {
  const [page, setPage] = React.useState(1);
  const handlePageChange = (e: React.ChangeEvent<unknown>, value: number) => {
    if (setPageNo) setPageNo(value);
    else setPage(value);
  };
  React.useEffect(() => {
    setPage(1);
  }, [data?.length]);

  return (
    <>
      <Mui.TableContainer
        id={id}
        sx={{
          // borderRadius: "inherit",
          display: { xs: "none", md: "block" },
          minHeight: 600,
          py: 2.5,
          ...sx,
        }}
      >
        <Mui.Table size={size}>
          <Mui.TableHead
            sx={{
              bgcolor: (theme) =>
                theme.palette.mode === "light"
                  ? /* theme.palette.grey[100] */ "#F8F9FB"
                  : "background.default",
              // borderColor: (theme) => theme.palette.grey[100]
            }}
          >
            {titles.map((title, index) => (
              <Mui.TableCell key={index} sx={{ border: "none" }}>
                <Mui.Typography
                  noWrap
                  variant="body1"
                  /* color="#252E41" */ fontWeight={700}
                >
                  {title}
                </Mui.Typography>
              </Mui.TableCell>
            ))}
          </Mui.TableHead>
          <Mui.TableBody>
            {data?.length ? (
              data
                ?.slice(
                  count ? 0 : rowPerPage * page - rowPerPage,
                  count ? undefined : rowPerPage * page
                )
                ?.map((values, index) => <TableData key={index} {...values} />)
            ) : (
              <Mui.TableRow>
                <Mui.TableCell
                  colSpan={titles?.length} /* sx={{border: 'none'}} */
                >
                  <Mui.Typography
                    variant="h5"
                    textAlign="center"
                    sx={{
                      p: 5,
                      color: Mui.colors.grey[300],
                    }}
                  >
                    No Record Found
                  </Mui.Typography>
                </Mui.TableCell>
              </Mui.TableRow>
            )}
          </Mui.TableBody>
        </Mui.Table>
      </Mui.TableContainer>
      {data?.length ? (
        data
          ?.slice(
            count ? 0 : rowPerPage * page - rowPerPage,
            count ? undefined : rowPerPage * page
          )
          ?.map((values, index) => (
            <CardView key={index} titles={titles} data={values} />
          ))
      ) : (
        <Mui.Typography
          variant="h5"
          textAlign="center"
          sx={{
            p: 5,
            display: { xs: "flex", md: "none" },
            color: Mui.colors.grey[300],
          }}
        >
          No Record Found
        </Mui.Typography>
      )}
      {!hide_pagination && (
        <Mui.Stack
          direction={{ xs: "column", sm: "row" }}
          alignItems="center"
          justifyContent="flex-end"
          sx={{ m: 2, display: rowPerPage !== 10 ? "none" : "flex" }}
        >
          {/* <Mui.Typography variant="body1" id="totalDataCount">
          Total: {count || data.length}
        </Mui.Typography> */}
          <Mui.Pagination
            id="pageNo"
            variant="outlined"
            shape="rounded"
            color="primary"
            count={
              (count || data?.length) <= rowPerPage
                ? 1
                : (count || data?.length) % rowPerPage
                ? parseInt(((count || data?.length) / rowPerPage).toString()) +
                  1
                : parseInt(((count || data?.length) / rowPerPage).toString())
            }
            page={pageNo || page}
            onChange={handlePageChange}
          />
        </Mui.Stack>
      )}
    </>
  );
};

const TableData = ({ node, ...props }: responsiveTable.Data) => {
  const [open, close] = React.useState(false);

  return (
    <>
      <Mui.TableRow
        sx={{ borderColor: (theme) => theme.palette.grey[100] }}
        onClick={() => close(!open)}
      >
        {Object.entries(props).map(([key, value], index) => (
          <Mui.TableCell key={index}>
            <Mui.Typography noWrap variant="body2">
              {key === "date"
                ? Components.Global.timeFn(value as unknown as string)
                : value}
            </Mui.Typography>
          </Mui.TableCell>
        ))}
      </Mui.TableRow>
      {node && open && (
        <Mui.TableRow>
          <Mui.TableCell colSpan={Object.keys(props).length}>
            {node}
          </Mui.TableCell>
        </Mui.TableRow>
      )}
    </>
  );
};

const CardView = ({
  titles,
  data: { node, ...values },
}: responsiveTable.CardProps) => {
  const [open, close] = React.useState(false);
  return (
    <Mui.Card
      sx={{
        borderRadius: "inherit",
        display: { xs: "block", md: "none" },
        border: (theme) => `1px solid ${theme.palette.grey[200]}`,
        // boxShadow: (theme) => {
        //   md: `0 0 5px ${theme.palette.grey[400]}`;
        // },
        my: 1,
      }}
    >
      <Mui.Grid
        component={Mui.CardContent}
        container
        spacing={2}
        sx={{
          display: { xs: "flex", md: "none" },
        }}
        onClick={() => close(!open)}
      >
        {Object.entries(values).map(([key, value], i, a) => (
          <Mui.Grid
            key={i}
            item
            xs={a.length % 2 && a.length === i + 1 ? 12 : 6}
          >
            {key === "date" ? (
              <Components.Global.StackLabel
                medium
                title={titles[i]}
                label={value}
                time
              />
            ) : key === "action" ? (
              <Mui.Stack alignItems="center">{value}</Mui.Stack>
            ) : key === "coin" ? (
              <Mui.Typography variant="body1" noWrap>
                {value}
              </Mui.Typography>
            ) : (
              <Components.Global.StackLabel
                medium
                title={titles[i]}
                label={value}
                node
              />
            )}
          </Mui.Grid>
        ))}
      </Mui.Grid>
      {node && open && node}
    </Mui.Card>
  );
};

export declare namespace responsiveTable {
  export interface Props {
    id?: string;
    titles: string[];
    data: Data[];
    count?: number;
    pageNo?: number;
    setPageNo?: (number: number) => void;
    sx?: Mui.SxProps;
    hide_pagination?: boolean;
  }
  export interface CardProps {
    titles: string[];
    data: Data;
  }
  export interface Data {
    [key: string]: string | number | React.ReactNode;
  }
}
