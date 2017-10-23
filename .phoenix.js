let width = 1920;
let height = 1080;

let halfLeft = new Key('left', ['alt'], function () {
  let screen = Screen.main().flippedVisibleFrame();
  let window = Window.focused();
  let spacer = screen.width / 25;

  if (window)
    window.setFrame({
      x: 5,
      y: 30,
      height: screen.height - 50,
      width: screen.width / 2 - spacer,
    });
});

let halfRight = new Key('right', ['alt'], function () {
  let screen = Screen.main().flippedVisibleFrame();
  let window = Window.focused();
  let spacer = screen.width / 25;

  if (window)
    window.setFrame({
      x: screen.width / 2 + spacer,
      y: 30,
      height: screen.height - 50,
      width: screen.width / 2 - spacer,
    });
});

let twoThirdsLeft = new Key('left', ['alt', 'shift'], function () {
  let screen = Screen.main().flippedVisibleFrame();
  let window = Window.focused();
  let spacer = screen.width / 10;

  if (window)
    window.setFrame({
      x: 5,
      y: 30,
      height: screen.height - 50,
      width: screen.width * 2 / 3 - spacer,
    });
});

let oneThirdRight = new Key('right', ['alt', 'shift'], function () {
  let screen = Screen.main().flippedVisibleFrame();
  let window = Window.focused();
  let spacer = screen.width / 12;

  if (window)
    window.setFrame({
      x: screen.width * 2 / 3 - spacer,
      y: 30,
      height: screen.height - 50,
      width: screen.width / 3 + spacer,
    });
});

let middle = new Key('down', ['alt'], function () {
  let screen = Screen.main().flippedVisibleFrame();
  let window = Window.focused();
  let height = screen.height - screen.height / 7;
  let width = screen.width - screen.width / 4;

  if (window)
    window.setFrame({
      x: 300,
      y: 100,
      height: screen.height - 200,
      width: screen.width - 600,
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
