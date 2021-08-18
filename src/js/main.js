import objectFitImages from "object-fit-images";
import Controls from "./modules/Controls";
import Popup from "./modules/Popup";
import Submit from "./modules/Submit";
import Timer from "./modules/Timer";

$(function () {
  objectFitImages();
  Controls.init();
  Popup.init();
  Submit.init();
  Timer.init();
});
