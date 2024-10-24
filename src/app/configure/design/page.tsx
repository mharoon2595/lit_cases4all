import { PageProps } from "../../../../.next/types/app/layout";

const page = async ({ searchParams }: PageProps) => {
  const { id } = searchParams;

  return <div>{id}</div>;
};

export default page;
