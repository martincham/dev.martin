import ScrollAnimation from "@/components/ui/ScrollAnimation";

const ExperienceSection = () => {
  return (
    <section id="about" className="bg-purp">
      <div className="mx-auto  text-left !text-black p-4">
        <ScrollAnimation>
          <h2 className="ml-[10vw]">Experience</h2>
          <div>
            <div className="flex justify-between">
              <h3 className="">Software Engineer</h3>
              <h3 className="">2019-21</h3>
            </div>
            <p>
              I worked as a Software Engineer at{" "}
              <a href="https://www.google.com">Google</a> for a year, where I
              worked on a variety of projects, including:
            </p>
            <ul>
              <li>
                Developing and maintaining a large-scale machine learning model
                for a client
              </li>
              <li>Building and maintaining a web application for a client</li>
              <li>
                Collaborating with cross-functional teams to deliver
                high-quality software
              </li>
            </ul>
            <p>
              I also gained experience in data analysis, machine learning, and
              web development, and was able to contribute to the development of
              various tools and libraries.
            </p>
          </div>
          <hr className="my-4 mx-auto h-[1px] bg-black" />
        </ScrollAnimation>
      </div>
    </section>
  );
};

export default ExperienceSection;
