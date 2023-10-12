var grid_sessionStartTS = 0;
var grid_lesson_status = '';
var grid_reached_eof = 0;
var grid_eof_div = 0;
var grid_body = 0;
var grid_prevPageTop = 0;
var grid_pageTop, grid_pageBottom, grid_pageHeight, grid_eofTop;

var grid_visited = [
  0, 
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0
];
var gridTriggers = [];


function grid_checkChapters() {
  var eofTop;
  var elTop;
  var suspend;

  if( ! grid_body) {
    grid_body = $(window);
    grid_eof_div = $('.grid_eof');
  }
  //
  //
  grid_pageHeight = window.innerHeight;
  grid_pageTop = grid_body.scrollTop();
  grid_pageBottom = grid_pageTop + grid_pageHeight;
  grid_eofTop = grid_eof_div.offset().top;
  //
  //
  if(grid_pageTop < grid_prevPageTop) {
    $('.dropdown-item').removeClass('grid_active').attr('en', 1);
  }
  grid_prevPageTop = grid_pageTop;
  //
  //
  if(grid_eofTop <= grid_pageBottom) {
    if( ! grid_reached_eof) {
      if(grid_eof_div.is(':visible')) {
        console.log('LMS: cmi.core.lesson_location', 'completed');
        doLMSSetValue('cmi.core.lesson_status', 'completed');
        doLMSCommit('');
        grid_reached_eof = 1;
      }
    }
  }
  //
  //
  $('.grid_section').each((idx, obj) => {
    let o, n;
    let i;

    o = $(obj);
    if(o.is(':visible')) {
      elTop = o.offset().top;
        if(elTop <= grid_pageBottom) {
          n = parseInt(o.attr('grid-section'), 10);
          for(i = 1; i <= n; i++) {
            $('.menu' + grid_fXX(i)).removeClass('grid_disabled').removeClass('grid_active').attr('en', 1);
            if( ! grid_visited[n]) {
              suspend = doLMSGetValue('cmi.suspend_data');
              if(suspend.indexOf('{' + i + '}') < 0) {
                suspend += '{' + i + '}';
                console.log('LMS: cmi.suspend_data', suspend);
                doLMSSetValue('cmi.suspend_data', suspend);
                doLMSCommit('');
              }
              grid_visited[i] = 1;
            }
          }
          $('.menu' + grid_fXX(n)).addClass('grid_active').attr('en', 1);
        }
      }
  });
  //
  //
  L = gridTriggers.length;
  for(i = 0; i < L; i++) {
    elTop = gridTriggers[i].offset().top;
    if(elTop <= (grid_pageBottom + (window.innerHeight / 2))) {
      let target = gridTriggers[i].next();

      console.log('Showing', target.attr('id'));

      target.fadeTo(1000, 1.0);
    }
  }
}


function grid_fXX(v) {
  if(v < 10) return '0' + v;
  return '' + v;
}


function grid_fXXXX(v) {
  if(v < 10) return '000' + v;
  if(v < 100) return '00' + v;
  if(v < 1000) return '0' + v;
  return '' + v;
}


function grid_init() {
  var suspend;
  var lastVisited;

  grid_sessionStartTS = Date.now();
  //
  //
  doLMSInitialize('');
  //
  //
  $('[en]').each((idx, obj) => {
    var o;

    o = $(obj);
    o.click(
      function() {
        var en;

        en = $(this).attr('en');
        if(en == '1') {

          console.log($(this).attr('href'));

          grid_body.scrollTop($($(this).attr('href')).offset().top);
        }
      }
    );
  });
  //
  //
  $('.dropdown-item').removeClass('grid_active').addClass('grid_disabled').attr('en', '0');
  lastVisited = 0;
  suspend = doLMSGetValue('cmi.suspend_data');
  if(suspend.indexOf('{1}') >= 0) {
    $('#block0').show();
  }
  for(i = 0; i < 20; i++) {
    if(suspend.indexOf('{' + i + '}') >= 0) {
      grid_visited[i] = 1;
      lastVisited = i;
      $('.menu' + grid_fXX(i)).removeClass('grid_disabled').removeClass('grid_active').attr('en', 0);
      $('#block' + (i - 1)).show();
      $('#btn-next-' + (i - 1)).removeClass('blink_me');
    }
  }
  $('.menu' + grid_fXX(lastVisited)).addClass('grid_active').attr('en', 1);
  if(lastVisited > 0) {
    goto('block' + (lastVisited - 1));
  }
  //
  //
  if(lastVisited > 1) {
    if($('#SECAO_' + grid_fXX(lastVisited)).length) {
      grid_body.scrollTop($('#SECAO_' + grid_fXX(lastVisited)).offset().top, 2500);
    }
    if($('#menu' + lastVisited).length) {
      grid_body.scrollTop($('#menu' + lastVisited).offset().top, 2500);
    }
  }
  //
  //
  if(grid_lesson_status == '') {
    console.log('LMS: cmi.core.lession_status', 'incomplete');
    doLMSSetValue('cmi.core.lesson_status', 'incomplete');
    doLMSCommit('');
  }
  //
  //
  $('.grid-trigger').each((idx, obj) => {
    var o;
    var target;

    o = $(obj);
    gridTriggers.push(o);
    target = o.next();
    target.hide();
    console.warn('Adding Trigger to', o.next().attr('id'));
  });
}


function stopOtherVideos(urlExcept) {
  alert('Stop All Videos Except\n\n' + urlExcept);
}


setInterval(
  function() {
    grid_checkChapters();
    grid_setSessionTime();
  },
  500
);


function grid_setSessionTime() {
  let totalTime;
  let now;
  let dT;
  let dH, dM, dS;
  let tS;

  now = Date.now();
  //
  //
  dT = Math.floor((now - grid_sessionStartTS) / 1000);
  if((dT % 15) != 0) return;
  //
  //
  dH = Math.floor(dT / 3600);
  dM = Math.floor((dT % 3600) / 60);
  dS = Math.floor(dT % 60);
  tS = grid_fXXXX(dH) + ':' + grid_fXX(dM) + ':' + grid_fXX(dS) + '.0'
  //
  //
  console.log('LMS: cmi.core.session_time', tS);
  //
  //
  doLMSSetValue('cmi.core.session_time', tS);
  doLMSCommit('');
}


function onMessage(event) {
  // Check sender origin to be trusted

  var data = event.data;

  console.log(data);

  if (data.func == "stopOtherVideos") {
    stopOtherVideos(data.message);
  }
}


function stopOtherVideos(theException) {
  var theUrl;
  var urlEnd, exceptionEnd;

  // alert(message);
  // SAMPLE URL: https://cloud.scorm.com/sandbox/content/courses/21W5TYWEWO/Archivea790a3d0-dfda-45e6-a571-54c7f62f402e/0/media/video_abertura/index.html
  $('.grid_stoppableVideo').each((idx, obj) => {
    var o;

    o = $(obj);
    theUrl = o.prop('src');
    urlEnd= theUrl.substr(theUrl.indexOf('/media/'));
    exceptionEnd = theException.substr(theException.indexOf('/media/'));
    if(urlEnd != exceptionEnd) {
      o.prop('src', '').prop('src', theUrl);
    }
  });
}


function grid_showModal(url) {
  $('#grid_modal_src').prop({src: url});
  $('#grid_modal').modal('show');
}


function grid_hideModal(url) {
  $('#grid_modal_src').prop({src: ''});
  $('#grid_modal').modal('hide');
}
