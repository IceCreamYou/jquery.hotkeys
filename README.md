**jQuery Hotkeys** provides easy, human-friendly handling for keyboard input.

## Usage

Bind the `keydown`, `keypress`, or `keyup` events to an element:

    $(selector).keypress('ctrl+a down', function(event) {});
    // OR
    $(selector).on('keypress', 'ctrl+a down', function(event) {});

Separate key combinations that should trigger the callback with spaces. In the
examples above, the callback would fire if `ctrl+a` *or* `down` was pressed. In
the event callback, `event.keyPressed` holds the combination that actually
triggered the callback.

You can specify keys in combination with the control keys: `alt`, `ctrl`,
`meta`, and `shift`. If you use multiple control keys in a combination, specify
them in alphabetical order.

Instead of binding to key events, you can also just call
`jQuery.hotkeys.areKeysDown()` to determine whether a set of keys is currently
being pressed, or examine the list of currently pressed keys yourself in
`jQuery.hotkeys.keysDown`. This is useful if you want to bind to key events for
all keys since `event.keyPressed` does not exist in this scenario:

    $(selector).keypress(function(event) {});

If you only care about keys that were pressed (and released) instead of which
keys are being held down, you can call `jQuery.hotkeys.lastKeyPressed()` or
examine the last 5 keys pressed in `jQuery.hotkeys.lastKeysPressed`.

## Notes

Dual licensed under the MIT or GPLv2 licenses.

Hotkeys aren't tracked if you're inside of an input element (unless you
explicitly bind the hotkey directly to the input). This helps avoid conflicts
with normal user typing.

## Compatibility

Should work with jQuery 1.4.2 and newer, although new revisions will only be
tested with jQuery 2.0.2 and newer.

Should work with all the major browsers on all major operating systems,
including mobile devices. Versions of this script have been tested on Windows,
Mac, and Linux on IE6+, Firefox 1.5+, Chrome 0.2+, Safari 3+, and Opera 9+.
However, new revisions of this script will only be tested on the last two
major versions of IE, Firefox, and Chrome.

If you use early versions of jQuery, you will need to bind key events using
`.bind()` because `.on()` was added later.

**NOTE:** Firefox is the only major browser that will reliably let you override
all key shortcuts built into the browser. This won't be a problem for most
applications, but you should avoid binding to combinations like `ctrl+Q` and
`alt+F4` because most browsers will still react to those by closing the window.

## Credits

- [Isaac Sukin](https://github.com/IceCreamYou) wrote this revision
- [John Resig](https://github.com/jeresig/jquery.hotkeys),
  [Tzury Bar Yochay](https://github.com/tzuryby/jquery.hotkeys), and
  [Binny V A](http://www.openjs.com/scripts/events/keyboard_shortcuts/) wrote
  earlier revisions
- Changes were integrated from
  [kwillia](https://github.com/jeresig/jquery.hotkeys/pull/4/files) and
  [kevingorski](https://github.com/jeresig/jquery.hotkeys/pull/2/files)
