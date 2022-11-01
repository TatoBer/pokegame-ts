function numberWithCommas(x: number) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function fancyTimeFormat(duration: number): string {
  var hrs = ~~(duration / 3600);
  var mins = ~~((duration % 3600) / 60);
  var secs = ~~duration % 60;

  var ret = "";

  if (hrs > 0) {
    ret += "" + hrs + ":" + (mins < 10 ? "0" : "");
  }

  ret += "" + mins + ":" + (secs < 10 ? "0" : "");
  ret += "" + secs;
  return ret;
}

const getActualTime = (): number => {
  let actualDate: Date | number = new Date();
  actualDate = Date.parse(String(actualDate)) / 1000;
  return actualDate;
};

export { numberWithCommas, getActualTime, fancyTimeFormat };
