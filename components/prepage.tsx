/**
* This code was generated by v0 by Vercel.
* @see https://v0.dev/t/g3omDCQgTeN
* Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
*/
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { Popup } from "./modul";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import CountdownTimer from "./countdown";
import { useEffect, useState } from "react";
import { ethers } from 'ethers';
import Link from "next/link"

// import { Progress } from "@/components/ui/progress";
require('dotenv').config();

// Replace with your contract's ABI and address
const contractABI = [{"inputs":[{"internalType":"address","name":"_myToken","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"usdtAmount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"myTokenAmount","type":"uint256"}],"name":"TokensSwapped","type":"event"},{"inputs":[],"name":"buy","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"buyerswithUSDT","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getmytokentBalance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"myToken","outputs":[{"internalType":"contract IERC20","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"usersWhoPurchased","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_withd","type":"address"}],"name":"withdrawAll","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_withd","type":"address"}],"name":"withdrawAllERC20","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_withd","type":"address"}],"name":"withdrawAllETH","outputs":[],"stateMutability":"nonpayable","type":"function"}]
const contractAddress = "0x3D33b56876BabF06bD98560F590953ff28C10A3D";



export function Prepage() {
  const [myData, setMyData] = useState("");

  interface TimeLeft {
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
  }


  const endDate = new Date();
  endDate.setDate(27);
  endDate.setHours(0, 0, 0, 0);


  const calculateTimeLeft = (): TimeLeft => {
    const difference = new Date(endDate).getTime() - new Date().getTime();
    let timeLeft: TimeLeft = { days: 0, hours: 0, minutes: 0, seconds: 0 };

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((difference % (1000 * 60)) / 1000),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [endDate]);

  const { days, hours, minutes, seconds } = timeLeft;


const Totalsupply = 2500000000
const exp = BigInt(myData) // 100000000

const bigs =Number(ethers.utils.formatEther(exp));




const RPC=process.env.RPC_URL

useEffect(() => {
  const fetchData = async () => {
    try {
      // Connect to the Ethereum provider
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    
 
      // Request access to the user's MetaMask account
      await provider.send("eth_requestAccounts", []);

      // Create a new contract instance
      const contract = new ethers.Contract(contractAddress, contractABI, provider);

      // Call the read function
      const data = await contract.getmytokentBalance();

      // Update state with the result
      setMyData(data);
    } catch (error) {
      console.error("Error fetching data from contract:", error);
    }
  };

  fetchData();
  // Fetch data every 30 seconds
  const intervalId = setInterval(fetchData, 30000);

  // Clear interval when the component unmounts
  return () => clearInterval(intervalId);
}, []);


const slaeamount =Totalsupply - bigs 
const presales= (slaeamount/Totalsupply) * 100 
console.log(exp, bigs)
console.log (presales, slaeamount)


// <span className="text-2xl font-bold">Crypto Discover</span>

  return (
    <div className="bg-[#0f172a] text-white min-h-screen p-8">


<div className="flex items-center gap-2 mb-6">
          <Link className="flex items-center gap-2" href="#">
          <img src="/logoname.png" alt="Logo"  style={{ height: '104px', width: '94px' }}  /> {/* Adjust height and width as needed */}
           
          </Link>
        </div>


      <div className="flex justify-between items-start">
        <div className="max-w-lg space-y-6">
          <h1 className="text-5xl font-bold leading-tight">Buy Qingen Coin, Invest Qingen and Yourself</h1>
          <p className="text-lg">
          Qingen Coin is a decentralized token issued by Qingen Xu based on the Ethereum blockchain ERC-20 network. It is also the world's first token issued for political purposes. The original intention of its issuance is to cooperate with Qingen's Chinese presidential campaign
          </p>
          <a href="https://rams-organization-2.gitbook.io/qingen-coin-qgc-whitepaper/" target="_blank" rel="noopener noreferrer">
      <Button className="bg-[#22c55e] text-white">WHITEPAPER</Button>
    </a>
          <div className="space-y-2">
            <div className="flex justify-between">
              <p>Total Supply: 10,000,000,000</p>
              <p></p>
            </div>
            <div className="flex justify-between">
              <p></p>
            </div>
          </div>
        </div>
       
        <div className="bg-[#1e293b] p-6 rounded-lg max-w-md">
        <ConnectButton/>
          <Badge className="mb-4" variant="secondary">
            
            
          </Badge>
          <div className="mb-6">
            <h2 className="text-lg font-semibold mb-2">PRE-SALE ENDS IN</h2>
            <div className="flex space-x-2 justify-center">
              <div className="bg-[#312e81] p-4 rounded-lg">
                <p className="text-2xl font-semibold">  <span>{days} day{days !== 1 ? 's' : ''}</span>{' '}</p>
              
              </div>
              <div className="bg-[#312e81] p-4 rounded-lg">
                <p className="text-2xl font-semibold"> <span>{hours} hour{hours !== 1 ? 's' : ''}</span>{' '}</p>
              </div>
              <div className="bg-[#312e81] p-4 rounded-lg">
                <p className="text-2xl font-semibold"><span>{minutes} minute{minutes !== 1 ? 's' : ''}</span>{' '}</p>
              </div>
              <div className="bg-[#312e81] p-4 rounded-lg">
                <p className="text-2xl font-semibold"> <span>{seconds} second{seconds !== 1 ? 's' : ''}</span></p>
              </div>
            </div>
          </div>
          <Progress className="w-full bg-[#64748b] h-2.5 rounded-full mb-4" value={presales} />
         <div className="flex justify-end space-y-4 mb-6">  <p>{presales}%</p></div>
          <div className="space-y-4 mb-6">
        
     <div className="flex justify-between">
              <p>Raised: {slaeamount}</p>
              <p>Goal: 2500000000</p>
            </div>
            <div className="flex justify-between">
              <p>Token Name</p>
              <p>Qingen Coin</p>
            </div>
            <div className="flex justify-between">
              <p>Token Symbol</p>
              <p>QGC</p>
            </div>
            <div className="flex justify-between">
              <p>start Price pre QGC</p>
              <p>0.00000001 ETH</p>
            </div>
            <div className="flex justify-between">
              <p> second stage Price pre QGC</p>
              <p> 0.00000002ETH</p>
            </div> 
            <div className="flex justify-between">
              <p>third Stage Price pre QGC</p>
              <p>0.00000003ETH</p>
            </div> 
          </div>
          
         
          <Popup/>
         
          
        </div>
      </div>
    </div>
  )
}
/**112      <div className="flex justify-between">
              <p>Raised: 20000</p>
              <p>Goal: 100000</p>
            </div> */

/**   <div className="flex justify-between">
              <p>Next Stage</p>
              <p>0.002 USD</p>
            </div> */
