# Vide

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
