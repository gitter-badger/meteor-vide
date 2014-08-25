# Vide

[Vide](https://github.com/VodkaBears/Vide) wrapped for meteor.

## Usage

```js
Template.randomTemplate.rendered = function() {
    $('#randomElementName').vide('randomVideoWithoutExtension', {
        ...Random Vide options...
    });
}
```

## Caveats

Can't currently use Vide's auto-detection feature using ```data-``` attributes.
