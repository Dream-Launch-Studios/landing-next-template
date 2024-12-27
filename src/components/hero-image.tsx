export function HeroImage() {
  return (
    <>
      <div className="max-w-[100rem] rounded-lg mx-auto bg-primary h-[70vh] p-4 flex flex-col gap-y-2 border border-brand/20">
        <div className="h-[3%]">
          <div className="flex items-center gap-x-2">
            <div className="w-5 h-5  bg-red-500 rounded-full"></div>
            <div className="w-5 h-5 bg-yellow-500 rounded-full"></div>
            <div className="w-5 h-5 bg-green-500 rounded-full"></div>
          </div>
        </div>
        <div className="bg-background h-[97%] rounded-xl"></div>
      </div>
    </>
  );
}
