import { db } from "@/db";
import { currentUser } from "@clerk/nextjs/server";
import { notFound, useRouter } from "next/navigation";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { formatPrice } from "@/lib/utils";
import Link from "next/link";
import { useQuery } from "@tanstack/react-query";
import { Suspense } from "react";
import OrderDetails from "./OrderDetails";
import FallbackComp from "./FallbackComp";

const page = () => {
  // const { data } = useQuery({
  //   queryKey: ["order-fetchFn"],
  //   queryFn: async () => await fetchOrders(user.id),
  //   retry: true,
  // });

  return (
    <Suspense fallback={<FallbackComp />}>
      <OrderDetails />
    </Suspense>
  );
};

export default page;
