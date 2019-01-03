document.addEventListener('DOMContentLoaded', function () {
  let elems = document.querySelectorAll('.sidenav')
  let options = {
    draggable: true,
  }
  let instances = M.Sidenav.init(elems, options)
})
