import React from "react";
import styled from "styled-components";
import { FaPen } from "react-icons/fa";
import { BsPostcard } from "react-icons/bs";

const Sidebar = () => {
  return (
    <SidebarMain>
      <SidebarTitle>
        <h4>Shards Dashboards</h4>
      </SidebarTitle>
      <SidebarList>
        <li className="activeDiv">
          <div>
            <FaPen className="icon iconActive" />{" "}
            <h4 className="linkActive">Blog Dashboard</h4>
          </div>
        </li>
        <li>
          <div>
            <BsPostcard className="icon iconNormal" />{" "}
            <h4 className="linkNormal">Blog Post</h4>
          </div>
        </li>
        <li>
          <div>
            <BsPostcard className="icon iconNormal" />{" "}
            <h4 className="linkNormal">Add New Post</h4>
          </div>
        </li>
        <li>
          <div>
            <BsPostcard className="icon iconNormal" />{" "}
            <h4 className="linkNormal">Forms & Components</h4>
          </div>
        </li>
        <li>
          <div>
            <BsPostcard className="icon iconNormal" />{" "}
            <h4 className="linkNormal">Tables</h4>
          </div>
        </li>
        <li>
          <div>
            <BsPostcard className="icon iconNormal" />{" "}
            <h4 className="linkNormal">User Profile</h4>
          </div>
        </li>
        <li>
          <div>
            <BsPostcard className="icon iconNormal" />{" "}
            <h4 className="linkNormal">Errors</h4>
          </div>
        </li>
      </SidebarList>
    </SidebarMain>
  );
};

export default Sidebar;

const SidebarMain = styled.div`
  position: sticky;
  top: 0%;
  width: 100%;
  height: 100vh;
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.2);
  background-color: #fff;
`;

const SidebarTitle = styled.div`
  background-color: #fff !important;
  text-align: center;
  border-bottom: 2px solid #ebebeb;
  padding: 20px;
  h4 {
    color: #00002e;
    font-weight: 500;
    font-size: 18px;
  }
`;

const SidebarList = styled.div`
  .activeDiv {
    border-left: 5px solid #5353f2;
    background-color: #FBFBFB;
  }
  li {
    padding: 15px 25px;
    border-bottom: 1px solid #ebebeb;
    cursor: pointer;

    div {
      display: flex;
      align-items: center;
      justify-content: flex-start;

      .icon {
        font-size: 19px;
        margin-right: 10px;
      }
      .iconActive {
        color: #5353f2;
      }
      .iconNormal {
        color: #9f9c9c;
      }
      h4 {
        font-weight: 500;
        font-size: 15.5px;
      }
      .linkActive {
        color: #5353f2;
      }
      .linkNormal {
        color: #00002b;
      }
    }
  }
`;
