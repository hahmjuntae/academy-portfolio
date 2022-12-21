// main.js
/* --------------------------------------------------------Variable */
/* || Static variable */
const body = document.querySelector('body');
const container = document.querySelector('#container ');
const main_section = document.querySelectorAll('#container section');
const cursor = document.querySelector('#cursor');
const rolling_banner = document.querySelector('#rolling_banner');
const scroll_icon = document.querySelector('.scroll_icon');
const circle_nav_wrap = document.querySelector('.circle_nav_wrap');
const circle_nav_wrap_span = document.querySelectorAll('.circle_nav_wrap span');

/* || Main nav variable */
const main_nav = document.querySelector('#main_nav');
const main_nav_link = document.querySelectorAll('.main_nav_wrap ul li span');

/* || Header variable */
const header = document.querySelector('#header');
const header_menu = document.querySelector('.header_menu');
const header_menu_btn = document.querySelector('.header_menu_btn');
const header_portfolio = document.querySelector('.header_portfolio');

/* || intro variable */
const canvas_wrap = document.querySelector('canvas');
const loading = document.querySelector('.loading');
const loading_bg1 = document.querySelector('.loading_bg1');
const loading_bg2 = document.querySelector('.loading_bg2');
const loading_title = document.querySelector('.loading_title_heading');
const loading_percent = document.querySelector('.loading_percent');
const loading_process_left_wrap = document.querySelector('.loading_process_left_bar');
const loading_process_right_wrap = document.querySelector('.loading_process_right_bar');
const loading_process_left_bar = document.querySelector('.loading_process_left_bar .bar');
const loading_process_right_bar = document.querySelector('.loading_process_right_bar .bar');
const intro_text_hide = document.querySelectorAll('.intro_text_hide span');
const intro_text_blink = document.querySelectorAll('#intro .intro_text span i');
const intro_scroll_wrap = document.querySelector('.scroll_wrap');
const intro_link_wrap = document.querySelector('.intro_text .link_wrap');
const intro_link_wrap_profile = document.querySelector('.link_wrap_profile');
const intro_link_wrap_project = document.querySelector('.link_wrap_project');
const intro_link_bg = document.querySelector('.intro_text .link_wrap_bg');

/* || Profile variable */
const profile_container = document.querySelector('.profile_container');
const profile_desc_about_link = document.querySelectorAll('.profile_desc_about_text a');

/* || Index variable */
const index_container = document.querySelector('.index_container');
const index_list = document.querySelectorAll('.index_container .list');
const index_list_span = document.querySelectorAll('.index_container .list');

/* || Project variable */
const project_section = document.querySelector('.project_section');
const project_section_wrap = document.querySelectorAll('.project_section > div');
const project_link = document.querySelectorAll('.project_container_desc a');
const project_video_mockup = document.querySelectorAll('video');
const project_messenger = document.querySelector('.messenger');
const project_familPark = document.querySelector('.mockup_06_iPhone > .screen');
const project_01_check_result = document.querySelector('.project_01_check_result');
const project_01_check_result_btn = document.querySelector('a.check_result');
const project_01_check_result_close = document.querySelector('.result_close');
const project_banner_wrap = document.querySelector('.project_banner_wrap');
let project_banner_div = '';
let arrow_prev = '';
let arrow_next = '';
let div_num = '';
let div_name = '';
let div_category = '';
for (let i = 1; i <= 6; i++) {
  changeProjectName(i);
  project_banner_div += `<div class="project_banner b${i}">
  <span class="project_banner_arrow_prev">${arrow_prev}</span>
  <span class="project_banner_num">${div_num}</span>
  <span class="project_banner_arrow_next">${arrow_next}</span>
  <span class="project_banner_name">${div_name}</span>
  <span class="project_banner_category">${div_category}</span>
  </div>`;
}
project_banner_wrap.innerHTML = project_banner_div;
const project_banner = document.querySelectorAll('.project_banner');
const project_banner_num = document.querySelector('.project_banner_num');
const project_banner_name = document.querySelector('.project_banner_name');
const project_banner_category = document.querySelector('.project_banner_category');
const project_prev_btn = document.querySelectorAll('.project_banner_arrow_prev');
const project_next_btn = document.querySelectorAll('.project_banner_arrow_next');
/* ---------------------------------------------------------------- */

