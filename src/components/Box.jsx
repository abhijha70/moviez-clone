const Box = ({ image, title, rating }) => {
    const IMGPATH = "https://image.tmdb.org/t/p/w1280";
    const fullImagePath = `${IMGPATH}${image}`;
  
    return (
      <div className="shadow min-h-[200px] mt-3 pb-3 cursor-pointer">
        <img src={fullImagePath} alt="movie" className="w-full" />
        <div className="flex justify-between px-3 items-center">
          <span className="text-2xl">{title}</span>
          {rating ? (
            <span className="text-xl text-yellow-500 font-bold">{`7.${rating}`}</span>
          ) : null}
        </div>
      </div>
    );
  };
  
  export default Box;