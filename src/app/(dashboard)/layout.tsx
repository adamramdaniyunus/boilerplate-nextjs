import "../globals.css";
import { QueryProvider } from "@/components/QueryProvider";
import { AuthProvider } from "@/components/AuthProvider";
import DashboardLayout from "@/components/DashboardLayout";

export default function DashboardRootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <AuthProvider>
      <QueryProvider>
        <DashboardLayout>{children}</DashboardLayout>
      </QueryProvider>
    </AuthProvider>
  );
}