/* || Contact variable */
const contact_container = document.querySelector('.contact_container');
const contact_link = document.querySelectorAll('.contact_link a');
const contact_footer = document.querySelector('.contact_footer');

// || Body Height
let winWidth = window.innerWidth;
let winHeight = window.innerHeight;
let containerHeight = winHeight * main_section.length;
window.addEventListener('resize', () => {
  winHeight = window.innerHeight;
  winWidth = window.innerWidth;
  main_section.forEach(item => {
    item.style.height = `${winHeight}px`;
    body.style.height = `${containerHeight}px`;
  });
});

/* || Top Button */
header_portfolio.addEventListener('click', () => {
  page_num = 0;
  pageEvent(page_num);
  window.scroll({
    top: 0,
    left: 0,
    behavior: 'smooth',
  });
});

/* || Intro */
window.addEventListener('load', () => {
  // move to top
  window.scroll({
    top: 0,
    left: 0,
    behavior: 'smooth',
  });
  // loading
  let width = 0;
  let perc = setInterval(intro, 15);
  function intro() {
    setTimeout(() => {
      if (width >= 100) {
        clearInterval(perc);
        setTimeout(() => {
          loading_title.style.transform = 'translate(0,-100%)';
          loading_percent.style.opacity = 0;
        }, 500);
        setTimeout(() => {
          loading_title.style.opacity = 0;
          loading_process_left_wrap.style.width = '100vw';
          loading_process_right_wrap.style.width = '100vw';
        }, 1200);
        setTimeout(() => {
          loading_bg1.style.transform = 'translate(0,-100%)';
          loading_bg2.style.transform = 'translate(0,100%)';
        }, 1600);
        setTimeout(() => {
          loading.style.transform = 'translate(0,-300%)';
          loading.style.opacity = 0;
        }, 1900);
        setTimeout(() => {
          if (window.innerWidth <= 1024) {
            canvas_wrap.style.transform = 'translate(70%,-60%)';
          } else {
            canvas_wrap.style.transform = 'translate(50%,-50%)';
          }
          container.style.height = '';
          circle_nav_wrap_span.forEach(item => item.classList.remove('active'));
          circle_nav_wrap_span[0].classList.add('active');
          circle_nav_wrap.style.opacity = 1;
          circle_nav_wrap.style.transform = `rotate(-80deg)`;
          intro_link_wrap.style.transform = 'scaleY(1)';
        }, 2300);
        setTimeout(() => {
          header.style.transform = 'translate(0,0)';
          intro_text_hide[0].style.transform = 'translate(0,0)';
          setTimeout(() => {
            intro_text_hide[1].style.transform = 'translate(0,0)';
            setTimeout(() => {
              intro_text_hide[2].style.transform = 'translate(0,0)';
              setTimeout(() => {
                intro_text_hide[3].style.transform = 'translate(0,0)';
                setTimeout(() => {
                  intro_text_hide[4].style.transform = 'translate(0,0)';
                  setTimeout(() => {
                    intro_text_hide[5].style.transform = 'translate(0,0)';
                  }, 150);
                }, 150);
              }, 300);
            }, 300);
          }, 300);
        }, 2600);
        setTimeout(() => {
          intro_scroll_wrap.style.opacity = 1;
        }, 4300);
      } else {
        width++;
        container.style.height = '100vh';
        loading_percent.innerHTML = `${width}`;
        loading_process_left_bar.style.left = `${-width}%`;
        loading_process_right_bar.style.left = `${width}%`;
      }
    }, 0);
  }
  // hide canvas
  canvas_wrap.style.transform = 'translate(300%,-50%)';
});
// intro text color blink animation
let blinkAni = setInterval(textBlink, 1500);
let blinkCount = 1;
function textBlink() {
  if (blinkCount >= intro_text_blink.length) {
    intro_text_blink[blinkCount - 1].style.color = 'var(--main-color-black)';
    blinkCount = 0;
  }
  if (blinkCount > 0) intro_text_blink[blinkCount - 1].style.color = 'var(--main-color-black)';
  intro_text_blink[blinkCount].style.color = 'var(--point-color-orange)';
  blinkCount++;
}
// intro link box animation
intro_link_wrap_profile.addEventListener('mouseover', () => {
  intro_link_bg.style.opacity = 1;
  intro_link_bg.style.left = 0;
  intro_link_bg.style.transform = 'scaleX(1)';
});
intro_link_wrap_profile.addEventListener('mouseleave', () => {
  intro_link_bg.style.transformOrigin = 'bottom right';
  intro_link_bg.style.transform = 'scaleX(0)';
});
intro_link_wrap_project.addEventListener('mouseover', () => {
  intro_link_bg.style.opacity = 1;
  intro_link_bg.style.left = 'calc(50%)';
  intro_link_bg.style.transformOrigin = 'bottom left';
  intro_link_bg.style.transform = 'scaleX(1)';
});
intro_link_wrap_project.addEventListener('mouseleave', () => {
  intro_link_bg.style.transformOrigin = 'bottom left';
  intro_link_bg.style.transform = 'scaleX(0)';
});
// intro link box event
intro_link_wrap_project.addEventListener('click', () => {
  page_num = 2;
  window.scroll({
    top: winHeight * 2,
    left: 0,
    behavior: 'smooth',
  });
  pageEvent(page_num);
});

