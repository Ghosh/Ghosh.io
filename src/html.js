// src/html.js

import React from 'react'
import PropTypes from 'prop-types'

export default class HTML extends React.Component {
  render () {
    return (
      <html lang="en" {...this.props.htmlAttributes}>
        <head>
          <meta charSet="utf-8" />
          <meta httpEquiv="x-ua-compatible" content="ie=edge" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, shrink-to-fit=no"
          />
          {this.props.headComponents}
        </head>
        <body {...this.props.bodyAttributes} className="light">
          {/* <script
            dangerouslySetInnerHTML={{
              __html: `
              (function() {
                window.__onThemeChange = function() {};
                window.__onSkinChange = function() {};
                window.__setPreferredTheme = function(newTheme) {
                  setTheme(newTheme);
                  try {
                    localStorage.setItem('theme', newTheme);
                  } catch (err) {}
                }
                function setTheme(newTheme) {
                  window.__theme = newTheme;
                  preferredTheme = newTheme;
                  document.body.className = newTheme;
                  window.__onThemeChange(newTheme);
                  window.__onSkinChange(newTheme);
                }

                var preferredTheme;
                try {
                  preferredTheme = localStorage.getItem('theme');
                } catch (err) { }
                var darkQuery = window.matchMedia('(prefers-color-scheme: dark)');
                darkQuery.addListener(function(e) {
                  window.__setPreferredTheme(e.matches ? 'dark' : 'light')
                });
                setTheme(preferredTheme || (darkQuery.matches ? 'dark' : 'light'));
              })();
            `
            }}
          /> */}
          <script
            dangerouslySetInnerHTML={{
              __html: `
              !function(){function e(e){window.__theme=e,n=e,document.body.className=e,window.__onThemeChange(e),window.__onSkinChange(e)}var n;window.__onThemeChange=function(){},window.__onSkinChange=function(){},window.__setPreferredTheme=function(n){e(n);try{localStorage.setItem("theme",n)}catch(e){}};try{n=localStorage.getItem("theme")}catch(e){}var t=window.matchMedia("(prefers-color-scheme: dark)");t.addListener(function(e){window.__setPreferredTheme(e.matches?"dark":"light")}),e(n||(t.matches?"dark":"light"))}();
            `
            }}
          />
          {this.props.preBodyComponents}
          <div
            key={`body`}
            id="___gatsby"
            dangerouslySetInnerHTML={{ __html: this.props.body }}
          />
          {this.props.postBodyComponents}
        </body>
      </html>
    )
  }
}

HTML.propTypes = {
  htmlAttributes: PropTypes.object,
  headComponents: PropTypes.array,
  bodyAttributes: PropTypes.object,
  preBodyComponents: PropTypes.array,
  body: PropTypes.string,
  postBodyComponents: PropTypes.array
}
