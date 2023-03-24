import { clearSky } from "../../../public/icons/clearSky.js";
import { fewClouds } from "../../../public/icons/fewClouds.js";
import { partlyCloudy } from "../../../public/icons/partlyCloudy.js";
import { overcast } from "../../../public/icons/overcast.js";
import { fog } from "../../../public/icons/fog.js";



export function GetWeatherSympol(weather) {
  switch (weather) {
    case 0:
      //clear sky
      return clearSky;
    case 1:
      //few clouds
      return fewClouds;
    case 2:
      //partly cloudy
      return partlyCloudy;
    case 3:
      //overcast
      return overcast;
    case 45:
      //fog
      return fog;
    case 48:
      //freezing fog
      return fog;
    case 51:
      //drizzle light - støvregn
      return "🌧️";
    case 53:
      //drizzle moderate - støvregn
      return "🌧️";
    case 55:
      //drizzle intense - støvregn
      return "🌧️";
    case 56:
      //freezing drizzle light - støvregn
      return "🌧️";
    case 57:
      //freezing drizzle moderate - støvregn
      return "🌧️";
    case 61:
      //rain light
      return "🌧️";
    case 63:
      //rain moderate
      return "🌧️";
    case 65:
      //rain intense
      return "🌧️";
    case 66:
      //freezing rain light
      return "🌧️";
    case 67:
      //freezing rain moderate
      return "🌧️";
    case 71:
      //show light
      return "❄️";
    case 73:
      //show moderate
      return "❄️";
    case 75:
      //show intense
      return "❄️";
    case 77:
      //snow grains - snefnug
      return "❄️";
    case 80:
      //rain light
      return "🌧️";
    case 81:
      //rain moderate
      return "🌧️";
    case 82:
      //rain intense
      return "🌧️";
    case 85:
      //snow showers light
      return "❄️";
    case 86:
      //snow showers heavy
      return "❄️";
    case 95:
      //thunderstorm
      return "⛈️";
    case 96:
      //thunderstorm hail light
      return "⛈️";
    case 97:
      //thunderstorm hail heavy
      return "⛈️";
    default:
      return "🌫";
  }
}
