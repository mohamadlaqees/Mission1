import { ethers } from "ethers";
import clas from "./BlockNumber.module.css";
import {
  Await,
  Form,
  defer,
  useLoaderData,
  useNavigation,
} from "react-router-dom";
import { Suspense } from "react";

const BlockNumber = () => {
  const { Block } = useLoaderData();
  const navigation = useNavigation();
  const loadingState = navigation.state === "loading";

  return (
    <div className={clas.container}>
      <Suspense fallback={<p style={{ textAlign: "center" }}>Loading...</p>}>
        <Await resolve={Block}>
          {(blockNumber) => (
            <div>
              <h1>The latest block number :</h1>
              <p>{blockNumber}</p>
            </div>
          )}
        </Await>

        <div className={clas.action}>
          <Form method="GET">
            <button
              disabled={loadingState}
              className={loadingState ? clas.loading : clas.button}
            >
              {loadingState ? "Loading..." : "Refresh"}
            </button>
          </Form>
        </div>
      </Suspense>
    </div>
  );
};

export default BlockNumber;

export async function loaderBlock() {
  const provider = ethers.getDefaultProvider();
  const blockNumber = await provider.getBlockNumber();
  return blockNumber;
}

export const loader = () => {
  return defer({
    Block: loaderBlock(),
  });
};
