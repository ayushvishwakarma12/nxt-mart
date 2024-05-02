const NotFound = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-6 h-[80vh]">
      <img src="./PageNotFound.png" alt="notfound" className="w-[380px]" />
      <h1 className=" text-2xl">Oops! Something went wrong.</h1>
      <p className=" text-base">We are having some trouble.</p>
    </div>
  );
};

export default NotFound;
