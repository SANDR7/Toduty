import React from 'react'
import Logo from "../assets/svg/ToDuty-Logo.svg";

interface headerProps {

}

export const Header: React.FC<headerProps> = () => {
    return (
      <header>
        <div>
          <img src={Logo} alt="Logo"/>
        </div>
      </header>
    );
}