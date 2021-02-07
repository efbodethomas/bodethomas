/* Dependency: js-cookie plugin - Ref: https://github.com/js-cookie/js-cookie */

$(document).ready(function() {
	setThemeFromCookie();

	function setThemeFromCookie() {
		// Check if the cookie is set
		if (typeof Cookies.get("mode") !== "undefined") {
			$("body").removeClass("dark-mode");
			$("#darkmode").attr("checked", true); // toggle change
			console.log("Cookie: light mode");
		} else {
			$("body").addClass("dark-mode");
			$("#darkmode").attr("checked", false); // toggle change
			console.log("Cookie: dark mode");
		}
	}

	$("#darkmode").on("change", function(e) {
		if ($(this).is(":checked")) {
			$("body").removeClass("dark-mode");
			//Set cookies for 7 days
			Cookies.set("mode", "light-mode", { expires: 7 });
		} else {
			$("body").addClass("dark-mode");
			//Remove cookies
			Cookies.remove("mode");
		}
	});
});
