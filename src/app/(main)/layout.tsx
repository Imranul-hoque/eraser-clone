import { Header } from "../_components/header";

type MainLayoutProps = {
  children: React.ReactNode;
};

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <div className="w-full h-full">
      <Header />
      <main className="pt-6">{children}</main>
    </div>
  );
};

export default MainLayout;
