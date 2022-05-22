import { useParams } from "react-router-dom";
import { useContext, useState, useEffect } from "react";
import { UsersContext } from "./UsersContext";
import styled from "styled-components";

const Profile = () => {
  const { username } = useParams();
  const { currentUser } = useContext(UsersContext);
  const [profileId, setProfileId] = useState([]);
  const [info, setInfo] = useState("loading");
  useEffect(() => {
    fetch(`/user/${username}`)
      .then((res) => res.json())
      .then((profiles) => setProfileId(profiles.data))
      .then(() => setInfo("idle"))
      .catch((err) => console.log("Profile error from the server ", err));
  }, []);
  return (
    <>
      <div>
        <H2>Hey , {currentUser.username}</H2>
        <H2>Your Birthday is : {currentUser.birthday}</H2>
        <P>
          We currently working on our website to make it prettier, soon you will
          have a possibility upload your avatar picture and more of your
          information. Sorry for the delay!
        </P>
      </div>
    </>
  );
};

export default Profile;

const H2 = styled.h2`
  margin-top: 150px;
  color: black;
  position: relative;
  font-size: 50px;
  font-family: "Pacifico", cursive;
`;
const P = styled.p`
  margin-top: 250px;
  color: black;
  position: relative;
  font-size: 50px;
  text-align: center;
  font-family: "Pacifico", cursive;
`;
