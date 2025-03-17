import CustomersTable from '@/app/ui/customers/table';
import { Metadata } from 'next';
import { Suspense } from 'react';
import { CustomersTableSkeleton } from '@/app/ui/skeletons';
export const metadata: Metadata = {
  title: 'Customers',
  description: 'Customers',
};

export default function Page() {
  return (
    <div className="w-full">
      <Suspense fallback={<CustomersTableSkeleton />}>
        <CustomersTable />
      </Suspense>
    </div>
  )
}
