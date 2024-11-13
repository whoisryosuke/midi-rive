import PianoSimple from "@/components/animations/PianoSimple/PianoSimple";
import PianoSimpleWrapper from "@/components/animations/PianoSimple/PianoSimpleWrapper";
import Footer from "@/components/dom/Footer";
import Logo from "@/components/dom/Logo/Logo";
import Sidebar from "@/components/dom/Sidebar/Sidebar";
import DebugInput from "@/features/input/DebugInput";
import MusicSwitcher from "@/features/Music/MusicSwitcher";
import useStore from "@/helpers/store";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";

// const PianoSimple = dynamic(
//   () => import("@/components/animations/PianoSimple/PianoSimple"),
//   {
//     ssr: false,
//   }
// );

// DOM elements here
const DOM = () => {
  return (
    <>
      <PianoSimpleWrapper scale={3}>
        <PianoSimple />
      </PianoSimpleWrapper>
      <Sidebar />
      <MusicSwitcher />
      <Footer />
    </>
  );
};

// Canvas/R3F components here
const R3F = () => {
  // Example of using the router to change pages
  // It can also be inside R3F component (see `two.tsx` and `Box.tsx`)
  const { router } = useStore();
  const handleOnClick = () => {
    router.push("/two");
  };

  return <></>;
};

export default function Page() {
  return (
    <>
      <DOM />
      <R3F />
    </>
  );
}

export async function getStaticProps() {
  return {
    props: {
      title: "",
    },
  };
}
