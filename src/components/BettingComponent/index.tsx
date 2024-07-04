import React, { useState } from "react";
import { isMobile } from "react-device-detect";
import { toast } from "react-toastify";
import useSocket from "../../hooks/useSocket";
import { useWallet } from "@solana/wallet-adapter-react";
import usePersonalInfo from "../../hooks/usePersonalInfo";
import Rolling from "../Rolling";
import BettingInput from "../BettingInput";
import EvmWalletConnect from "../evm-wallet-connect/etherium-window-component";
import MetaMaskWalletButton from './../evm-wallet-connect/etherium-window-component'
import "./style.css";

const BettingComponent = () => {
  const { fund, betColor, bettingFlag } = usePersonalInfo();
  const curSocket = useSocket();
  const { publicKey } = useWallet();
  const [betAmount, setBetAmount] = useState("");

  const clearBetAmount = () => {
    setBetAmount("");
  };

  const increaseAmount = (amount: number) => {
    if (fund >= Number(betAmount) + amount) {
      setBetAmount((Number(betAmount) + amount).toString());
    } else {
      toast.warn(`You don't have enough Dice!`, {
        position: "bottom-left",
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    }
  };

  const maxAmount = () => {
    setBetAmount(fund.toString());
  };

  const multiAmount = () => {
    if (fund >= Number(betAmount) * 2) {
      setBetAmount((Number(betAmount) * 2).toString());
    } else {
      toast.warn(`You don't have enough Dice!`, {
        position: "bottom-left",
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    }
  };

  const divideAmount = () => {
    setBetAmount(parseInt((Number(betAmount) / 2).toString()).toString());
  };

  const betGreen = () => {
    if (
      betAmount === "" ||
      Number(betAmount) <= 0 ||
      fund === 0 ||
      fund < Number(betAmount)
    ) {
      toast.warning(`You can't bet less than 0`, {
        position: "bottom-left",
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    } else {
      if (bettingFlag && betColor === "") {
        curSocket.emit(
          "betting",
          JSON.stringify({
            wallet: publicKey?.toBase58(),
            amount: betAmount,
            type: "green",
          })
        );
        toast.success(`Bet ${betAmount} Dice on Green Part`, {
          position: "bottom-left",
          autoClose: 1500,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
      } else if (betColor !== "") {
        toast.error(`You already bet!`, {
          position: "bottom-left",
          autoClose: 1500,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
      } else {
        toast.error(`Betting is end`, {
          position: "bottom-left",
          autoClose: 1500,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
      }
    }
  };

  const betBlue = () => {
    if (
      betAmount === "" ||
      Number(betAmount) <= 0 ||
      fund === 0 ||
      fund < Number(betAmount)
    ) {
      toast.warning(`You can't bet less than 0`, {
        position: "bottom-left",
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    } else {
      if (bettingFlag && betColor === "") {
        curSocket.emit(
          "betting",
          JSON.stringify({
            wallet: publicKey?.toBase58(),
            amount: betAmount,
            type: "blue",
          })
        );
        toast.success(`Bet ${betAmount} Dice on Blue Part`, {
          position: "bottom-left",
          autoClose: 1500,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
      } else if (betColor !== "") {
        toast.error(`You were already bet!`, {
          position: "bottom-left",
          autoClose: 1500,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
      } else {
        toast.error(`Betting is end`, {
          position: "bottom-left",
          autoClose: 1500,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
      }
    }
  };

  const betSame = () => {
    if (
      betAmount === "" ||
      Number(betAmount) <= 0 ||
      fund === 0 ||
      fund < Number(betAmount)
    ) {
      toast.warning(`You can't bet less than 0`, {
        position: "bottom-left",
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    } else {
      if (bettingFlag && betColor === "") {
        curSocket.emit(
          "betting",
          JSON.stringify({
            wallet: publicKey?.toBase58(),
            amount: betAmount,
            type: "same",
          })
        );
        toast.success(`Bet ${betAmount} Dice on Blue Part`, {
          position: "bottom-left",
          autoClose: 1500,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
      } else if (betColor !== "") {
        toast.error(`You already bet!`, {
          position: "bottom-left",
          autoClose: 1500,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
      } else {
        toast.error(`Betting is end`, {
          position: "bottom-left",
          autoClose: 1500,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
      }
    }
  };

  return (
    <div className="container">
      <div className="head-content banner-wrapper row align-items-center">
        <div className="col-lg-6 col-md-12">
          <div className="banner-content pt-5">
            <h1
              className="best-template animated"
              data-animation="fadeInUpShorter"
              data-animation-delay="1.5s"
            >
              Select which dice will roll the higher number.
              <br />
              Select the center option if you think they will land on the same
              number for a chance to 5x your bet.
            </h1>
            <div className="mt-5">
              <a
                href="/deposit"
                className="btn btn-lg btn-gradient-purple btn-glow mb-2 animated"
                data-animation="fadeInUpShorter"
                data-animation-delay="1.8s"
              >
                Deposit
              </a>
            </div>
            <EvmWalletConnect />
            <MetaMaskWalletButton />
          </div>
        </div>
        <div className="col-lg-6 col-md-12 move-first">
          <div
            className="crypto-video animated"
            data-animation="fadeInUpShorter"
            data-animation-delay="1.7s"
          >
            <div className="mt-5 position-relative">
              <Rolling />
            </div>
          </div>
        </div>
      </div>
      <BettingInput
        betAmount={betAmount}
        clearBetAmount={clearBetAmount}
        increaseAmount={increaseAmount}
        multiAmount={multiAmount}
        divideAmount={divideAmount}
        maxAmount={maxAmount}
        betGreen={betGreen}
        betBlue={betBlue}
        betSame={betSame}
      />
      {isMobile && (
        <div className="footer row pt-5 pb-5">
          <div className="col-md-12 text-center">
            <a href="https://discord.gg/NuNkm6B" className="m-3">
              <i className="fa fa-discord text-muted fa-2x"></i>
            </a>
            <a
              href="https://twitter.com/YourAccount"
              className="m-3"
            >
              <i className="fa fa-twitter text-muted fa-2x"></i>
            </a>
            <a
              href="https://www.youtube.com/channel/YourAccount"
              className="m-3"
            >
              <i className="fa fa-youtube text-muted fa-2x"></i>
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default BettingComponent;
