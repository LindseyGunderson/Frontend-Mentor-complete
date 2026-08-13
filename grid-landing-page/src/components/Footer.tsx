import React from 'react'

const Footer = () => {
  return (
    <div className="p-8 border-t">
      <div className="flex justify-between">
        <p>© 2026 Bridge Collective</p>
        <p>Registered charity 12345678</p>
      </div>
      <div className="mt-2">
        Challenge by{" "}
        <a href="https://www.frontendmentor.io?ref=challenge">
          Frontend Mentor
        </a>
        . Coded by <a href="#">Your Name Here</a>.
      </div>
    </div>
  );
}

export default Footer