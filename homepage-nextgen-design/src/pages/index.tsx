import { type NextPage } from "next";
import DefaultLayout from "~/layouts/DefaultLayout";

const Home: NextPage = () => {
  return (
    <DefaultLayout>
      <div className="via-indigo-600-600 flex min-h-[92vh] flex-col items-center justify-center bg-gradient-to-r from-blue-600 to-sky-600 py-2">
        <div className="flex flex-col flex-wrap p-4">
          <h1 className="text-6xl font-bold text-white">Welcome!</h1>
          <h2 className="text-4xl font-light text-white">
            New stuff coming soon...
          </h2>
          <br></br>
          <h1 className="text-6xl font-bold text-white">Xin chào!</h1>
          <h2 className="text-4xl font-light text-white">
            Những thứ mới mẻ sẽ đến sớm...
          </h2>
          <br></br>

          <h1 className="text-6xl font-bold text-white">Bienvenue!</h1>
          <h2 className="text-4xl font-light text-white">
            De nouvelles choses arrivent bientôt...
          </h2>
          <br></br>

          <h1 className="text-6xl font-bold text-white">いらっしゃいませ!</h1>
          <h2 className="text-4xl font-light text-white">
            新しいものがすぐに来ます...
          </h2>
          <br></br>

          <h1 className="text-6xl font-bold text-white">Wilkommen!</h1>
          <h2 className="text-4xl font-light text-white">
            Neue Dinge kommen bald...
          </h2>
        </div>
      </div>
    </DefaultLayout>
  );
};

export default Home;
