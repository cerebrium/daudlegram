const CardHeaderThreeDots: React.FC = () => {
  return (
    <div className="dropdown dropdown-end">
      <div 
        tabIndex={0} 
        role="button" 
        className="btn btn-ghost btn-sm btn-circle hover:bg-base-200 transition-colors group"
        aria-label="Post options"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 text-base-content/60 group-hover:text-base-content transition-colors"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 5v.01M12 12v.01M12 19v.01"
          />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="dropdown-content menu bg-base-100 border border-base-200 rounded-xl z-[1] w-56 p-2 shadow-lg"
      >
        <li>
          <a className="flex items-center gap-3 px-4 py-3 hover:bg-base-50 rounded-lg transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-base-content/60" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
            </svg>
            <span className="font-medium">Save post</span>
          </a>
        </li>
        <li>
          <a className="flex items-center gap-3 px-4 py-3 hover:bg-base-50 rounded-lg transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-base-content/60" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z" />
            </svg>
            <span className="font-medium">Share post</span>
          </a>
        </li>
        <li>
          <a className="flex items-center gap-3 px-4 py-3 hover:bg-base-50 rounded-lg transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-base-content/60" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.878 9.878L8.464 8.464m1.414 1.414L14.5 15.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span className="font-medium">Hide post</span>
          </a>
        </li>
        <div className="divider my-1"></div>
        <li>
          <a className="flex items-center gap-3 px-4 py-3 hover:bg-error/10 text-error rounded-lg transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.872-.833-2.464 0L4.35 16.5c-.77.833.192 2.5 1.732 2.5z" />
            </svg>
            <span className="font-medium">Report post</span>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default CardHeaderThreeDots;
