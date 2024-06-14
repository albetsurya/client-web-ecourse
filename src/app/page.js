import CardProduct from "@/components/ui/CardProduct";
import Header from "@/components/ui/Header";
import Pagination from "@/components/ui/Pagination";

export default function Home() {
  return (
    <main>
      <div className="pt-44">
        <Header /> 
        <div className="grid grid-cols-3 px-32 gap-8 pt-24">
          <CardProduct />
        </div>
        <div className="flex justify-center items-center py-[52px]">
          <Pagination />
        </div>
      </div>
    </main>
  );
}