/* || Index */
let section_num = 0;
for (let i = 1; i < index_list_span.length; i++) {
  // hover event
  index_list_span[i].addEventListener('mouseover', () => {
    if (page_num === 2) {
      for (let i = 1; i < index_list_span.length; i++) {
        index_list[i].classList.add('deactive');
      }
      canvasFunc(500, 500, 25, 50, 1, colorCodes[i + 1]);
      index_list[i].classList.remove('deactive');
    }
  });
  index_list_span[i].addEventListener('mouseleave', () => {
    canvasFunc(500, 500, 25, 50, 1, colorCodes[1]);
    index_list.forEach(item => item.classList.remove('deactive'));
  });
  // page routing
  index_list_span[i].addEventListener('click', () => {
    section_num = i - 1;
    page_num = 3;
    pageEvent(page_num);
    changeProjectName();
    moveProjectBanner();
    setTimeout(() => {
      canvasFunc(500, 500, 55, -5, 1, colorCodes[section_num + 2]);
    }, 500);
    project_section.style.left = `${winWidth * -section_num}px`;
    window.scroll({
      top: winHeight * page_num,
      left: 0,
      behavior: 'smooth',
    });
  });
}

/* || Project */
// init
function initProjectBanner() {
  for (let i = 0; i < project_banner.length; i++) {
    project_banner[i].style.transform = `rotateY(${i * 45}deg) translateZ(100rem)`;
  }
  project_banner.forEach(item => item.classList.remove('focus'));
}
function moveProjectBanner() {
  for (let i = 0; i < project_banner.length; i++) {
    project_banner[i].style.transform = `rotateY(${
      i * 45 - section_num * 45
    }deg) translateZ(100rem)`;
    project_banner.forEach(item => item.classList.remove('focus'));
    project_banner[section_num].classList.add('focus');
    project_section.style.left = `${winWidth * -section_num}px`;
  }
  if (section_num >= project_section_wrap.length - 1) {
    scroll_icon.style.opacity = 1;
  } else {
    scroll_icon.style.opacity = 0;
  }
}
function changeProjectName(section_num) {
  switch (section_num) {
    case 1: // 삼성전기
      arrow_prev = '&nbsp;&nbsp;';
      arrow_next = '&gt;';
      div_category = 'Web Accessibility & Standard';
      div_num = '01';
      div_name = 'SAMSUNG EM';
      break;
    case 2: // CJ ONE
      arrow_prev = '&lt;';
      arrow_next = '&gt;';
      div_category = 'Responsive Web';
      div_num = '02';
      div_name = 'CJ ONE';
      break;
    case 3: // 달콤커피
      arrow_prev = '&lt;';
      arrow_next = '&gt;';
      div_category = 'Responsive Web';
      div_num = '03';
      div_name = 'Dalkomm Coffee';
      break;
    case 4: // 메신저
      arrow_prev = '&lt;';
      arrow_next = '&gt;';
      div_category = 'React Project';
      div_num = '04';
      div_name = 'Messenger';
      break;
    case 5: // 영화 앱
      arrow_prev = '&lt;';
      arrow_next = '&gt;';
      div_category = 'React Project';
      div_num = '05';
      div_name = `What's Movie`;
      break;
    case 6: // 패밀리 파크
      arrow_prev = '&lt;';
      arrow_next = '&nbsp;&nbsp;';
      div_category = 'React Project';
      div_num = '06';
      div_name = 'Family Park';
      break;
    default:
      break;
  }
}
window.addEventListener('load', () => {
  initProjectBanner();
});
window.addEventListener('resize', () => {
  initProjectBanner();
  moveProjectBanner();
});
// prev button
project_prev_btn.forEach(item =>
  item.addEventListener('click', () => {
    section_num--;
    if (section_num < 0) {
      section_num = 0;
    } else {
      canvasFunc(500, 500, 55, 0, 1, colorCodes[section_num + 2]);
      project_section.style.left = `${winWidth * -section_num}px`;
      moveProjectBanner();
      changeProjectName();
    }
  }),
);
// next button
project_next_btn.forEach(item =>
  item.addEventListener('click', () => {
    section_num++;
    if (section_num >= project_section_wrap.length) {
      section_num = project_section_wrap.length - 1;
    } else {
      canvasFunc(500, 500, 55, 0, 1, colorCodes[section_num + 2]);
      project_section.style.left = `${winWidth * -section_num}px`;
      moveProjectBanner();
      changeProjectName();
    }
  }),
);

