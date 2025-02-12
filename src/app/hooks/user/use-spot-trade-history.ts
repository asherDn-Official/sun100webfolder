import React from "react";
import * as Api from "src/api";
import * as Contexts from "src/app/contexts";

export const useSpotCoinTrades = (coinId: string, uid: string) => {
  const { trigger } = React.useContext(Contexts.UserContext);

  const { data: trades, isFetching: loading } = Api.Server.useRequest(
    ["getTrades", trigger, coinId],
    {
      url: `/spot/trades?page=${1}&limit=${100}&uid=${uid}&orderBy=desc&coinId=${coinId.replace(
        "_",
        "/"
      )}`,
      method: "get",
    }
  );

  return {
    trades: trades?.data || [],
    count: trades?.data?.length || 0,
    openOrderCount:
      trades?.data?.filter((trade: any) =>
        ["pending"].includes(trade.status.toLowerCase())
      )?.length || 0,
    loading,
  };
};

export const useSpotTrades = (filter: string): useSpotTrades.Return => {
  const { trigger, user } = React.useContext(Contexts.UserContext);

  const [pageNo, setPageNo] = React.useState(0);
  const [pageLimit, setPageLimit] = React.useState(10);
  const { data: trades, isFetching: loading } = Api.Server.useRequest(
    ["getTrades", trigger, pageNo.toString()],
    {
      url: `/spot/trades?page=${pageNo + 1}&limit=${pageLimit}&uid=${
        user?.uid
      }&orderBy=desc`,
      method: "get",
    }
  );
  const handlePageNo = (number: number) => setPageNo(number - 1);

  const handlePageLimit = (number: number) => setPageLimit(number);

  React.useEffect(() => {
    setPageNo(0);
  }, [filter]);

  return {
    trades: trades?.data || [],
    count: trades?.totalCount || 0,
    loading,
    pageNo,
    pageLimit,
    handlePageNo,
    handlePageLimit,
  };
};

export declare namespace useSpotTrades {
  export interface Return {
    trades: (allOrder & tradeBook)[];
    count: number;
    loading: boolean;
    pageNo: number;
    pageLimit: number;
    handlePageNo: (number: number) => void;
    handlePageLimit: (number: number) => void;
  }
}
