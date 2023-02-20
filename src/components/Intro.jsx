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
      <p className="text-sm max-w-2xl mb-1 font-medium text-justify">
        I am a passionate software developer with extensive IT and Project
        Management experience. I have learned various programming languages,
        such as JavaScript, Python, and Java, by building applications and
        projects. I enjoy taking on unique challenges and finding solutions to
        make business processes more efficient and effective. In addition to my
        professional experience, I am a veteran who has dedicated part of my
        life to serving my country and community. My military service instilled
        in me a strong work ethic and discipline that I bring to all aspects of
        my career. I am committed to building innovative software applications
        and digital solutions that drive business growth. With a strong
        technical background, I excel in leading cross-functional teams to
        deliver successful projects on time and within budget. I am always
        looking for unique solutions to complex problems and continuously
        improving business. As a proactive professional, I foster a
        collaborative and goal-oriented environment, where innovative solutions
        and continuous improvement are the norms.
        {"     "}
        <a
          href="https://www.linkedin.com/in/r-mansoor/"
          target="_blank"
          className="text-cyan-600 hover:underline
          underline-offset-2 decoration-2
          decoration-red-600
          rel='noreferrer noopener"
        >
          Connect with me on Linkedin!
        </a>{" "}
      </p>
    </div>
  );
}

export default Intro;
