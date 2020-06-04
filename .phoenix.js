let width = 1920;
let height = 1080;

let bigLeft = new Key('left', ['alt', 'shift'], function () {
  let screen = Screen.main().flippedVisibleFrame();
  let window = Window.focused();
  let spacer = screen.width / 10;

  if (window)
    window.setFrame({
      x: 0,
      y: 0,
      height: screen.height,
      width: screen.width * 0.83,
    });
});

let halfLeft = new Key('left', ['alt'], function () {
  let screen = Screen.main().flippedVisibleFrame();
  let window = Window.focused();
  let yMargin = 50;
  let height = screen.height - yMargin;
  let xMargin = 1200;
  let width = screen.width - xMargin;

  if (window)
    window.setFrame({
      y: yMargin / 2 + 23, // 23px is height of menu bar
      x: 0,
      height: height,
      width: width,
    });
});

let bigRight = new Key('right', ['alt', 'shift'], function () {
  let screen = Screen.main().flippedVisibleFrame();
  let window = Window.focused();
  let spacer = screen.width / 10;

  if (window)
    window.setFrame({
      x: screen.width * 0.20,
      y: 0,
      height: screen.height,
      width: screen.width * 0.80,
    });
});

let halfRight = new Key('right', ['alt'], function () {
  let screen = Screen.main().flippedVisibleFrame();
  let window = Window.focused();
  let yMargin = 50;
  let height = screen.height - yMargin;
  let xMargin = 1200;
  let width = screen.width - xMargin;

  if (window)
    window.setFrame({
      y: yMargin / 2 + 23, // 23px is height of menu bar
      x: xMargin,
      height: height,
      width: width,
    });
});

let middle = new Key('down', ['alt'], function () {
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
      y: 0, // 23px is height of menu bar
      x: xMargin / 2,
      height: height,
      width: width,
    });
});

let middleHigh = new Key('down', ['alt', 'shift'], function () {
  let screen = Screen.main().flippedVisibleFrame();
  let window = Window.focused();
  // let yMargin = screen.width / 20;
  // let xMargin = screen.height / 10;
  let yMargin = 500;
  let height = screen.height - yMargin;
  let xMargin = 1500;
  let width = screen.width - xMargin;

  if (window)
    window.setFrame({
      y: 0, // 23px is height of menu bar
      x: xMargin / 2,
      height: height,
      width: width,
    });
});

let fullsize = new Key('up', ['alt'], function () {
  let screen = Screen.main().flippedVisibleFrame();
  let window = Window.focused();

  if (window)
    window.setFrame({
      x: 0,
      y: 0,
      height: screen.height,
      width: screen.width,
    });
});