// Messenger 팝업창
project_messenger.addEventListener('click', e => {
  e.preventDefault();
  const url = 'https://juntaehahm.github.io/project-messenger/';
  const name = 'Messenger';
  const option =
    'width = 500, height = 1000, top = 100, left = 200, location = no, toolbars = no, status = no, scrollbars = no';
  window.open(url, name, option);
});

// 패밀리파크 이미지 새로고침
let familyParkImage = setInterval(refreshImg, 1500);
let imgCount = 1;
function refreshImg() {
  if (imgCount >= 14) {
    imgCount = 1;
    project_familPark.style.backgroundImage = `url(assets/capture/Family_Park_${imgCount}.png)`;
  }
  if (imgCount > 0) {
    project_familPark.style.backgroundImage = `url(assets/capture/Family_Park_${imgCount}.png)`;
  }
  imgCount++;
}

/* || Main Nav */
let isMenuOpened = false;
header_menu.addEventListener('click', () => {
  isMenuOpened = !isMenuOpened;
  if (isMenuOpened) {
    // open
    header.classList.add('active');
    header_menu_btn.innerHTML = 'Close';
    header_portfolio.style.display = 'none';
    main_nav.style.opacity = 1;
    main_nav.style.zIndex = '999';
    cursor.style.zIndex = '9999';
    setTimeout(() => {
      main_nav_link.forEach(item => (item.style.transform = 'translate(0,0)'));
    }, 300);
  } else {
    // close
    header_menu_btn.innerHTML = 'Menu';
    cursor.style.zIndex = '99';
    main_nav_link.forEach(item => (item.style.transform = 'translate(0,-150%)'));
    setTimeout(() => {
      header.classList.remove('active');
      main_nav.style.opacity = 0;
      header_portfolio.style.display = 'block';
    }, 300);
    setTimeout(() => {
      main_nav.style.zIndex = '-9999';
      main_nav_link.forEach(item => (item.style.transform = 'translate(0,150%)'));
    }, 600);
  }
});
for (let i = 0; i < main_nav_link.length; i++) {
  // hover event
  main_nav_link[i].addEventListener('mouseover', () => {
    main_nav_link.forEach(item => item.classList.add('deactive'));
    main_nav_link[i].classList.remove('deactive');
    main_nav_link[i].classList.add('active');
  });
  main_nav_link[i].addEventListener('mouseleave', () => {
    main_nav_link.forEach(item => item.classList.remove('deactive'));
    main_nav_link.forEach(item => item.classList.remove('active'));
  });
  // page routing
  main_nav_link[i].addEventListener('click', () => {
    isMenuOpened = !isMenuOpened;
    page_num = i + 1;
    window.scroll({
      top: winHeight * (i + 1),
      left: 0,
    });
    pageEvent(page_num);
    header.classList.remove('active');
    header_menu_btn.innerHTML = 'Menu';
    main_nav.style.opacity = 0;
    cursor.style.zIndex = '99';
    setTimeout(() => {
      main_nav.style.zIndex = '-9999';
    }, 300);
  });
}
/* ---------------------------------------------------------------- */

