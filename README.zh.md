#uccn
首先要说明的是，本作品是从 [uc](https://github.com/satyr/uc)派生出来，主要是做了汉化处理而已。
uc 是可以让您在 chrome 窗口中运行任意本地脚本的 [Firefox](http://firefox.com) 扩展。
简单地说就是 [userChromeJS](http://userchromejs.mozdev.org/) + [subscriptoverlayloader.js](http://stashbox.org/26086/subscriptoverlayloader.js)。

###用法
在选项中(工具 -> uc)选择脚本“路径”和“深度”，以便根据它们的 meta 数据块自动加载。

* 如果是目录的话，其下的直至指定深度的所有 *\*.uc.{js,xul,css}* 文件都会被加载。
* 如果深度为 0，路径将会被忽略。
* 默认设置是一个单一的
  _<[UChrm](https://developer.mozilla.org/index.php?title=en/File_I%2F%2FO)>_
  这表示它如 subscriptoverlayloader 一样加载您的当前 Profile 中的 *chrome* 目录。注意 *userChrome.js* 不会被加载。

###支持的 metadata
语法和 [Greasemonkey 的](http://wiki.greasespot.net/Metadata_Block)大致相同。

* __@name__
  脚本名称。

* __@include__ / __@exclude__
  这个脚本将会指定的 URL 上加载/不加载。
  * `*` 是通配符。
  * 如果前缀 `~`，剩余的将会视为正则表达式式样。
    ([例子](http://gist.github.com/57590))

* __@require__
  接受一个脚本 URL 并预先加载它.
  * URL 可以是绝对或相对的,但必须是本地的.
  * 对于一个窗口同一个脚本将不会被加载两次.

* __@delay__
  在 overlay (覆盖)前的延时,单位为毫秒.仅 XUL.

* @(whatever)
  所有其它被简单的存储为文本数据的 meta 数据。
  `UC` 对象在每个保留它们的窗口中定义。

###来自 userChromeJS + subscriptoverlayloader.js 的改进
* 让您指定要加载的文件/目录。
* 目标子窗口也可以，譬如 about:config 或侧栏 UIs。
* 仅当需要的时候读取 meta 数据--在启动或脚本更新时。
* 在 @include/@exclude 中使用正则表达式
* @require

###缺点
* 仅可在 Firefox 3.5+ 上运行。
* 对 <http://bugzil.la/330458> 的流氓解决方法。
