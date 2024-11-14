const CartIcon = () => {
  return (
    // <div>
    //   <svg
    //     xmlns="http://www.w3.org/2000/svg"
    //     fill="none"
    //     viewBox="0 0 24 24"
    //     strokeWidth="1.5" // Changed from stroke-width to strokeWidth
    //     stroke="currentColor"
    //     className="size-6" // Changed class to className (React uses className instead of class)
    //   >
    //     <path
    //       strokeLinecap="round" // Changed from stroke-linecap to strokeLinecap
    //       strokeLinejoin="round" // Changed from stroke-linejoin to strokeLinejoin
    //       d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
    //     />
    //   </svg>

      <svg 
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        strokeWidth="1.5" // Changed from stroke-width to strokeWidth
        stroke="currentColor"
        className="size-2" // Changed class to className (React uses className instead of class)
      >
        <path
        strokeLinecap="round" // Changed from stroke-linecap to strokeLinecap
        strokeLinejoin="round" // Changed from stroke-linejoin to strokeLinejoin
        d="M1 1.75A.75.75 0 0 1 1.75 1h1.628a1.75 1.75 0 0 1 1.734 1.51L5.18 3a65.25 65.25 0 0 1 13.36 1.412.75.75 0 0 1 .58.875 48.645 48.645 0 0 1-1.618 6.2.75.75 0 0 1-.712.513H6a2.503 2.503 0 0 0-2.292 1.5H17.25a.75.75 0 0 1 0 1.5H2.76a.75.75 0 0 1-.748-.807 4.002 4.002 0 0 1 2.716-3.486L3.626 2.716a.25.25 0 0 0-.248-.216H1.75A.75.75 0 0 1 1 1.75ZM6 17.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0ZM15.5 19a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z" />
      </svg>
  );
};
export default CartIcon;
