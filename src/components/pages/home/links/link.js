import Buttons from "./Buttons";

const ProjectLinks = () => {
  const links = [
    { url: "https://floweranimations.netlify.app/", text: "Flower Animations" },
    // {
    //   url: "https://simple-calculator123.netlify.app/",
    //   text: "Simple Calculator",
    // },
  ];

  return (
    <section className="flex flex-col items-center gap-4 py-8">
      <header className="text-2xl font-serif font-bold text-third">
        My Projects
      </header>
      <div className="flex flex-col gap-4">
        {links.map((link, index) => (
          <Buttons key={index} href={link.url} />
        ))}
      </div>
    </section>
  );
};

export default ProjectLinks;
