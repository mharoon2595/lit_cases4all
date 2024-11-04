import { Skeleton } from "@/components/ui/skeleton";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const FallbackComp = () => {
  const DUMMY_COUNT = [1, 2, 3];

  return (
    <>
      <h1 className="text-center font-bold text-2xl p-3">Your order history</h1>
      <div className="flex min-h-screen w-full bg-muted/40">
        <div className="max-w-7xl w-full mx-auto flex flex-col sm:gap-4 sm:py-4">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Customer</TableHead>
                <TableHead>Order ID</TableHead>
                <TableHead className="hidden sm:table-cell">
                  Purchase date
                </TableHead>
                <TableHead>Amount</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {DUMMY_COUNT!.map((dummy) => (
                <TableRow key={dummy} className="bg-accent">
                  <TableCell>
                    <Skeleton className="w-20 h-[20px]" />
                  </TableCell>
                  <TableCell>
                    <Skeleton className="w-20 h-[20px]" />
                  </TableCell>

                  <TableCell className="hidden sm:table-cell">
                    <Skeleton className="w-40 h-[20px]" />
                  </TableCell>
                  <TableCell>
                    <Skeleton className="w-20 h-[20px]" />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </>
  );
};

export default FallbackComp;
