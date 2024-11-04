import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Phone from "@/components/Phone";
import { db } from "@/db";
import {
  COLORS,
  FINISHES,
  MATERIALS,
  MODELS,
} from "@/validators/option-validator";
import { currentUser } from "@clerk/nextjs/server";
import {
  CaseColor,
  CaseFinish,
  CaseMaterial,
  OrderStatus,
  PhoneModel,
} from "@prisma/client";
import { notFound } from "next/navigation";
import React from "react";

interface Params {
  orderDetails: string;
}

const page = async ({ params }: { params: Params }) => {
  const user = await currentUser();
  const orderId = params.orderDetails;

  if (!user) {
    return notFound();
  }

  const orderDetails = await db.configuration.findUnique({
    where: { id: orderId },
    include: {
      Order: {
        where: { configurationId: orderId },
      },
    },
  });

  if (!orderDetails) {
    return (
      <h1 className="text-center pt-3 text-xl">
        Oops! Couldn't find that order!
      </h1>
    );
  }

  function findModel(model: PhoneModel) {
    return MODELS.options.find((phone) => {
      if (phone.value === model) {
        return phone.label;
      }
    });
  }
  function findMaterial(model: CaseMaterial) {
    return MATERIALS.options.find((phone) => {
      if (phone.value === model) {
        return phone.label;
      }
    });
  }
  function findColor(model: CaseColor) {
    return COLORS.find((phone) => {
      if (phone.value === model) {
        return phone.label;
      }
    });
  }
  function findFinish(model: CaseFinish) {
    return FINISHES.options.find((phone) => {
      if (phone.value === model) {
        return phone.label;
      }
    });
  }
  function orderStatus(model: OrderStatus) {
    switch (model) {
      case "awaiting_shipment":
        return "Awaiting Shipment";
      case "fulfilled":
        return "Fulfilled";
      case "shipped":
        return "Shipped";
      default:
        return "Unknown Status";
    }
  }

  return (
    <>
      <MaxWidthWrapper className="p-3">
        <section className="flex gap-2 justify-center my-5">
          <h1 className="text-2xl md:text-3xl font-bold mt-3 mb-6">
            Your <span className="text-green-500">order summary</span>
          </h1>
          <img src="/snake-1_flipped.png" className="w-16 h-20" />
        </section>

        <main className="flex flex-col space items-center justify-center sm:flex-row  sm:gap-x-5 sm:items-start p-2">
          <Phone
            className="max-w-[150px] md:max-w-[200px]"
            imgSrc={orderDetails!.croppedImageUrl!}
          />
          <section className="flex flex-col gap-3 mt-10 sm:mt-0 p-2 rounded-lg">
            <h1 className="text-xl font-bold">
              {findModel(orderDetails.model!)!.label} case
            </h1>
            <div className="space-y-3">
              <h1 className="text-md">
                Case material: {findMaterial(orderDetails.material!)!.label}
              </h1>
              <h1 className="text-md">
                Case color: {findColor(orderDetails.color!)!.label}
              </h1>
              <h1 className="text-md">
                Case finish: {findFinish(orderDetails.finish!)!.label}
              </h1>
              <h1 className="text-md">
                Order status:{" "}
                <span className="font-bold">
                  {orderStatus(orderDetails.Order[0].status)}
                </span>
              </h1>
            </div>
          </section>
        </main>
      </MaxWidthWrapper>
    </>
  );
};

export default page;
