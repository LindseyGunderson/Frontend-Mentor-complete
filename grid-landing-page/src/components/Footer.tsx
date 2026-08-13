import React from 'react'

const Footer = () => {
  return (
    <div className="p-8 border-t">
      <div className="flex flex-col text-center gap-2 justify-between md:flex-row">
        <p>© 2026 Bridge Collective</p>
        <p>Registered charity 12345678</p>
      </div>
      <div className="mt-4 text-center">
        Challenge by{" "}
        <a href="https://www.frontendmentor.io?ref=challenge">
          Frontend Mentor
        </a>
        . Coded by{" "}
        <a href="https://www.frontendmentor.io/profile/LindseyGunderson">
          Lindsey :)
        </a>
        .
      </div>
    </div>
  );
}

export default Footer