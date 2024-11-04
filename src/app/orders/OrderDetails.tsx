import { currentUser } from "@clerk/nextjs/server";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { notFound } from "next/navigation";
import React from "react";
import { db } from "@/db";
import { formatPrice } from "@/lib/utils";
import Link from "next/link";

const OrderDetails = async () => {
  const user = await currentUser();

  if (!user) {
    return notFound();
  }

  const orders = await db.order.findMany({
    where: { userId: user.id },
    orderBy: {
      createdAt: "desc",
    },
    include: {
      user: true,
      shippingAddress: true,
      // configuration: true,
    },
  });

  if (!orders || orders.length === 0) {
    return (
      <h1 className="text-center font-light text-2xl p-3">
        No orders so far. What are you waiting for?{" "}
        <Link
          className="inline underline italic text-green-500 underline-offset-4"
          href="/configure/upload"
        >
          Order one now!
        </Link>
      </h1>
    );
  }

  return (
    <>
      <h1 className="text-center font-bold text-2xl p-3 my-5">
        Your order history
      </h1>
      <div className="flex min-h-screen w-full bg-muted/40">
        <div className="max-w-7xl w-full mx-auto flex flex-col sm:gap-4 sm:py-4">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Customer</TableHead>
                <TableHead>Order ID {"(click for details)"}</TableHead>
                <TableHead className="hidden md:table-cell">
                  Purchase date
                </TableHead>
                <TableHead className="md:text-right">Amount</TableHead>
              </TableRow>
            </TableHeader>

            <TableBody>
              {orders!.map((order) => (
                <TableRow key={order.id} className="bg-accent">
                  <TableCell>
                    <div className="font-medium">
                      {order.shippingAddress?.name}
                    </div>
                    <div className="hidden text-sm text-muted-foreground md:inline">
                      {order.user.email}
                    </div>
                  </TableCell>
                  <TableCell>
                    <Link
                      href={`orders/${order.configurationId}`}
                      className="hover:text-green-500"
                    >
                      {order.id}
                    </Link>
                  </TableCell>

                  <TableCell className="hidden md:table-cell">
                    {order.createdAt.toLocaleDateString()}
                  </TableCell>
                  <TableCell className="md:text-right">
                    {formatPrice(order.amount)}
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

export default OrderDetails;
