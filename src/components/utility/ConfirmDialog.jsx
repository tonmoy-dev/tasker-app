export default function ConfirmDialog({
  setIsShowDialog,
  handleDeleteConfirm,
  title,
}) {
  return (
    <div className="fixed top-0 left-0 w-screen h-screen z-50 bg-black/70">
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[500px] p-4 max-h-[90vh] overflow-auto">
        <div className="shadow-md bg-[#12141D] rounded-lg overflow-hidden p-5 md:p-9">
          <div className="flex items-center gap-3 text-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
            <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full  sm:mx-0 sm:h-10 sm:w-10 bg-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 text-red-600"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z"
                />
              </svg>
            </div>
            <h3 className="text-white text-base font-semibold leading-6 text-gray-900">
              Are you sure to delete {title}?
            </h3>
          </div>
          <div className="px-4 py-3 flex items-center justify-center gap-5">
            <button
              type="button"
              className="rounded-md bg-red-500 px-3 py-2 text-sm font-semibold text-white shadow-sm"
              onClick={() => {
                handleDeleteConfirm();
              }}
            >
              Yes
            </button>
            <button
              type="button"
              className=" rounded-md px-3 py-2 text-sm font-semibold text-white shadow-sm bg-gray-800"
              onClick={() => setIsShowDialog(false)}
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
