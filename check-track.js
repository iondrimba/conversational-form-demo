window.addEventListener("load", function () {
  if (!window.google_tag_manager) {
    $.get("https://analytics.getninjas.com.br/i?e=se&tv=no-js-0.1.0&aid=GetNinjas&p=web&se_ca=tag_manager&se_ac=load:fail&url=" + encodeURIComponent(window.location.href));
  }
});
