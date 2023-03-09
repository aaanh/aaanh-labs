import Head from "next/head";
import Branding from "~/components/Logo";
import { NavBar, NavBarNarrow } from "~/components/NavBar";
import MyPersona, { MyPersonaNarrow } from "~/components/Persona";

const DefaultLayout = ({ children }: any) => {
  return (
    <>
      <Head>
        <title>Anh H Nguyen</title>
        <meta name="description" content="Anh's Homepage" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="min-h-screen w-screen">
        <header
          id="wide-header"
          className="hidden h-[8vh] items-center justify-between py-3 px-[6vw] md:flex"
        >
          <div className="flex items-center space-x-8">
            <Branding></Branding>
            <NavBar></NavBar>
          </div>
          <div className="flex">
            <MyPersona></MyPersona>
          </div>
        </header>
        <header
          id="narrow-header"
          className="flex justify-between py-3 px-[2vw] md:hidden"
        >
          <NavBarNarrow></NavBarNarrow>
          <Branding></Branding>
          <MyPersonaNarrow></MyPersonaNarrow>
        </header>
        {children}
      </main>
    </>
  );
};

export default DefaultLayout;
