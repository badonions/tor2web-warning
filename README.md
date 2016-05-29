# tor2web-warning

Client side script that will detect and warn if a tor2web portal is being used (and other similar sites)

The domain entries are base64-encoded because the portals will rewrite them (by adding .to, .link, .cab ...)

Read more [here](https://chloe.re/2016/05/20/killing-tor2web-once-and-for-all/)

## Installing

Add your base 64 encoded domains to the ```domains``` array

```javascript
var domains = [
      "cmVkcG9pczBuLmNvbQ==" // redpois0n.com, main domain
];
```

Add this to your document

```html
<div id="warning"></div>

<script src="js/warn_gateway.js"></script>
```
