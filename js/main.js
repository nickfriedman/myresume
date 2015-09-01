$(function() {
  // Handler for .ready() called.
$("h2").click(function() {
	$(this).siblings().toggle();
});

});