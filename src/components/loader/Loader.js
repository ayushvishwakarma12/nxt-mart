const Loader = () => {
  return (
    <div>
      <div className="flex space-x-2 justify-center items-center bg-white h-[80vh]">
        <span className="sr-only">Loading...</span>
        <div className="h-4 w-4 bg-[#088C03] rounded-full animate-bounce [animation-delay:-0.3s]"></div>
        <div className="h-4 w-4 bg-[#088C03] rounded-full animate-bounce [animation-delay:-0.15s]"></div>
        <div className="h-4 w-4 bg-[#088C03] rounded-full animate-bounce"></div>
      </div>
    </div>
  );
};

export default Loader;
