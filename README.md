# Social Cars Project Website

* This is the content branch for [https://socialcars.github.io](https://socialcars.github.io).
* The website is deployed by [CirceCI](https://circleci.com) with [Hugo](https://gohugo.io).
* Changes pushed into this branch will cause CircleCI to deploy the changed website in the `master` branch.

* **Important:** Only push changes to THIS branch. Changes pushed to the `master` branch will be overwritten when CircleCI re-deploys the website.

## Usage & Tools

* [Hugo](https://gohugo.io/)
* [Pandoc-Citeproc](http://pandoc.org/)
* [SVGO](https://github.com/svg/svgo)

### Bibliography

The bibliography is located at ```data/references.bib``` as an UTF-8 encoded [Bibtex](http://www.bibtex.org/) file.
You will have to manually convert it into [BibJSON](http://okfnlabs.org/bibjson/) after changing the Bibtex file with

```
pandoc-citeproc --bib2json static/references.bib > data/references.json
pandoc-citeproc --bib2json static/references.bib > static/references.json
```

#### Additional BibTeX Feature

* a key ```URL``` in a BibTex entry, pointing to a PDF file will create a download link on the publication list
* a key ```Note``` can reference a comment file, e.g. for the value named ```foo``` a file under ```content/publications/foo.md``` must exist with additional comments
