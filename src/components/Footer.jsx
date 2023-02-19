import React from "react";

function Footer() {
  return (
    <div className="py-5 text-center">
      <div className="flex justify-center gap-5">
        {/*Social Icons*/}
        <a href="https://www.linkedin.com/in/r-mansoor/" target="_blank">
          <img
            src="./assets/LI-Logo.png"
            className="block mx-auto h-8 cursor-pointer hover:opacity-75"
          />
        </a>
        <a href="https://github.com/roymansoor" target="_blank">
          <img
            src="./assets/Github.png"
            className="block mx-auto h-8 cursor-pointer hover:opacity-75"
          />
        </a>
      </div>
      <p className="text-sm mt-2 opacity-50">
        &copy; {new Date().getFullYear()} Roohullah Mansoor. All rights
        reserved.
      </p>
    </div>
  );
}

export default Footer;
