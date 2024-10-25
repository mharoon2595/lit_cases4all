import { notFound } from "next/navigation";
import { PageProps } from "../../../../.next/types/app/layout";
import { db } from "@/db";
import DesignConfigurator from "./DesignConfigurator";

const page = async ({ searchParams }: PageProps) => {
  const { id } = searchParams;
  if (!id || typeof id !== "string") return notFound();

  const configuration = await db.configuration.findUnique({
    where: { id },
  });

  if (!configuration) return notFound();

  const { url, width, height } = configuration;

  return (
    <DesignConfigurator
      configId={configuration.id}
      imgDim={{ width, height }}
      url={url}
    />
  );
};

export default page;
