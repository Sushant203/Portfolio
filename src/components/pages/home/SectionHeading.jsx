import PropTypes from "prop-types";

const SectionHeading = ({ index, title }) => (
  <div className="mb-10 flex items-center gap-4">
    <span className="font-display text-sm font-semibold text-violet-600 dark:text-violet-400">
      {index}
    </span>
    <h2 className="font-display text-2xl font-semibold tracking-tight sm:text-3xl">
      {title}
    </h2>
    <span
      className="hidden h-px flex-1 bg-zinc-200 dark:bg-zinc-800 sm:block"
      aria-hidden="true"
    />
  </div>
);

SectionHeading.propTypes = {
  index: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default SectionHeading;
