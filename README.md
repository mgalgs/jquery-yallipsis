What is Yallipsis?
==================
Yallipsis is **Yet Another Ellipsis Plugin** for jQuery. It is tiny and very simple to use. It turns text like this:
> Hi I love stuff and stuff and I really love to eat pizza and stuff yes.

into this:
> Hi I love stuff and<b><u>...</u></b>

or this:
> <b><u>...</u></b>and stuff yes.

or this:
> Hi I lov<b><u>...</u></b>stuff yes.

or this:
> <b><u>...</u></b>I really love<b><u>...</u></b>

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
  <dd>The maximum number of characters to allow before we ellipsify. Default: <code>50</code></dd>
  <dt>replaceText</dt>
  <dd>Text to insert to indicate ellipsification. Default: <code>'<b><u>...</u></b>'</code></dd>
  <dt>where</dt>
  <dd>Where to truncate. Possible values: <code>'front'</code>, <code>'back'</code>, <code>'sides'</code>, <code>'middle'</code>. Default: <code>'back'</code></dd>
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
      <b><u>...</u></b>really long<b><u>...</u></b>
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
