const Loader = () => {
  return (
    <span 
      className="w-4! h-4! border-2! border-black/10 border-t-[#2b6fd6] rounded-full! animate-spin!" 
      role="status"
      aria-label="Loading"
    >
      <span className="sr-only">Loading...</span>
    </span>
  );
};
export default Loader;
