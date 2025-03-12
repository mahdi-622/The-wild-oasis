import SideNavigation from "@/app/_components/SideNavigation";

export default function AccountLayout({ children }) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-[250px_1fr] min-h-screen">
      {/* Sidebar - Keeps navigation on the left */}
      <aside className="border-r border-primary-900 flex flex-col">
        <SideNavigation />
      </aside>

      {/* Main content stays separate */}
      <main className="p-6 sm:p-10 flex-grow">{children}</main>
    </div>
  );
}
