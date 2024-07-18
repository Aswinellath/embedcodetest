<!DOCTYPE html>
<html>
<head>
	<meta http-equiv="content-type" content="text/html; charset=utf-8"/>
	<title></title>
	<meta name="generator" content="LibreOffice 7.3.7.2 (Linux)"/>
	<meta name="created" content="2024-07-18T12:07:08.999824080"/>
	<meta name="changed" content="2024-07-18T12:08:31.704370086"/>
</head>
<body lang="en-IN" dir="ltr"><p>class TruncateLines extends
HTMLElement {</p>
<p>  constructor() {</p>
<p>    super();</p>
<p>    const template =
document.getElementById(&quot;truncate-lines-template&quot;);</p>
<p>    const templateContent = template.content;</p>
<p><br/>
<br/>

</p>
<p>    this.attachShadow({ mode: 'open'
}).appendChild(templateContent.cloneNode(true));</p>
<p>  }</p>
<p>  
</p>
<p>  connectedCallback() {</p>
<p>    this.lineClamp = this.getAttribute('line-clamp');</p>
<p>    this.container =
this.shadowRoot.querySelector('.truncate-lines');</p>
<p>    this.clampEl =
this.shadowRoot.querySelector('.truncate-lines__clamp');</p>
<p>    this.container.style.setProperty(&quot;--truncate-line-clamp&quot;,
this.lineClamp);</p>
<p>    this.clampRect = this.clampEl.getBoundingClientRect();</p>
<p>    this.overflowEl =
this.shadowRoot.querySelector('.truncate-lines__overflow');</p>
<p>    this.overflowRect = this.overflowEl.getBoundingClientRect();</p>
<p>    
</p>
<p>    this.setClosedHeight();</p>
<p>    
</p>
<p>    this.toggleButton =
this.shadowRoot.querySelector('.truncate-lines__expand');</p>
<p>    this.toggleButton.addEventListener('click', () =&gt;
this.handleClick());</p>
<p>  }</p>
<p>  
</p>
<p>  setClosedHeight() {</p>
<p>    this.container.style.setProperty(&quot;--truncate-height&quot;,
`${this.clampRect.height}px`);</p>
<p>  }</p>
<p>  
</p>
<p>  setOpenedHeight() {</p>
<p>    this.container.style.setProperty(&quot;--truncate-height-expanded&quot;,
`${this.overflowRect.height}px`);</p>
<p>  }</p>
<p>  
</p>
<p>  handleClick() {</p>
<p>    if
(this.container.classList.contains('truncate-lines--expanded')) {</p>
<p>      this.close();</p>
<p>    } else {</p>
<p>      this.open();</p>
<p>    }</p>
<p>  }</p>
<p>  
</p>
<p>  open() {</p>
<p>   
this.container.classList.remove('truncate-lines--line-clamped');</p>
<p>    window.requestAnimationFrame(() =&gt; {</p>
<p>      this.overflowRect = this.overflowEl.getBoundingClientRect();</p>
<p>      this.setOpenedHeight();</p>
<p>      this.container.classList.add('truncate-lines--expanded');</p>
<p>    });</p>
<p>  }</p>
<p>  
</p>
<p>  close() {</p>
<p>    this.container.classList.remove('truncate-lines--expanded');</p>
<p>    setTimeout(() =&gt; {</p>
<p>     
this.container.classList.add('truncate-lines--line-clamped');</p>
<p>    }, 300);</p>
<p>  }</p>
<p>}</p>
<p><br/>
<br/>

</p>
<p>customElements.define(&quot;truncate-lines&quot;, TruncateLines);</p>
</body>
</html>