const Loader = () => {
  return (
    <span
      part="identity-widget-loader"
      className="identity-widget-loader w-4! h-4! border-2! border-black/10 border-t-[#2b6fd6] rounded-full! animate-spin!"
      role="status"
      aria-label="Loading"
    >
      <span part="identity-widget-loader-text" className="identity-widget-loader-text sr-only">Loading...</span>
    </span>
  );
};
export default Loader;
