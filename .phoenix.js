let halfLeft = function () {
  let screen = Screen.main().flippedVisibleFrame();
  let window = Window.focused();
  let yMargin = 0;
  let height = screen.height - yMargin;
  let xMargin = 600;
  let width = screen.width - xMargin;

  if (window)
    window.setFrame({
      y: yMargin / 2 + 23, // 23px is height of menu bar
      x: 0,
      height: height,
      width: width,
    });
}

let halfRight = function () {
  let screen = Screen.main().flippedVisibleFrame();
  let window = Window.focused();
  let yMargin = 0;
  let height = screen.height - yMargin;
  let xMargin = 800;
  let width = screen.width - xMargin;

  if (window)
    window.setFrame({
      y: 0,
      x: xMargin,
      height: height,
      width: width,
    });
};

let meet = function () {
  let screen = Screen.main().flippedVisibleFrame();
  let window = Window.focused();
  let yMargin = 300;
  let height = screen.height - yMargin;
  let xMargin = 1500;
  let width = screen.width - xMargin;

  if (window)
    window.setFrame({
      y: yMargin + 23, // 23px is height of menu bar
      x: xMargin,
      height: height,
      width: width,
    });
};

let notObsidian = function () {
  let screen = Screen.main().flippedVisibleFrame();
  let window = Window.focused();
  let width = screen.width - 1080;
  let height = screen.height; // full height, excludes menubar height

  if (window)
    window.setFrame({
      y: 23, // 23px is height of menu bar
      x: 1080,
      height: height,
      width: width,
    });
};

let obsidian = function () {
  let screen = Screen.main().flippedVisibleFrame();
  let window = Window.focused();
  let width = 1080;
  let height = screen.height; // full height, excludes menubar height

  if (window)
    window.setFrame({
      y: 23, // 23px is height of menu bar
      x: 0,
      height: height,
      width: width,
    });
};

let smallMiddle = function () {
  let screen = Screen.main().flippedVisibleFrame();
  let window = Window.focused();
  // let yMargin = screen.width / 20;
  // let xMargin = screen.height / 10;
  let yMargin = 200;
  let height = screen.height - yMargin;
  let xMargin = 500;
  let width = screen.width - xMargin;

  if (window)
    window.setFrame({
      y: (yMargin / 2) + 50,
      x: xMargin / 2,
      height: height,
      width: width,
    });
};

let centerTall = function () {
  let screen = Screen.main().flippedVisibleFrame();
  let window = Window.focused();
  // let yMargin = screen.width / 20;
  // let xMargin = screen.height / 10;
  let yMargin = 0;
  let height = screen.height - yMargin;
  let xMargin = 1500;
  let width = screen.width - xMargin;

  if (window)
    window.setFrame({
      y: 0,
      x: xMargin / 2,
      height: height,
      width: width,
    });
};

let bigMiddle = function () {
  let screen = Screen.main().flippedVisibleFrame();
  let window = Window.focused();
  let yMargin = 500;
  let height = screen.height - yMargin;
  let xMargin = 1200;
  let width = screen.width - xMargin;

  if (window)
    window.setFrame({
      y: yMargin / 2, // 23px is height of menu bar
      x: xMargin / 2,
      height: height,
      width: width,
    });
};

let generalUseRight = function () {
  let screen = Screen.main().flippedVisibleFrame();
  let window = Window.focused();
  let yMargin = 500;
  let height = screen.height - yMargin;
  let xMargin = 1200;
  let width = screen.width - xMargin;

  if (window)
    window.setFrame({
      y: yMargin + 23,
      x: xMargin,
      height: height,
      width: width,
    });
};

let fullsize = function () {
  let screen = Screen.main().flippedVisibleFrame();
  let window = Window.focused();

  if (window)
    window.setFrame({
      x: 0,
      y: 0,
      height: screen.height,
      width: screen.width,
    });
};

let hyper = ['alt', 'ctrl', 'cmd', 'shift']

let btnCenterTall = new Key('c', ['alt'], centerTall);
let btnBigMiddle = new Key('down', ['alt', 'shift'], bigMiddle);
let btnSmallMiddle = new Key('down', ['alt'], smallMiddle);
let btnHalfLeft = new Key('left', ['alt'], halfLeft);
let btnMeet = new Key('m', ['alt', 'shift'], meet);
let btnNotObsidian = new Key('o', ['alt', 'shift'], notObsidian);
let btnObsidian = new Key('o', ['alt'], obsidian);
let btnGeneralUseRight = new Key('right', ['alt', 'shift'], generalUseRight);
let btnHalfRight = new Key('right', ['alt'], halfRight);
let btnFullsize = new Key('up', ['alt'], fullsize);
