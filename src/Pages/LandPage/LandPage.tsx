import { Checkbox } from "@/components/ui/checkbox";
import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const LandPage = () => {
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="text-5xl font-bold">Welcome to Bira</h1>
          <p className="py-6">
            Bira is your ultimate project management tool, designed to
            streamline your workflow and enhance collaboration. Similar to the
            renowned Jira, Bira offers a powerful platform for organizing tasks,
            tracking progress, and ensuring seamless communication within your
            team.
          </p>
          <Link to="/login" className="btn btn-primary">
            <button className="btn btn-primary">Login</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LandPage;
