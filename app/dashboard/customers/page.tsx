import { lusitana } from '@/app/fonts';
import CustomersTable from '@/app/ui/customers/table';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Customers',
  description: 'Customers',
};

export default function Page() {
  return (
    <div className="w-full">
      <CustomersTable />
    </div>
  )
}
