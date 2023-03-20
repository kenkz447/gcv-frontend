
import { useAuth } from "@/app/hooks/useAuth";
import { Layout } from "@/ui/admin/layout";

export default function AdminPage() {
  useAuth('admin');

  return (
    <Layout>

    </Layout>
  );
};