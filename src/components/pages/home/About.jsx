import logo from "../../../assets/logo.jpg";
const About = () => {
  return (
    <section className=" py-10 bg-primary">
      <div className="flex  gap-6 justify-between px-5 max-w-full">
        <article className=" w-fit">
          <h1 className="text-3xl font-bold text-third">Code &amp; Coffee</h1>
          <p className="text-md text-slate-300 leading-4 py-5 text-justify my-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
            rem aliquid repudiandae doloribus nulla incidunt blanditiis hic
            porro tempora accusantium saepe, ex quam labore, debitis sunt culpa
            illum facilis. Dolore! Lorem, ipsum dolor sit amet consectetur
            adipisicing elit. Omnis, fugiat nulla ut maxime fuga animi minus
            facere vitae dolore, repellendus quaerat ducimus similique
            voluptates doloribus magni. Hic nihil dolorum commodi. Lorem ipsum
            dolor sit amet consectetur adipisicing elit. Excepturi rem aliquid
            repudiandae doloribus nulla incidunt blanditiis hic porro tempora
            accusantium saepe, ex quam labore, debitis sunt culpa illum facilis.
            Dolore! Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Omnis, fugiat nulla ut maxime fuga animi minus facere vitae dolore,
            repellendus quaerat ducimus similique voluptates doloribus magni.
            Hic nihil dolorum commodi. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Excepturi rem aliquid repudiandae doloribus nulla
            incidunt blanditiis hic porro tempora accusantium saepe, ex quam
            labore, debitis sunt culpa illum facilis. Dolore! Lorem, ipsum dolor
            sit amet consectetur adipisicing elit. Omnis, fugiat nulla ut maxime
            fuga animi minus facere vitae dolore, repellendus quaerat ducimus
            similique voluptates doloribus magni. Hic nihil dolorum commodi.
          </p>
        </article>
        <img
          src={logo}
          alt="alt..."
          height={350}
          width={250}
          className="float-right mx-auto"
        />
        {/* <div>
        </div> */}
      </div>
    </section>
  );
};

export default About;
