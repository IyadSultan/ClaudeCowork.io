# Claude Cowork at KHCC

A 30-minute hands-on tutorial site on Claude Cowork for King Hussein Cancer Center staff.
Same structure as AIBedside.io (minimal Jekyll + Minima, one page per block, QR + clock chip),
reskinned in the KHCC palette (teal #237A9B, gold #E4B325, magenta #B6447D).

- `index.md`: hero + run of show
- `block-00` … `block-06`, `cheat-sheet.md`: one page per block (printable handout = cheat sheet)
- `_sass/cowork.scss`: all styles, token-based (`:root` custom properties)
- `assets/img/cowork/`: real Anthropic screenshots (sources in `research/images.md`)
- `assets/demo/cowork-practice.zip`: synthetic practice folder used in Block 2
- `research/cowork-facts.md`: sourced facts, checked 6 Oct 2026

## Local preview

```
bundle install
bundle exec jekyll serve
```

Open http://127.0.0.1:4000/ClaudeCowork.io/

## QR codes

`python3 -m pip install segno && python3 tools/make-lesson-qrs.py` after changing a permalink or `baseurl`.
