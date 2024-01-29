import React, { useEffect, useState } from "react";
import { UserNav } from "./components/user-nav";
import { DataTable } from "./components/data-table";
import { columns } from "./components/columns";
import { tasks } from "./data/data";
import axios from "axios";
import { ITask } from "@/lib/types";
import { log } from "console";

const Tasks = () => {
  const [tasks1, setTasks1] = useState<ITask[]>([]);

  useEffect(() => {
    const { data } = axios.get("/api/v1/tasks").then((res) => {
      console.log(res.data);
      setTasks1(res.data);
    });
  }, []);
  console.log(tasks1);
  return (
    <>
      <div className="md:hidden">
        <img
          src="/examples/tasks-light.png"
          width={1280}
          height={998}
          alt="Playground"
          className="block dark:hidden"
        />
        <img
          src="/examples/tasks-dark.png"
          width={1280}
          height={998}
          alt="Playground"
          className="hidden dark:block"
        />
      </div>
      <div className="hidden h-full flex-1 flex-col space-y-8 p-8 md:flex">
        <div className="flex items-center justify-between space-y-2">
          <div>
            <h2 className="text-2xl font-bold tracking-tight">Welcome back!</h2>
            <p className="text-muted-foreground">
              Here&apos;s a list of your tasks for this month!
            </p>
          </div>
          <div className="flex items-center space-x-2">
            <UserNav />
          </div>
        </div>
        <DataTable data={tasks1} columns={columns} />
      </div>
    </>
  );
};

export default Tasks;
