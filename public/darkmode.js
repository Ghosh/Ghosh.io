(function () {
  window.__onThemeChange = function () { }
  window.__onSkinChange = function () { }

  window.__setPreferredTheme = function (newTheme) {
    setTheme(newTheme)
    try {
      window.localStorage.setItem('theme', newTheme)
    } catch (err) { }
  }

  function setTheme (newTheme) {
    window.__theme = newTheme
    preferredTheme = newTheme
    document.body.className = newTheme
    window.__onThemeChange(newTheme)
    window.__onSkinChange(newTheme)
  }

  var preferredTheme
  try {
    preferredTheme = window.localStorage.getItem('theme')
  } catch (err) { }

  var darkQuery = window.matchMedia('(prefers-color-scheme: dark)')

  // Temp Hack - Spoofing matchMedia to always return light
  // Delete next 4 lines and uncomment the other 4 to allow
  // mdeia mathcing
  darkQuery.addListener(function (e) {
    window.__setPreferredTheme('light')
  })
  setTheme(preferredTheme || ('light'))

  // Uncomment the lines below to allow media Matching

  // darkQuery.addListener(function (e) {
  //   window.__setPreferredTheme(e.matches ? 'dark' : 'light')
  // })
  // setTheme(preferredTheme || (darkQuery.matches ? 'dark' : 'light'))
})()
