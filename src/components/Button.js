import React from "react";
// This component MAY be used as the button within the Category component, where the user selects project categories.
// Destructuring the type, className, children and onClick props, applying them to the button element

// The following is more complicated that I think a button needs to be!
/*function Button({ type = "default", className, children, onClick }) {
  return (
    <button onClick={onClick} className={["btn btn-lg", `btn-${type}`, className].join(" ")}>
      {children}
    </button>
  );
}*/

//

export default Button;
