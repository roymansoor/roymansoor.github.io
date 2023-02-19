import React from "react";

function Intro() {
  return (
    <div className="flex items-center justify-center flex-col text-center pt-20 pb-16">
      <h1 className="text-4xl md:text-7xl dark:text-white mb-1 md:mb-3 font-bold">
        Roohullah Mansoor
      </h1>
      <p className="text-base md:text-xl mb-3 font-bold">
        Project Manger | Software Engineer | Web Developer | Scrum Master
      </p>
      <p className="text-sm max-w-2xl mb-6 font-medium">
        Experienced Project Manager with a proven track record of success
        leading agile teams to deliver projects on-time and within budget.
        Strong communicator with excellent interpersonal skills and fluency in
        Microsoft Office. Proactively seeking Scrum Master certification to
        enhance leadership and team management abilities. Possessing technical
        development knowledge to provide technical insight and guidance to
        teams, ensuring successful project delivery.{"     "}
        <a
          href="https://www.linkedin.com/in/r-mansoor/"
          target="_blank"
          className="text-cyan-600 hover:underline
          underline-offset-2 decoration-2
          decoration-red-600
          rel='noreferrer noopener"
        >
          Check My Linkedin!
        </a>{" "}
      </p>
    </div>
  );
}

export default Intro;
