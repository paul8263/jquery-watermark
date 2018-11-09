# jQuery watermark plugin

## How to use

1. In your HTML file add the plugin:

```html
<script src="jquery.min.js"></script>
<script src="jquery-watermark.js"></script>
```

2. Add watermark to a certain container (eg: body element):

```javascript
$('body').watermark({text: 'watermark text'});
```

## Configuration

```javascript
$('body').watermark({
    text: 'watermark text',
    overlap: false,
    tileHeight: '200',
    tileWidth: '300',
    font: 'Microsoft JhengHei',
    fontSize: '16px'
});
```

* text: Watermark content.
* font: Font of the watermark text.
* fontSize: Font size of the watermark text.
* overlap: Watermark is shown over the content or below it.
* tileHeight: Height of the watermark tile.
* tileWidth: Width of the watermark tile.

## Author
Paul Zhang