/* || Page Evnet */
function activeRollingBanner() {
  rolling_banner.classList.add('active');
}
function deActiveRollingBanner() {
  rolling_banner.classList.remove('active');
}
function circleNavAction(idx, deg) {
  circle_nav_wrap_span.forEach(item => item.classList.remove('active'));
  circle_nav_wrap_span[idx].classList.add('active');
  circle_nav_wrap.style.transform = `rotate(${deg}deg)`;
}
function deactiveProfile() {
  profile_container.classList.remove('active');
}
function deactiveIndex() {
  index_container.classList.remove('active');
}
function deactiveProject() {
  project_banner.forEach(item => item.classList.remove('active'));
  project_banner.forEach(item => item.classList.remove('focus'));
  project_section.classList.remove('active');
  scroll_icon.style.opacity = 0;
}
function deactiveContact() {
  contact_container.classList.remove('active');
  contact_footer.classList.remove('active');
}
function pageEvent(page_num) {
  switch (page_num) {
    case 0: // intro
      canvasFunc(500, 500, 20, 25, 1, colorCodes[1]);
      deActiveRollingBanner();
      circleNavAction(0, -80);
      deactiveProfile();
      deactiveIndex();
      deactiveProject();
      deactiveContact();
      break;
    case 1: // profile
      profile_container.classList.add('active');
      canvasFunc(500, 500, 0, 50, 0, colorCodes[0]);
      activeRollingBanner();
      setTimeout(() => {
        canvasFunc(500, 500, 0, 50, 0, colorCodes[0]);
      }, 800);
      circleNavAction(1, -40);
      deactiveIndex();
      deactiveProject();
      deactiveContact();
      break;
    case 2: //index
      index_container.classList.add('active');
      canvasFunc(500, 500, 25, 50, 1, colorCodes[1]);
      circleNavAction(2, 0);
      deactiveProfile();
      deactiveProject();
      deactiveContact();
      break;
    case 3: // project
      project_section.classList.add('active');
      project_banner.forEach(item => item.classList.add('active'));
      canvasFunc(500, 500, 55, -5, 1, colorCodes[section_num + 2]);
      setTimeout(() => {
        project_banner[section_num].classList.add('focus');
        canvasFunc(500, 500, 55, -5, 1, colorCodes[section_num + 2]);
      }, 500);
      circleNavAction(3, 40);
      deactiveProfile();
      deactiveIndex();
      deactiveContact();
      if (section_num >= project_section_wrap.length - 1) scroll_icon.style.opacity = 1;
      break;
    case 4: // contact
      contact_container.classList.add('active');
      contact_footer.classList.add('active');
      canvasFunc(500, 500, 20, 25, 1, colorCodes[2]);
      circleNavAction(4, 80);
      deactiveIndex();
      deactiveProfile();
      deactiveProject();
      break;
    default: // default
      deActiveRollingBanner();
      deactiveProject();
      break;
  }
}

/* || Scroll Event */
let page_num = 0;
let isScrolling;
window.addEventListener(
  'wheel',
  e => {
    e.preventDefault();
    if (e.wheelDelta < 0) {
      // wheel down
      if (page_num >= 4) return;
      if (container.style.height === '' && isMenuOpened === false) {
        page_num++;
        pageEvent(page_num);
      }
    } else if (e.wheelDelta > 0) {
      // wheel up
      if (page_num === 0) return;
      if (container.style.height === '' && isMenuOpened === false) {
        page_num--;
        pageEvent(page_num);
      }
    }
    window.scrollTo({
      top: winHeight * page_num,
      left: 0,
      behavior: 'smooth',
    });
  },
  { passive: false },
);

