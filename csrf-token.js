$.get("/csrf_meta_tag", function(metatags) {
  $("head").append(metatags);
});
