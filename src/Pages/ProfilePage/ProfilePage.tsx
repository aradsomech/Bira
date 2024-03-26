import React, { useEffect, useState } from "react";

import axios from "axios";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { UserNav } from "../TaskPage/components/user-nav";

const ProfilePage = () => {
  // const [setUserDataFromServer, setUserDataFromServer] = useState({
  //   _id: "",
  // firstName: "",
  // lastName:"",
  //   phone: "",
  //   email: "",
  //   createdAt: "",
  // });

  // const userData = useSelector((bigPie) => bigPie.authSlice.userData);
  const navigate = useNavigate();

  // useEffect(() => {
  //   (async () => {
  //     try {
  //       let { data } = await axios.get("/users/" + userData._id);
  //       setUserDataFromServer(data);
  //     } catch (err) {
  //       // Handle error
  //     }
  //   })();
  // }, []);

  return (
    <div>
      {/* The button to open modal */}
      <label htmlFor="my_modal_5" className="btn">
        Profile
      </label>

      {/* Put this part before </body> tag */}
      <input type="checkbox" id="my_modal_5" className="modal-toggle" />
      <div className="modal" role="dialog">
        <div className="modal-box w-11/12 max-w-5xl">
          <h3 className="font-bold text-lg">Create new task!</h3>
          <div className="p-4">
            <label className="form-control w-full max-w-xs">
              <div className="label">
                <span className="label-text">Title</span>
              </div>
              {/* <input
                id="title"
                onChange={handleInputChange}
                type="text"
                placeholder="Type here"
                className="input input-bordered w-full max-w-xs"
                value={inputsValue.title}
              /> */}
            </label>
            <label className="form-control w-full max-w-xs">
              <div className="label">
                <span className="label-text">Status</span>
              </div>
            </label>
            <label className="form-control w-full max-w-xs">
              <div className="label">
                <span className="label-text">Priority</span>
              </div>
            </label>
            <label className="form-control w-full max-w-xs">
              <div className="label">
                <span className="label-text">Content</span>
              </div>
            </label>
          </div>
          <div className="modal-action">
            <label htmlFor="my_modal_5" className="btn">
              Close
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
