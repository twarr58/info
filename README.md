# info

Přehled aplikací od [twarr58](https://github.com/twarr58).

## Web

Statický přehled je v `site/`. Pro místní spuštění použij `python -m http.server 8000 --directory site`.

Pro nasazení nastav v repozitáři **Settings → Pages → Source → GitHub Actions**. Workflow `pages` nasadí web na [GitHub Pages](https://twarr58.github.io/info/).

## Commity a pull requesty

Zprávy commitů a názvy pull requestů používají [Conventional Commits](https://www.conventionalcommits.org/). GitHub Actions kontroluje obojí u pull requestů a zprávy commitů také při pushi do `main`.

Příklady: `feat(web): přidat aplikaci`, `fix(web): opravit odkaz`, `docs: upřesnit popis`.

Volitelnou šablonu zpráv zapneš příkazem `git config commit.template .gitmessage`.
