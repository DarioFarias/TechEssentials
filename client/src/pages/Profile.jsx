
import React, { useState } from "react";
import AdressProfileForm from "../components/AdressProfileForm";
import CardProfileForm from "../components/CardProfileForm";
import UserProfileForm from "../components/UserProfileForm";

const Profile = () => {
    return (
        <div
            id="contenedorDesk"
            className=" flex flex-wrap relative items-center justify-evenly p-8 gap-4"
        >
            <UserProfileForm/>
            {/* <CardProfileForm/>
            <AdressProfileForm/> */}
        </div>
    );
};

export default Profile;
