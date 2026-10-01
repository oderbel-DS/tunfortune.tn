# Génère un aperçu autonome (un seul fichier HTML) à partir de dist/index.html.
import re, base64, sys
src = sys.argv[1] if len(sys.argv) > 1 else 'dist'
out = sys.argv[2] if len(sys.argv) > 2 else 'apercu.html'
html = open(f'{src}/index.html').read()
def inline_css(m):
    css = open(src + m.group(1)).read()
    def ff(block):
        b = block.group(0)
        u = re.search(r'url\((/_astro/[^)]+\.woff2)\)', b)
        if not u or '-latin-' not in u.group(1): return ''
        data = base64.b64encode(open(src + u.group(1), 'rb').read()).decode()
        return re.sub(r'src:[^;]+;', f'src:url(data:font/woff2;base64,{data}) format("woff2");', b)
    return '<style>' + re.sub(r'@font-face\{[^}]*\}', ff, css) + '</style>'
html = re.sub(r'<link rel="stylesheet" href="([^"]+)">', inline_css, html)
html = html.replace('<meta name="viewport" content="width=device-width, initial-scale=1">', '<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">')
html = re.sub(r'<link rel="icon"[^>]*>', '', html)
html = html.replace('href="/#', 'href="#').replace('href="/confidentialite"', 'href="#demo"').replace('href="/"', 'href="#"')
extra = '''<style>
:root{color-scheme:light;box-sizing:border-box;padding-top:env(safe-area-inset-top,0px);padding-bottom:env(safe-area-inset-bottom,0px)}
html{scroll-padding-top:calc(5rem + env(safe-area-inset-top,0px))}
body{background:#f5f7fa;overflow-x:hidden}
.site-header{top:env(safe-area-inset-top,0px)!important}
</style>
<script>
document.addEventListener('submit',function(e){e.preventDefault();e.stopImmediatePropagation();var s=e.target.querySelector('.status');if(s){s.className='status is-ok';s.textContent="Aperçu : le formulaire n'envoie rien ici. Sur le site en ligne, la demande part vers votre boîte email.";}},true);
</script>
</head>'''
html = html.replace('</head>', extra, 1)
assert '/_astro' not in html
open(out, 'w').write(html)
