let width = 1920;
let height = 1080;

let halfLeft = new Key('left', ['alt'], function () {
  let screen = Screen.main().flippedVisibleFrame();
  let window = Window.focused();

  if (window)
    window.setFrame({
      x: 5,
      y: 30,
      height: screen.height - 50,
      width: screen.width / 2 - 100,
    });
});

let halfRight = new Key('right', ['alt'], function () {
  let screen = Screen.main().flippedVisibleFrame();
  let window = Window.focused();

  if (window)
    window.setFrame({
      x: screen.width / 2 + 100,
      y: 30,
      height: screen.height - 50,
      width: screen.width / 2 - 100,
    });
});

let twoThirdsLeft = new Key('left', ['alt', 'shift'], function () {
  let screen = Screen.main().flippedVisibleFrame();
  let window = Window.focused();

  if (window)
    window.setFrame({
      x: 5,
      y: 30,
      height: screen.height - 50,
      width: screen.width * 2 / 3 - 250,
    });
});

let oneThirdRight = new Key('right', ['alt', 'shift'], function () {
  let screen = Screen.main().flippedVisibleFrame();
  let window = Window.focused();

  if (window)
    window.setFrame({
      x: screen.width * 2 / 3 - 200,
      y: 30,
      height: screen.height - 50,
      width: screen.width / 3 + 200,
    });
});

let middle = new Key('down', ['alt'], function () {
  let screen = Screen.main().flippedVisibleFrame();
  let window = Window.focused();

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
