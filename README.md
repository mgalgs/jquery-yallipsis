What is Yallipsis?
==================
Yallipsis is **Yet Another Ellipsis Plugin** for jQuery. It turns text like this:
> Hi I love stuff and stuff and I really love to eat pizza and stuff yes.

into this:
> Hi I love stuff and...

or this:
> ...and stuff yes.

or this:
> Hi I lov...stuff yes.

or this:
> ...I really love...

Usage
=====
First, include `jquery.yallipsis.js` in your html document:
    <script type="text/javascript" src="/js/jquery.yallipsis.js"></script>

Basic Usage
-----------
    $(function() {
        $(".short").yallipsis();
    });

Options
-------
<dl>
  <dt>maxChars</dt>
  <dd>The maximum number of characters to allow before we ellipsify. Default: `50`</dd>
  <dt>replaceText</dt>
  <dd>Text to insert to indicate ellipsification. Default: `'<b><u>...</u></b>'`</dd>
  <dt>where</dt>
  <dd>Where to truncate. Possible values: `'front'`, `'back'`, `'sides'`, `'middle'`. Default: `'back'`</dd>
</dl>

##### Examples #####
If we had a div in our document like so:

    <div id="long-stuff">
      This is my really long sentence.
    </div>

Then this:
    $(function() {
        $(".short").yallipsis({maxChars:7, replaceText:'<u>***</u>'});
    });
would result in this:
    <div id="long-stuff" title="This is my really long sentence.">
      This is<u>***</u>
    </div>

and this:
    $(function() {
        $(".short").yallipsis({maxChars:10, where: 'sides'});
    });
would result in this:
    <div id="long-stuff" title="This is my really long sentence.">
      ...really long...
    </div>


Tips
----
If the `title` attribute of the element being ellipsified is empty,
the original text will get put there. So, you can combine yallipsis
with [tipTip] [1] (or any other jQuery quicktip plugin):
    $(function() {
        $(".short").yallipsis({maxChars:25}).tipTip({maxWidth:'auto'});
    });


[1]: http://code.drewwilson.com/entry/tiptip-jquery-plugin "tipTip jQuery Plugin"
