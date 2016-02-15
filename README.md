# Basics of web dataviz

## Create and deploy a website

### [GitHub](https://github.com), the place to host your code 
- Create an account
- Create a repository
- Download the [desktop app](https://desktop.github.com) or use the [command line](http://git-scm.com)
- Add a README file
  > Install a nice text editor such as [Atom](https://atom.io),
  [Visual Studio Code](https://code.visualstudio.com/) or
  [Sublime Text](https://www.sublimetext.com/)
- Do your first commit and publish it!

### Deploy your code
- Create a branch named `gh-pages`
  > Tip: set `gh-pages` as default branch in your repository settings
- Create an index.html file with some content
- Observe it live on `your-github-name.github.io/repository-name`!

### Preview your code locally
- Install a webserver on your computer
  > Try [Fenix](http://fenixwebserver.com/) which is a very simple one
- Make it serve your repository's directory

## From scratch to a basic webpage
- Find a basic HTML page template such as [http://www.sitepoint.com/a-basic-html5-template/]
- Adapt it to your needs

### Styling
- Import a style framework in your project like [Bootstrap](http://getbootstrap.com/)
  > Tip: to avoid downloading it and add it to your repo,
  include it from a CDN (Content Delivery Network). Get the 
  code to be included from [https://www.bootstrapcdn.com/]
  
  > More fun: include Font Awesome to add some icons, and/or
  choose a theme from Bootswatch collection to avoid the
  default style
- Prepare a stylesheet for your specific styles
 ```
    <link rel="stylesheet" href="styles.css">
 ```
 
 ## Creating charts
 
 ### Online tools
 - [Chart Blocks](http://www.chartblocks.com/en/)
 - [Highcharts cloud](https://cloud.highcharts.com/)
 - [Infogr.am](http://infogr.am)
 
 Or, with a little integration work:
 - [Data Wrapper]
 > Tip: To integrate for free a Data Wrapper chart, download the
 .zip archive provided and include the files with an `<iframe>`
 
 
### JavaScript libraries
- [Highcharts](http://www.highcharts.com/)
```
  <script src="http://code.highcharts.com/highcharts.js"></script>
```
> Warning: many examples use another widely-used library: jQuery
  Include it with `<script src="//code.jquery.com/jquery-1.12.0.min.js"></script>`

- [NVD3](http://nvd3.org/)
```
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/nvd3/1.8.1/nv.d3.css">

  <script src="https://cdnjs.cloudflare.com/ajax/libs/d3/3.5.15/d3.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/nvd3/1.8.1/nv.d3.min.js"></script>
```

- [D3](https://d3js.org/)
  
  D3 usage is out the scope of this quick course, but you can
  easily reuse from the [gallery](https://github.com/mbostock/d3/wiki/Gallery)
  or [bl.ocks.org](http://bl.ocks.org/), [Mike's ones](http://bl.ocks.org/mbostock)
