import React from "react";
import { PageProps } from "../../../../.next/types/app/layout";
import { notFound } from "next/navigation";
import { db } from "@/db";
import DesignPreview from "./DesignPreview";

const page = async ({ searchParams }: PageProps) => {
  const { id } = searchParams;
  if (!id || typeof id !== "string") return notFound();

  const configuration = await db.configuration.findUnique({
    where: { id },
  });

  if (!configuration) return notFound();

  return <DesignPreview configuration={configuration} />;
};

export default page;