/* || Circle Nav */
circle_nav_wrap.addEventListener('mouseover', () => {
  circle_nav_wrap.classList.add('active');
});
circle_nav_wrap.addEventListener('mouseout', () => {
  mainNavWrapMouseOut();
});
for (let i = 0; i < circle_nav_wrap_span.length; i++) {
  let winHeight = window.innerHeight;
  window.addEventListener('resize', () => {
    winHeight = window.innerHeight;
  });
  // rotate animation
  circle_nav_wrap_span[i].addEventListener('mouseover', e => {
    circle_nav_wrap_span.forEach(item => {
      item.classList.remove('active');
    });
    e.currentTarget.classList.add('active');
    if (circle_nav_wrap_span[i].classList.contains('active') === true) {
      circle_nav_wrap.style.transform = `rotate(${-80 + i * 40}deg)`;
    }
  });
  // page routing
  circle_nav_wrap_span[i].addEventListener('click', e => {
    page_num = i;
    pageEvent(page_num);
    circle_nav_wrap_span.forEach(item => {
      item.classList.remove('active');
    });
    e.currentTarget.classList.add('active');
    window.scroll({
      top: winHeight * i,
      left: 0,
      behavior: 'smooth',
    });
  });
}
// active current page
function mainNavWrapMouseOut() {
  circle_nav_wrap.classList.remove('active');
  setTimeout(() => {
    if (circle_nav_wrap.classList.contains('active') === false) {
      circle_nav_wrap_span.forEach(item => {
        item.classList.remove('active');
      });
      circle_nav_wrap_span[page_num].classList.add('active');
      circle_nav_wrap.style.transform = `rotate(${-80 + page_num * 40}deg)`;
    }
  }, 1000);
}

/* || Cursor Moving */
function cursorMoving(event) {
  document.addEventListener(event, e => {
    cursor.style.left = `${e.pageX}px`;
    cursor.style.top = `${e.pageY}px`;
  });
}
cursorMoving('mousemove');
cursorMoving('scroll');
cursorMoving('wheel');

/* || Cursor Event */
function cursorHoveredMore(item) {
  item.addEventListener('mouseover', () => {
    cursor.classList.add('hovered-more');
  });
  item.addEventListener('mouseout', () => {
    cursor.classList.remove('hovered-more');
  });
}
function cursorHoveredBlur(item) {
  item.addEventListener('mouseover', () => {
    cursor.classList.add('hovered-blur');
  });
  item.addEventListener('mouseout', () => {
    cursor.classList.remove('hovered-blur');
  });
}
function cursorHoveredScale(item) {
  item.addEventListener('mouseover', () => {
    cursor.classList.add('hovered-scale');
  });
  item.addEventListener('mouseout', () => {
    cursor.classList.remove('hovered-scale');
  });
}
cursorHoveredScale(header_menu);
cursorHoveredScale(header_portfolio);
cursorHoveredMore(intro_link_wrap_profile);
cursorHoveredMore(intro_link_wrap_project);
circle_nav_wrap_span.forEach(item => cursorHoveredBlur(item));
main_nav_link.forEach(item => cursorHoveredBlur(item));
profile_desc_about_link.forEach(item => cursorHoveredScale(item));
index_list_span.forEach(item => cursorHoveredBlur(item));
project_link.forEach(item => cursorHoveredBlur(item));
contact_link.forEach(item => cursorHoveredBlur(item));
for (let i = 0; i < project_next_btn.length - 1; i++) {
  cursorHoveredBlur(project_next_btn[i]);
}
for (let i = 1; i < project_next_btn.length; i++) {
  cursorHoveredBlur(project_prev_btn[i]);
}

