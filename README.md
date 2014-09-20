# Vide
[![Gitter](https://badges.gitter.im/Join Chat.svg)](https://gitter.im/zimme/meteor-vide?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge)

[Vide](https://github.com/VodkaBears/Vide) wrapped for meteor.

## Usage

```js
Template.templateName.rendered = function() {
    $('#elementName').vide('fileNameWithoutExtension', {
        ...Vide options...
    });
}
```

## Caveats

Can't currently use Vide's auto-detection feature using `data-` attributes.
