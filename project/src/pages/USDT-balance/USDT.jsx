import { Form, useActionData, useNavigation } from "react-router-dom";
import clas from "./USDT.module.css";
import { ethers } from "ethers";

const USDT = () => {
  const balance = useActionData() || 0;
  const navigation = useNavigation();
  const loadingState = navigation.state === "submitting";

  return (
    <>
      <Form method="post" className={clas.form}>
        <label htmlFor="address">Ethereum address</label>
        <input type="text" id="address" name="address" required />
        <div className={clas.action}>
          <button
            disabled={loadingState}
            className={loadingState ? clas.loading : clas.button}
          >
            {loadingState ? "Loading..." : "Get"}
          </button>
        </div>
      </Form>
      <div className={clas.box}>
        <p>
          The USDT balance is :
          <span className={clas.balance}>{ethers.formatUnits(balance, 6)}</span>{" "}
        </p>
      </div>
    </>
  );
};

export default USDT;

const minABI = [
  {
    constant: true,
    inputs: [{ name: "_owner", type: "address" }],
    name: "balanceOf",
    outputs: [{ name: "balance", type: "uint256" }],
    type: "function",
  },
];

export async function action({ request }) {
  const data = await request.formData();
  const etherAddress = data.get("address");
  const provider = ethers.getDefaultProvider();
  const usdtContractAddress = "0xdAC17F958D2ee523a2206206994597C13D831ec7";
  const contract = new ethers.Contract(usdtContractAddress, minABI, provider);
  const balance = await contract.balanceOf(`${etherAddress}`);
  return balance;
}
