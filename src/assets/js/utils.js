//---------------------------------------------------
// Common class actions
//---------------------------------------------------
export const misc = () => {
	// stopPropagation
	document.querySelectorAll(".stop-propagate").forEach((item) => {
		item.addEventListener("click", (event) => {
			event.stopPropagation();
		});
	});

	// PreventDefault
	document.querySelectorAll(".prevent-default").forEach((item) => {
		item.addEventListener("click", (event) => {
			event.preventDefault();
		});
	});
};

//---------------------------------------------------
// Return CSS variable
//---------------------------------------------------
export const cssVar = (variable) => {
	return getComputedStyle(document.body).getPropertyValue(variable).trim();
};
