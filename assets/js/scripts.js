var isNavOpen = false;

function toggleNav() {
  var nav = document.getElementsByTagName('NAV')[0];
  var txtDiv = document.getElementById('nav-format');
  var clsBtn = document.getElementById('close');
  var logo = document.getElementsByClassName('logo')[1];

    if (isNavOpen) {
      nav.style.width = '0';
      txtDiv.style.display = 'none';
      clsBtn.style.display = 'none';
      logo.style.display = 'none';
    } else {
      nav.style.width = '100vw';
      txtDiv.style.display = 'flex';
      clsBtn.style.display = 'block';
      logo.style.display = 'block';
    }

    isNavOpen = !isNavOpen;

}

function expand(element) {
  // toggles expanded class back and forth

  // find out which size object
  var classs = element.className
  console.log(classs);

  if (classs.length == 0 || (classs.length > 10 && classs.charAt(9) == 's')) {
    console.log('square');
    console.log(classs.length > 10);
    console.log(classs.charAt(9) == 's');
    element.classList.toggle("expanded-square");
    return;
  }

  if (classs.charAt(0) == 'd') {
    console.log('is desktop');
    element.classList.toggle("expanded-desktop");
  }
  else {
    console.log('is mobile');
    element.classList.toggle("expanded-mobile");
  }
}
