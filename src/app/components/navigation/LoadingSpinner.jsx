export const LoadingSpinner = () => {
  return (
    <div className="flex justify-center items-center min-h-20">
      <div className="relative w-16 h-16 animate-bounce ">
        <div
          className="absolute top-0 left-0 w-full h-full rounded-full  animate-pulse "
          style={{ background: "linear-gradient(45deg, #5746EA, #081FEF)" }}
        ></div>
        <div
          className="absolute top-0 left-0 w-full h-full rounded-full animate-ping ease-in-out "
          style={{ background: "linear-gradient(45deg, #5746EA, #081FEF)" }}
        ></div>
      </div>
    </div>
  );
};
