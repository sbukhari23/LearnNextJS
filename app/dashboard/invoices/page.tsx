import { lusitana } from '@/app/ui/fonts';

export default function InvoicePage() {
  return (
    <main className="flex min-h-screen flex-col p-6">
      <h1 className={`${lusitana.className} text-2xl font-bold`}>Invoices</h1>
      {/* Add your invoices content here */}
    </main>
  );
}
