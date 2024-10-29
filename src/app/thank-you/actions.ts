"use server";

import { db } from "@/db";
import { currentUser } from "@clerk/nextjs/server";

export const getPaymentStatus = async ({ orderId }: { orderId: string }) => {
  const user = await currentUser();

  console.log("User from thank-you actions--->", user);

  if (!user?.id) {
    throw new Error("You need to be logged in to view this page.");
  }

  const order = await db.order.findFirst({
    where: { id: orderId, userId: user.id },
    include: {
      billingAddress: true,
      configuration: true,
      shippingAddress: true,
      user: true,
    },
  });

  if (!order) throw new Error("This order does not exist.");

  if (order.isPaid) {
    return order;
  } else {
    return false;
  }
};
