import React from "react";

function ImageModal({ image }: { image: ImageData }) {
  return (
    <>
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          <h3 className="font-bold text-lg">Hello!</h3>
          <div>
            <img
              src={image.webformatURL}
              alt={image.tags}
              className="object-cover object-center w-full max-w-full rounded-lg"
            />
          </div>
          <p className="py-4">Press ESC key or click on ✕ button to close</p>
        </div>
      </dialog>
    </>
  );
}

export default ImageModal;
