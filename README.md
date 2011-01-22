What is Yallipsis?
==================
Yallipsis is **Yet Another Ellipsis Plugin** for jQuery

Usage
=====
First, include `jquery.yallipsis.js` in your html document:
    <script type="text/javascript" src="/phpcode/quant/code/js/jquery.yallipsis.js"></script>

Basic Usage
-----------
    $(function() {
        $(".short").yallipsis();
    });

Options
-------
<dl>
  <dt>maxChars</dt>
  <dd>The maximum number of characters to allow before we ellipsify. Default: 50</dd>
  <dt>replaceText</dt>
  <dd>Text to insert to indicate ellipsification. Default: '<b><u>...</u></b>'</dd>
  <dt>where</dt>
  <dd>Where to truncate. Possible values: 'front', 'back', 'sides', 'middle'. Default: 'back'</dd>
</dl>

    $(function() {
        $(".short").yallipsis({maxChars:10, replaceText:'<u>***</u>'});
    });

Tips
----
If the `title` attribute of the element being ellipsified is empty,
the original text will get put there. So, you can combine yallipsis
with [tipTip] [1] (or any other jQuery quicktip plugin):
    $(function() {
        $(".short").yallipsis({maxChars:25}).tipTip({maxWidth:'auto'});
    });


[1]: http://code.drewwilson.com/entry/tiptip-jquery-plugin "tipTip jQuery Plugin"
