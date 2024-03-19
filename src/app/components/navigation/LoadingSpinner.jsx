export const LoadingSpinner = () => {
  return (
    <div className="flex justify-center items-center min-h-20">
      <div className="relative w-16 h-16">
        <div
          className="absolute top-0 left-0 w-full h-full rounded-full animate-ping"
          style={{ background: "linear-gradient(45deg, #4CAF50, #2196F3)" }}
        ></div>
      </div>
    </div>
  );
};
