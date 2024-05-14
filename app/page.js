import HomePageComponents from "./components/pages/Home/HomePageComponents";
import { fetchUsers } from "./lib/apiCalls/homePageApiCalls";
import { TanstackPrefetchQuery } from "./lib/tanstack/TanstackPrefetchQuery";


export default function Home() {
  TanstackPrefetchQuery({ queryKey: ["home"], queryFn: fetchUsers });
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        <h2>Home page</h2>
        <HomePageComponents />
      </div>
    </main>
  );
}
