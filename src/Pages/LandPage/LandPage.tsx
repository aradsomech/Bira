import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const LandPage = () => {
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img
          src="https://daisyui.com/images/stock/photo-1635805737707-575885ab0820.jpg"
          className="max-w-sm rounded-lg shadow-2xl"
        />
        <div>
          <h1 className="text-5xl font-bold">Box Office News!</h1>
          <p className="py-6">
            Bira is your ultimate project management tool, designed to
            streamline your workflow and enhance collaboration. Similar to the
            renowned Jira, Bira offers a powerful platform for organizing tasks,
            tracking progress, and ensuring seamless communication within your
            team.
          </p>
          <Link to="/login" className="btn btn-active btn-neutral">
            <button className="btn btn-active btn-neutral">Login</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LandPage;
