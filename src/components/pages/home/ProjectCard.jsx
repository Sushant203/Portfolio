import cbs from "../../../assets/cbs.png";
import Buttons from "./Buttons";
const ProjectCard = () => {
  return (
    <section className="">
      <div className="py-3 px-5 ">
        <header className=" sm:text-sm md:text-3xl lg:text-3xl text-third font-serif font-bold mx-auto sm:text-left lg:text-center ">
          My Projects
        </header>
        <body className=" my-3 py-3  ">
          <div className=" card mx-auto h-fit w-fit grid  sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
            <img
              src={cbs}
              alt="image"
              height={500}
              width={600}
              className="border-none rounded-md shadow-lg shadow-slate-300"
            />
            <article className="">
              <header className="text-slate-700 sm:text-lg lg:text-3xl font-serif font-bold ">
                ONLINE CAB BOOKING SYSTEM
              </header>
              <p className="text-slate-700 sm:text-sm md:text-lg lg:text-lg my-2 py-2">
                I worked as a frontend developer in this project where I&apos;ve
                worked on the interface and design of the the webite. This
                project allows user to book a cab for ride or to add himself as
                a cab driver.
              </p>
            </article>
          </div>
          <div className="card h-fit w-fit grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-14">
            <img
              src={cbs}
              alt="image"
              height={500}
              width={600}
              className="border-none rounded-md shadow-lg shadow-slate-300"
            />
            <article className="">
              <header className="text-slate-700 sm:text-lg lg:text-3xl font-serif font-bold ">
                ONLINE CAB BOOKING SYSTEM
              </header>
              <p className="text-slate-700 sm:text-sm md:text-lg lg:text-lg my-2 py-2">
                I worked as a frontend developer in this project where I&apos;ve
                worked on the interface and design of the the webite. This
                project allows user to book a cab for ride or to add himself as
                a cab driver.
              </p>
            </article>
          </div>
          <div className="card h-fit w-fit grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-14">
            <img
              src={cbs}
              alt="image"
              height={700}
              width={600}
              className="border-none rounded-md shadow-lg shadow-slate-300"
            />
            <article className="">
              <header className="text-slate-700 sm:text-lg lg:text-3xl font-serif font-bold ">
                ONLINE CAB BOOKING SYSTEM
              </header>
              <p className="text-slate-700 sm:text-sm md:text-lg lg:text-lg my-2 py-2">
                I worked as a frontend developer in this project where I&apos;ve
                worked on the interface and design of the the webite. This
                project allows user to book a cab for ride or to add himself as
                a cab driver.
              </p>
              <Buttons />
            </article>
          </div>
        </body>
      </div>
    </section>
  );
};

export default ProjectCard;
