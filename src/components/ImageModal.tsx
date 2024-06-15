import { ImageData } from "./GetImage";

function ImageModal({
  image,
  handleClick,
  handleNext
}: {
  image: ImageData ;
  handleClick: Function;
  handleNext: Function;
}) {
  return (
    <>
      <div className="fixed inset-0 backdrop-blur-sm flex justify-center items-center p-5 z-50">
      <div className="card lg:w-3/5 bg-neutral shadow-xl">
        <div className="card-body p-5">
        <button
        onClick={() => handleClick()}
              className="btn btn-sm btn-circle btn-ghost absolute right-0 top-0 m-1 "
            >
              ✕
            </button>
        </div>
        <figure className="relative">
        <button  onClick={() => handleNext(image._id, 'prev')}
         className=" bg-[hsl(0,0%,98.4%,0.2)] transition ease-in-out  hover:bg-[hsl(0,0%,70%,0.2)] hover:scale-110  hover:-translate-y-1 duration-300 rounded-full absolute left-2 ">
          <svg className="h-8 w-8 fill-current md:h-12 md:w-12" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M15.41,16.58L10.83,12L15.41,7.41L14,6L8,12L14,18L15.41,16.58Z"></path></svg>
          </button>
          <img
            src={image.webformatURL}
            alt={image.tags}
            className="object-cover object-center w-full rounded-lg"
          />
          <button onClick={() => handleNext(image._id, 'next')} className="bg-[hsl(0,0%,98.4%,0.2)] transition ease-in-out  hover:bg-[hsl(0,0%,70%,0.2)] hover:scale-110  hover:-translate-y-1 duration-300 rounded-full absolute right-2 ">
          <svg className="h-8 w-8 fill-current md:h-12 md:w-12" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z"></path></svg>
          </button>
        </figure>
      </div>
      </div>
    </>
  );
}

export default ImageModal;
