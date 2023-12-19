import React from "react";
import styled from "styled-components";
import { IoMdSearch } from "react-icons/io";
import { FaBell } from "react-icons/fa";
import userImg from "../assets/userImg.png";
import { IoMdArrowDropdown } from "react-icons/io";

const Header = () => {
  return (
    <HeaderMain>
      <div className="input_container">
        <IoMdSearch className="icon_search" />
        <input type="text" placeholder="Search For Something ..." />
      </div>
      <FunctionsContainer>
        <NotifyIcon>
          <FaBell className="icon_notify" />
        </NotifyIcon>
        <UserProfile>
          <img src={userImg} className="user_img" alt="" />
          <h4>Joe Rogan</h4>
          <IoMdArrowDropdown className="icon_arrow" />
        </UserProfile>
      </FunctionsContainer>
    </HeaderMain>
  );
};

export default Header;

const HeaderMain = styled.div`
  position: sticky;
  top: 0%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0px 35px;
  padding-right: 0px;
  width: 100%;
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.2);
  background-color: #fff;

  .input_container {
    position: relative;
    .icon_search {
      position: absolute;
      top: 50%;
      left: -4%;
      transform: translateY(-50%);
      color: #9f9c9c;
      font-size: 20px;
    }
    input {
      width: 70vh;
      padding: 0px 15px;
      border: none;
      outline: none;
      color: #c2c2c2;
      font-weight: 500;
      font-size: 15px;
    }
  }
`;

const FunctionsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const NotifyIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0px 20px;
  height: 65px;
  border-left: 1px solid gray;
  cursor: pointer;

  .icon_notify {
    color: gray;
    font-size: 18px;
  }
`;

const UserProfile = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0px 20px;
  height: 65px;
  border-left: 1px solid gray;
  border-right: 1px solid gray;
  cursor: pointer;

  .user_img {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    object-fit: cover;
    margin-right: 15px;
  }
  h4 {
    font-weight: 500;
    color: #6e6d6d;
  }
  .icon_arrow {
    color: #6e6d6d;
    margin-left: 15px;
  }
`;
