import React from 'react'

const Header = () => {
  return (
    <header className="">
      <div className="flex justify-center">
        <img
          src="/images/header-logo.svg"
          alt="Meem Products Logo"
          className="h-24 sm:h-16 md:h-48 w-auto"
        />
      </div>
    </header>
  );
};

export default Header;