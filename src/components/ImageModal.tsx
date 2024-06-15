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
        <div className="card md:max-h-3/4 bg-base-100 shadow-xl">
          <div className="mb-2">
            <button
              onClick={() => handleClick()}
              className="btn btn-sm btn-circle btn-ghost absolute right-0 top-0 "
            >
              ✕
            </button>
          </div>
          <figure className="mb-4 mt-6 relative">
          <button onClick={() => handleNext(image._id, 'prev')} className="btn btn-sm md:btn-md btn-neutral btn-circle absolute left-0 ">
          <svg className="h-8 w-8 fill-current md:h-12 md:w-12" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M15.41,16.58L10.83,12L15.41,7.41L14,6L8,12L14,18L15.41,16.58Z"></path></svg>
          </button>
          <img
            style={{maxHeight:'44em'}}
            src={image.webformatURL}
            alt={image.tags}
            className="object-cover object-center max-w-full h-4/6 rounded-lg"
          />
          <button onClick={() => handleNext(image._id, 'next')} className="btn btn-sm md:btn-md btn-neutral btn-circle absolute right-0 ">
          <svg className="h-8 w-8 fill-current md:h-12 md:w-12" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z"></path></svg>
          </button>
          </figure>
          
           </div>
      </div>
    </>
  );
}

export default ImageModal;
