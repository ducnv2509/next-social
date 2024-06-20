import Headers from "../ui/dashboard/header";
import SideNav from "../ui/dashboard/sidenav";


export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div>

            <Headers></Headers>
        <div className="flex h-5/6 flex-col md:flex-row md:overflow-hidden">
            <div className="w-full flex-none md:w-64">
                <SideNav />
            </div>
            <div className="flex-grow p-6 md:overflow-y-auto md:p-12">{children}</div>
        </div>
        </div>
    );
}