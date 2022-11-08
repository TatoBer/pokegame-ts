import FreeHunt from "../components/FreeHunt";
import Tutorial from "../components/Tutorial";
import { AppProps } from "../types";
import "./Home.css"

interface Props {
  APP_PROPS: AppProps;
}

export default function Home({ APP_PROPS }: Props) {
  return (
    <main className="home">
      {APP_PROPS.charged && (
        <FreeHunt pick={APP_PROPS.pick} handleFreeHunt={APP_PROPS.handleFreeHunt} />
      )}
      <Tutorial />
    </main>
  );
}