/* || Draw Canvas */
const colorCodes = [
  '238,236,229', // 투명
  '48,62,79', // 기본
  '0,0,0', // 삼성전기
  '46,125,50', // CJ ONE
  '27,0,0', // 달콤커피
  '255,107,26', // 카카오톡
  '213,0,0', // 넷플릭스
  '48,62,79', // 패밀리파크
];
function canvasFunc(canvas_width, canvas_height, right, top, opacity, colorCode) {
  let animateHeader = true;

  initHeader();
  initAnimation();

  function initHeader() {
    width = canvas_width;
    height = canvas_height;
    target = { x: width / 2, y: height / 2 };
    canvas = document.querySelector('canvas');
    canvas.style.opacity = opacity;
    canvas.style.right = `${right}vw`;
    canvas.style.top = `${top}vh`;
    canvas.width = width;
    canvas.height = height;
    ctx = canvas.getContext('2d');
    points = [];
    for (let x = 0; x < width; x = x + width / 6) {
      for (let y = 0; y < height; y = y + height / 6) {
        let px = x + (Math.random() * width) / 6;
        let py = y + (Math.random() * height) / 6;
        let p = { x: px, originX: px, y: py, originY: py };
        points.push(p);
      }
    }
    for (let i = 0; i < points.length; i++) {
      let closest = [];
      let p1 = points[i];
      for (let j = 0; j < points.length; j++) {
        let p2 = points[j];
        if (!(p1 == p2)) {
          let placed = false;
          for (let k = 0; k < 5; k++) {
            if (!placed) {
              if (closest[k] == undefined) {
                closest[k] = p2;
                placed = true;
              }
            }
          }
          for (let k = 0; k < 5; k++) {
            if (!placed) {
              if (getDistance(p1, p2) < getDistance(p1, closest[k])) {
                closest[k] = p2;
                placed = true;
              }
            }
          }
        }
      }
      p1.closest = closest;
    }
    for (let i in points) {
      let c = new Circle(points[i], 2 + Math.random() * 2, 'rgba(255,255,255,0.3)');
      points[i].circle = c;
    }
  }
  function initAnimation() {
    animate();
    for (let i in points) {
      shiftPoint(points[i]);
    }
  }
  function animate() {
    if (animateHeader) {
      ctx.clearRect(0, 0, width, height);
      for (let i in points) {
        if (Math.abs(getDistance(target, points[i])) < 4000) {
          points[i].active = 0.3;
          points[i].circle.active = 0.6;
        } else if (Math.abs(getDistance(target, points[i])) < 20000) {
          points[i].active = 0.1;
          points[i].circle.active = 0.3;
        } else if (Math.abs(getDistance(target, points[i])) < 40000) {
          points[i].active = 0.02;
          points[i].circle.active = 0.1;
        } else {
          points[i].active = 0;
          points[i].circle.active = 0;
        }
        drawLines(points[i]);
        points[i].circle.draw();
      }
    }
    requestAnimationFrame(animate);
  }
  function shiftPoint(p) {
    TweenLite.to(p, 1 + 1 * Math.random(), {
      x: p.originX - 50 + Math.random() * 100,
      y: p.originY - 50 + Math.random() * 100,
      ease: Circ.easeInOut,
      onComplete: function () {
        shiftPoint(p);
      },
    });
  }
  function drawLines(p) {
    if (!p.active) return;
    for (let i in p.closest) {
      ctx.beginPath();
      ctx.moveTo(p.x, p.y);
      ctx.lineTo(p.closest[i].x, p.closest[i].y);
      ctx.strokeStyle = `rgba(${colorCode},` + p.active + ')';
      ctx.stroke();
    }
  }
  function Circle(pos, rad, color) {
    let _this = this;
    (function () {
      _this.pos = pos || null;
      _this.radius = rad || null;
      _this.color = color || null;
    })();
    this.draw = function () {
      if (!_this.active) return;
      ctx.beginPath();
      ctx.arc(_this.pos.x, _this.pos.y, _this.radius, 0, 2 * Math.PI, false);
      ctx.fillStyle = `rgba(${colorCode},` + _this.active + ')';
      ctx.fill();
    };
  }
  function getDistance(p1, p2) {
    return Math.pow(p1.x - p2.x, 2) + Math.pow(p1.y - p2.y, 2);
  }
}
canvasFunc(500, 500, 20, 25, 1, colorCodes[1]);
