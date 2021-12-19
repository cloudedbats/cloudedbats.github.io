
const div_introduction_id = document.getElementById("div_introduction_id");
const div_bat_detectors_id = document.getElementById("div_bat_detectors_id");
const div_post_processing_id = document.getElementById("div_post_processing_id");
const div_stations_id = document.getElementById("div_stations_id");
const div_surveys_id = document.getElementById("div_surveys_id");
const div_news_id = document.getElementById("div_news_id");
// const div_future_plans_id = document.getElementById("div_future_plans_id");
// const div_for_developers_id = document.getElementById("div_for_developers_id");
const div_about_id = document.getElementById("div_about_id");

function hideDivision(div_id) {
  if (div_id != 'undefined') {
    div_id.style.visibility = "hidden";
    div_id.style.overflow = "hidden";
    div_id.style.height = "0";
    div_id.style.width = "0";
  }
};

function showDivision(div_id) {
  if (div_id != 'undefined') {
    div_id.style.visibility = null;
    div_id.style.overflow = null;
    div_id.style.height = null;
    div_id.style.width = null;
  }
};

function hideShowParts(tab_name) {
  div_introduction_id.classList.remove("is-active");
  div_bat_detectors_id.classList.remove("is-active");
  div_post_processing_id.classList.remove("is-active");
  div_stations_id.classList.remove("is-active");
  div_surveys_id.classList.remove("is-active");
  div_news_id.classList.remove("is-active");
  // div_future_plans_id.classList.remove("is-active");
  // div_for_developers_id.classList.remove("is-active");
  div_about_id.classList.remove("is-active");
  hideDivision(div_introduction_id)
  hideDivision(div_bat_detectors_id)
  hideDivision(div_post_processing_id)
  hideDivision(div_stations_id)
  hideDivision(div_surveys_id)
  hideDivision(div_news_id)
  // hideDivision(div_future_plans_id)
  // hideDivision(div_for_developers_id)
  hideDivision(div_about_id)

  if (tab_name == "introduction") {
    div_introduction_id.classList.add("is-active");
    showDivision(div_introduction_id)
  } else if (tab_name == "bat-detectors") {
    div_bat_detectors_id.classList.add("is-active");
    showDivision(div_bat_detectors_id)
  } else if (tab_name == "post-processing") {
    div_post_processing_id.classList.add("is-active");
    showDivision(div_post_processing_id)
  } else if (tab_name == "stations") {
    div_stations_id.classList.add("is-active");
    showDivision(div_stations_id)
  } else if (tab_name == "surveys") {
    div_surveys_id.classList.add("is-active");
    showDivision(div_surveys_id)
  } else if (tab_name == "news") {
    div_news_id.classList.add("is-active");
    showDivision(div_news_id)
  // } else if (tab_name == "future-plans") {
  //   div_future_plans_id.classList.add("is-active");
  //   showDivision(div_future_plans_id)
  // } else if (tab_name == "for-developers") {
  //   div_for_developers_id.classList.add("is-active");
  //   showDivision(div_for_developers_id)
  } else if (tab_name == "about") {
    div_about_id.classList.add("is-active");
    showDivision(div_about_id)
  };
};
