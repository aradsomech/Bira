import React from "react";
import { tasks as omer } from "./data/data";
import { columns } from "./components/columns";
import { DataTable } from "./components/data-table";
import { UserNav } from "./components/user-nav";
import Tasks from "./Tasks";

export default async function TaskPage() {
  // console.log(getTasks());

  // const tasks = await getTasks();

  return (
    <>
      <Tasks />
    </>
  );
}
