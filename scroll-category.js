(function (win, doc) {
  "use strict";

  //Routes
  var $service = doc.querySelector(".service");
  var $anchor = doc.querySelector(".page-title");

  //linearAnimationScroll option
  var start = null;
  var initialPosition = 0;
  var finishPosition = $anchor.offsetTop + $anchor.offsetHeight;
  var duration = 300;

  if (!$service || !$anchor) return;

  //Routes
  $service.addEventListener("click", function (event) {
    var $origin = event.target;

    if (getParentByHref($origin, "#form")) {
        event.preventDefault();

        initialPosition = win.scrollY;
        start = null;

        win.requestAnimationFrame(linearAnimationScroll);
    };
  });

  function linearAnimationScroll (timestamp) {
    if (!start) start = timestamp;

    var progress = (timestamp - start) / duration;

    win.scrollTo(0, finishPosition * progress + (1 - progress) * initialPosition);

    if (win.scrollY > finishPosition) {
      win.requestAnimationFrame(linearAnimationScroll);
    };
  };

  function getParentByHref ($element, valueHref) {
    while ($element.getAttribute("href") != valueHref) {
        $element = $element.parentNode;

    };

    return $element.tagName == "BODY" ? null : $element;
  };
})(window, document);
