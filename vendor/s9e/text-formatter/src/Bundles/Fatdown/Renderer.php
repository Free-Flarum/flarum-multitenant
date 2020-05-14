<?php

/**
* @package   s9e\TextFormatter
* @copyright Copyright (c) 2010-2020 The s9e authors
* @license   http://www.opensource.org/licenses/mit-license.php The MIT License
*/
namespace s9e\TextFormatter\Bundles\Fatdown;

class Renderer extends \s9e\TextFormatter\Renderers\PHP
{
	protected $params=['TASKLISTS_EDITABLE'=>''];
	protected function renderNode(\DOMNode $node)
	{
		switch($node->nodeName){case'BANDCAMP':$this->out.='<span data-s9e-mediaembed="bandcamp" style="display:inline-block;width:100%;max-width:400px"><span style="display:block;overflow:hidden;position:relative;padding-bottom:100%"><iframe allowfullscreen="" scrolling="no" style="border:0;height:100%;left:0;position:absolute;width:100%" src="//bandcamp.com/EmbeddedPlayer/size=large/minimal=true/';if($node->hasAttribute('album_id')){$this->out.='album='.htmlspecialchars($node->getAttribute('album_id'),2);if($node->hasAttribute('track_num'))$this->out.='/t='.htmlspecialchars($node->getAttribute('track_num'),2);}else$this->out.='track='.htmlspecialchars($node->getAttribute('track_id'),2);$this->out.='"></iframe></span></span>';break;case'C':case'html:code':$this->out.='<code>';$this->at($node);$this->out.='</code>';break;case'CODE':$this->out.='<pre><code';if($node->hasAttribute('lang'))$this->out.=' class="language-'.htmlspecialchars($node->getAttribute('lang'),2).'"';$this->out.='>';$this->at($node);$this->out.='</code></pre>';break;case'DAILYMOTION':$this->out.='<span data-s9e-mediaembed="dailymotion" style="display:inline-block;width:100%;max-width:640px"><span style="display:block;overflow:hidden;position:relative;padding-bottom:56.25%"><iframe allowfullscreen="" scrolling="no" style="border:0;height:100%;left:0;position:absolute;width:100%" src="//www.dailymotion.com/embed/video/'.htmlspecialchars($node->getAttribute('id'),2);if($node->hasAttribute('t'))$this->out.='?start='.htmlspecialchars($node->getAttribute('t'),2);$this->out.='"></iframe></span></span>';break;case'DEL':case'html:del':$this->out.='<del>';$this->at($node);$this->out.='</del>';break;case'EM':$this->out.='<em>';$this->at($node);$this->out.='</em>';break;case'EMAIL':$this->out.='<a href="mailto:'.htmlspecialchars($node->getAttribute('email'),2).'">';$this->at($node);$this->out.='</a>';break;case'ESC':$this->at($node);break;case'FACEBOOK':$this->out.='<iframe data-s9e-mediaembed="facebook" allowfullscreen="" onload="var c=new MessageChannel;c.port1.onmessage=function(e){style.height=e.data+\'px\'};contentWindow.postMessage(\'s9e:init\',\'https://s9e.github.io\',[c.port2])" scrolling="no" src="https://s9e.github.io/iframe/2/facebook.min.html#'.htmlspecialchars($node->getAttribute('type').$node->getAttribute('id'),2).'" style="border:0;height:360px;max-width:640px;width:100%"></iframe>';break;case'FP':case'HE':$this->out.=htmlspecialchars($node->getAttribute('char'),0);break;case'H1':$this->out.='<h1>';$this->at($node);$this->out.='</h1>';break;case'H2':$this->out.='<h2>';$this->at($node);$this->out.='</h2>';break;case'H3':$this->out.='<h3>';$this->at($node);$this->out.='</h3>';break;case'H4':$this->out.='<h4>';$this->at($node);$this->out.='</h4>';break;case'H5':$this->out.='<h5>';$this->at($node);$this->out.='</h5>';break;case'H6':$this->out.='<h6>';$this->at($node);$this->out.='</h6>';break;case'HC':$this->out.='<!--'.htmlspecialchars($node->getAttribute('content'),0).'-->';break;case'HR':$this->out.='<hr>';break;case'IMG':$this->out.='<img src="'.htmlspecialchars($node->getAttribute('src'),2).'"';if($node->hasAttribute('alt'))$this->out.=' alt="'.htmlspecialchars($node->getAttribute('alt'),2).'"';if($node->hasAttribute('title'))$this->out.=' title="'.htmlspecialchars($node->getAttribute('title'),2).'"';$this->out.='>';break;case'ISPOILER':$this->out.='<span class="spoiler" onclick="removeAttribute(\'style\')" style="background:#444;color:transparent">';$this->at($node);$this->out.='</span>';break;case'LI':$this->out.='<li';if($this->xpath->evaluate('boolean(TASK)',$node))$this->out.=' data-task-id="'.htmlspecialchars($this->xpath->evaluate('string(TASK/@id)',$node),2).'" data-task-state="'.htmlspecialchars($this->xpath->evaluate('string(TASK/@state)',$node),2).'"';$this->out.='>';$this->at($node);$this->out.='</li>';break;case'LIST':if(!$node->hasAttribute('type')){$this->out.='<ul>';$this->at($node);$this->out.='</ul>';}else{$this->out.='<ol';if($node->hasAttribute('start'))$this->out.=' start="'.htmlspecialchars($node->getAttribute('start'),2).'"';$this->out.='>';$this->at($node);$this->out.='</ol>';}break;case'LIVELEAK':$this->out.='<span data-s9e-mediaembed="liveleak" style="display:inline-block;width:100%;max-width:640px"><span style="display:block;overflow:hidden;position:relative;padding-bottom:56.25%"><iframe allowfullscreen="" scrolling="no" src="//www.liveleak.com/e/'.htmlspecialchars($node->getAttribute('id'),2).'" style="border:0;height:100%;left:0;position:absolute;width:100%"></iframe></span></span>';break;case'QUOTE':$this->out.='<blockquote>';$this->at($node);$this->out.='</blockquote>';break;case'SOUNDCLOUD':$this->out.='<iframe data-s9e-mediaembed="soundcloud" allowfullscreen="" scrolling="no" src="https://w.soundcloud.com/player/?url=';if($node->hasAttribute('playlist_id'))$this->out.='https%3A//api.soundcloud.com/playlists/'.htmlspecialchars($node->getAttribute('playlist_id'),2);elseif($node->hasAttribute('track_id'))$this->out.='https%3A//api.soundcloud.com/tracks/'.htmlspecialchars($node->getAttribute('track_id'),2).'&amp;secret_token='.htmlspecialchars($node->getAttribute('secret_token'),2);else{if((strpos($node->getAttribute('id'),'://')===false))$this->out.='https%3A//soundcloud.com/';$this->out.=htmlspecialchars($node->getAttribute('id'),2);}$this->out.='" style="border:0;height:';if($node->hasAttribute('playlist_id')||(strpos($node->getAttribute('id'),'/sets/')!==false))$this->out.='450';else$this->out.='166';$this->out.='px;max-width:900px;width:100%"></iframe>';break;case'SPOILER':$this->out.='<details class="spoiler">';$this->at($node);$this->out.='</details>';break;case'SPOTIFY':if((strpos($node->getAttribute('id'),'episode/')===0)||(strpos($node->getAttribute('id'),'show/')===0))$this->out.='<iframe data-s9e-mediaembed="spotify" allow="encrypted-media" allowfullscreen="" scrolling="no" src="https://open.spotify.com/embed/'.htmlspecialchars($node->getAttribute('id'),2).'" style="border:0;height:152px;max-width:900px;width:100%"></iframe>';else$this->out.='<span data-s9e-mediaembed="spotify" style="display:inline-block;width:100%;max-width:320px"><span style="display:block;overflow:hidden;position:relative;padding-bottom:125%;padding-bottom:calc(100% + 80px)"><iframe allow="encrypted-media" allowfullscreen="" scrolling="no" src="https://open.spotify.com/embed/'.htmlspecialchars(strtr($node->getAttribute('id'),':','/').$node->getAttribute('path'),2).'" style="border:0;height:100%;left:0;position:absolute;width:100%"></iframe></span></span>';break;case'STRONG':case'html:strong':$this->out.='<strong>';$this->at($node);$this->out.='</strong>';break;case'SUB':case'html:sub':$this->out.='<sub>';$this->at($node);$this->out.='</sub>';break;case'SUP':case'html:sup':$this->out.='<sup>';$this->at($node);$this->out.='</sup>';break;case'TABLE':case'html:table':$this->out.='<table>';$this->at($node);$this->out.='</table>';break;case'TASK':$this->out.='<input data-task-id="'.htmlspecialchars($node->getAttribute('id'),2).'" type="checkbox"';if($node->getAttribute('state')==='checked')$this->out.=' checked';if($this->params['TASKLISTS_EDITABLE']==='')$this->out.=' disabled';$this->out.='>';break;case'TBODY':case'html:tbody':$this->out.='<tbody>';$this->at($node);$this->out.='</tbody>';break;case'TD':$this->out.='<td';if($node->hasAttribute('align'))$this->out.=' style="text-align:'.htmlspecialchars($node->getAttribute('align'),2).'"';$this->out.='>';$this->at($node);$this->out.='</td>';break;case'TH':$this->out.='<th';if($node->hasAttribute('align'))$this->out.=' style="text-align:'.htmlspecialchars($node->getAttribute('align'),2).'"';$this->out.='>';$this->at($node);$this->out.='</th>';break;case'THEAD':case'html:thead':$this->out.='<thead>';$this->at($node);$this->out.='</thead>';break;case'TR':case'html:tr':$this->out.='<tr>';$this->at($node);$this->out.='</tr>';break;case'TWITCH':$this->out.='<span data-s9e-mediaembed="twitch" style="display:inline-block;width:100%;max-width:640px"><span style="display:block;overflow:hidden;position:relative;padding-bottom:56.25%"><iframe allowfullscreen="" scrolling="no" style="border:0;height:100%;left:0;position:absolute;width:100%" src="//';if($node->hasAttribute('clip_id')){$this->out.='clips.twitch.tv/embed?autoplay=false&amp;clip=';if($node->hasAttribute('channel'))$this->out.=htmlspecialchars($node->getAttribute('channel'),2).'/';$this->out.=htmlspecialchars($node->getAttribute('clip_id'),2);}else{$this->out.='player.twitch.tv/?autoplay=false&amp;';if($node->hasAttribute('video_id'))$this->out.='video=v'.htmlspecialchars($node->getAttribute('video_id'),2);else$this->out.='channel='.htmlspecialchars($node->getAttribute('channel'),2);if($node->hasAttribute('t'))$this->out.='&amp;time='.htmlspecialchars($node->getAttribute('t'),2);}$this->out.='"></iframe></span></span>';break;case'URL':$this->out.='<a href="'.htmlspecialchars($node->getAttribute('url'),2).'"';if($node->hasAttribute('title'))$this->out.=' title="'.htmlspecialchars($node->getAttribute('title'),2).'"';$this->out.='>';$this->at($node);$this->out.='</a>';break;case'VIMEO':$this->out.='<span data-s9e-mediaembed="vimeo" style="display:inline-block;width:100%;max-width:640px"><span style="display:block;overflow:hidden;position:relative;padding-bottom:56.25%"><iframe allowfullscreen="" scrolling="no" style="border:0;height:100%;left:0;position:absolute;width:100%" src="//player.vimeo.com/video/'.htmlspecialchars($node->getAttribute('id'),2);if($node->hasAttribute('t'))$this->out.='#t='.htmlspecialchars($node->getAttribute('t'),2);$this->out.='"></iframe></span></span>';break;case'VINE':$this->out.='<span data-s9e-mediaembed="vine" style="display:inline-block;width:100%;max-width:480px"><span style="display:block;overflow:hidden;position:relative;padding-bottom:100%"><iframe allowfullscreen="" scrolling="no" src="https://vine.co/v/'.htmlspecialchars($node->getAttribute('id'),2).'/embed/simple?audio=1" style="border:0;height:100%;left:0;position:absolute;width:100%"></iframe></span></span>';break;case'YOUTUBE':$this->out.='<span data-s9e-mediaembed="youtube" style="display:inline-block;width:100%;max-width:640px"><span style="display:block;overflow:hidden;position:relative;padding-bottom:56.25%"><iframe allowfullscreen="" scrolling="no" style="background:url(https://i.ytimg.com/vi/'.htmlspecialchars($node->getAttribute('id'),2).'/hqdefault.jpg) 50% 50% / cover;border:0;height:100%;left:0;position:absolute;width:100%" src="https://www.youtube.com/embed/'.htmlspecialchars($node->getAttribute('id'),2);if($node->hasAttribute('list'))$this->out.='?list='.htmlspecialchars($node->getAttribute('list'),2);if($node->hasAttribute('t')){if($node->hasAttribute('list'))$this->out.='&amp;';else$this->out.='?';$this->out.='start='.htmlspecialchars($node->getAttribute('t'),2);}$this->out.='"></iframe></span></span>';break;case'br':case'html:br':$this->out.='<br>';break;case'e':case'i':case's':break;case'html:abbr':$this->out.='<abbr';if($node->hasAttribute('title'))$this->out.=' title="'.htmlspecialchars($node->getAttribute('title'),2).'"';$this->out.='>';$this->at($node);$this->out.='</abbr>';break;case'html:b':$this->out.='<b>';$this->at($node);$this->out.='</b>';break;case'html:dd':$this->out.='<dd>';$this->at($node);$this->out.='</dd>';break;case'html:div':$this->out.='<div';if($node->hasAttribute('class'))$this->out.=' class="'.htmlspecialchars($node->getAttribute('class'),2).'"';$this->out.='>';$this->at($node);$this->out.='</div>';break;case'html:dl':$this->out.='<dl>';$this->at($node);$this->out.='</dl>';break;case'html:dt':$this->out.='<dt>';$this->at($node);$this->out.='</dt>';break;case'html:i':$this->out.='<i>';$this->at($node);$this->out.='</i>';break;case'html:img':$this->out.='<img';if($node->hasAttribute('alt'))$this->out.=' alt="'.htmlspecialchars($node->getAttribute('alt'),2).'"';if($node->hasAttribute('height'))$this->out.=' height="'.htmlspecialchars($node->getAttribute('height'),2).'"';if($node->hasAttribute('src'))$this->out.=' src="'.htmlspecialchars($node->getAttribute('src'),2).'"';if($node->hasAttribute('title'))$this->out.=' title="'.htmlspecialchars($node->getAttribute('title'),2).'"';if($node->hasAttribute('width'))$this->out.=' width="'.htmlspecialchars($node->getAttribute('width'),2).'"';$this->out.='>';break;case'html:ins':$this->out.='<ins>';$this->at($node);$this->out.='</ins>';break;case'html:li':$this->out.='<li>';$this->at($node);$this->out.='</li>';break;case'html:ol':$this->out.='<ol>';$this->at($node);$this->out.='</ol>';break;case'html:pre':$this->out.='<pre>';$this->at($node);$this->out.='</pre>';break;case'html:rb':$this->out.='<rb>';$this->at($node);$this->out.='</rb>';break;case'html:rp':$this->out.='<rp>';$this->at($node);$this->out.='</rp>';break;case'html:rt':$this->out.='<rt>';$this->at($node);$this->out.='</rt>';break;case'html:rtc':$this->out.='<rtc>';$this->at($node);$this->out.='</rtc>';break;case'html:ruby':$this->out.='<ruby>';$this->at($node);$this->out.='</ruby>';break;case'html:span':$this->out.='<span';if($node->hasAttribute('class'))$this->out.=' class="'.htmlspecialchars($node->getAttribute('class'),2).'"';$this->out.='>';$this->at($node);$this->out.='</span>';break;case'html:td':$this->out.='<td';if($node->hasAttribute('colspan'))$this->out.=' colspan="'.htmlspecialchars($node->getAttribute('colspan'),2).'"';if($node->hasAttribute('rowspan'))$this->out.=' rowspan="'.htmlspecialchars($node->getAttribute('rowspan'),2).'"';$this->out.='>';$this->at($node);$this->out.='</td>';break;case'html:tfoot':$this->out.='<tfoot>';$this->at($node);$this->out.='</tfoot>';break;case'html:th':$this->out.='<th';if($node->hasAttribute('colspan'))$this->out.=' colspan="'.htmlspecialchars($node->getAttribute('colspan'),2).'"';if($node->hasAttribute('rowspan'))$this->out.=' rowspan="'.htmlspecialchars($node->getAttribute('rowspan'),2).'"';if($node->hasAttribute('scope'))$this->out.=' scope="'.htmlspecialchars($node->getAttribute('scope'),2).'"';$this->out.='>';$this->at($node);$this->out.='</th>';break;case'html:u':$this->out.='<u>';$this->at($node);$this->out.='</u>';break;case'html:ul':$this->out.='<ul>';$this->at($node);$this->out.='</ul>';break;case'p':$this->out.='<p>';$this->at($node);$this->out.='</p>';break;default:$this->at($node);}
	}
	/** {@inheritdoc} */
	public $enableQuickRenderer=true;
	/** {@inheritdoc} */
	protected $static=['/C'=>'</code>','/CODE'=>'</code></pre>','/DEL'=>'</del>','/EM'=>'</em>','/EMAIL'=>'</a>','/ESC'=>'','/H1'=>'</h1>','/H2'=>'</h2>','/H3'=>'</h3>','/H4'=>'</h4>','/H5'=>'</h5>','/H6'=>'</h6>','/ISPOILER'=>'</span>','/QUOTE'=>'</blockquote>','/SPOILER'=>'</details>','/STRONG'=>'</strong>','/SUB'=>'</sub>','/SUP'=>'</sup>','/TABLE'=>'</table>','/TBODY'=>'</tbody>','/TD'=>'</td>','/TH'=>'</th>','/THEAD'=>'</thead>','/TR'=>'</tr>','/URL'=>'</a>','/html:abbr'=>'</abbr>','/html:b'=>'</b>','/html:code'=>'</code>','/html:dd'=>'</dd>','/html:del'=>'</del>','/html:div'=>'</div>','/html:dl'=>'</dl>','/html:dt'=>'</dt>','/html:i'=>'</i>','/html:ins'=>'</ins>','/html:li'=>'</li>','/html:ol'=>'</ol>','/html:pre'=>'</pre>','/html:rb'=>'</rb>','/html:rp'=>'</rp>','/html:rt'=>'</rt>','/html:rtc'=>'</rtc>','/html:ruby'=>'</ruby>','/html:span'=>'</span>','/html:strong'=>'</strong>','/html:sub'=>'</sub>','/html:sup'=>'</sup>','/html:table'=>'</table>','/html:tbody'=>'</tbody>','/html:td'=>'</td>','/html:tfoot'=>'</tfoot>','/html:th'=>'</th>','/html:thead'=>'</thead>','/html:tr'=>'</tr>','/html:u'=>'</u>','/html:ul'=>'</ul>','C'=>'<code>','DEL'=>'<del>','EM'=>'<em>','ESC'=>'','H1'=>'<h1>','H2'=>'<h2>','H3'=>'<h3>','H4'=>'<h4>','H5'=>'<h5>','H6'=>'<h6>','HR'=>'<hr>','ISPOILER'=>'<span class="spoiler" onclick="removeAttribute(\'style\')" style="background:#444;color:transparent">','QUOTE'=>'<blockquote>','SPOILER'=>'<details class="spoiler">','STRONG'=>'<strong>','SUB'=>'<sub>','SUP'=>'<sup>','TABLE'=>'<table>','TBODY'=>'<tbody>','THEAD'=>'<thead>','TR'=>'<tr>','html:b'=>'<b>','html:br'=>'<br>','html:code'=>'<code>','html:dd'=>'<dd>','html:del'=>'<del>','html:dl'=>'<dl>','html:dt'=>'<dt>','html:i'=>'<i>','html:ins'=>'<ins>','html:li'=>'<li>','html:ol'=>'<ol>','html:pre'=>'<pre>','html:rb'=>'<rb>','html:rp'=>'<rp>','html:rt'=>'<rt>','html:rtc'=>'<rtc>','html:ruby'=>'<ruby>','html:strong'=>'<strong>','html:sub'=>'<sub>','html:sup'=>'<sup>','html:table'=>'<table>','html:tbody'=>'<tbody>','html:tfoot'=>'<tfoot>','html:thead'=>'<thead>','html:tr'=>'<tr>','html:u'=>'<u>','html:ul'=>'<ul>'];
	/** {@inheritdoc} */
	protected $dynamic=['EMAIL'=>['(^[^ ]+(?> (?!email=)[^=]+="[^"]*")*(?> email="([^"]*)")?.*)s','<a href="mailto:$1">'],'IMG'=>['(^[^ ]+(?> (?!(?:alt|src|title)=)[^=]+="[^"]*")*( alt="[^"]*")?(?> (?!(?:src|title)=)[^=]+="[^"]*")*(?> src="([^"]*)")?(?> (?!title=)[^=]+="[^"]*")*( title="[^"]*")?.*)s','<img src="$2"$1$3>'],'LIVELEAK'=>['(^[^ ]+(?> (?!id=)[^=]+="[^"]*")*(?> id="([^"]*)")?.*)s','<span data-s9e-mediaembed="liveleak" style="display:inline-block;width:100%;max-width:640px"><span style="display:block;overflow:hidden;position:relative;padding-bottom:56.25%"><iframe allowfullscreen="" scrolling="no" src="//www.liveleak.com/e/$1" style="border:0;height:100%;left:0;position:absolute;width:100%"></iframe></span></span>'],'URL'=>['(^[^ ]+(?> (?!(?:title|url)=)[^=]+="[^"]*")*( title="[^"]*")?(?> (?!url=)[^=]+="[^"]*")*(?> url="([^"]*)")?.*)s','<a href="$2"$1>'],'VINE'=>['(^[^ ]+(?> (?!id=)[^=]+="[^"]*")*(?> id="([^"]*)")?.*)s','<span data-s9e-mediaembed="vine" style="display:inline-block;width:100%;max-width:480px"><span style="display:block;overflow:hidden;position:relative;padding-bottom:100%"><iframe allowfullscreen="" scrolling="no" src="https://vine.co/v/$1/embed/simple?audio=1" style="border:0;height:100%;left:0;position:absolute;width:100%"></iframe></span></span>'],'html:abbr'=>['(^[^ ]+(?> (?!title=)[^=]+="[^"]*")*( title="[^"]*")?.*)s','<abbr$1>'],'html:div'=>['(^[^ ]+(?> (?!class=)[^=]+="[^"]*")*( class="[^"]*")?.*)s','<div$1>'],'html:img'=>['(^[^ ]+(?> (?!(?:alt|height|src|title|width)=)[^=]+="[^"]*")*( alt="[^"]*")?(?> (?!(?:height|src|title|width)=)[^=]+="[^"]*")*( height="[^"]*")?(?> (?!(?:src|title|width)=)[^=]+="[^"]*")*( src="[^"]*")?(?> (?!(?:title|width)=)[^=]+="[^"]*")*( title="[^"]*")?(?> (?!width=)[^=]+="[^"]*")*( width="[^"]*")?.*)s','<img$1$2$3$4$5>'],'html:span'=>['(^[^ ]+(?> (?!class=)[^=]+="[^"]*")*( class="[^"]*")?.*)s','<span$1>'],'html:td'=>['(^[^ ]+(?> (?!(?:col|row)span=)[^=]+="[^"]*")*( colspan="[^"]*")?(?> (?!rowspan=)[^=]+="[^"]*")*( rowspan="[^"]*")?.*)s','<td$1$2>'],'html:th'=>['(^[^ ]+(?> (?!(?:colspan|rowspan|scope)=)[^=]+="[^"]*")*( colspan="[^"]*")?(?> (?!(?:rowspan|scope)=)[^=]+="[^"]*")*( rowspan="[^"]*")?(?> (?!scope=)[^=]+="[^"]*")*( scope="[^"]*")?.*)s','<th$1$2$3>']];
	/** {@inheritdoc} */
	protected $quickRegexp='(<(?:(?!/)((?:BANDCAMP|DAILYMOTION|F(?:ACEBOOK|P)|H[CER]|IMG|LIVELEAK|S(?:OUNDCLOUD|POTIFY)|T(?:ASK|WITCH)|VI(?:MEO|NE)|YOUTUBE|html:(?:br|img)))(?: [^>]*)?>.*?</\\1|(/?(?!br/|p>)[^ />]+)[^>]*?(/)?)>)s';
	/** {@inheritdoc} */
	protected $quickRenderingTest='((?<=<)(?:[!?]|LI[ />]))';
	/** {@inheritdoc} */
	protected function renderQuickTemplate($id, $xml)
	{
		$attributes=$this->matchAttributes($xml);
		$html='';switch($id){case'/LIST':$attributes=array_pop($this->attributes);if(!isset($attributes['type']))$html.='</ul>';else$html.='</ol>';break;case'BANDCAMP':$attributes+=['track_num'=>null,'track_id'=>null];$html.='<span data-s9e-mediaembed="bandcamp" style="display:inline-block;width:100%;max-width:400px"><span style="display:block;overflow:hidden;position:relative;padding-bottom:100%"><iframe allowfullscreen="" scrolling="no" style="border:0;height:100%;left:0;position:absolute;width:100%" src="//bandcamp.com/EmbeddedPlayer/size=large/minimal=true/';if(isset($attributes['album_id'])){$html.='album='.$attributes['album_id'];if(isset($attributes['track_num']))$html.='/t='.$attributes['track_num'];}else$html.='track='.$attributes['track_id'];$html.='"></iframe></span></span>';break;case'CODE':$html.='<pre><code';if(isset($attributes['lang']))$html.=' class="language-'.$attributes['lang'].'"';$html.='>';break;case'DAILYMOTION':$attributes+=['id'=>null];$html.='<span data-s9e-mediaembed="dailymotion" style="display:inline-block;width:100%;max-width:640px"><span style="display:block;overflow:hidden;position:relative;padding-bottom:56.25%"><iframe allowfullscreen="" scrolling="no" style="border:0;height:100%;left:0;position:absolute;width:100%" src="//www.dailymotion.com/embed/video/'.$attributes['id'];if(isset($attributes['t']))$html.='?start='.$attributes['t'];$html.='"></iframe></span></span>';break;case'FACEBOOK':$attributes+=['type'=>null,'id'=>null];$html.='<iframe data-s9e-mediaembed="facebook" allowfullscreen="" onload="var c=new MessageChannel;c.port1.onmessage=function(e){style.height=e.data+\'px\'};contentWindow.postMessage(\'s9e:init\',\'https://s9e.github.io\',[c.port2])" scrolling="no" src="https://s9e.github.io/iframe/2/facebook.min.html#'.$attributes['type'].$attributes['id'].'" style="border:0;height:360px;max-width:640px;width:100%"></iframe>';break;case'FP':case'HE':$attributes+=['char'=>null];$html.=str_replace('&quot;','"',$attributes['char']);break;case'HC':$attributes+=['content'=>null];$html.='<!--'.str_replace('&quot;','"',$attributes['content']).'-->';break;case'LIST':if(!isset($attributes['type']))$html.='<ul>';else{$html.='<ol';if(isset($attributes['start']))$html.=' start="'.$attributes['start'].'"';$html.='>';}$this->attributes[]=$attributes;break;case'SOUNDCLOUD':$attributes+=['secret_token'=>null,'id'=>null];$html.='<iframe data-s9e-mediaembed="soundcloud" allowfullscreen="" scrolling="no" src="https://w.soundcloud.com/player/?url=';if(isset($attributes['playlist_id']))$html.='https%3A//api.soundcloud.com/playlists/'.$attributes['playlist_id'];elseif(isset($attributes['track_id']))$html.='https%3A//api.soundcloud.com/tracks/'.$attributes['track_id'].'&amp;secret_token='.$attributes['secret_token'];else{if((strpos($attributes['id'],'://')===false))$html.='https%3A//soundcloud.com/';$html.=$attributes['id'];}$html.='" style="border:0;height:';if(isset($attributes['playlist_id'])||(strpos($attributes['id'],'/sets/')!==false))$html.='450';else$html.='166';$html.='px;max-width:900px;width:100%"></iframe>';break;case'SPOTIFY':$attributes+=['id'=>null,'path'=>null];if((strpos($attributes['id'],'episode/')===0)||(strpos($attributes['id'],'show/')===0))$html.='<iframe data-s9e-mediaembed="spotify" allow="encrypted-media" allowfullscreen="" scrolling="no" src="https://open.spotify.com/embed/'.$attributes['id'].'" style="border:0;height:152px;max-width:900px;width:100%"></iframe>';else$html.='<span data-s9e-mediaembed="spotify" style="display:inline-block;width:100%;max-width:320px"><span style="display:block;overflow:hidden;position:relative;padding-bottom:125%;padding-bottom:calc(100% + 80px)"><iframe allow="encrypted-media" allowfullscreen="" scrolling="no" src="https://open.spotify.com/embed/'.htmlspecialchars(strtr(htmlspecialchars_decode($attributes['id']),':','/').htmlspecialchars_decode($attributes['path']),2).'" style="border:0;height:100%;left:0;position:absolute;width:100%"></iframe></span></span>';break;case'TASK':$attributes+=['id'=>null,'state'=>null];$html.='<input data-task-id="'.$attributes['id'].'" type="checkbox"';if($attributes['state']==='checked')$html.=' checked';if($this->params['TASKLISTS_EDITABLE']==='')$html.=' disabled';$html.='>';break;case'TD':$html.='<td';if(isset($attributes['align']))$html.=' style="text-align:'.$attributes['align'].'"';$html.='>';break;case'TH':$html.='<th';if(isset($attributes['align']))$html.=' style="text-align:'.$attributes['align'].'"';$html.='>';break;case'TWITCH':$attributes+=['channel'=>null,'clip_id'=>null];$html.='<span data-s9e-mediaembed="twitch" style="display:inline-block;width:100%;max-width:640px"><span style="display:block;overflow:hidden;position:relative;padding-bottom:56.25%"><iframe allowfullscreen="" scrolling="no" style="border:0;height:100%;left:0;position:absolute;width:100%" src="//';if(isset($attributes['clip_id'])){$html.='clips.twitch.tv/embed?autoplay=false&amp;clip=';if(isset($attributes['channel']))$html.=$attributes['channel'].'/';$html.=$attributes['clip_id'];}else{$html.='player.twitch.tv/?autoplay=false&amp;';if(isset($attributes['video_id']))$html.='video=v'.$attributes['video_id'];else$html.='channel='.$attributes['channel'];if(isset($attributes['t']))$html.='&amp;time='.$attributes['t'];}$html.='"></iframe></span></span>';break;case'VIMEO':$attributes+=['id'=>null];$html.='<span data-s9e-mediaembed="vimeo" style="display:inline-block;width:100%;max-width:640px"><span style="display:block;overflow:hidden;position:relative;padding-bottom:56.25%"><iframe allowfullscreen="" scrolling="no" style="border:0;height:100%;left:0;position:absolute;width:100%" src="//player.vimeo.com/video/'.$attributes['id'];if(isset($attributes['t']))$html.='#t='.$attributes['t'];$html.='"></iframe></span></span>';break;case'YOUTUBE':$attributes+=['id'=>null,'t'=>null];$html.='<span data-s9e-mediaembed="youtube" style="display:inline-block;width:100%;max-width:640px"><span style="display:block;overflow:hidden;position:relative;padding-bottom:56.25%"><iframe allowfullscreen="" scrolling="no" style="background:url(https://i.ytimg.com/vi/'.$attributes['id'].'/hqdefault.jpg) 50% 50% / cover;border:0;height:100%;left:0;position:absolute;width:100%" src="https://www.youtube.com/embed/'.$attributes['id'];if(isset($attributes['list']))$html.='?list='.$attributes['list'];if(isset($attributes['t'])){if(isset($attributes['list']))$html.='&amp;';else$html.='?';$html.='start='.$attributes['t'];}$html.='"></iframe></span></span>';}

		return $html;
	}
}