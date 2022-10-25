window.onload = () => {
  mls = 0;
  s = 0;
  m = 0;
  h = 0;
  timeStarted = 0;
  result = 0;

  (time = document.querySelector("#time")),
    (Start = document.querySelector("#btn-start")),
    (Stop = document.querySelector("#btn-stop")),
    (Reset = document.querySelector("#btn-reset")),
    (Addlap = document.querySelector("#btn-add-lap")),
    (lapList = document.querySelector("#lap"));

  Start.onclick = start;
  Stop.onclick = stop;
  Reset.onclick = reset;
  Addlap.onclick = addlap;
};

function timing() {
  let ht, mt, st, mlst;
  mls++;

  if (mls > 99) {
    s++;
    mls = 0;
  }
  if (s > 59) {
    m++;
    s = 0;
  }
  if (m > 59) {
    h++;
    m = 0;
  }
  if (h > 24) h = 0;

  mlst = ("0" + mls).slice(-2);
  st = ("0" + s).slice(-2);
  mt = ("0" + m).slice(-2);
  ht = ("0" + h).slice(-2);

  result = time.innerText = `${ht}:${mt}:${st}:${mlst}`;
}

function start() {
  timing();
  timeStarted = setInterval(timing, 10);
}

function stop() {
  clearInterval(timeStarted);
}

function reset() {
  location.reload();
}

function addlap() {
  const li = document.createElement("li");
  li.appendChild(document.createTextNode(`${result}`));
  lapList.appendChild(li);
}
