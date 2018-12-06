let width = 1920;
let height = 1080;

let halfLeft = new Key('left', ['alt'], function () {
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

let halfRight = new Key('right', ['alt'], function () {
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
