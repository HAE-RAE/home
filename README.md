# HAE-RAE — website

Plain static HTML. No Ruby, no Jekyll, no build step. Edit a file, push, done.

```
index.html      Home (English)
research.html   Publications (English)
team.html       Researchers (English)
apply.html      아래아 신입 학회원 모집 + 지원서 (Korean)
404.html
assets/
  style.css     one shared stylesheet — change the palette here
  logo.png      the mark (glow-on-black artwork; CSS puts it on a dark rounded tile)
  favicon.png
  gson.jpg  hw_lee.jpg  ds_choi.jpg
SETUP.md        how to wire the application form to a Google Form
```

## Before launch

1. **Connect the form** — follow `SETUP.md` (~15 min). Until then the apply page
   shows an orange operator banner and refuses to submit.
2. **Fill the blanks** — search the project for `todo`. Every orange dashed
   underline is a placeholder: deadline, interview dates, cohort size,
   online/offline, fee, contact email.
3. **Delete the maintainer boxes** — search for `class="setup"` in
   `research.html` and `team.html` and remove those blocks.
4. **Check the two venue labels** flagged in `research.html`, and the Korean
   names flagged in `team.html`.

## Deploying to GitHub Pages

Replace the contents of the `HAE-RAE/home` repo with these files (the old repo is a
fork of the SOSD benchmark site — `benchmark_results/`, `indexes.db`, `python/`,
`scripts/`, `_data/`, `Gemfile*` and `_config.yml` are all leftovers and can go).

Then **Settings → Pages → Source: `main` / `/root`**.

## Custom domain

1. Create a file named `CNAME` at the repo root containing only your domain:
   ```
   haerae.ai
   ```
2. At your domain registrar, add these DNS records:

   | Type | Name | Value |
   |---|---|---|
   | A | @ | 185.199.108.153 |
   | A | @ | 185.199.109.153 |
   | A | @ | 185.199.110.153 |
   | A | @ | 185.199.111.153 |
   | CNAME | www | hae-rae.github.io |

3. **Settings → Pages → Custom domain**, enter the domain, then tick
   **Enforce HTTPS** once the certificate is issued (can take up to an hour).

Send me the domain and I'll fill in the `CNAME` file and the canonical/OG URLs.

## Notes

- All links between pages are relative, so the site works at a subpath
  (`user.github.io/home/`) and at a bare domain without changes.
  `404.html` uses absolute paths, which is what GitHub Pages needs — it only
  works correctly at a domain root.
- The palette lives in the `:root` block at the top of `style.css`.
