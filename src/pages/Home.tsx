import FreeHunt from "../components/FreeHunt";
import { AppProps } from "../types";

interface Props {
  APP_PROPS: AppProps;
}

export default function Home({ APP_PROPS }: Props) {
  return (
    <main className="home">
      {APP_PROPS.charged && (
        <FreeHunt pick={APP_PROPS.pick} handleFreeHunt={APP_PROPS.handleFreeHunt} />
      )}
    </main>
  );
}
