"use clients";
function ImageModal({
  image,
  handleClick,
}: {
  image: ImageData | {};
  handleClick: Function;
}) {
  console.log("modal", image);
  if (!image) {
    return <>loading...</>;
  }
  return (
    <>
      <div className="fixed inset-0 backdrop-blur-sm flex justify-center w-50 items-center z-50">
        <div className="card w-2/3 h-2/3 bg-base-100 shadow-xl">
          <div className="card-body">
            <button
              onClick={() => handleClick()}
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
            >
              ✕
            </button>
          </div>
          <figure >
          <img
            src={image.webformatURL}
            alt={image.tags}
            className="object-cover object-center w-full h-full rounded-lg"
          />
          </figure>
        </div>
      </div>
    </>
  );
}

export default ImageModal;
