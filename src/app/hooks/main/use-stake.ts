import * as Api from "src/api";
import React from "react";
import * as Constants from "src/constants";
import * as Router from "react-router-dom";
import moment from "moment";
import * as Providers from "src/app/providers";

export interface StakeDashboard {
  total: number | null;
  active: number | null;
  reward: number | null;
  totalAmount: number | null;
}
export type PoolDetails = {
  spId: number;
  baseCoin: string;
  baseCoinImg: string;
  quoteCoin: string;
  quoteCoinImg: string;
  pool_name: string;
  apr: number;
  monthlyReturnsInPcnt: number;
  dailyReturnsInPcnt: number;
  lock_period_days: number;
  createdAt: string;
  networkType: string;
  totalAmount: number;
};
export type UserStakeDetails = {
  id: number;
  userId: string;
  pool_id: number;
  amount: number;
  stake_date: string; // ISO date string
  walletId: string | null; // Nullable value
  locked_until: string; // ISO date string
  status: string; // Consider using a union type like 'active' | 'inactive'
  spId: number;
  baseCoin: string;
  baseCoinImg: string;
  quoteCoin: string;
  quoteCoinImg: string;
  pool_name: string;
  apr: number;
  monthlyReturnsInPcnt: number;
  dailyReturnsInPcnt: number;
  lock_period_days: number;
  createdAt: string; // ISO date string
  networkType: string;
  reward_amount: number;
};
export type CoinBalanceDetails = {
  balance: number;
  baseCoinImg: string;
  daily: number;
  estimatedValue: number;
  coinPrice: number;
  coin: string;
};

export type RewardDetails = {
  Token: string;
  Time: string; // A string representation of `createdAt - locked_until`
  Size: string; // A string representing a combination of `amount + baseCoin`
  "Reward Account": string; // Assuming `valut` is a string (typo? should it be "vault"?)
  "Daily Reward": string; // Since it's a formula, we represent it as a string
  "Reward Token": string;
  "Remaining Lock-In Period": string; // This is months, represented as a string
};

export const useStake = (state = false) => {
  const handler = Providers.useCustomHandler;

  const [openModel, setOpenModel] = React.useState<boolean>(false);

  const { pathname } = Router.useLocation();
  const [model, setModel] = React.useState<"1" | "2">("1");

  const [dashboard, setDashboard] = React.useState<StakeDashboard>({
    active: 0,
    reward: 0,
    total: 0,
    totalAmount: 0,
  });
  const [poolResult, setStakePoolResult] = React.useState<PoolDetails[]>([]);

  const [stakingHistory, setStakingHistory] = React.useState<RewardDetails[]>(
    []
  );
  const [staking_reward, setStakingReward] = React.useState<CoinBalanceDetails>(
    { balance: 0, baseCoinImg: '', coin: "", coinPrice: 0, daily: 0, estimatedValue: 0 }
  );

  const [stakingloading, setStakingLoad] = React.useState<boolean>(true);

  const getStakingPool = React.useCallback(() => {
    setStakingLoad(true);
    Api.Server.Request("getStakingpool", {
      type: "GET",
      url: `${Constants.API_CONFIG.baseURL}`,
    }).then((res: { dashboard: any; result: any }) => {
      setStakingLoad(false);
      setDashboard(res.dashboard);
      setStakePoolResult(res.result || []);
    });
  }, []);

  const getStakingList = React.useCallback(() => {
    setStakingLoad(true);
    Api.Server.Request("getStakingList", {
      type: "GET",
      url: `${Constants.API_CONFIG.baseURL}`,
    }).then((res: { stakeList: UserStakeDetails[] }) => {
      setStakingLoad(false);
      let data: RewardDetails[] = res.stakeList?.map(
        (item: UserStakeDetails) => {
          return {
            Token: item.baseCoin,
            Time: moment(item.stake_date).format("DD MMM YYYY | hh:mm a"),
            Size: `${item.amount} ${item.baseCoin}`,
            "Reward Account": "valut",
            // "Daily Reward": "(apr*( amoumt/100)/365)",
            "Daily Reward": `${((item.apr * (item.amount / 100)) / 365).toFixed(2)}`,
            "Reward Token": item.baseCoin,
            "Remaining Lock-In Period": `${item.lock_period_days / 30} Months`,
          };
        }
      );

      setStakingHistory(data);
    });
  }, []);

  const getStakingRewards = React.useCallback(() => {
    setStakingLoad(true);
    Api.Server.Request("getStakingRewards", {
      type: "GET",
      url: `${Constants.API_CONFIG.baseURL}`,
    }).then((res: { result: any }) => {
      setStakingLoad(false);

      setStakingReward(res.result);
    });
  }, []);

  const Redeem_amount = React.useCallback(
    async (amount: number) => {
      await Api.Server.Request("redeem_rewards", {
        amount,
      }).then((res: { error: any; message: any }) => {
        !res.error && getStakingRewards();
        !res.error && setOpenModel(false);
        res.error
          ? handler({
              message: res.message,
              variant: "error",
            })
          : handler({
              message: res.message,
              variant: "success",
            });
      });
      getStakingRewards();
    },
    [getStakingRewards, getStakingRewards]
  );
  const add_stake = React.useCallback(
    async (data: Record<"amount" | "poolId", number>) => {
      await Api.Server.Request("add_stake", {
        ...data,
      }).then((res: { error: any; message: any }) => {
        if (!res.error) {
          setModel("2");
        }
        handler({
          message: res.message,
          variant: res.error ? "error" : "success",
        });
      });
    },
    [getStakingPool, handler]
  );

  const resetStak = React.useCallback(() => {
    setModel("1");
    getStakingPool();
  }, []);

  React.useEffect(() => {
    if (pathname == "/staking/staking") {
      getStakingPool();
    } else if (pathname == "/staking/rewards") {
      getStakingPool();
      getStakingRewards();
    } else if (pathname == "/staking/staking%20history") {
      getStakingPool();
      getStakingList();
    }
  }, [pathname]);

  return {
    dashboard,
    poolResult,
    stakingHistory,
    staking_reward,
    stakingloading,
    Redeem_amount,
    add_stake,
    model,
    resetStak,
    setOpenModel,
    openModel,
  };
};
