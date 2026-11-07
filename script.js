/* =========================================================
   BINI: MIL  -  JAVASCRIPT
   Sections: 1 Data | 2 Helpers | 3 Progress | 4 Sound | 5 Navigation
             6 Lessons | 7 Quiz | 8 Games | 9 Start-up
   ========================================================= */
(function () {
  'use strict';

  /* =======================================================
     1. DATA  (easy to expand!)
     -------------------------------------------------------
     To add a new lesson, copy one block inside LESSONS,
     paste it after the last one, and change the text.
     In each quiz question, "answer" is the number of the
     correct option, counting from 0 (0 = first option).
     The options are shuffled automatically when shown.
     ======================================================= */
  var LESSONS = [
    {
      id: 'intro', icon: '🌸',
      title: 'Introduction to Media and Information Literacy',
      desc: 'Discover what MIL is, why it matters, and the skills it helps you build.',
      content:
        '<p class="lead">Every day we scroll, watch, read, and share. Media and Information Literacy (MIL) helps us do all of that wisely.</p>' +
        '<h3>What is MIL?</h3>' +
        '<p><b>Media and Information Literacy (MIL)</b> is a set of skills that helps people <b>access, understand, evaluate, create, and share</b> information and media content responsibly and ethically. UNESCO promotes MIL as a combination of <b>media literacy</b>, <b>information literacy</b>, and <b>digital (ICT) literacy</b>.</p>' +
        '<h3>The Core Skills of MIL</h3>' +
        '<ul>' +
        '<li><b>Access</b> – finding the information and media you need.</li>' +
        '<li><b>Analyze</b> – looking closely at how a message is made and what it means.</li>' +
        '<li><b>Evaluate</b> – judging if a source is reliable, fair, and useful.</li>' +
        '<li><b>Create</b> – making your own media messages responsibly.</li>' +
        '<li><b>Act</b> – using information in an ethical way and sharing it with care.</li>' +
        '</ul>' +
        '<h3>Why is MIL Important?</h3>' +
        '<p>We are surrounded by a huge amount of information every second. Some of it is true, but some is false, misleading, or made to trick us. MIL helps us think critically, avoid fake news, protect ourselves online, and become active, responsible members of society.</p>' +
        '<div class="tip">💡 <b>Key idea:</b> Being media and information literate means you do not believe or share everything you see. You stop, think, and check first!</div>',
      quiz: [
        { q: 'What does MIL stand for?', options: ['Media and Information Literacy', 'Modern Internet Learning', 'Mass Image Language', 'Media in Local Life'], answer: 0, explain: 'MIL means Media and Information Literacy.' },
        { q: 'Which organization promotes MIL around the world?', options: ['UNESCO', 'FIFA', 'NASA', 'WHO'], answer: 0, explain: 'UNESCO (United Nations Educational, Scientific and Cultural Organization) promotes MIL globally.' },
        { q: 'Which of these is a core MIL skill?', options: ['Evaluating information critically', 'Memorizing every headline', 'Sharing posts as fast as possible', 'Avoiding all media'], answer: 0, explain: 'MIL is about thinking critically and judging whether information is reliable.' },
        { q: 'Why is MIL important today?', options: ['We receive lots of information and some of it is false', 'Because media no longer exists', 'Because only experts use the internet', 'Because information is always correct'], answer: 0, explain: 'Because we face so much information every day, we must be able to tell the true from the false.' }
      ]
    },
    {
      id: 'mediainfo', icon: '📰',
      title: 'Media and Information',
      desc: 'Learn the difference between media, information, data, and knowledge.',
      content:
        '<p class="lead">Media carries the message. Information is the message that has meaning.</p>' +
        '<h3>What is Media?</h3>' +
        '<p><b>Media</b> is the plural of <b>medium</b>. A medium is a channel, tool, or means used to communicate messages, such as newspapers, radio, television, and the internet.</p>' +
        '<h3>What is Information?</h3>' +
        '<p><b>Information</b> is data that has been organized, processed, and given meaning so that it is useful. For example, the number "32" is just data, but "The temperature today is 32°C" is information.</p>' +
        '<h3>From Data to Knowledge</h3>' +
        '<ol><li><b>Data</b> – raw facts and figures.</li><li><b>Information</b> – data with meaning and context.</li><li><b>Knowledge</b> – understanding gained when you use and connect information.</li></ol>' +
        '<h3>Sources of Information</h3>' +
        '<ul>' +
        '<li><b>Primary sources</b> – first-hand evidence, like diaries, interviews, photos, and original documents.</li>' +
        '<li><b>Secondary sources</b> – interpret or analyze primary sources, like news analyses and biographies.</li>' +
        '<li><b>Tertiary sources</b> – collect and summarize other sources, like encyclopedias and indexes.</li>' +
        '</ul>' +
        '<div class="tip">💡 <b>Remember:</b> Media is the channel. Information is the content. Always check where information comes from.</div>',
      quiz: [
        { q: '"Media" is the plural form of which word?', options: ['Medium', 'Medal', 'Median', 'Mediate'], answer: 0, explain: 'Medium is the singular form; media is the plural.' },
        { q: 'Information is best described as...', options: ['Data that has been organized and given meaning', 'Random numbers and letters', 'Only news from television', 'Anything posted online'], answer: 0, explain: 'Information is processed data that is meaningful and useful.' },
        { q: 'A diary written by a person who lived through an event is an example of a...', options: ['Primary source', 'Secondary source', 'Tertiary source', 'Rumor'], answer: 0, explain: 'A diary is first-hand evidence, so it is a primary source.' },
        { q: 'A news analysis that studies past events using other sources is a...', options: ['Secondary source', 'Primary source', 'Raw data', 'Personal diary'], answer: 0, explain: 'Secondary sources interpret or analyze primary sources.' }
      ]
    },
    {
      id: 'types', icon: '📺',
      title: 'Types of Media',
      desc: 'Explore print, broadcast, new media, and multimedia.',
      content:
        '<p class="lead">Media comes in many forms. Each type reaches people in a different way.</p>' +
        '<h3>Print Media</h3>' +
        '<p>Printed materials such as <b>newspapers, magazines, books, brochures, and posters</b>. They can be kept, re-read, and studied slowly.</p>' +
        '<h3>Broadcast Media</h3>' +
        '<p>Media that sends messages through sound and images by airwaves or cable, such as <b>radio and television</b>. It reaches many people at the same time.</p>' +
        '<h3>New Media (Digital Media)</h3>' +
        '<p>Media that uses computers, the internet, and mobile devices, such as <b>websites, blogs, online videos, podcasts, and social media</b> (Facebook, YouTube, TikTok, Instagram). It is fast, interactive, and lets ordinary people create and share content.</p>' +
        '<h3>Multimedia</h3>' +
        '<p>Combines different forms like <b>text, images, audio, animation, and video</b> in one presentation, such as a music video or an interactive website.</p>' +
        '<div class="tip">💡 <b>Think about it:</b> A fan page that shares photos, videos, and posts about a group uses several types of media at once!</div>',
      quiz: [
        { q: 'A newspaper is an example of which type of media?', options: ['Print media', 'Broadcast media', 'New media', 'Radio media'], answer: 0, explain: 'Newspapers, magazines, and books are print media.' },
        { q: 'Radio and television belong to which type of media?', options: ['Broadcast media', 'Print media', 'Painting media', 'Handwritten media'], answer: 0, explain: 'Radio and TV send messages through airwaves or cable, so they are broadcast media.' },
        { q: 'Media that combines text, images, audio, and video is called...', options: ['Multimedia', 'Monomedia', 'Printmedia', 'Silent media'], answer: 0, explain: 'Multimedia uses several forms of content together.' },
        { q: 'Which of these is an example of new (digital) media?', options: ['A social media platform', 'A printed poster', 'A paper magazine', 'A handwritten letter'], answer: 0, explain: 'Social media runs on the internet, so it is new or digital media.' }
      ]
    },
    {
      id: 'languages', icon: '🎬',
      title: 'Media Languages',
      desc: 'Understand how media uses words, images, sounds, and motion to speak to us.',
      content:
        '<p class="lead">Media has its own "language". It uses special tools to send messages and create feelings.</p>' +
        '<h3>What is Media Language?</h3>' +
        '<p><b>Media language</b> refers to the ways media creators use words, images, sounds, and techniques to communicate meaning to an audience. Each medium has its own language.</p>' +
        '<h3>Examples by Medium</h3>' +
        '<ul>' +
        '<li><b>Print</b> – headlines, layout, photographs, fonts, and captions.</li>' +
        '<li><b>Radio</b> – voice, music, sound effects, and silence.</li>' +
        '<li><b>Television and film</b> – camera shots and angles, lighting, editing, music, and actors.</li>' +
        '<li><b>Digital media</b> – hyperlinks, buttons, interactivity, animation, and hashtags.</li>' +
        '</ul>' +
        '<h3>Camera Shots</h3>' +
        '<ul><li><b>Close-up</b> – shows a face or detail to reveal emotion.</li><li><b>Medium shot</b> – shows a person from the waist up.</li><li><b>Long (wide) shot</b> – shows the whole setting.</li></ul>' +
        '<div class="tip">💡 <b>Why it matters:</b> When you notice media language, you can understand how a message is built and why it makes you feel a certain way.</div>',
      quiz: [
        { q: 'Media language refers to...', options: ['The ways media uses words, images, and sounds to convey meaning', 'Only the language spoken by news anchors', 'Translating media into other languages', 'The speed of the internet'], answer: 0, explain: 'Media language is the set of techniques media uses to communicate meaning.' },
        { q: 'A close-up shot is mostly used to...', options: ['Show emotions or small details', 'Show a whole landscape', 'Make the screen darker', 'Hide the main character'], answer: 0, explain: 'Close-ups highlight faces, feelings, and details.' },
        { q: 'Which of these belongs to the language of radio?', options: ['Sound effects and music', 'Camera angles', 'Hyperlinks', 'Font styles'], answer: 0, explain: 'Radio depends on sound: voices, music, and sound effects.' },
        { q: 'Hyperlinks and buttons are especially part of the language of...', options: ['Digital media', 'Print media', 'Radio', 'Billboards'], answer: 0, explain: 'Hyperlinks and interactive elements belong to digital media.' }
      ]
    },
    {
      id: 'codes', icon: '🎨',
      title: 'Media Codes and Conventions',
      desc: 'Learn the hidden systems of signs that help us read media messages.',
      content:
        '<p class="lead">Codes and conventions are the "rules" and "symbols" that help audiences understand media quickly.</p>' +
        '<h3>Media Codes</h3>' +
        '<p><b>Codes</b> are systems of signs that create meaning. There are three main groups:</p>' +
        '<ul>' +
        '<li><b>Technical codes</b> – how the media is made: camera shots and angles, lighting, editing, and sound.</li>' +
        '<li><b>Symbolic codes</b> – meaning carried by colors, objects, settings, costumes, and body language. For example, a red rose often symbolizes love.</li>' +
        '<li><b>Written codes</b> – headlines, captions, fonts, and the style of the text.</li>' +
        '</ul>' +
        '<h3>Media Conventions</h3>' +
        '<p><b>Conventions</b> are the generally accepted ways of doing things in a certain genre or form of media. Audiences expect them. For example:</p>' +
        '<ul>' +
        '<li>Horror movies often use dark lighting and eerie music.</li>' +
        '<li>News anchors usually dress formally and sit at a desk.</li>' +
        '<li>Cartoons use bright colors and exaggerated movements.</li>' +
        '</ul>' +
        '<div class="tip">💡 <b>Remember:</b> Codes make meaning. Conventions are the familiar patterns that audiences expect in a genre.</div>',
      quiz: [
        { q: 'Camera angles, lighting, and editing are examples of...', options: ['Technical codes', 'Symbolic codes', 'Written codes', 'Legal codes'], answer: 0, explain: 'They describe how a piece of media is technically made.' },
        { q: 'A red rose used to show love is an example of a...', options: ['Symbolic code', 'Technical code', 'Written code', 'Sound code'], answer: 0, explain: 'Objects and colors that stand for ideas are symbolic codes.' },
        { q: 'Media conventions are...', options: ['Generally accepted ways of doing things in a genre', 'Laws that punish media makers', 'Meetings of media companies', 'Random choices with no pattern'], answer: 0, explain: 'Conventions are the familiar patterns audiences expect in a genre.' },
        { q: 'Headlines, captions, and font styles are examples of...', options: ['Written codes', 'Technical codes', 'Symbolic codes', 'Audio codes'], answer: 0, explain: 'Text-based elements form the written codes.' }
      ]
    },
    {
      id: 'effects', icon: '💫',
      title: 'Media Effects and Influence',
      desc: 'See how media can shape our thoughts, feelings, and behavior.',
      content:
        '<p class="lead">Media does more than entertain. It can influence what we think, feel, buy, and do.</p>' +
        '<h3>Ways Media Influences Us</h3>' +
        '<ul>' +
        '<li><b>Agenda-setting</b> – media may not tell us <i>what to think</i>, but it tells us <i>what to think about</i> by choosing which stories get attention.</li>' +
        '<li><b>Bandwagon effect</b> – people do or believe something because many others do.</li>' +
        '<li><b>Stereotyping</b> – repeating simple, unfair ideas about a group of people.</li>' +
        '<li><b>Persuasion and advertising</b> – using emotions, celebrities, and catchy messages to make us buy or support something.</li>' +
        '</ul>' +
        '<h3>Positive Effects</h3>' +
        '<ul><li>Raises awareness about important issues.</li><li>Educates and inspires people.</li><li>Connects friends, families, and fans.</li></ul>' +
        '<h3>Negative Effects</h3>' +
        '<ul><li>Spreads fake news and misinformation.</li><li>Can lead to cyberbullying.</li><li>Promotes unrealistic beauty standards that hurt self-esteem.</li><li>Too much screen time can affect sleep, focus, and health.</li></ul>' +
        '<div class="tip">💡 <b>Ask yourself:</b> Who made this message? What do they want me to think or do? What is missing?</div>',
      quiz: [
        { q: 'Agenda-setting says that media tells us...', options: ['What to think about', 'Exactly what to believe', 'How to speak', 'Where to live'], answer: 0, explain: 'By choosing which stories to feature, media influences what topics people think about.' },
        { q: 'The bandwagon effect is when people...', options: ['Do something because many others are doing it', 'Ignore all trends', 'Only follow experts', 'Avoid social media'], answer: 0, explain: 'The bandwagon effect is following the crowd.' },
        { q: 'Which is a positive effect of media?', options: ['Raising awareness about important issues', 'Spreading false rumors', 'Cyberbullying', 'Creating fear on purpose'], answer: 0, explain: 'Media can help inform and educate people about important issues.' },
        { q: 'Unrealistic beauty standards shown in media can cause...', options: ['Low self-esteem', 'Better grades', 'More sleep', 'Lower internet cost'], answer: 0, explain: 'Comparing ourselves with edited, perfect images can hurt self-esteem.' }
      ]
    },
    {
      id: 'responsible', icon: '🛡️',
      title: 'Responsible Use of Media and Information',
      desc: 'Practice checking facts, respecting creators, and sharing with care.',
      content:
        '<p class="lead">With the power to share anything in seconds comes the responsibility to share wisely.</p>' +
        '<h3>Check Before You Share</h3>' +
        '<p>Use the <b>CRAAP test</b> to evaluate a source:</p>' +
        '<ul>' +
        '<li><b>C</b>urrency – Is it recent or up to date?</li>' +
        '<li><b>R</b>elevance – Does it fit what you need?</li>' +
        '<li><b>A</b>uthority – Who wrote it? Are they qualified?</li>' +
        '<li><b>A</b>ccuracy – Is it supported by evidence?</li>' +
        '<li><b>P</b>urpose – Why was it made: to inform, sell, persuade, or entertain?</li>' +
        '</ul>' +
        '<h3>Respect Creators</h3>' +
        '<ul>' +
        '<li><b>Copyright</b> protects the rights of creators over their original works such as songs, videos, photos, and writings. Ask permission or use properly licensed content.</li>' +
        '<li><b>Plagiarism</b> is using someone else\'s work or ideas without giving credit. Always cite your sources.</li>' +
        '</ul>' +
        '<h3>Good Habits</h3>' +
        '<ul><li>Think before you post, comment, or share.</li><li>Verify shocking news with several reliable sources.</li><li>Protect your personal information and the privacy of others.</li><li>Be kind: do not spread hate or bully.</li></ul>' +
        '<div class="tip">💡 <b>Golden rule:</b> If you are not sure it is true, do not share it yet!</div>',
      quiz: [
        { q: 'Which of these is part of the CRAAP test?', options: ['Authority', 'Popularity', 'Speed', 'Volume'], answer: 0, explain: 'CRAAP stands for Currency, Relevance, Authority, Accuracy, and Purpose.' },
        { q: 'You see a shocking news post. What should you do before sharing it?', options: ['Verify it from reliable sources', 'Share it immediately', 'Ask your friends to share first', 'Change the headline'], answer: 0, explain: 'Always verify surprising information before passing it on.' },
        { q: 'Using someone\'s work without giving them credit is called...', options: ['Plagiarism', 'Citation', 'Research', 'Journalism'], answer: 0, explain: 'Plagiarism is presenting another person\'s work or ideas as your own.' },
        { q: 'Copyright protects...', options: ['The rights of creators over their original works', 'Only books from the library', 'Computers from viruses', 'Users from slow internet'], answer: 0, explain: 'Copyright gives creators control over how their original works are used.' }
      ]
    },
    {
      id: 'citizenship', icon: '🌐',
      title: 'Digital Citizenship',
      desc: 'Be a safe, kind, and responsible citizen in the digital world.',
      content:
        '<p class="lead">A digital citizen uses technology in a safe, responsible, and respectful way.</p>' +
        '<h3>What is Digital Citizenship?</h3>' +
        '<p><b>Digital citizenship</b> is the responsible and ethical behavior of a person when using the internet and digital technology. It means knowing your rights and responsibilities online.</p>' +
        '<h3>Important Ideas</h3>' +
        '<ul>' +
        '<li><b>Netiquette</b> – the rules of polite and respectful online behavior, like not typing in ALL CAPS to shout and not posting hurtful comments.</li>' +
        '<li><b>Digital footprint</b> – the trail of data you leave online through posts, searches, and photos. It can last a long time, so post carefully.</li>' +
        '<li><b>Cyberbullying</b> – using technology to harass, shame, or hurt others. Do not take part, and report it.</li>' +
        '<li><b>Online safety and privacy</b> – use strong passwords (long, with letters, numbers, and symbols), never share them, and be careful with personal information.</li>' +
        '</ul>' +
        '<h3>Philippine Laws to Know</h3>' +
        '<ul>' +
        '<li><b>Republic Act No. 10175</b> – the Cybercrime Prevention Act of 2012.</li>' +
        '<li><b>Republic Act No. 10173</b> – the Data Privacy Act of 2012, which protects personal information.</li>' +
        '</ul>' +
        '<div class="tip">💡 <b>Remember:</b> Treat people online the way you want to be treated. Kindness is always in style! 💖</div>',
      quiz: [
        { q: 'Your digital footprint is...', options: ['The trail of data you leave online', 'The size of your phone', 'Your internet speed', 'A type of virus'], answer: 0, explain: 'Posts, searches, and photos all add to your digital footprint.' },
        { q: 'Netiquette refers to...', options: ['Rules of polite and respectful online behavior', 'A kind of internet cable', 'A social media app', 'A computer program for editing'], answer: 0, explain: 'Netiquette means good manners on the internet.' },
        { q: 'Which Philippine law is the Cybercrime Prevention Act of 2012?', options: ['Republic Act No. 10175', 'Republic Act No. 7610', 'Republic Act No. 1234', 'Republic Act No. 9003'], answer: 0, explain: 'RA 10175 is the Cybercrime Prevention Act of 2012.' },
        { q: 'Which is the strongest password?', options: ['A long mix of letters, numbers, and symbols', 'Your birthday', '12345', 'Your nickname'], answer: 0, explain: 'Long and varied passwords are much harder to guess.' }
      ]
    }
  ];

  var SCRAMBLE_WORDS = [
    { word: 'MEDIA', hint: 'Channels or tools used to communicate messages.' },
    { word: 'INFORMATION', hint: 'Organized data that has meaning.' },
    { word: 'LITERACY', hint: 'The ability to read, understand, and use something well.' },
    { word: 'PLAGIARISM', hint: 'Copying someone\'s work without giving credit.' },
    { word: 'COPYRIGHT', hint: 'Legal protection for the creators of original works.' },
    { word: 'NETIQUETTE', hint: 'Rules for polite behavior online.' },
    { word: 'MULTIMEDIA', hint: 'Combines text, audio, images, and video.' },
    { word: 'BROADCAST', hint: 'Radio and television are this type of media.' },
    { word: 'CITIZENSHIP', hint: 'Digital ____: responsible behavior online.' },
    { word: 'FOOTPRINT', hint: 'Your digital ____ is the trail of data you leave online.' },
    { word: 'PROPAGANDA', hint: 'Biased information used to push a cause or point of view.' },
    { word: 'CREDIBLE', hint: 'Trustworthy and believable, like a good source.' },
    { word: 'VERIFY', hint: 'Check if information is true before sharing it.' },
    { word: 'HEADLINE', hint: 'The big title of a news story.' },
    { word: 'PODCAST', hint: 'An audio program you can stream or download.' },
    { word: 'INFLUENCER', hint: 'A social media personality who can sway followers\' choices.' },
    { word: 'AUDIENCE', hint: 'The people who receive a media message.' },
    { word: 'SOURCE', hint: 'Where information comes from.' }
  ];

  var MEM_SYMBOLS = ['🌸', '⭐', '💖', '🦋', '✨', '🌷', '💜', '💙'];
  var FLOAT_ICONS = ['🌸', '⭐', '✨', '💖', '🦋', '💜', '🌷', '💙', '🌼'];

  var STORE_KEY = 'biniMIL_progress_v1';
  var SOUND_KEY = 'biniMIL_sound_v1';

  /* =======================================================
     2. HELPERS
     ======================================================= */
  function $(sel, root) { return (root || document).querySelector(sel); }
  function $$(sel, root) { return Array.prototype.slice.call((root || document).querySelectorAll(sel)); }
  function ready(fn) {
    if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', fn);
    else fn();
  }
  function shuffle(arr) {
    var a = arr.slice();
    for (var i = a.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var t = a[i]; a[i] = a[j]; a[j] = t;
    }
    return a;
  }
  function esc(s) {
    return String(s).replace(/[&<>"']/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
    });
  }
  function scrollToEl(el) { if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' }); }
  function showFeedback(el, kind, html) {
    el.className = 'feedback ' + kind;
    el.innerHTML = html;
    el.hidden = false;
  }
  function findLesson(id) {
    for (var i = 0; i < LESSONS.length; i++) if (LESSONS[i].id === id) return LESSONS[i];
    return null;
  }
  function allQuestions() {
    var arr = [];
    LESSONS.forEach(function (l) { l.quiz.forEach(function (q) { arr.push(q); }); });
    return arr;
  }
  // Prepare a question: shuffle options and remember which one is correct
  function prepQuestion(q) {
    var opts = q.options.map(function (t, i) { return { t: t, correct: i === q.answer }; });
    return { q: q.q, opts: shuffle(opts), explain: q.explain || '' };
  }
  function correctText(pq) {
    for (var i = 0; i < pq.opts.length; i++) if (pq.opts[i].correct) return pq.opts[i].t;
    return '';
  }
  function renderOptions(box, pq, onPick) {
    box.innerHTML = '';
    pq.opts.forEach(function (o, i) {
      var b = document.createElement('button');
      b.type = 'button';
      b.className = 'opt';
      b.innerHTML = '<span class="opt-letter">' + 'ABCD'.charAt(i) + '</span><span class="opt-text"></span>';
      b.querySelector('.opt-text').textContent = o.t;
      b.addEventListener('click', function () { onPick(i); });
      box.appendChild(b);
    });
  }
  function revealOptions(box, pq, chosen) {
    $$('.opt', box).forEach(function (b, i) {
      b.disabled = true;
      if (pq.opts[i].correct) b.classList.add('correct');
      else if (i === chosen) b.classList.add('wrong');
    });
  }
  function celebrate() {
    var set = ['🌸', '⭐', '💖', '✨', '🦋', '🎉'];
    for (var i = 0; i < 26; i++) {
      var s = document.createElement('span');
      s.className = 'confetti';
      s.textContent = set[i % set.length];
      s.style.left = (Math.random() * 100) + 'vw';
      s.style.fontSize = (18 + Math.random() * 18) + 'px';
      s.style.animationDelay = (Math.random() * 0.7) + 's';
      document.body.appendChild(s);
      (function (el) { setTimeout(function () { el.remove(); }, 3800); })(s);
    }
  }

  /* =======================================================
     3. PROGRESS (localStorage)
     ======================================================= */
  function defaultProgress() {
    return { completed: [], scores: {}, games: { trivia: 0, scramble: 0, memMoves: null, memTime: null } };
  }
  function loadProgress() {
    var d = defaultProgress();
    try {
      var raw = localStorage.getItem(STORE_KEY);
      if (!raw) return d;
      var p = JSON.parse(raw);
      d.completed = Array.isArray(p.completed) ? p.completed : [];
      d.scores = p.scores && typeof p.scores === 'object' ? p.scores : {};
      if (p.games) {
        d.games.trivia = p.games.trivia || 0;
        d.games.scramble = p.games.scramble || 0;
        d.games.memMoves = (p.games.memMoves === undefined) ? null : p.games.memMoves;
        d.games.memTime = (p.games.memTime === undefined) ? null : p.games.memTime;
      }
    } catch (e) { /* ignore */ }
    return d;
  }
  var progress = loadProgress();
  function saveProgress() {
    try { localStorage.setItem(STORE_KEY, JSON.stringify(progress)); } catch (e) { /* ignore */ }
  }

  function updateProgressUI() {
    var done = progress.completed.filter(function (id) { return !!findLesson(id); }).length;
    var total = LESSONS.length;
    $('#progressText').textContent = done + ' of ' + total + ' lessons completed';
    $('#lessonProgressFill').style.width = (total ? Math.round(done / total * 100) : 0) + '%';

    var sum = 0, n = 0;
    Object.keys(progress.scores).forEach(function (id) {
      var s = progress.scores[id];
      if (s && s.total) { sum += s.best / s.total; n++; }
    });
    $('#avgScoreText').textContent = n ? ('Quiz average (best scores): ' + Math.round(sum / n * 100) + '%') : 'Quiz average: —';

    renderLessonCards();
    renderQuizPicker();
    updateGameStats();
  }

  function updateGameStats() {
    $('#bestTrivia').textContent = 'Best: ' + progress.games.trivia;
    $('#bestScramble').textContent = 'Best: ' + progress.games.scramble;
    $('#bestMemory').textContent = progress.games.memMoves === null
      ? 'Not played yet'
      : 'Best: ' + progress.games.memMoves + ' moves';
  }

  /* =======================================================
     4. SOUND (built-in tunes + optional user audio)
     ======================================================= */
  function loadSound() {
    var d = { muted: false, volume: 0.7, goodUrl: '', badUrl: '' };
    try {
      var r = JSON.parse(localStorage.getItem(SOUND_KEY));
      if (r && typeof r === 'object') {
        d.muted = !!r.muted;
        if (typeof r.volume === 'number') d.volume = Math.min(1, Math.max(0, r.volume));
        d.goodUrl = r.goodUrl || '';
        d.badUrl = r.badUrl || '';
      }
    } catch (e) { /* ignore */ }
    return d;
  }
  var sound = loadSound();
  function saveSound() {
    try { localStorage.setItem(SOUND_KEY, JSON.stringify(sound)); } catch (e) { /* ignore */ }
  }
  var custom = { good: sound.goodUrl, bad: sound.badUrl };
  var customLabel = { good: sound.goodUrl ? 'your saved link' : '', bad: sound.badUrl ? 'your saved link' : '' };
  var audioCtx = null;
  var currentCustomAudio = null;

  function getCtx() {
    if (!audioCtx) {
      var AC = window.AudioContext || window.webkitAudioContext;
      if (!AC) return null;
      try { audioCtx = new AC(); } catch (e) { return null; }
    }
    if (audioCtx.state === 'suspended' && audioCtx.resume) audioCtx.resume();
    return audioCtx;
  }
  function tone(freq, start, dur, type, vol) {
    var ctx = getCtx();
    if (!ctx) return;
    var t0 = ctx.currentTime + start;
    var o = ctx.createOscillator();
    var g = ctx.createGain();
    o.type = type;
    o.frequency.setValueAtTime(freq, t0);
    g.gain.setValueAtTime(0.0001, t0);
    g.gain.exponentialRampToValueAtTime(Math.max(vol * sound.volume, 0.0002), t0 + 0.03);
    g.gain.exponentialRampToValueAtTime(0.0001, t0 + dur);
    o.connect(g);
    g.connect(ctx.destination);
    o.start(t0);
    o.stop(t0 + dur + 0.05);
  }
  function synth(kind) {
    if (kind === 'good') {
      // Happy, cheerful rising sparkle
      [523.25, 659.25, 783.99, 1046.5].forEach(function (f, i) { tone(f, i * 0.1, 0.28, 'triangle', 0.35); });
      tone(1567.98, 0.42, 0.4, 'sine', 0.18);
      tone(2093.0, 0.52, 0.4, 'sine', 0.12);
    } else {
      // Sad, slow falling melody
      [329.63, 293.66, 261.63, 220.0].forEach(function (f, i) { tone(f, i * 0.3, 0.55, 'sine', 0.4); });
      tone(110.0, 0.9, 0.8, 'triangle', 0.18);
    }
  }
  function playCustom(kind) {
    var src = custom[kind];
    if (!src) return false;
    try {
      if (currentCustomAudio) currentCustomAudio.pause();
      var a = new Audio(src);
      a.volume = sound.volume;
      currentCustomAudio = a;
      var fell = false;
      var fallback = function () { if (!fell) { fell = true; synth(kind); } };
      a.addEventListener('error', fallback);
      var p = a.play();
      if (p && p.catch) p.catch(fallback);
      return true;
    } catch (e) { return false; }
  }
  function play(kind, force) {
    if (sound.muted && !force) return;
    if (!playCustom(kind)) synth(kind);
  }
  function updateMuteUI() {
    $$('.mute-toggle').forEach(function (b) {
      if (b.getAttribute('data-full')) b.textContent = sound.muted ? '🔇 Sound is OFF' : '🔊 Sound is ON';
      else b.textContent = sound.muted ? '🔇' : '🔊';
    });
    if (sound.muted && currentCustomAudio) currentCustomAudio.pause();
  }
  function toggleMute() {
    sound.muted = !sound.muted;
    saveSound();
    updateMuteUI();
    if (!sound.muted) play('good');
  }
  function updateAudioStatus(kind) {
    var row = $('.audio-row[data-kind="' + kind + '"]');
    if (!row) return;
    $('.audio-status', row).textContent = custom[kind]
      ? 'Using your audio: ' + customLabel[kind]
      : 'Using built-in sound';
  }
  function bindSound() {
    $$('.mute-toggle').forEach(function (b) { b.addEventListener('click', toggleMute); });
    var vol = $('#volumeRange');
    vol.value = Math.round(sound.volume * 100);
    vol.addEventListener('input', function () {
      sound.volume = vol.value / 100;
      saveSound();
    });
    vol.addEventListener('change', function () { play('good', true); });

    $$('.audio-row').forEach(function (row) {
      var kind = row.getAttribute('data-kind');
      var urlKey = kind === 'good' ? 'goodUrl' : 'badUrl';
      var fileInput = $('.audio-file', row);
      var urlInput = $('.audio-url', row);
      if (custom[kind] && /^https?:/i.test(custom[kind])) urlInput.value = custom[kind];

      function clearBlob() {
        if (custom[kind] && custom[kind].indexOf('blob:') === 0) {
          try { URL.revokeObjectURL(custom[kind]); } catch (e) { /* ignore */ }
        }
      }
      fileInput.addEventListener('change', function () {
        var f = fileInput.files && fileInput.files[0];
        if (!f) return;
        clearBlob();
        custom[kind] = URL.createObjectURL(f);
        customLabel[kind] = f.name;
        sound[urlKey] = 'https://www.youtube.com/shorts/mVJJonzQbg4?feature=share';
        urlInput.value = '';
        saveSound();
        updateAudioStatus(kind);
      });
      $('.audio-use', row).addEventListener('click', function () {
        var v = urlInput.value.trim();
        if (!/^https?:\/\//i.test(v)) {
          $('.audio-status', row).textContent = 'https://open.spotify.com/playlist/6o75iaXXqWRfajvwxvfFoU?si=yf4AIAx5RT63zCguhhqtVQ';
          return;
        }
        clearBlob();
        custom[kind] = v;
        customLabel[kind] = 'https://youtu.be/vXlM5lzCmRU?si=gvYbTPwPTwPccvAw';
        sound[urlKey] = v;
        fileInput.value = '';
        saveSound();
        updateAudioStatus(kind);
      });
      $('.audio-test', row).addEventListener('click', function () {
        if (sound.muted) $('.audio-status', row).textContent = 'Sound is muted, but here is a test anyway…';
        play(kind, true);
        setTimeout(function () { updateAudioStatus(kind); }, 2500);
      });
      $('.audio-reset', row).addEventListener('click', function () {
        clearBlob();
        custom[kind] = '';
        customLabel[kind] = '';
        sound[urlKey] = '';
        fileInput.value = '';
        urlInput.value = '';
        saveSound();
        updateAudioStatus(kind);
      });
      updateAudioStatus(kind);
    });
    updateMuteUI();
  }

  /* =======================================================
     5. NAVIGATION & PAGE EFFECTS
     ======================================================= */
  function buildFloaties() {
    var box = $('#floaties');
    var n = window.innerWidth < 600 ? 14 : 26;
    for (var i = 0; i < n; i++) {
      var s = document.createElement('span');
      s.className = 'floatie';
      s.textContent = FLOAT_ICONS[i % FLOAT_ICONS.length];
      s.style.left = (Math.random() * 96) + '%';
      s.style.fontSize = (14 + Math.random() * 22) + 'px';
      s.style.animationDuration = (16 + Math.random() * 20) + 's';
      s.style.animationDelay = (-Math.random() * 30) + 's';
      box.appendChild(s);
    }
  }

  function bindNavigation() {
    var navbar = $('#navbar');
    var navLinks = $('#navLinks');
    var menuBtn = $('#menuBtn');
    var topBtn = $('#topBtn');
    var links = $$('.nav-link');
    var sections = $$('main > section');

    function closeMenu() {
      navLinks.classList.remove('open');
      menuBtn.setAttribute('aria-expanded', 'false');
      menuBtn.textContent = '☰';
    }
    menuBtn.addEventListener('click', function () {
      var open = navLinks.classList.toggle('open');
      menuBtn.setAttribute('aria-expanded', open ? 'true' : 'false');
      menuBtn.textContent = open ? '✕' : '☰';
    });
    links.forEach(function (a) { a.addEventListener('click', closeMenu); });
    document.addEventListener('click', function (e) {
      if (!navbar.contains(e.target)) closeMenu();
    });

    function onScroll() {
      var y = window.pageYOffset || document.documentElement.scrollTop || 0;
      navbar.classList.toggle('scrolled', y > 20);
      topBtn.classList.toggle('show', y > 450);
      var current = 'home';
      sections.forEach(function (s) {
        if (s.getBoundingClientRect().top <= 140) current = s.id;
      });
      links.forEach(function (a) {
        a.classList.toggle('active', a.getAttribute('href') === '#' + current);
      });
    }
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    onScroll();

    topBtn.addEventListener('click', function () { window.scrollTo({ top: 0, behavior: 'smooth' }); });
    $('#startBtn').addEventListener('click', function () { scrollToEl($('#lessons')); });

    // Reveal on scroll
    var items = $$('.reveal');
    if ('IntersectionObserver' in window) {
      var io = new IntersectionObserver(function (entries) {
        entries.forEach(function (en) {
          if (en.isIntersecting) { en.target.classList.add('visible'); io.unobserve(en.target); }
        });
      }, { threshold: 0.12 });
      items.forEach(function (el) { io.observe(el); });
    } else {
      items.forEach(function (el) { el.classList.add('visible'); });
    }
  }

  /* =======================================================
     6. LESSONS
     ======================================================= */
  var currentLessonId = null;

  function renderLessonCards() {
    var grid = $('#lessonGrid');
    grid.innerHTML = '';
    LESSONS.forEach(function (l, i) {
      var done = progress.completed.indexOf(l.id) !== -1;
      var sc = progress.scores[l.id];
      var status = (done ? '<span class="done">✅ Completed</span>' : '📖 Not completed yet') +
        (sc ? ' · Quiz best: ' + sc.best + '/' + sc.total : '');
      var card = document.createElement('article');
      card.className = 'card lesson-card';
      card.style.animationDelay = (i * 0.06) + 's';
      card.innerHTML =
        '<span class="lesson-num">Lesson ' + (i + 1) + '</span>' +
        '<div class="lesson-icon">' + l.icon + '</div>' +
        '<h3>' + l.title + '</h3>' +
        '<p>' + l.desc + '</p>' +
        '<div class="lesson-status">' + status + '</div>' +
        '<button type="button" class="btn btn-small" data-lesson="' + l.id + '">Read Lesson →</button>';
      grid.appendChild(card);
    });
  }

  function updateCompleteBtn() {
    var btn = $('#completeBtn');
    var done = progress.completed.indexOf(currentLessonId) !== -1;
    btn.classList.toggle('is-done', done);
    btn.textContent = done ? '✅ Completed (click to undo)' : '✔ Mark as Completed';
  }

  function openLesson(id) {
    var l = findLesson(id);
    if (!l) return;
    currentLessonId = id;
    var idx = LESSONS.indexOf(l);
    $('#readerIcon').textContent = l.icon;
    $('#readerTag').textContent = 'Lesson ' + (idx + 1) + ' of ' + LESSONS.length;
    $('#readerTitle').textContent = l.title;
    $('#readerBody').innerHTML = l.content;
    updateCompleteBtn();
    $('#lessonList').hidden = true;
    $('.progress-panel').hidden = true;
    $('#lessonReader').hidden = false;
    scrollToEl($('#lessons'));
  }

  function closeLesson(doScroll) {
    $('#lessonReader').hidden = true;
    $('#lessonList').hidden = false;
    $('.progress-panel').hidden = false;
    currentLessonId = null;
    if (doScroll !== false) scrollToEl($('#lessons'));
  }

  function bindLessons() {
    $('#lessonGrid').addEventListener('click', function (e) {
      var b = e.target.closest('[data-lesson]');
      if (b) openLesson(b.getAttribute('data-lesson'));
    });
    $$('.js-back').forEach(function (b) { b.addEventListener('click', function () { closeLesson(true); }); });
    $('#completeBtn').addEventListener('click', function () {
      var i = progress.completed.indexOf(currentLessonId);
      if (i === -1) { progress.completed.push(currentLessonId); play('good'); celebrate(); }
      else progress.completed.splice(i, 1);
      saveProgress();
      updateCompleteBtn();
      updateProgressUI();
    });
    $('#readerQuizBtn').addEventListener('click', function () {
      var id = currentLessonId;
      closeLesson(false);
      startQuiz(id);
    });

    // Reset progress (two-step confirmation, no pop-ups needed)
    var resetBtn = $('#resetBtn');
    var armed = false, armTimer = null;
    function disarm() {
      armed = false;
      resetBtn.textContent = 'Reset Progress';
    }
    resetBtn.addEventListener('click', function () {
      if (!armed) {
        armed = true;
        resetBtn.textContent = '⚠ Click again to confirm';
        armTimer = setTimeout(disarm, 4000);
        return;
      }
      clearTimeout(armTimer);
      disarm();
      progress = defaultProgress();
      saveProgress();
      closeLesson(false);
      showQuizPicker();
      updateProgressUI();
      $('#progressText').textContent = '✨ Progress reset! 0 of ' + LESSONS.length + ' lessons completed';
    });
  }

  /* =======================================================
     7. QUIZ
     ======================================================= */
  var quiz = { lesson: null, questions: [], index: 0, score: 0, answered: false };

  function renderQuizPicker() {
    var box = $('#quizChips');
    box.innerHTML = '';
    LESSONS.forEach(function (l) {
      var sc = progress.scores[l.id];
      var b = document.createElement('button');
      b.type = 'button';
      b.className = 'chip';
      b.setAttribute('data-lesson', l.id);
      b.innerHTML =
        '<span class="chip-icon">' + l.icon + '</span>' +
        '<span class="chip-text"><b>' + l.title + '</b><small>' + l.quiz.length + ' questions · ' +
        (sc ? 'Best: ' + sc.best + '/' + sc.total : 'Not taken yet') + '</small></span>';
      box.appendChild(b);
    });
  }

  function showQuizPicker() {
    $('#quizPicker').hidden = false;
    $('#quizPlay').hidden = true;
    $('#quizResult').hidden = true;
  }

  function startQuiz(id) {
    var l = findLesson(id);
    if (!l) return;
    quiz.lesson = l;
    quiz.questions = shuffle(l.quiz).map(prepQuestion);
    quiz.index = 0;
    quiz.score = 0;
    quiz.answered = false;
    $('#quizPicker').hidden = true;
    $('#quizResult').hidden = true;
    $('#quizPlay').hidden = false;
    $('#quizLessonName').textContent = l.icon + ' ' + l.title;
    renderQuestion();
    scrollToEl($('#quiz'));
  }

  function renderQuestion() {
    var total = quiz.questions.length;
    var pq = quiz.questions[quiz.index];
    quiz.answered = false;
    $('#quizScore').textContent = quiz.score;
    $('#quizCounter').textContent = 'Question ' + (quiz.index + 1) + ' of ' + total;
    setQuizBar(quiz.index, total);
    $('#quizQuestion').textContent = pq.q;
    $('#quizFeedback').hidden = true;
    $('#quizNext').hidden = true;
    renderOptions($('#quizOptions'), pq, onQuizPick);
  }

  function setQuizBar(done, total) {
    var pct = Math.round(done / total * 100);
    $('#quizBar').style.width = pct + '%';
    $('#quizPercent').textContent = pct + '%';
  }

  function onQuizPick(i) {
    if (quiz.answered) return;      // prevents choosing more than one answer
    quiz.answered = true;
    var total = quiz.questions.length;
    var pq = quiz.questions[quiz.index];
    var ok = pq.opts[i].correct;
    revealOptions($('#quizOptions'), pq, i);
    if (ok) {
      quiz.score++;
      play('good');
      showFeedback($('#quizFeedback'), 'ok', '🎉 <b>Correct!</b> ' + esc(pq.explain));
    } else {
      play('bad');
      showFeedback($('#quizFeedback'), 'no', '💔 <b>Not quite.</b> The correct answer is: <b>' + esc(correctText(pq)) + '</b>. ' + esc(pq.explain));
    }
    $('#quizScore').textContent = quiz.score;
    setQuizBar(quiz.index + 1, total);
    var next = $('#quizNext');
    next.textContent = (quiz.index + 1 >= total) ? 'See Results 🎀' : 'Next Question →';
    next.hidden = false;
  }

  function finishQuiz() {
    var total = quiz.questions.length;
    var pct = Math.round(quiz.score / total * 100);
    var id = quiz.lesson.id;
    var prev = progress.scores[id];
    progress.scores[id] = { best: Math.max(prev ? prev.best : 0, quiz.score), total: total, last: quiz.score };
    saveProgress();

    var emoji, title, msg;
    if (pct === 100) { emoji = '🏆'; title = 'Perfect Score!'; msg = 'Amazing! You bloomed brilliantly. 🌸'; }
    else if (pct >= 75) { emoji = '🌟'; title = 'Great Job!'; msg = 'You really know this lesson. Keep shining!'; }
    else if (pct >= 50) { emoji = '🌷'; title = 'Nice Try!'; msg = 'You are getting there. Review the lesson and try again!'; }
    else { emoji = '💪'; title = 'Keep Going!'; msg = 'Every bloom starts as a seed. Read the lesson again and retry!'; }

    $('#resultEmoji').textContent = emoji;
    $('#resultTitle').textContent = title;
    $('#resultScore').textContent = quiz.score + ' / ' + total + ' (' + pct + '%)';
    $('#resultMsg').textContent = msg;
    $('#quizPlay').hidden = true;
    $('#quizResult').hidden = false;
    if (pct === 100) celebrate();
    updateProgressUI();
    scrollToEl($('#quiz'));
  }

  function bindQuiz() {
    $('#quizChips').addEventListener('click', function (e) {
      var b = e.target.closest('.chip');
      if (b) startQuiz(b.getAttribute('data-lesson'));
    });
    $('#quizNext').addEventListener('click', function () {
      if (quiz.index + 1 >= quiz.questions.length) finishQuiz();
      else { quiz.index++; renderQuestion(); }
    });
    $('#quizQuit').addEventListener('click', showQuizPicker);
    $('#tryAgainBtn').addEventListener('click', function () { startQuiz(quiz.lesson.id); });
    $('#resultOtherBtn').addEventListener('click', function () { showQuizPicker(); scrollToEl($('#quiz')); });
    $('#resultReadBtn').addEventListener('click', function () { openLesson(quiz.lesson.id); });
  }

  /* =======================================================
     8. GAMES
     ======================================================= */

  /* ---- Game tabs ---- */
  function showGame(name) {
    stopTrivia();
    stopScramble();
    clearInterval(M.timer);
    $$('.game-tab').forEach(function (t) { t.classList.toggle('active', t.getAttribute('data-game') === name); });
    $$('.game-panel').forEach(function (p) { p.hidden = p.getAttribute('data-game') !== name; });
    if (name === 'memory') resetMemory();
  }

  /* ---- GAME 1: Media Knowledge Challenge ---- */
  var TRIVIA_SECONDS = 60;
  var T = { running: false, score: 0, correct: 0, time: TRIVIA_SECONDS, timer: null, nextTimer: null, pool: [], cur: null, locked: false };

  function updateTriviaHud() {
    $('#triviaTime').textContent = T.time;
    $('#triviaScore').textContent = T.score;
    $('#triviaCorrect').textContent = T.correct;
    $('#triviaBar').style.width = Math.max(0, T.time / TRIVIA_SECONDS * 100) + '%';
  }
  function startTrivia() {
    clearInterval(T.timer);
    clearTimeout(T.nextTimer);
    T.running = true; T.score = 0; T.correct = 0; T.time = TRIVIA_SECONDS; T.locked = false;
    T.pool = shuffle(allQuestions());
    $('#triviaIntro').hidden = true;
    $('#triviaEnd').hidden = true;
    $('#triviaPlay').hidden = false;
    updateTriviaHud();
    nextTrivia();
    T.timer = setInterval(function () {
      T.time--;
      updateTriviaHud();
      if (T.time <= 0) endTrivia();
    }, 1000);
  }
  function nextTrivia() {
    if (!T.running) return;
    if (!T.pool.length) T.pool = shuffle(allQuestions());
    T.cur = prepQuestion(T.pool.pop());
    T.locked = false;
    $('#triviaQuestion').textContent = T.cur.q;
    $('#triviaFeedback').hidden = true;
    renderOptions($('#triviaOptions'), T.cur, onTriviaPick);
  }
  function onTriviaPick(i) {
    if (!T.running || T.locked) return;
    T.locked = true;
    var ok = T.cur.opts[i].correct;
    revealOptions($('#triviaOptions'), T.cur, i);
    if (ok) {
      T.score += 10; T.correct++;
      play('good');
      showFeedback($('#triviaFeedback'), 'ok', '🎉 Correct! +10 points');
    } else {
      play('bad');
      showFeedback($('#triviaFeedback'), 'no', '💔 Oops! Answer: <b>' + esc(correctText(T.cur)) + '</b>');
    }
    updateTriviaHud();
    clearTimeout(T.nextTimer);
    T.nextTimer = setTimeout(nextTrivia, ok ? 700 : 1500);
  }
  function stopTrivia() {
    T.running = false;
    clearInterval(T.timer);
    clearTimeout(T.nextTimer);
    $('#triviaPlay').hidden = true;
    $('#triviaEnd').hidden = true;
    $('#triviaIntro').hidden = false;
  }
  function endTrivia() {
    T.running = false;
    clearInterval(T.timer);
    clearTimeout(T.nextTimer);
    var newBest = T.score > progress.games.trivia;
    if (newBest) { progress.games.trivia = T.score; saveProgress(); }
    updateGameStats();
    $('#triviaPlay').hidden = true;
    $('#triviaEnd').hidden = false;
    $('#triviaFinal').textContent = T.score + ' points';
    $('#triviaMsg').textContent = 'You answered ' + T.correct + ' question' + (T.correct === 1 ? '' : 's') +
      ' correctly. ' + (newBest && T.score > 0 ? '🎉 New best score!' : 'Best score: ' + progress.games.trivia);
    if (newBest && T.score > 0) celebrate();
  }

  /* ---- GAME 2: Word Scramble ---- */
  var S = { words: [], idx: 0, score: 0, total: 8, cur: null, hinted: false, busy: false, nextTimer: null };

  function scrambleWord(w) {
    var s = w, tries = 0;
    do { s = shuffle(w.split('')).join(''); tries++; } while (s === w && tries < 25);
    return s;
  }
  function startScramble() {
    clearTimeout(S.nextTimer);
    S.words = shuffle(SCRAMBLE_WORDS).slice(0, S.total);
    S.idx = 0; S.score = 0;
    $('#scrTotal').textContent = S.words.length;
    $('#scrIntro').hidden = true;
    $('#scrEnd').hidden = true;
    $('#scrPlay').hidden = false;
    loadScrWord();
  }
  function loadScrWord() {
    S.cur = S.words[S.idx];
    S.hinted = false; S.busy = false;
    var letters = $('#scrLetters');
    letters.innerHTML = '';
    scrambleWord(S.cur.word).split('').forEach(function (c, i) {
      var t = document.createElement('span');
      t.className = 'tile';
      t.textContent = c;
      t.style.animationDelay = (i * 0.05) + 's';
      letters.appendChild(t);
    });
    $('#scrRound').textContent = S.idx + 1;
    $('#scrScore').textContent = S.score;
    $('#scrHint').textContent = '💡 Need help? Press the Hint button.';
    $('#scrFeedback').hidden = true;
    var input = $('#scrInput');
    input.value = '';
    input.disabled = false;
    try { input.focus({ preventScroll: true }); } catch (e) { /* ignore */ }
  }
  function nextScr() {
    S.idx++;
    if (S.idx >= S.words.length) endScramble();
    else loadScrWord();
  }
  function checkScramble() {
    if (S.busy || !S.cur) return;
    var input = $('#scrInput');
    var guess = input.value.trim().toUpperCase();
    if (!guess) { showFeedback($('#scrFeedback'), 'info', '✏️ Type your answer first!'); return; }
    if (guess === S.cur.word) {
      S.busy = true;
      var pts = S.hinted ? 5 : 10;
      S.score += pts;
      $('#scrScore').textContent = S.score;
      play('good');
      showFeedback($('#scrFeedback'), 'ok', '🎉 Correct! <b>' + S.cur.word + '</b> (+' + pts + ' points)');
      S.nextTimer = setTimeout(nextScr, 1200);
    } else {
      play('bad');
      showFeedback($('#scrFeedback'), 'no', '💔 Not yet! Try again or use a hint.');
      input.classList.remove('shake');
      void input.offsetWidth;
      input.classList.add('shake');
    }
  }
  function hintScramble() {
    if (S.busy || !S.cur) return;
    S.hinted = true;
    $('#scrHint').textContent = '💡 ' + S.cur.hint + ' (Starts with "' + S.cur.word.charAt(0) + '", ' + S.cur.word.length + ' letters)';
  }
  function skipScramble() {
    if (S.busy || !S.cur) return;
    S.busy = true;
    showFeedback($('#scrFeedback'), 'info', '⏭ The answer was <b>' + S.cur.word + '</b>.');
    S.nextTimer = setTimeout(nextScr, 1400);
  }
  function stopScramble() {
    clearTimeout(S.nextTimer);
    S.busy = false;
    $('#scrPlay').hidden = true;
    $('#scrEnd').hidden = true;
    $('#scrIntro').hidden = false;
  }
  function endScramble() {
    clearTimeout(S.nextTimer);
    var newBest = S.score > progress.games.scramble;
    if (newBest) { progress.games.scramble = S.score; saveProgress(); }
    updateGameStats();
    $('#scrPlay').hidden = true;
    $('#scrEnd').hidden = false;
    $('#scrFinal').textContent = S.score + ' / ' + (S.words.length * 10) + ' points';
    $('#scrMsg').textContent = newBest && S.score > 0 ? '🎉 New best score!' : 'Best score: ' + progress.games.scramble;
    if (newBest && S.score > 0) celebrate();
  }

  /* ---- GAME 3: Memory Match ---- */
  var M = { first: null, lock: false, moves: 0, pairs: 0, time: 0, timer: null, started: false };

  function updateMemHud() {
    $('#memMoves').textContent = M.moves;
    $('#memTime').textContent = M.time;
    $('#memPairs').textContent = M.pairs;
  }
  function resetMemory() {
    clearInterval(M.timer);
    M.first = null; M.lock = false; M.moves = 0; M.pairs = 0; M.time = 0; M.started = false;
    updateMemHud();
    $('#memWin').hidden = true;
    var grid = $('#memGrid');
    grid.innerHTML = '';
    shuffle(MEM_SYMBOLS.concat(MEM_SYMBOLS)).forEach(function (sym) {
      var b = document.createElement('button');
      b.type = 'button';
      b.className = 'mcard';
      b.setAttribute('data-symbol', sym);
      b.setAttribute('aria-label', 'Memory card');
      b.innerHTML = '<span class="card-inner"><span class="face front">🌸</span><span class="face back">' + sym + '</span></span>';
      grid.appendChild(b);
    });
  }
  function onMemClick(e) {
    var c = e.target.closest('.mcard');
    if (!c || M.lock || c.classList.contains('flipped')) return;
    if (!M.started) {
      M.started = true;
      M.timer = setInterval(function () { M.time++; updateMemHud(); }, 1000);
    }
    c.classList.add('flipped');
    if (!M.first) { M.first = c; return; }
    var a = M.first, b = c;
    M.first = null;
    M.moves++;
    if (a.getAttribute('data-symbol') === b.getAttribute('data-symbol')) {
      a.classList.add('matched'); b.classList.add('matched');
      M.pairs++;
      play('good');
      updateMemHud();
      if (M.pairs === MEM_SYMBOLS.length) winMemory();
    } else {
      M.lock = true;
      updateMemHud();
      setTimeout(function () {
        a.classList.remove('flipped'); b.classList.remove('flipped');
        M.lock = false;
      }, 850);
    }
  }
  function winMemory() {
    clearInterval(M.timer);
    var g = progress.games;
    var better = g.memMoves === null || M.moves < g.memMoves || (M.moves === g.memMoves && M.time < g.memTime);
    if (better) { g.memMoves = M.moves; g.memTime = M.time; saveProgress(); }
    updateGameStats();
    showFeedback($('#memWin'), 'ok',
      '🎉 <b>You matched all the pairs!</b> ' + M.moves + ' moves in ' + M.time + ' seconds. ' +
      (better ? '🌟 New best!' : 'Best: ' + g.memMoves + ' moves.'));
    celebrate();
  }

  function bindGames() {
    $$('.game-tab').forEach(function (t) {
      t.addEventListener('click', function () { showGame(t.getAttribute('data-game')); });
    });
    $('#triviaStart').addEventListener('click', startTrivia);
    $('#triviaAgain').addEventListener('click', startTrivia);

    $('#scrStart').addEventListener('click', startScramble);
    $('#scrAgain').addEventListener('click', startScramble);
    $('#scrCheck').addEventListener('click', checkScramble);
    $('#scrHintBtn').addEventListener('click', hintScramble);
    $('#scrSkip').addEventListener('click', skipScramble);
    // Enter only works inside the word box; normal typing is never blocked
    $('#scrInput').addEventListener('keydown', function (e) {
      if (e.key === 'Enter') { e.preventDefault(); checkScramble(); }
    });

    $('#memGrid').addEventListener('click', onMemClick);
    $('#memRestart').addEventListener('click', resetMemory);
  }

  /* =======================================================
     9. START-UP
     ======================================================= */
  ready(function () {
    $('#statLessons').textContent = LESSONS.length;
    $('#statQuestions').textContent = allQuestions().length;

    buildFloaties();
    bindNavigation();
    bindSound();
    bindLessons();
    bindQuiz();
    bindGames();

    updateProgressUI();
    showQuizPicker();
    showGame('trivia');

    var loader = $('#loader');
    setTimeout(function () { loader.classList.add('hide'); }, 1500);
    setTimeout(function () { if (loader.parentNode) loader.parentNode.removeChild(loader); }, 2400);
  });
})();

/* =========================================================================
   ===== BINI MIL UPGRADE: JAVASCRIPT ADDITIONS (paste after your last })(); ) =====
   ========================================================================= */


/* #########################################################################
   SETTINGS AREA 1 of 3  —  BACKGROUND MUSIC
   Replace the text between the quotes with your own MP3 file or link.
   ######################################################################### */
var backgroundMusic = "audio/bini-music.mp3";

var MIL_MUSIC_SETTINGS = {
  title: "BINI Music",              // name shown on the player
  volume: 0.35,                     // starting volume: 0 (silent) to 1 (loudest)
  loop: true,                       // true = repeat forever
  tryAutoplay: true,                // try to start automatically when the site opens
  startOnFirstInteraction: true     // if the browser blocks autoplay, start on the first tap/click
};


/* #########################################################################
   SETTINGS AREA 2 of 3  —  GENERAL SETTINGS
   ######################################################################### */
var MIL_SETTINGS = {
  overlayStrength: 0.82,        // lesson background overlay: 0 = see the picture fully, 1 = hide it
  showReflectionBox: true,      // true = students can type + save a reflection
  hideBrokenExtraImages: false, // false = show a pretty placeholder if an extra picture is missing
  videoStartsMuted: true        // true = MP4 videos start muted (so they don't fight the music)
};


/* #########################################################################
   SETTINGS AREA 3 of 3  —  THE 8 LESSONS  (this is where YOU write things)
   -------------------------------------------------------------------------
   FIELDS (same for every lesson):
     id               keep as is (1 to 8 = the order of your lesson cards)
     title            lesson title (shown on the card and on the lesson page)
     member           the BINI member for this lesson
     image            member picture   (file path OR full https:// link)
     imageFocus       which part of the picture to keep when cropped, e.g.
                      "center top", "center 20%", "center center"
     video            member video/GIF (.gif or .mp4 / .webm)
     background       background picture for this lesson only
     introduction     ✏️ YOUR introduction text
     content          ✏️ YOUR main lesson text
     importantPoints  ✏️ YOUR important points (one per line)
     reflection       ✏️ YOUR reflection questions / text
     additionalImages extra pictures (paths/links). Optional: use
                      { src: "link", caption: "Caption" } to add a caption.

   HOW TO WRITE YOUR TEXT:
     • Paste your text BETWEEN THE TWO BACKTICKS ( ` ` ).
       Backtick key = the key left of the number 1. Do not delete them.
     • Plain text: press Enter TWICE to start a new paragraph.
     • You can also paste HTML (<h3>, <ul>, <b> ...).
     • Put [[image1]] or [[image2]] inside your content to place that
       additional picture right at that spot. Unused pictures appear in a
       gallery under the lesson.
     • Do NOT type a backtick ( ` ) inside your own text.
     • If "content" is left empty, your ORIGINAL lesson text is shown.
   ######################################################################### */
var MIL_LESSONS = [

  /* ---------------- LESSON 1 — AIAH ---------------- */
  {
    id: 1,
    title: "Introduction to Media and Information Literacy",
    member: "Aiah",
    image: "https://media.tenor.com/H5EyUr9uQikAAAAM/bini-bini-ph.gif",
    imageFocus: "center 20%",
    video: "https://media1.tenor.com/m/3MW4pjvLZHQAAAAd/bini-bini-aiah.gif",
    
    background: "https://media1.tenor.com/m/NGjagfHcUkEAAAAd/bini-bini-cherry-on-top.gif",
    introduction: ``,       // ✏️ paste introduction between the backticks
    content: ``,            // ✏️ paste lesson between the backticks
    importantPoints: ``,    // ✏️ paste important points (one per line)
    reflection: `Introduction to Media and Information Literacy
Lesson 1 reflection

Throughout this lesson, I have discovered the importance of Media and Information Literacy (MIL) to our everyday life. I learned that literacy entails the capacity of understanding, interpreting, and communicating information. Information is defined as the knowledge or facts that one acquires from various sources. On the other hand, media includes means through which people communicate including television, radio, computer, and social media.

Furthermore, I discovered information about media literacy, information literacy, and technology literacy. These competencies enable individuals to develop an understanding of media, acquire relevant information and use technology appropriately. From this lesson, I have also realized that the media and technology aid in fastening communication. At the same time, it is important to make responsible use of the media and technology.

My major revelation is that one should always think first before posting or sharing anything on the internet. In addition, one should keep his/her personal information safe, passwords confidential, ask for permission prior to posting anyone else's picture, and create a positive impact using social media.

On the whole, I would say that this lesson helped me to become a responsible media user. As a student, I need to be capable of evaluating information and using technology responsibly.`,         // ✏️ paste reflection between the backticks
    additionalImages: ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLLgQffaH5eiWApJjailV5nxoN0bqwuM6dwzugrdfVxw&s=10", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_wwAY82sCl7cPZGK-I4qD2nWogkN-BB8148Ij0JOZlw&s=10"]
  },

  /* ---------------- LESSON 2 — COLET ---------------- */
  {
    id: 2,
    title: "Media and Information",
    member: "Colet",
    image: "https://media.tenor.com/yfPj0YR8kbUAAAA1/colet-waving-bini-colet-wave.webp",
    imageFocus: "center 20%",
    video: "https://media1.tenor.com/m/C1iyQ_YPawkAAAAd/bini-bini-ph.gif",
    background: "https://media1.tenor.com/m/JDXCl0wSJUAAAAAC/bini-bini-ph.gif",
    introduction: ``,       // ✏️
    content: ``,            // ✏️
    importantPoints: ``,    // ✏️
    reflection: `Lesson 2 Reflection

I learned that media has changed greatly throughout history, from traditional forms to modern digital technology. During the pre-industrial age, people used cave paintings and other simple methods to communicate information and share their experiences. As time passed, new inventions and technological developments made communication faster and easier. Today, we can use the internet, social media, television, and other digital platforms to access information and communicate with people around the world.

I also learned that media plays an important role in our daily lives, especially in education, communication, and entertainment. However, we should use media responsibly by checking the accuracy of information and managing our screen time. This lesson helped me appreciate how media has evolved and understand the importance of being a responsible and informed media user.

The Industrial Age, Electronic Age, and Information Age show how technology has continuously changed our lives. During the Industrial Age, machines made work faster and improved production. In the Electronic Age, inventions such as radios, televisions, and computers made communication and access to information easier. Today, in the Information Age, the internet and social media allow people to communicate, learn, and share information instantly.

These developments have made our lives more convenient and connected, but they also remind us to use technology responsibly. We must be careful about misinformation, privacy, and spending too much time on our devices. For me, technology is a powerful tool that can help us learn, work, and connect with others, as long as we use it wisely and positively.`,         // ✏️
    additionalImages: ["https://i.pinimg.com/736x/bc/dc/34/bcdc34332c1d369778c1f8dffcf68a0a.jpg", "https://i.pinimg.com/736x/8e/fa/f7/8efaf778521ea3f132a59221e3a92109.jpg"]
  },

  /* ---------------- LESSON 3 — MALOI ---------------- */
  {
    id: 3,
    title: "Types of Media",
    member: "Maloi",
    image: "https://media.tenor.com/qLhlG5GOHFYAAAA1/bini-bini-ph.webp",
    imageFocus: "center 20%",
    video: "https://media1.tenor.com/m/67o0ICdoNrcAAAAC/bini-bini-ph.gif",
    background: "https://media1.tenor.com/m/vNSYYk2-lcYAAAAd/bini-bini-cherry-on-top.gif",
    introduction: ``,       // ✏️
    content: ``,            // ✏️
    importantPoints: ``,    // ✏️
    reflection: `lesson 3 Reflection

The lesson on the different types of media helped us understand how information is communicated through various platforms in our daily lives. We learned that media can be classified into print media, broadcast media, and new media, each serving a unique purpose in sharing information and connecting people. Print media includes books, newspapers, magazines, and other printed materials, while broadcast media uses radio and television to deliver information to a wide audience. New media, on the other hand, utilizes digital technologies and the internet to provide fast, interactive, and easily accessible content.

What we found most interesting is how media has evolved from traditional forms to modern digital platforms. The discussion about visual media, photography, infographics, and multimedia showed us that communication is not limited to text alone. Images, videos, audio, and graphic designs can enhance understanding and make information more engaging. We also learned about media convergence, where different forms of media are combined into a single device, such as a smartphone, making communication more convenient and efficient.

Overall, this lesson increased our awareness of the media we use every day and helped us become more responsible and critical consumers of information. Understanding the different types of media will help us communicate effectively, evaluate information carefully, and adapt to the continuously changing digital world.`,         // ✏️
    additionalImages: ["https://i.pinimg.com/736x/52/80/fd/5280fd8a7faaccdd27b3fe031f6df124.jpg", "https://i.pinimg.com/1200x/3c/a3/19/3ca3197e887c8b1285a4a8ad4ed80d04.jpg"]
  },

  /* ---------------- LESSON 4 — GWEN ---------------- */
  {
    id: 4,
    title: "Media Languages",
    member: "Gwen",
    image: "https://media.tenor.com/VLINJIw7SJoAAAAM/bini-bini-ph.gif",
    imageFocus: "center 20%",
    video: "https://media1.tenor.com/m/kGQGyV7jh6sAAAAd/bini-bini-ph.gif",
    background: "https://media1.tenor.com/m/JzrV8ZSDLMYAAAAC/gwen-bini-gwen.gif",
    introduction: ``,       // ✏️
    content: ``,            // ✏️
    importantPoints: ``,    // ✏️
    reflection: `lesson 4 reflection

Throughout this lesson, I have discovered the importance of media and information sources to our everyday life. I learned that finding reliable information requires knowing where to look among diverse channels. The three main sources of information include indigenous knowledge, libraries, and the internet. Furthermore, sources of information are classified into primary, secondary, and tertiary levels depending on how original or analyzed the material is.

Furthermore, I discovered the deep value of indigenous knowledge as a sustainable system rooted in local conditions, respect for nature, and community responsibility. I also learned about how libraries operate through specialized user, technical, computer, and administrative services, as well as how the internet functions as a global network of interconnected computers. From this lesson, I have also realized that each tier of information serves a specific purpose—from raw primary documents like artifacts and diaries to analytical secondary sources and organized tertiary references. At the same time, it is important to carefully evaluate the credibility and origin of the sources we use.

My major revelation is that we should never take information for granted or rely on a single channel without checking its reliability. In addition, one should respect traditional wisdom, trace research back to its original sources, recognize the difference between raw evidence and interpretations, and use this knowledge to become more discerning students.

On the whole, I would say that this lesson helped me to become a more responsible researcher and media user. As a student, I need to be capable of identifying reliable sources and utilizing both traditional and modern information gateways wisely.`,         // ✏️
    additionalImages: ["https://i.pinimg.com/736x/36/67/2b/36672be514b297a20d6c45ed8d8e0d3a.jpg", "https://i.pinimg.com/736x/a6/30/56/a63056d0f5f8e9306a4a1bad32d748d7.jpg"]
  },

  /* ---------------- LESSON 5 — STACEY ---------------- */
  {
    id: 5,
    title: "Media Codes and Conventions",
    member: "Stacey",
    image: "https://media1.tenor.com/m/WVvZFo6Vu_kAAAAC/bini-bini-ph.gif",
    imageFocus: "center 20%",
    video: "https://media1.tenor.com/m/oei2xwV8IQUAAAAC/bini-bini-ph.gif",
    background: "https://media1.tenor.com/m/T2eb7AKUiIQAAAAd/bini-bini-cherry-on-top.gif",
    introduction: ``,       // ✏️
    content: ``,            // ✏️
    importantPoints: ``,    // ✏️
    reflection: `Lesson 5 Reflection

What I learned from this lesson about Audio Information and Media. I learned that audio is more than just an important form of communication. It allows people to share their information, ideas, emotions, and experiences through different audio tools and media. This lesson helped me learn and understand different types of audio files, ways of storing audio, and the various formats of using it in technology today.

I also learned that audio media includes different types of audio forms such as radio broadcasts, music, sound recordings, sound effects, and podcasts, which are used to inform, educate, and entertain people. These examples showed me how audio is presented in our everyday lives and how it helps connect people through sound.

The lesson also taught me the difference between hearing and listening. Hearing happens naturally, but listening requires concentration and understanding of your surroundings. This made me realize that being a good listener is important because it helps me learn more effectively and communicate better with others.

Overall i would say that this lesson helped me become a more informed and responsible user of audio media. It taught me the value of active listening, the proper use of different audio formats, and the importance of audio in education, communication, and entertainment.`,         // ✏️
    additionalImages: ["https://i.pinimg.com/736x/aa/0c/c5/aa0cc5380f3e5c5aaa0a44da863dcb37.jpg", "https://i.pinimg.com/736x/f8/5f/06/f85f06cc6a159104dceb69d8b2d6345a.jpg"]
  },

  /* ---------------- LESSON 6 — MIKHA ---------------- */
  {
    id: 6,
    title: "Media Effects and Influence",
    member: "Mikha",
    image: "https://media.tenor.com/vV6y1UEGTYMAAAAM/bini-bini-ph.gif",
    imageFocus: "center 20%",
    video: "https://media1.tenor.com/m/p1VQriCYN6UAAAAC/bini-bikini.gif",
    background: "https://media1.tenor.com/m/ufmyzVGJ3LIAAAAd/bini-bini-cherry-on-top.gif",
    introduction: ``,       // ✏️
    content: ``,            // ✏️
    importantPoints: ``,    // ✏️
    reflection: `lesson 6 

The lesson on Legal, Ethical, and Societal Issues in Media and Information helped us understand our rights and responsibilities as digital citizens in today's technology-driven world. We learned that while the internet provides many opportunities to access and share information, it also requires us to act responsibly and ethically. Topics such as intellectual property, fair use, netiquette, digital footprints, computer addiction, and cyberbullying highlighted the importance of respecting others and making informed decisions online.

One of the most important lessons we gained was the value of intellectual property and the need to respect the work of creators. We learned about copyrights, patents, trademarks, and other forms of intellectual property that protect original creations from unauthorized use. Understanding fair use also taught us that copyrighted materials can only be used under specific conditions and for certain purposes, such as education, research, and criticism.

We also realized the importance of practicing proper netiquette and maintaining a positive digital presence. The lesson reminded us that behind every online account is a real person who deserves respect and kindness. Being mindful of our digital footprint, respecting privacy, and avoiding harmful behaviors such as cyberbullying can help create a safer and more responsible online environment.

Overall, this lesson increased our awareness of the ethical and legal issues surrounding the use of media and information. It encouraged us to become responsible users of technology, respect the rights of others, and use digital platforms in a way that promotes safety, respect, and integrity.`,         // ✏️
    additionalImages: ["https://i.pinimg.com/1200x/ca/11/9d/ca119d3ade522e1973059e0f4763addb.jpg", "https://i.pinimg.com/736x/6f/8b/2f/6f8b2f9ed3236ff6dd292ca64b18f294.jpg"]
  },

  /* ---------------- LESSON 7 — JHOANNA ---------------- */
  {
    id: 7,
    title: "Responsible Use of Media and Information",
    member: "Jhoanna",
    image: "https://media1.tenor.com/m/sCJNjSHRZXgAAAAC/bini-bini-ph.gif",
    imageFocus: "center 20%",
    video: "https://media1.tenor.com/m/LyIj2kuQu-EAAAAd/bini-bini-ph.gif",
    background: "https://media1.tenor.com/m/2wJXRdsHtEMAAAAd/bini-bini-cherry-on-top.gif",
    introduction: ``,       // ✏️
    content: ``,            // ✏️
    importantPoints: ``,    // ✏️
    reflection: `lesson 7 Reflection

The lesson on Opportunities, Challenges, and Power of Media and Information helped us understand how media and technology greatly influence our daily lives. We learned that media and information literacy provide access to knowledge and opportunities that can support education, communication, and personal growth. The internet has made it easier for us to gather information, conduct research, and participate in various online activities such as online learning, shopping, and citizen journalism.

We also learned that while media offers many opportunities, it also presents several challenges and risks. Issues such as age-inappropriate content, privacy invasion, identity theft, phishing, and the spread of illegal content remind us to be cautious and responsible when using digital platforms. Understanding these challenges helped us realize the importance of protecting our personal information and making wise decisions online.

Another important lesson was the power of media to influence education, society, the economy, and even politics. Media can enhance learning, create business opportunities, spread important information, and connect people from different places. However, we also recognized that media can be misused through fake news, piracy, and other forms of cybercrime. Because of this, it is important for us to think critically about the information we encounter and share.

Overall, this lesson increased our awareness of both the benefits and responsibilities that come with using media and information. It encouraged us to use technology wisely, take advantage of its opportunities, and remain vigilant against its challenges so that we can become responsible and informed digital citizens.`,         // ✏️
    additionalImages: ["https://i.pinimg.com/736x/7c/fc/59/7cfc59aaac67b5c42d38bbded4ba9ceb.jpg", "https://i.pinimg.com/736x/1d/61/32/1d6132a187d436c4895f29685806c82b.jpg"]
  },

  /* ---------------- LESSON 8 — SHEENA ---------------- */
  {
    id: 8,
    title: "Digital Citizenship",
    member: "Sheena",
    image: "https://media1.tenor.com/m/fFvQlLpZy_wAAAAd/bini-bini-ph.gif",
    imageFocus: "center 20%",
    video: "https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExNjFzZ2JlMWJkdGM5OXp4dXdhcWZrbHNtN3Fpc2ZvOHI2NWV1N256aSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/kFObdxNV8fHzjjFQPx/giphy.gif",
    background: "https://media1.tenor.com/m/x-g5CTbgQicAAAAd/bini-bini-cherry-on-top.gif",
    introduction: ``,       // ✏️
    content: ``,            // ✏️
    importantPoints: ``,    // ✏️
    reflection: `lesson 8

The lesson on Current and Future Trends in Media and Information helped us understand how technology continues to evolve and shape the way people communicate, learn, and interact with the world. We learned about emerging technologies such as artificial intelligence, haptics technology, voice and tone recognition, eye-tracking technology, internet glasses, and 3D environments. These innovations demonstrate how media and information are becoming more advanced, interactive, and accessible in everyday life.

One of the most interesting parts of the lesson was learning how future technologies may change the way we use digital devices. We discovered that technologies such as internet glasses, contextual awareness, and intelligent routing systems could make communication, navigation, and access to information faster and more efficient. These developments showed us how technology can improve different areas of society, including education, healthcare, security, and transportation.

We also learned about Massive Open Online Courses (MOOCs), which provide educational opportunities to people around the world through online platforms. MOOCs make learning more accessible by allowing students to study at their own pace and gain knowledge from leading universities and experts. This helped us realize that technology has expanded access to education and created new opportunities for lifelong learning.

Overall, this lesson increased our awareness of the future direction of media and information technology. It encouraged us to stay informed about technological advancements and to use these innovations responsibly. As technology continues to evolve, it is important for us to adapt, develop our digital skills, and make the most of the opportunities that modern media and information systems provide.`,         // ✏️
    additionalImages: ["https://i.pinimg.com/1200x/c2/e0/91/c2e0915018ad732887c4005b3b58b61e.jpg", "https://i.pinimg.com/736x/e8/13/c5/e813c549fdaf4336ec9a76760d4860e7.jpg"]
  }

];


/* #########################################################################
   ENGINE — DO NOT EDIT BELOW THIS LINE (it reads the settings above)
   ######################################################################### */
(function () {
  'use strict';

  var PALETTE = [
    ['#ff8cc6', '#c39bff'], ['#c39bff', '#7cc4ff'], ['#ffb3d9', '#a9d8ff'], ['#9b6bff', '#ff8cc6'],
    ['#7cc4ff', '#ff8cc6'], ['#ff6fb5', '#9b6bff'], ['#a9d8ff', '#c39bff'], ['#ffb3d9', '#9b6bff']
  ];
  var REFL_KEY = 'biniMIL_reflections_v1';
  var photoCache = {};
  var bgToken = 0;
  var currentN = 1;

  /* ---------- helpers ---------- */
  function $(s, r) { return (r || document).querySelector(s); }
  function $$(s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); }
  function ready(fn) {
    if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', fn);
    else fn();
  }
  function trim(s) { return String(s == null ? '' : s).replace(/^\s+|\s+$/g, ''); }
  function esc(s) {
    return String(s).replace(/[&<>"']/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
    });
  }
  function looksLikeHTML(s) { return /<[a-z][\s\S]*>/i.test(s); }
  function isArray(a) { return Object.prototype.toString.call(a) === '[object Array]'; }
  function settings() { return (typeof MIL_SETTINGS === 'object' && MIL_SETTINGS) || {}; }
  function lessonList() { return (typeof MIL_LESSONS !== 'undefined' && isArray(MIL_LESSONS)) ? MIL_LESSONS : []; }
  function cfg(n) {
    var L = lessonList();
    for (var i = 0; i < L.length; i++) { if (L[i].id === n) return L[i]; }
    return L[n - 1] || null;
  }
  function grad(n) {
    var p = PALETTE[(n - 1) % PALETTE.length];
    return 'linear-gradient(135deg,' + p[0] + ',' + p[1] + ')';
  }
  // Plain text -> paragraphs. HTML is kept as it is.
  function fmt(t) {
    t = trim(t);
    if (!t) return '';
    if (looksLikeHTML(t)) return t;
    return t.split(/\n\s*\n/).map(function (p) {
      return '<p>' + esc(trim(p)).replace(/\n/g, '<br>') + '</p>';
    }).join('');
  }
  function pointsHTML(p) {
    var items;
    if (isArray(p)) { items = p; }
    else {
      var s = trim(p);
      if (!s) return '';
      if (looksLikeHTML(s)) return s;
      items = s.split(/\n+/);
    }
    var out = '';
    items.forEach(function (it) {
      var t = trim(it).replace(/^[-•*]+\s*/, '');
      if (t) out += '<li>' + esc(t) + '</li>';
    });
    return out ? '<ul>' + out + '</ul>' : '';
  }

  /* ---------- member photo (with placeholder) ---------- */
  function makePhoto(c, n) {
    var wrap = document.createElement('div');
    wrap.className = 'mil-photo';
    function placeholder() {
      wrap.innerHTML = '';
      var ph = document.createElement('div');
      ph.className = 'mil-photo-ph';
      ph.style.background = grad(n);
      ph.innerHTML = '<span class="mil-ph-letter"></span><small></small>';
      ph.firstChild.textContent = (c.member || 'B').charAt(0);
      ph.lastChild.textContent = c.member || 'BINI';
      wrap.appendChild(ph);
    }
    var src = trim(c.image);
    if (!src) { placeholder(); return wrap; }
    var img = document.createElement('img');
    img.alt = (c.member || 'BINI member') + ' photo';
    img.loading = 'lazy';
    if (trim(c.imageFocus)) img.style.objectPosition = trim(c.imageFocus);
    img.onerror = placeholder;
    img.src = src;
    wrap.appendChild(img);
    return wrap;
  }

  /* ---------- extra pictures ---------- */
  function makeFigure(it) {
    var o = (typeof it === 'string') ? { src: it, caption: '' } : (it || {});
    var src = trim(o.src);
    if (!src) return null;
    var fig = document.createElement('figure');
    fig.className = 'mil-fig';
    var frame = document.createElement('div');
    frame.className = 'mil-fig-frame';
    var img = document.createElement('img');
    img.alt = trim(o.caption) || 'Lesson picture';
    img.loading = 'lazy';
    img.onerror = function () {
      if (settings().hideBrokenExtraImages) { fig.style.display = 'none'; }
      else { frame.innerHTML = '<div class="mil-fig-ph">📷<small>Picture coming soon</small></div>'; }
    };
    img.src = src;
    frame.appendChild(img);
    fig.appendChild(frame);
    if (trim(o.caption)) {
      var cap = document.createElement('figcaption');
      cap.textContent = trim(o.caption);
      fig.appendChild(cap);
    }
    return fig;
  }

  /* =======================================================
     1. PHOTOS ON THE LESSON CARDS
     ======================================================= */
  function enhanceCards() {
    $$('#lessonGrid .lesson-card').forEach(function (card, i) {
      var n = i + 1, c = cfg(n);
      if (!c || card.getAttribute('data-mil')) return;
      card.setAttribute('data-mil', '1');
      if (!photoCache[n]) {
        var box = document.createElement('div');
        box.className = 'mil-card-photo';
        box.appendChild(makePhoto(c, n));
        var tag = document.createElement('span');
        tag.className = 'mil-card-member';
        tag.textContent = '💖 ' + (c.member || 'BINI');
        box.appendChild(tag);
        photoCache[n] = box;
      }
      card.insertBefore(photoCache[n], card.firstChild);
      var h = $('h3', card);
      if (h && trim(c.title)) h.textContent = trim(c.title);
    });
  }

  /* =======================================================
     2. LESSON READER (magazine layout) — built once
     ======================================================= */
  function goLesson(n) {
    var btn = $$('#lessonGrid [data-lesson]')[n - 1];
    if (btn) btn.click();   // uses your original "Read Lesson" button
  }

  function ensureLayout() {
    var r = $('#lessonReader');
    if (!r || r.getAttribute('data-mil')) return;
    r.setAttribute('data-mil', '1');
    r.classList.add('mil-reader');

    var body = $('#readerBody', r);
    var head = $('.reader-head', r);
    var actions = $('.reader-actions', r);
    var icon = $('#readerIcon', r);
    var textBox = $('div', head);

    // background layer
    var bg = document.createElement('div');
    bg.className = 'mil-bg';
    bg.setAttribute('aria-hidden', 'true');
    r.insertBefore(bg, r.firstChild);

    // member portrait (your emoji icon becomes a little badge on it)
    var por = document.createElement('div');
    por.className = 'mil-portrait';
    var porImg = document.createElement('div');
    porImg.id = 'milPortraitImg';
    por.appendChild(porImg);
    por.appendChild(icon);
    head.insertBefore(por, head.firstChild);

    var feat = document.createElement('span');
    feat.id = 'milFeature';
    feat.className = 'mil-feature';
    textBox.appendChild(feat);

    // two columns: lesson (left) + member media (right)
    var grid = document.createElement('div');
    grid.className = 'mil-grid';
    var main = document.createElement('div');
    main.className = 'mil-main';
    var side = document.createElement('aside');
    side.className = 'mil-side';
    side.setAttribute('aria-label', 'Member spotlight');
    grid.appendChild(main);
    grid.appendChild(side);
    r.insertBefore(grid, body);

    main.innerHTML = '<div class="mil-intro" id="milIntro" hidden></div>';
    main.appendChild(body);
    main.insertAdjacentHTML('beforeend',
      '<div class="mil-gallery" id="milGallery" hidden></div>' +
      '<div class="mil-points" id="milPoints" hidden></div>');
    side.innerHTML =
      '<div class="mil-media"><div class="mil-media-inner" id="milMediaInner"></div></div>' +
      '<p class="mil-media-cap" id="milMediaCap"></p>';

    // reflection card (above the buttons)
    var refl = document.createElement('section');
    refl.className = 'mil-reflection';
    refl.id = 'milReflection';
    r.insertBefore(refl, actions);

    // Previous / Next buttons (added to your existing button row)
    var prev = document.createElement('button');
    prev.type = 'button'; prev.id = 'milPrev'; prev.className = 'btn btn-ghost';
    prev.textContent = '← Previous Lesson';
    var next = document.createElement('button');
    next.type = 'button'; next.id = 'milNext'; next.className = 'btn btn-ghost';
    next.textContent = 'Next Lesson →';
    actions.insertBefore(next, actions.firstChild);
    actions.insertBefore(prev, actions.firstChild);
    prev.addEventListener('click', function () { goLesson(currentN - 1); });
    next.addEventListener('click', function () { goLesson(currentN + 1); });
  }

  /* ---------- video / GIF ---------- */
  function clearMedia() {
    var box = $('#milMediaInner');
    if (!box) return;
    var v = box.querySelector('video');
    if (v) { try { v.pause(); v.removeAttribute('src'); v.load(); } catch (e) { /* ignore */ } }
    box.innerHTML = '';
  }
  /* ---------- VIDEO / GIF / TIKTOK SPOTLIGHT ---------- */

function setMedia(c, n) {
  var inner = $('#milMediaInner');
  clearMedia();

  function placeholder() {
    clearMedia();

    var d = document.createElement('div');
    d.className = 'mil-media-ph';
    d.style.background = grad(n);
    d.innerHTML = '<span class="mil-ph-big">🎬</span><b></b><small>Coming soon ✨</small>';

    d.querySelector('b').textContent =
      (c.member || 'BINI') + "'s spotlight";

    inner.appendChild(d);
  }

  var src = trim(c.video);

  if (!src) {
    placeholder();
    return;
  }

  // TIKTOK VIDEO SUPPORT
  var tiktokMatch = src.match(
    /tiktok\.com\/(?:@[^/]+\/video\/|embed\/v2\/)(\d+)/
  );

  if (tiktokMatch) {
    var iframe = document.createElement('iframe');

   iframe.src = 'https://www.tiktok.com/embed/v2/' + tiktokMatch[1];
    iframe.title = (c.member || 'BINI') + ' spotlight video';
    iframe.width = '100%';
    iframe.height = '600';
    iframe.style.border = '0';
    iframe.allow = 'fullscreen';
    iframe.allowFullscreen = true;
    iframe.loading = 'lazy';

    inner.appendChild(iframe);
    return;
  }

  // MP4 VIDEO SUPPORT
  if (/\.(mp4|webm|ogv|ogg|mov|m4v)(\?|#|$)/i.test(src)) {
    var v = document.createElement('video');

    v.controls = true;
    v.loop = true;
    v.autoplay = true;
    v.preload = 'metadata';
    v.setAttribute('playsinline', '');

    if (settings().videoStartsMuted !== false) {
      v.defaultMuted = true;
      v.muted = true;
    }

    v.addEventListener('error', placeholder);

    v.src = src;
    inner.appendChild(v);

    var p = v.play();

    if (p && typeof p.catch === 'function') {
      p.catch(function () {});
    }

    return;
  }

  // GIF / IMAGE SUPPORT
  var img = document.createElement('img');

  img.alt = (c.member || 'BINI') + ' GIF';
  img.onerror = placeholder;
  img.src = src;

  inner.appendChild(img);
}

  /* ---------- background (only this lesson, not the whole site) ---------- */
  function setBackground(r, c, n) {
    var bg = $('.mil-bg', r);
    var ov = settings().overlayStrength;
    r.style.setProperty('--mil-ov', (typeof ov === 'number') ? ov : 0.82);
    var token = ++bgToken;
    bg.classList.remove('on');
    var url = trim(c.background);
    function fallback() {
      if (token !== bgToken) return;
      bg.style.backgroundImage = grad(n);
      setTimeout(function () { if (token === bgToken) bg.classList.add('on'); }, 30);
    }
    if (!url) { fallback(); return; }
    var probe = new Image();
    probe.onload = function () {
      if (token !== bgToken) return;
      bg.style.backgroundImage = 'url("' + url.replace(/"/g, '%22') + '")';
      setTimeout(function () { if (token === bgToken) bg.classList.add('on'); }, 30);
    };
    probe.onerror = fallback;
    probe.src = url;
  }

  /* ---------- reflection (saved in localStorage) ---------- */
  function loadReflections() {
    try { return JSON.parse(localStorage.getItem(REFL_KEY)) || {}; } catch (e) { return {}; }
  }
  function saveReflection(n, text) {
    var all = loadReflections();
    all[n] = text;
    try { localStorage.setItem(REFL_KEY, JSON.stringify(all)); return true; } catch (e) { return false; }
  }
  function renderReflection(c, n) {
    var box = $('#milReflection');
    var prompt = fmt(c.reflection);
    var html = '<div class="mil-refl-head"><span aria-hidden="true">💭</span><div><h3>Reflection</h3><small></small></div></div>';
    if (prompt) html += '<div class="mil-refl-text">' + prompt + '</div>';
    var showBox = settings().showReflectionBox !== false;
    if (showBox) {
      html += '<label class="mil-refl-label" for="milReflText">✍️ My Reflection</label>' +
        '<textarea id="milReflText" class="mil-refl-input" rows="6" placeholder="Write your thoughts here..."></textarea>' +
        '<div class="mil-refl-actions">' +
        '<button type="button" class="btn" id="milReflSave">💾 Save Reflection</button>' +
        '<span class="mil-refl-status" id="milReflStatus" aria-live="polite"></span></div>';
    }
    box.innerHTML = html;
    $('small', box).textContent = 'Lesson ' + n + ' · with ' + (c.member || 'BINI');
    if (!showBox) return;
    var ta = $('#milReflText'), st = $('#milReflStatus'), btn = $('#milReflSave');
    var saved = loadReflections()[n];
    if (saved) { ta.value = saved; st.textContent = '✅ Your saved reflection is loaded.'; }
    ta.addEventListener('input', function () { st.textContent = '✏️ Not saved yet…'; });
    btn.addEventListener('click', function () {
      var ok = saveReflection(n, ta.value);
      var t = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
      st.textContent = ok ? '💾 Saved at ' + t + '!' : '⚠ Could not save in this browser.';
    });
  }

  /* ---------- fill the reader for the lesson that is open ---------- */
  function refresh() {
    var r = $('#lessonReader');
    if (!r) return;
    if (r.hidden) { clearMedia(); return; }      // lesson closed: stop any video
    ensureLayout();

    var tagEl = $('#readerTag');
    var m = /(\d+)/.exec(tagEl ? tagEl.textContent : '');
    var n = m ? parseInt(m[1], 10) : 1;
    var c = cfg(n);
    if (!c) return;
    currentN = n;
    var total = $$('#lessonGrid [data-lesson]').length;

    if (trim(c.title)) $('#readerTitle').textContent = trim(c.title);
    $('#milFeature').textContent = '✨ Featuring ' + (c.member || 'BINI');
    var pi = $('#milPortraitImg');
    pi.innerHTML = '';
    pi.appendChild(makePhoto(c, n));
    setBackground(r, c, n);

    // introduction
    var introHTML = fmt(c.introduction);
    var introEl = $('#milIntro');
    introEl.innerHTML = introHTML;
    introEl.hidden = !introHTML;

    // main content (+ pictures placed with [[image1]] tokens)
    var imgs = isArray(c.additionalImages) ? c.additionalImages : [];
    var used = {};
    if (trim(c.content)) {
      var bodyEl = $('#readerBody');
      bodyEl.innerHTML = fmt(c.content).replace(/\[\[\s*image\s*(\d+)\s*\]\]/gi, function (all, d) {
        return '<span class="mil-slot" data-i="' + (parseInt(d, 10) - 1) + '"></span>';
      });
      $$('.mil-slot', bodyEl).forEach(function (slot) {
        var i = parseInt(slot.getAttribute('data-i'), 10);
        var par = slot.parentNode;
        var fig = imgs[i] ? makeFigure(imgs[i]) : null;
        if (!fig) { par.removeChild(slot); return; }
        used[i] = true;
        if (par.tagName === 'P' && par.childNodes.length === 1) par.parentNode.replaceChild(fig, par);
        else par.replaceChild(fig, slot);
      });
    }

    // gallery = additional pictures not used inside the content
    var gal = $('#milGallery');
    gal.innerHTML = '';
    var gridEl = document.createElement('div');
    gridEl.className = 'mil-gallery-grid';
    var count = 0;
    imgs.forEach(function (it, i) {
      if (used[i]) return;
      var f = makeFigure(it);
      if (f) { gridEl.appendChild(f); count++; }
    });
    if (count) {
      gal.innerHTML = '<h4>📸 Photo Gallery</h4>';
      gal.appendChild(gridEl);
    }
    gal.hidden = !count;

    // important points
    var pts = pointsHTML(c.importantPoints);
    var ptsEl = $('#milPoints');
    ptsEl.innerHTML = pts ? '<h4>⭐ Important Points</h4>' + pts : '';
    ptsEl.hidden = !pts;

    // member video / GIF
    setMedia(c, n);
    $('#milMediaCap').textContent = '🎬 ' + (c.member || 'BINI') + ' · Lesson ' + n + ' spotlight';

    renderReflection(c, n);

    $('#milPrev').disabled = n <= 1;
    $('#milNext').disabled = n >= total;

    // soft fade when switching lessons
    ['.mil-main', '.mil-side'].forEach(function (sel) {
      var el = $(sel, r);
      el.classList.remove('mil-in');
      void el.offsetWidth;
      el.classList.add('mil-in');
    });
  }

  /* =======================================================
     3. BACKGROUND MUSIC PLAYER
     ======================================================= */
  function initMusic() {
    var audio = $('#milBgm'), box = $('#milMusic');
    if (!audio || !box) return;
    var playBtn = $('#milPlayBtn'), pauseBtn = $('#milPauseBtn'), muteBtn = $('#milMuteBtn');
    var vol = $('#milVolume'), status = $('#milMusicStatus'), minBtn = $('#milMusicMin');
    var set = (typeof MIL_MUSIC_SETTINGS === 'object' && MIL_MUSIC_SETTINGS) || {};
    var KEY = 'biniMIL_music_v1';
    var st = { volume: (typeof set.volume === 'number') ? set.volume : 0.35, muted: false };
    try {
      var saved = JSON.parse(localStorage.getItem(KEY));
      if (saved && typeof saved === 'object') {
        if (typeof saved.volume === 'number') st.volume = Math.min(1, Math.max(0, saved.volume));
        st.muted = !!saved.muted;
      }
    } catch (e) { /* ignore */ }
    function save() { try { localStorage.setItem(KEY, JSON.stringify(st)); } catch (e) { /* ignore */ } }

    var blocked = false, broken = false, userPaused = false;
    if (set.title) $('#milMusicTitle').textContent = set.title;

    audio.loop = set.loop !== false;
    audio.volume = st.volume;
    audio.muted = st.muted;
    vol.value = Math.round(st.volume * 100);

    if (typeof backgroundMusic === 'string' && trim(backgroundMusic)) audio.src = trim(backgroundMusic);
    else broken = true;

    function ui() {
      var playing = !audio.paused && !audio.ended;
      var muted = audio.muted || audio.volume === 0;
      box.classList.toggle('is-playing', playing);
      box.classList.toggle('need-click', blocked && !playing && !broken);
      if (blocked && !playing && !broken) box.classList.remove('mil-min');
      playBtn.disabled = playing || broken;
      pauseBtn.disabled = !playing;
      muteBtn.textContent = muted ? '🔇 Unmute' : '🔊 Mute';
      minBtn.textContent = box.classList.contains('mil-min') ? '+' : '–';
      minBtn.setAttribute('aria-expanded', box.classList.contains('mil-min') ? 'false' : 'true');
      if (broken) status.textContent = 'Music file not found';
      else if (playing) status.textContent = muted ? '♪ Playing (muted)' : '♪ Now playing';
      else if (userPaused) status.textContent = 'Paused';
      else if (blocked) status.textContent = 'Tap ▶ Play Music to start 🎵';
      else status.textContent = 'Ready to play';
    }

    function play() {
      if (broken) return;
      userPaused = false;
      var p;
      try { p = audio.play(); } catch (e) { p = null; }
      if (p && typeof p.then === 'function') {
        p.then(function () { blocked = false; ui(); }, function (err) {
          if (err && err.name === 'NotAllowedError') blocked = true;
          else if (err && err.name === 'NotSupportedError') broken = true;
          ui();
        });
      }
    }

    // browsers may block autoplay with sound: start on the first tap/click instead
    var evs = ['click', 'touchend', 'keydown'];
    function off() { evs.forEach(function (n) { document.removeEventListener(n, kick, true); }); }
    function kick(e) {
      if (e && e.target && box.contains(e.target)) return;   // the player's own buttons do their own job
      if (userPaused || broken) return;
      if (!audio.paused) { off(); return; }
      play();
    }
    if (set.startOnFirstInteraction !== false) {
      evs.forEach(function (n) { document.addEventListener(n, kick, true); });
      audio.addEventListener('playing', off);
    }

    audio.addEventListener('playing', function () { blocked = false; ui(); });
    audio.addEventListener('play', ui);
    audio.addEventListener('pause', ui);
    audio.addEventListener('ended', ui);
    audio.addEventListener('error', function () {
      broken = true;
      ui();
      if (window.console) console.warn('BINI MIL: could not load the music file. Check backgroundMusic in the JavaScript.');
    });

    playBtn.addEventListener('click', play);
    pauseBtn.addEventListener('click', function () { userPaused = true; audio.pause(); off(); ui(); });
    muteBtn.addEventListener('click', function () {
      if (audio.muted || audio.volume === 0) {
        audio.muted = false;
        if (audio.volume === 0) audio.volume = 0.35;
      } else { audio.muted = true; }
      vol.value = Math.round(audio.volume * 100);
      st.volume = audio.volume; st.muted = audio.muted; save(); ui();
    });
    vol.addEventListener('input', function () {
      var v = vol.value / 100;
      audio.volume = v;
      if (v > 0) audio.muted = false;
      st.volume = v; st.muted = audio.muted; save(); ui();
    });
    minBtn.addEventListener('click', function () { box.classList.toggle('mil-min'); ui(); });

    ui();
    if (set.tryAutoplay !== false) play();
  }

  /* =======================================================
     START-UP (runs after your original code has started)
     ======================================================= */
  ready(function () {
    enhanceCards();
    var grid = $('#lessonGrid');
    if (grid && window.MutationObserver) {
      new MutationObserver(enhanceCards).observe(grid, { childList: true });
    }
    var reader = $('#lessonReader'), tagEl = $('#readerTag');
    if (reader && tagEl && window.MutationObserver) {
      var mo = new MutationObserver(refresh);
      mo.observe(reader, { attributes: true, attributeFilter: ['hidden'] });
      mo.observe(tagEl, { childList: true, characterData: true, subtree: true });
    }
    initMusic();
  });
})();

/* ================================
   BINI MIL - OUR 9 MEMBERS
================================ */

// EDIT YOUR MEMBERS' INFORMATION HERE

const groupMembers = [
  {
    name: "Member 1",
    role: "Group Leader",
    photo: "https://lh3.google.com/u/0/d/1D9zbpo0JYLL5d7_598GpLALCIj_9bVJl=w1920-h911-iv1?auditContext=forDisplay",
    nickname: "Vince Pogi",
    age: "17",
    hobbies: "Computer, Gaming,Movies/Films",
    talent: "Research weird facts",
    contribution: "Modifier",
    bio: "I love turtle and banana, also Aang is Better than Korra",
    quote: "When we hit our lowest point, We are open to greater change"
  },
  {
    name: "Member 2",
    role: "Member",
    photo: "https://lh3.google.com/u/0/d/1M3hAEjays1Oxay4uj_bJfPbP2ndbGxqH=w1920-h911-iv1?auditContext=prefetch",
    nickname: "Aper",
    age: "18",
    hobbies: "Listening music, Playing volleyball",
    talent: "Singing, Dancing, Writing a poem, Playing piano, Writing a stories",
    contribution: "Creator",
    bio: "I am the youngest of my siblings and I have the most rewards among my siblings",
    quote: "Life is short, so always choose to be happy"
  },
  {
    name: "Member 3",
    role: "Member",
    photo: "https://lh3.google.com/u/0/d/1ZPaPgYD9-BqQbHvXNhOkpgkiKJkpuq90=w1920-h911-iv2?auditContext=forDisplay",
    nickname: "Jossa",
    age: "17",
    hobbies: " Watching movies and series, cooking and eating",
    talent: "Creative Thinking ",
    contribution: "Thinking of ideas and concepts and helping develop the overall direction of the project.",
    bio: "I'm someone who loves going out and exploring new places, but I also enjoy staying at home.",
    quote: "Your favorite quote or motto."
  },
  {
    name: "Member 4",
    role: "Member",
    photo: "https://lh3.google.com/u/0/d/1-HvJOoHt3QXiIL557OACso_qI4Bmkjj_=w1920-h911-iv1?auditContext=prefetch",
    nickname: "Iyang/ali",
    age: "19",
    hobbies: "Playing online games/watching movies",
    talent: "Dancing",
    contribution: "Sent a reflection about mil and cooperated",
    bio: "Im an independent woman, friendly, moody i know i still have a lot to improve but i always do my best to learn and achieve my dreams.",
    quote: "Growing, learning, and becoming better every day."
  },
  {
    name: "Member 5",
    role: "Member",
    photo: "https://lh3.google.com/u/0/d/1-Sf2T_Gh0Iq88JTknXhlFKg_YlxeWoau=w1920-h911-iv1?auditContext=prefetch",
    nickname: "Sam",
    age: "17",
    hobbies: "Reading Manga And Watching Movies",
    talent: "Badminton",
    contribution: "Ideas",
    bio: "Hello Im Samuel Gabriel Abrantes but you can call me Sam. Im 17 years old and i enjoy spending my free time just reading books amd mangas or watching movies and series.",
    quote: "The One piece is realllll"
  },
  {
    name: "Member 6",
    role: "Member",
    photo: "https://lh3.google.com/u/0/d/17VIDVU43oBxxF4YHfO3yZsnG86Ik6LHm=w1920-h911-iv1?auditContext=prefetch",
    nickname: "tobs/Zed",
    age: "19",
    hobbies: "gaming",
    talent: "Cooking",
    contribution: "Sent a reflection about mil and cooperated",
    bio: "I am a risk taker person and I love to discover new things",
    quote: "Your favorite quote or motto."
  },
  {
    name: "Member 7",
    role: "Member",
    photo: "https://lh3.google.com/u/0/d/1Y5Qc42WeTvuRJt256gdoWofHc_R0vN4O=w1920-h911-iv1?auditContext=prefetch",
    nickname: "jp/yoy",
    age: "18",
    hobbies: "Drawing and watching movie",
    talent: "Drawing",
    contribution: "Sent a reflection about mil and cooperated",
    bio: "I am a humble person, and greatefull, and always willing to take the risk.",
    quote: "A negative mind can not give you a positive life."
  },
  {
    name: "Member 8",
    role: "Member",
    photo: "https://lh3.google.com/u/0/d/1H-QsGiNetawvwbxRtxEzutypQ8S-hiB3=w1920-h911-iv1?auditContext=prefetch",
    nickname: "Josh/Lei",
    age: "18",
    hobbies: "Playing online games",
    talent: "I know how to play a guitar",
    contribution: "Sent a reflection about mil and cooperated",
    bio: "I am a simple person,, who love learning new things, and love exploring new places.",
    quote: "Slow progress is still progress. Just keep moving forward."
  },
  {
    name: "BINI",
    role: "P-POP IDOL",
    photo: "https://media1.tenor.com/m/BRNBblkX10EAAAAd/bini-we-are-bini.gif",
    nickname: "BINI",
    age: "BINI",
    hobbies: "BINI",
    talent: "BINI",
    contribution: "BINI",
    bio: "BINI",
    quote: "I AM THE AVATAR",
  }
];


// DISPLAY THE MEMBER CARDS

function displayGroupMembers() {
  const container = document.getElementById("members-container");

  if (!container) return;

  container.innerHTML = groupMembers.map((member, index) => `
    <div class="member-card">

      ${
        member.photo
          ? `<img class="member-photo" src="${member.photo}" alt="${member.name}">`
          : `<div class="member-photo" style="display:inline-flex;align-items:center;justify-content:center;font-size:45px;">🌸</div>`
      }

      <br>

      <span class="member-number">
        MEMBER ${index + 1}
      </span>

      <h3>${member.name}</h3>

      <div class="member-role">${member.role}</div>

      <p class="member-short-bio">${member.bio}</p>

      <button class="member-view-btn"
        onclick="openMemberProfile(${index})">
        ✨ View Profile
      </button>

    </div>
  `).join("");
}


// OPEN MEMBER PROFILE

function openMemberProfile(index) {
  const member = groupMembers[index];

  const modal = document.getElementById("member-modal");
  const details = document.getElementById("member-profile-details");

  if (!member || !modal || !details) return;

  details.innerHTML = `
    ${
      member.photo
        ? `<img class="member-profile-photo" src="${member.photo}" alt="${member.name}">`
        : `<div style="font-size:75px;">🌸</div>`
    }

    <h2 class="member-profile-name">${member.name}</h2>

    <div class="member-profile-role">${member.role}</div>

    <div class="member-info-list">
      <p>🌷 <strong>Nickname:</strong> ${member.nickname}</p>
      <p>🎂 <strong>Age:</strong> ${member.age}</p>
      <p>🎨 <strong>Hobbies:</strong> ${member.hobbies}</p>
      <p>⭐ <strong>Talents:</strong> ${member.talent}</p>
      <p>💗 <strong>Project Contribution:</strong> ${member.contribution}</p>
      <p>📝 <strong>About Me:</strong> ${member.bio}</p>
    </div>

    <div class="member-quote">
      "${member.quote}"
    </div>
  `;

  modal.classList.add("show");
}


// CLOSE MEMBER PROFILE

function closeMemberProfile() {
  document.getElementById("member-modal").classList.remove("show");
}


// CLOSE WHEN CLICKING OUTSIDE THE PROFILE

document.addEventListener("click", function(event) {
  const modal = document.getElementById("member-modal");

  if (event.target === modal) {
    closeMemberProfile();
  }
});


/* ==================================
   FIX OUR MEMBERS NAVIGATION
================================== */

function closeMembersPage() {
    const membersSection = document.getElementById("our-members");

    if (membersSection) {
        membersSection.classList.remove("show");
    }
}

function setupMembersButton() {
    const nav = document.querySelector("nav");

    if (!nav) return;

    // Prevent duplicate button
    if (document.getElementById("ourMembersNavBtn")) return;

    const button = document.createElement("a");

    button.id = "ourMembersNavBtn";
    button.href = "#our-members";
    button.textContent = "Our Members";
    button.className = "nav-link";

    button.addEventListener("click", function(event) {
        event.preventDefault();

        const membersSection = document.getElementById("our-members");

        if (!membersSection) return;

        membersSection.classList.add("show");

        displayGroupMembers();
    });

    nav.appendChild(button);

    // Close Members whenever another navigation link is clicked
    nav.addEventListener("click", function(event) {
        const clickedLink = event.target.closest("a");

        if (!clickedLink) return;

        if (clickedLink.id !== "ourMembersNavBtn") {
            closeMembersPage();
        }
    }, true);
}


// INITIALIZE MEMBERS PAGE

if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", setupMembersButton);
} else {
    setupMembersButton();
}

/* AIAH LESSON BACKGROUND MUSIC */

function playAiahLessonMusic() {
  const music = document.getElementById("aiahLessonMusic");

  if (!music) return;

  music.volume = 0.35;
  music.currentTime = 0;

  music.play().catch(error => {
    console.log("Music playback needs user interaction.");
  });
}

function stopAiahLessonMusic() {
  const music = document.getElementById("aiahLessonMusic");

  if (!music) return;

  music.pause();
  music.currentTime = 0;
}
/* ==========================================
   BINI MIL - NEW WORKING MUSIC PLAYER
========================================== */

(function () {
  const BINI_AUDIO_URL = "https://open.spotify.com/playlist/6o75iaXXqWRfajvwxvfFoU?si=PGRXhLMMRNidFWTeJ3VLzw";

  function setupNewBiniPlayer() {
    const box = document.getElementById("milMusic");
    if (!box) return;

    // Remove the old player and its broken audio element
    box.innerHTML = `
      <div class="new-music-title">🌸 BINI Music Player</div>

      <div class="new-music-status" id="newMusicStatus">
        Add your audio file to start playing.
      </div>

      <div class="new-music-controls">
        <button type="button" id="newMusicPlay">▶ Play</button>
        <button type="button" id="newMusicPause">Ⅱ Pause</button>
        <button type="button" id="newMusicMute">🔊 Mute</button>
      </div>

      <input
        class="new-music-volume"
        id="newMusicVolume"
        type="range"
        min="0"
        max="100"
        value="35"
        aria-label="Music volume"
      >

      <audio id="newBiniAudio" loop preload="none"></audio>
    `;

    const audio = document.getElementById("newBiniAudio");
    const status = document.getElementById("newMusicStatus");
    const play = document.getElementById("newMusicPlay");
    const pause = document.getElementById("newMusicPause");
    const mute = document.getElementById("newMusicMute");
    const volume = document.getElementById("newMusicVolume");

    if (
      BINI_AUDIO_URL &&
      BINI_AUDIO_URL !== "https://open.spotify.com/playlist/6o75iaXXqWRfajvwxvfFoU?si=PGRXhLMMRNidFWTeJ3VLzw"
    ) {
      audio.src = BINI_AUDIO_URL;
      status.textContent = "Ready! Press Play Music 🎵";
    } else {
      status.textContent = "Upload an MP3 file and add its URL first.";
      play.disabled = true;
    }

    play.addEventListener("click", function () {
      if (!audio.src) return;

      audio.play()
        .then(function () {
          status.textContent = "♪ Now Playing";
        })
        .catch(function () {
          status.textContent = "Cannot play this file. Check your audio URL.";
        });
    });

    pause.addEventListener("click", function () {
      audio.pause();
      status.textContent = "Music paused";
    });

    mute.addEventListener("click", function () {
      audio.muted = !audio.muted;
      mute.textContent = audio.muted ? "🔇 Unmute" : "🔊 Mute";
    });

    volume.addEventListener("input", function () {
      audio.volume = Number(volume.value) / 100;
      if (audio.volume > 0) audio.muted = false;
      mute.textContent = audio.muted ? "🔇 Unmute" : "🔊 Mute";
    });

    audio.addEventListener("ended", function () {
      status.textContent = "Music ended";
    });

    audio.addEventListener("error", function () {
      status.textContent = "Music file could not be loaded. Check the URL.";
    });

    // Remove the old floating Spotify player and its fixed wrapper
    document.querySelectorAll('iframe[src*="spotify.com"]').forEach(function (frame) {
      let parent = frame;
      for (let i = 0; i < 6 && parent && parent !== document.body; i++) {
        if (getComputedStyle(parent).position === "fixed") {
          parent.remove();
          return;
        }
        parent = parent.parentElement;
      }
      frame.remove();
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", setupNewBiniPlayer);
  } else {
    setupNewBiniPlayer();
  }
})();

/* ===== BINI SPOTIFY PLAYER + SMALL FIXES (added at the very bottom) ===== */
(function () {
  var PLAYLIST_ID = '6o75iaXXqWRfajvwxvfFoU';

  function buildPlayer() {
    // Remove the old broken pieces (safe if they don't exist)
    var oldBgm = document.getElementById('milBgm');
    if (oldBgm) { try { oldBgm.pause(); } catch (e) {} oldBgm.remove(); }
    var oldAiah = document.getElementById('aiahLessonMusic');
    if (oldAiah) { try { oldAiah.pause(); } catch (e) {} oldAiah.remove(); }
    document.querySelectorAll('.bini-spotify-player').forEach(function (el) { el.remove(); });

    // Use the existing left-side panel (create it only if it is missing)
    var box = document.getElementById('milMusic');
    if (!box) {
      box = document.createElement('aside');
      box.id = 'milMusic';
      box.className = 'mil-music';
      document.body.appendChild(box);
    }
    if (box.querySelector('iframe.mil-spotify')) return;   // already built: never build twice

    // Remove any other Spotify frame that is not ours
    document.querySelectorAll('iframe[src*="spotify.com"]').forEach(function (f) {
      if (!box.contains(f)) f.remove();
    });

    box.setAttribute('aria-label', 'BINI Spotify music player');
    box.innerHTML =
      '<div class="mil-music-head">' +
        '<span class="mil-music-note" aria-hidden="true">🎵</span>' +
        '<div class="mil-music-meta"><b>🌸 BINI Music Playlist</b>' +
        '<small>Press ▶ inside the player to listen</small></div>' +
        '<button type="button" class="mil-music-min" id="milMusicMin" ' +
        'aria-label="Minimize or expand music player" aria-expanded="true">–</button>' +
      '</div>' +
      '<div class="mil-music-body"></div>';

    var body = box.querySelector('.mil-music-body');

    var frame = document.createElement('iframe');
    frame.className = 'mil-spotify';
    frame.title = 'BINI Spotify playlist';
    frame.src = 'https://open.spotify.com/embed/playlist/' + PLAYLIST_ID + '?utm_source=generator';
    frame.width = '100%';
    frame.height = '352';
    frame.setAttribute('frameborder', '0');
    frame.setAttribute('allowfullscreen', '');
    frame.allow = 'autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture';
    body.appendChild(frame);

    var link = document.createElement('a');
    link.className = 'mil-spotify-link';
    link.href = 'https://open.spotify.com/playlist/' + PLAYLIST_ID;
    link.target = '_blank';
    link.rel = 'noopener';
    link.textContent = 'Open in Spotify ↗';
    body.appendChild(link);

    // Minimize / expand button
    var btn = document.getElementById('milMusicMin');
    function sync() {
      var min = box.classList.contains('mil-min');
      btn.textContent = min ? '+' : '–';
      btn.setAttribute('aria-expanded', min ? 'false' : 'true');
    }
    if (window.innerWidth < 700) box.classList.add('mil-min');   // start small on phones
    btn.addEventListener('click', function () { box.classList.toggle('mil-min'); sync(); });
    sync();
  }

  function setup() {
    buildPlayer();

    // Close the phone menu when "Our Members" is tapped
    var members = document.getElementById('ourMembersNavBtn');
    if (members && !members.getAttribute('data-menufix')) {
      members.setAttribute('data-menufix', '1');
      members.addEventListener('click', function () {
        var nl = document.getElementById('navLinks'), mb = document.getElementById('menuBtn');
        if (nl) nl.classList.remove('open');
        if (mb) { mb.setAttribute('aria-expanded', 'false'); mb.textContent = '☰'; }
      });
    }

    // Clicking the BINI logo also closes the Members page
    var brand = document.querySelector('.brand');
    if (brand && !brand.getAttribute('data-membersfix')) {
      brand.setAttribute('data-membersfix', '1');
      brand.addEventListener('click', function () {
        if (typeof closeMembersPage === 'function') closeMembersPage();
      });
    }
  }

  // Fix the wrong message shown when "Use link" gets a bad link in Sound Settings
  document.addEventListener('click', function (e) {
    if (e.target.closest && e.target.closest('.audio-use')) {
      setTimeout(function () {
        document.querySelectorAll('.audio-status').forEach(function (el) {
          if (el.textContent.indexOf('open.spotify.com') !== -1) {
            el.textContent = 'Please paste a direct audio link that starts with https://';
          }
        });
      }, 0);
    }
  });

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', setup);
  else setup();
  window.addEventListener('load', setup);   // safety: runs again, but never builds twice
})();

/* =====================================================================
   BLOOM ARCADE  —  PASTE AT THE VERY BOTTOM of script.js
   (after everything else). It lives in its own function, so none of
   its variables can clash with your existing code.
   ===================================================================== */
(function () {
  'use strict';

  /* #####################################################################
     SETTINGS
     ##################################################################### */

  // Member pictures for the Memory Match cards. Leave '' to use the
  // picture already set for that member in your MIL_LESSONS (see below),
  // or a pretty letter placeholder if there is none.
  var BLOOM_MEMBER_IMAGES = {
    Aiah: '', Colet: '', Maloi: '', Gwen: '', Stacey: '', Mikha: '', Jhoanna: '', Sheena: ''
  };
  // true = reuse the member "image" links that are already in MIL_LESSONS
  var USE_LESSON_IMAGES = true;

  var STORE_KEY = 'biniMIL_arcade_v1';   // separate from your lesson progress
  var QUIZ_ROUNDS = 10;                  // questions per Song / Trivia game

  /* #####################################################################
     DATA  (only facts that were checked against public sources)
     ##################################################################### */
  var MEMBERS = ['Aiah', 'Colet', 'Maloi', 'Gwen', 'Stacey', 'Mikha', 'Jhoanna', 'Sheena'];
  var EXTRAS = [   // extra pairs used on Hard mode
    { key: 'x-bloom', label: 'BLOOMs', emoji: '🌸' },
    { key: 'x-ppop', label: 'P-POP', emoji: '🎤' },
    { key: 'x-bini', label: 'BINI', emoji: '💖' },
    { key: 'x-magic', label: 'Star Magic', emoji: '⭐' }
  ];
  var DIFFS = {
    easy:   { pairs: 6,  par: 60 },
    medium: { pairs: 8,  par: 90 },
    hard:   { pairs: 12, par: 150 }
  };
  var PALETTE = [
    ['#ff8cc6', '#c39bff'], ['#c39bff', '#7cc4ff'], ['#ffb3d9', '#a9d8ff'], ['#9b6bff', '#ff8cc6'],
    ['#7cc4ff', '#ff8cc6'], ['#ff6fb5', '#9b6bff'], ['#a9d8ff', '#c39bff'], ['#ffb3d9', '#9b6bff'],
    ['#ff8cc6', '#7cc4ff'], ['#c39bff', '#ff6fb5'], ['#7cc4ff', '#9b6bff'], ['#ffb3d9', '#c39bff']
  ];

  // Song clues. The emoji combos are just playful hints, and the hints only
  // use facts: years, releases, and meanings of the Filipino title words.
  var SONGS = [
    { title: 'Pantropiko',            clue: '🏝️🌴🍹',   hint: 'A hit from the Talaarawan era. Sheena choreographed its chorus dance.' },
    { title: 'Salamin, Salamin',      clue: '🪞✨🪞',     hint: 'The lead single of the Talaarawan EP. The Filipino title means "mirror, mirror".' },
    { title: 'Cherry on Top',         clue: '🍒🔝🍰',     hint: 'Released on July 11, 2024. It also has a remix with Agnez Mo.' },
    { title: 'Blink Twice',           clue: '👀✌️😉',     hint: 'Released on February 13, 2025, and it appears on the Biniverse EP.' },
    { title: 'Karera',                clue: '🏃‍♀️🏁🎓',  hint: 'A 2023 single that became popular at school graduations. The title means "race".' },
    { title: 'Born to Win',           clue: '👶🏆🥇',     hint: 'The debut single from 2021.' },
    { title: 'Da Coconut Nut',        clue: '🥥🥜🌴',     hint: 'The 2020 pre-debut single, a remake of an older Filipino song.' },
    { title: 'Lagi',                  clue: '♾️🔁💞',     hint: 'It was featured in the An Inconvenient Love soundtrack. The title means "always".' },
    { title: 'Na Na Na',              clue: '🎶🙅‍♀️🎤',  hint: 'A TikTok hit that got its music video in 2022.' },
    { title: 'Huwag Muna Tayong Umuwi', clue: '🚫🏠🌙💃', hint: 'Also in the An Inconvenient Love soundtrack. The title is about not going home yet.' },
    { title: 'Strings',               clue: '🎻🧵🎸',     hint: 'A single from the Feel Good era, released in 2022.' },
    { title: 'Super Crush',           clue: '🦸‍♀️💘✨', hint: 'A promotional single from July 2023.' },
    { title: 'Kapit Lang',            clue: '🤝🧗‍♀️💪', hint: 'An early release from the group\'s debut year, 2021. The title means "just hold on".' }
  ];

  // Trivia: "a" is the correct answer, "w" are the 3 wrong answers.
  var TRIVIA = [
    { q: 'How many members are in BINI?', a: '8', w: ['5', '6', '9'], x: 'BINI is an eight-member group.' },
    { q: 'Which of these is a member of BINI?', a: 'Maloi', w: ['Carla', 'Denise', 'Rhea'], x: 'The members are Aiah, Colet, Maloi, Gwen, Stacey, Mikha, Jhoanna, and Sheena.' },
    { q: 'What was BINI\'s official debut single?', a: 'Born to Win', w: ['Pantropiko', 'Cherry on Top', 'Karera'], x: 'BINI officially debuted in 2021 with "Born to Win".' },
    { q: 'In what year did BINI officially debut?', a: '2021', w: ['2019', '2020', '2023'], x: 'The debut with "Born to Win" happened in 2021. ("Da Coconut Nut" came out earlier, in 2020.)' },
    { q: 'What was BINI\'s pre-debut single, released in 2020?', a: 'Da Coconut Nut', w: ['Lagi', 'Strings', 'Na Na Na'], x: '"Da Coconut Nut" was released in November 2020 before their official debut.' },
    { q: 'Which ABS-CBN program formed BINI?', a: 'Star Hunt Academy', w: ['Idol Philippines', 'Pinoy Big Brother', 'ASAP Natin To'], x: 'BINI was formed through the Star Hunt Academy program.' },
    { q: 'What do BINI\'s fans call themselves?', a: 'BLOOMs', w: ['Petals', 'Sparkles', 'Dewdrops'], x: 'BINI fans are known as BLOOMs.' },
    { q: 'BINI\'s group name comes from which Filipino word?', a: 'Binibini', w: ['Bituin', 'Bayani', 'Bulaklak'], x: 'The group name is derived from the Filipino word "binibini".' },
    { q: 'The EP "Talaarawan" is named after the Filipino word for what?', a: 'Diary', w: ['Mirror', 'Race', 'Garden'], x: 'Talaarawan means "diary". The EP came out on March 8, 2024.' },
    { q: 'Which song was the lead single of the Talaarawan EP?', a: 'Salamin, Salamin', w: ['Cherry on Top', 'Blink Twice', 'Born to Win'], x: '"Salamin, Salamin" led the Talaarawan EP in March 2024.' },
    { q: 'Which member wrote the song "8" on the album Born to Win?', a: 'Colet', w: ['Gwen', 'Mikha', 'Stacey'], x: 'Colet wrote "8" for BINI\'s first album, Born to Win.' },
    { q: 'Which member choreographed the chorus of "Pantropiko"?', a: 'Sheena', w: ['Aiah', 'Maloi', 'Jhoanna'], x: 'Sheena choreographed the chorus dance of "Pantropiko".' },
    { q: 'The song "Karera" became popular at which kind of event?', a: 'School graduation ceremonies', w: ['Wedding receptions', 'Basketball games', 'Beauty pageants'], x: '"Karera" became a favorite at graduation ceremonies.' },
    { q: 'In what year was "Cherry on Top" released?', a: '2024', w: ['2021', '2022', '2023'], x: '"Cherry on Top" was released on July 11, 2024.' },
    { q: 'Which EP includes both "Cherry on Top" and "Blink Twice"?', a: 'Biniverse', w: ['Talaarawan', 'Feel Good', 'Born to Win'], x: 'Both songs are on the Biniverse EP, released in February 2025.' },
    { q: 'Which artist is featured on the "Cherry on Top" BiniMo remix?', a: 'Agnez Mo', w: ['Belinda', 'Sarah Geronimo', 'Rosé'], x: 'The BiniMo remix of "Cherry on Top" features Agnez Mo.' },
    { q: '"Pantropiko" and "Salamin, Salamin" made BINI the first P-pop group to top which chart?', a: 'Billboard Philippines', w: ['Oricon Japan', 'Gaon Korea', 'UK Official Singles'], x: 'In April 2024, BINI became the first P-pop group to top the Billboard Philippines charts.' },
    { q: 'Which National Artist composed the original "Da Coconut Nut"?', a: 'Ryan Cayabyab', w: ['Lea Salonga', 'Freddie Aguilar', 'Gary Valenciano'], x: 'BINI\'s first single remade a song by National Artist Ryan Cayabyab.' },
    { q: 'Which two BINI songs were used in the film An Inconvenient Love?', a: 'Lagi and Huwag Muna Tayong Umuwi', w: ['Karera and Pantropiko', 'Cherry on Top and Blink Twice', 'Born to Win and Strings'], x: 'Both songs appear in the soundtrack of An Inconvenient Love.' },
    { q: 'In what year was the album Feel Good released?', a: '2022', w: ['2020', '2021', '2024'], x: 'Feel Good came out on September 29, 2022.' }
  ];

  /* #####################################################################
     HELPERS
     ##################################################################### */
  function shuffle(arr) {
    var a = arr.slice();
    for (var i = a.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var t = a[i]; a[i] = a[j]; a[j] = t;
    }
    return a;
  }
  function esc(s) {
    return String(s).replace(/[&<>"']/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
    });
  }
  function ready(fn) {
    if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', fn);
    else fn();
  }
  function confetti() {
    if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    var set = ['🌸', '⭐', '💖', '✨', '🦋', '🎉'];
    for (var i = 0; i < 24; i++) {
      var s = document.createElement('span');
      s.className = 'ba-confetti';
      s.textContent = set[i % set.length];
      s.style.left = (Math.random() * 100) + 'vw';
      s.style.fontSize = (18 + Math.random() * 18) + 'px';
      s.style.animationDelay = (Math.random() * 0.7) + 's';
      document.body.appendChild(s);
      (function (el) { setTimeout(function () { if (el.parentNode) el.parentNode.removeChild(el); }, 3800); })(s);
    }
  }

  /* ---------- saved best scores ---------- */
  function loadStore() {
    var d = { memory: {}, song: 0, trivia: 0 };
    try {
      var r = JSON.parse(localStorage.getItem(STORE_KEY));
      if (r && typeof r === 'object') {
        if (r.memory && typeof r.memory === 'object') d.memory = r.memory;
        d.song = Number(r.song) || 0;
        d.trivia = Number(r.trivia) || 0;
      }
    } catch (e) { /* ignore */ }
    return d;
  }
  var store = loadStore();
  function saveStore() {
    try { localStorage.setItem(STORE_KEY, JSON.stringify(store)); } catch (e) { /* ignore */ }
  }

  /* #####################################################################
     START-UP
     ##################################################################### */
  ready(function () {
    var root = document.getElementById('arcade');
    if (!root || root.getAttribute('data-ba-ready')) return;   // never start twice
    root.setAttribute('data-ba-ready', '1');

    var views = Array.prototype.slice.call(root.querySelectorAll('.ba-view'));
    function view(name) { return root.querySelector('.ba-view[data-view="' + name + '"]'); }
    function R(v, name) { return v.querySelector('[data-r="' + name + '"]'); }

    /* ---------- navigation button (adds it only if missing) ---------- */
    (function ensureNavButton() {
      var nav = document.getElementById('navLinks');
      if (!nav || nav.querySelector('a[href="#arcade"]')) return;
      var a = document.createElement('a');
      a.className = 'nav-link';
      a.href = '#arcade';
      a.textContent = 'Bloom Arcade';
      a.addEventListener('click', function () {
        nav.classList.remove('open');
        var mb = document.getElementById('menuBtn');
        if (mb) { mb.setAttribute('aria-expanded', 'false'); mb.textContent = '☰'; }
      });
      var about = nav.querySelector('a[href="#about"]');
      nav.insertBefore(a, about || null);
    })();

    /* ---------- view switching ---------- */
    var current = 'welcome';
    function showView(name, scroll) {
      if (current === 'memory' && name !== 'memory') stopMemory();
      current = name;
      views.forEach(function (v) { v.hidden = v.getAttribute('data-view') !== name; });
      if (name === 'menu') refreshMenu();
      if (scroll !== false) {
        var top = root.getBoundingClientRect().top;
        if (top < 0 || top > 160) root.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }

    function refreshMenu() {
      var m = view('menu');
      var best = null;
      Object.keys(store.memory).forEach(function (k) {
        var s = store.memory[k];
        if (s && (!best || s.score > best.score)) best = { score: s.score, diff: k };
      });
      R(m, 'best-memory').textContent = best ? 'Best: ' + best.score + ' pts (' + best.diff + ')' : 'Best: not played yet';
      R(m, 'best-song').textContent = store.song ? 'Best: ' + store.song + ' pts' : 'Best: not played yet';
      R(m, 'best-trivia').textContent = store.trivia ? 'Best: ' + store.trivia + '%' : 'Best: not played yet';
    }

    function go(name) {
      if (name === 'memory') { showView('memory'); startMemory(mem.diff); }
      else if (name === 'song') { showView('song'); songGame.start(); }
      else if (name === 'trivia') { showView('trivia'); triviaGame.start(); }
      else showView(name);
    }

    /* =================================================================
       GAME 1 — BINI MEMORY MATCH
       ================================================================= */
    var mem = { diff: 'medium', first: null, lock: false, moves: 0, pairs: 0, misses: 0, time: 0,
                timer: null, started: false, total: 8, timeouts: [] };
    var memView = view('memory');
    var memGrid = R(memView, 'grid');

    function photoFor(name) {
      if (BLOOM_MEMBER_IMAGES[name]) return BLOOM_MEMBER_IMAGES[name];
      if (USE_LESSON_IMAGES) {
        try {
          if (typeof MIL_LESSONS !== 'undefined' && MIL_LESSONS && MIL_LESSONS.length) {
            for (var i = 0; i < MIL_LESSONS.length; i++) {
              if (MIL_LESSONS[i].member === name && MIL_LESSONS[i].image) return MIL_LESSONS[i].image;
            }
          }
        } catch (e) { /* ignore */ }
      }
      return '';
    }

    function buildDeck(diff) {
      var n = DIFFS[diff].pairs;
      var items = shuffle(MEMBERS).slice(0, Math.min(n, MEMBERS.length)).map(function (m) {
        return { key: m, label: m, member: true, pal: MEMBERS.indexOf(m) };
      });
      if (n > MEMBERS.length) {
        EXTRAS.slice(0, n - MEMBERS.length).forEach(function (x, i) {
          items.push({ key: x.key, label: x.label, emoji: x.emoji, member: false, pal: MEMBERS.length + i });
        });
      }
      return shuffle(items.concat(items));
    }

    function backFace(item) {
      var face = document.createElement('span');
      face.className = 'ba-face ba-back';
      var art = document.createElement('span');
      art.className = 'ba-art';
      var p = PALETTE[item.pal % PALETTE.length];
      art.style.background = 'linear-gradient(135deg,' + p[0] + ',' + p[1] + ')';
      function letter() {
        art.innerHTML = '';
        var b = document.createElement('b');
        b.textContent = item.member ? item.label.charAt(0) : item.emoji;
        art.appendChild(b);
      }
      var src = item.member ? photoFor(item.key) : '';
      if (src) {
        var img = new Image();
        img.alt = '';
        img.onerror = letter;
        img.src = src;
        art.appendChild(img);
      } else { letter(); }
      var name = document.createElement('span');
      name.className = 'ba-name';
      name.textContent = item.label;
      face.appendChild(art);
      face.appendChild(name);
      return face;
    }

    function memScore() { return Math.max(0, mem.pairs * 100 - mem.misses * 10); }
    function updateMemHud() {
      R(memView, 'moves').textContent = mem.moves;
      R(memView, 'time').textContent = mem.time;
      R(memView, 'score').textContent = memScore();
      R(memView, 'pairs').textContent = mem.pairs;
      R(memView, 'pairsTotal').textContent = mem.total;
    }
    function stopMemory() {
      clearInterval(mem.timer);
      mem.timer = null;
      mem.timeouts.forEach(clearTimeout);
      mem.timeouts = [];
      mem.lock = false;
    }
    function startMemory(diff) {
      stopMemory();
      if (DIFFS[diff]) mem.diff = diff;
      mem.first = null; mem.moves = 0; mem.pairs = 0; mem.misses = 0; mem.time = 0; mem.started = false;
      mem.total = DIFFS[mem.diff].pairs;
      memGrid.setAttribute('data-diff', mem.diff);
      memGrid.innerHTML = '';
      R(memView, 'win').hidden = true;
      Array.prototype.forEach.call(memView.querySelectorAll('.ba-diff'), function (b) {
        var on = b.getAttribute('data-diff') === mem.diff;
        b.classList.toggle('on', on);
        b.setAttribute('aria-pressed', on ? 'true' : 'false');
      });
      buildDeck(mem.diff).forEach(function (item) {
        var b = document.createElement('button');
        b.type = 'button';
        b.className = 'ba-card';
        b.setAttribute('data-key', item.key);
        b.setAttribute('data-label', item.label);
        b.setAttribute('aria-label', 'Face-down card');
        var inner = document.createElement('span');
        inner.className = 'ba-card-inner';
        inner.innerHTML = '<span class="ba-face ba-front">🌸</span>';
        inner.appendChild(backFace(item));
        b.appendChild(inner);
        memGrid.appendChild(b);
      });
      updateMemHud();
    }

    function onMemCard(e) {
      var c = e.target.closest('.ba-card');
      if (!c || mem.lock || c.classList.contains('flipped') || c.classList.contains('matched')) return;
      if (!mem.started) {
        mem.started = true;
        mem.timer = setInterval(function () { mem.time++; updateMemHud(); }, 1000);
      }
      c.classList.add('flipped');
      c.setAttribute('aria-label', c.getAttribute('data-label'));
      if (!mem.first) { mem.first = c; return; }
      var a = mem.first, b = c;
      mem.first = null;
      mem.moves++;
      if (a.getAttribute('data-key') === b.getAttribute('data-key')) {
        a.classList.add('matched'); b.classList.add('matched');
        mem.pairs++;
        updateMemHud();
        if (mem.pairs === mem.total) winMemory();
      } else {
        mem.misses++;
        mem.lock = true;
        updateMemHud();
        a.classList.add('miss'); b.classList.add('miss');
        mem.timeouts.push(setTimeout(function () {
          [a, b].forEach(function (x) {
            x.classList.remove('flipped', 'miss');
            x.setAttribute('aria-label', 'Face-down card');
          });
          mem.lock = false;
        }, 850));
      }
    }

    function winMemory() {
      clearInterval(mem.timer);
      mem.timer = null;
      var par = DIFFS[mem.diff].par;
      var bonus = Math.max(0, par - mem.time) * 2;
      var finalScore = memScore() + bonus;
      var stars = mem.moves <= mem.total * 1.5 ? 3 : (mem.moves <= mem.total * 2.3 ? 2 : 1);
      var prev = store.memory[mem.diff];
      var isBest = !prev || finalScore > prev.score;
      if (isBest) { store.memory[mem.diff] = { score: finalScore, moves: mem.moves, time: mem.time }; saveStore(); }
      R(memView, 'score').textContent = finalScore;
      var win = R(memView, 'win');
      win.innerHTML =
        '<div class="ba-stars" aria-label="' + stars + ' out of 3 stars">' + '⭐'.repeat(stars) + '☆'.repeat(3 - stars) + '</div>' +
        '<h4>🎉 Congratulations, Bloom!</h4>' +
        '<p>You matched all ' + mem.total + ' pairs in <b>' + mem.moves + ' moves</b> and <b>' + mem.time + ' seconds</b>.</p>' +
        '<p>Final score: <b>' + finalScore + '</b> (time bonus +' + bonus + ') ' + (isBest ? '🌟 New best for ' + esc(mem.diff) + '!' : '· Best: ' + prev.score) + '</p>' +
        '<button type="button" class="btn btn-small" data-act="restart">🔁 Play Again</button>';
      win.hidden = false;
      confetti();
    }

    memGrid.addEventListener('click', onMemCard);
    memView.addEventListener('click', function (e) {
      var d = e.target.closest('[data-diff]');
      if (d && d.classList.contains('ba-diff')) { startMemory(d.getAttribute('data-diff')); return; }
      if (e.target.closest('[data-act="restart"]')) startMemory(mem.diff);
    });

    /* =================================================================
       SHARED QUIZ ENGINE — used by Song game and Trivia game
       ================================================================= */
    function makeQuiz(v, cfg) {
      var st = { qs: [], i: 0, score: 0, correct: 0, locked: false, hinted: false };

      v.innerHTML =
        '<div class="ba-game-top">' +
          '<button type="button" class="btn btn-ghost btn-small" data-go="menu">← Arcade Menu</button>' +
          '<h3>' + cfg.icon + ' ' + cfg.title + '</h3>' +
        '</div>' +
        '<div data-r="play">' +
          '<div class="ba-hud">' +
            '<span class="ba-chip">Question <b data-r="num">1</b> / <b data-r="total">' + QUIZ_ROUNDS + '</b></span>' +
            '<span class="ba-chip">⭐ Score: <b data-r="score">0</b></span>' +
            '<span class="ba-chip">🏆 Best: <b data-r="best">0</b></span>' +
          '</div>' +
          '<div class="progress-track"><div class="progress-fill" data-r="bar"></div></div>' +
          '<div class="ba-clue" data-r="clue" hidden></div>' +
          '<h4 class="ba-question" data-r="q"></h4>' +
          '<p class="ba-hint" data-r="hint" hidden></p>' +
          '<div class="ba-options" data-r="options"></div>' +
          '<div class="feedback" data-r="fb" hidden></div>' +
          '<div class="ba-actions">' +
            (cfg.hints ? '<button type="button" class="btn btn-small btn-ghost" data-act="hint">💡 Hint (-5 pts)</button>' : '<span></span>') +
            '<button type="button" class="btn" data-act="next" hidden>Next Question →</button>' +
          '</div>' +
        '</div>' +
        '<div class="ba-result" data-r="result" hidden>' +
          '<div class="ba-result-emoji" data-r="remoji">🏆</div>' +
          '<h3 data-r="rtitle"></h3>' +
          '<p class="ba-result-score" data-r="rscore"></p>' +
          '<p data-r="rmsg"></p>' +
          '<div data-r="rextra"></div>' +
          '<div class="ba-actions center">' +
            '<button type="button" class="btn" data-act="again">🔁 Play Again</button>' +
            '<button type="button" class="btn btn-ghost" data-go="menu">🎮 Arcade Menu</button>' +
          '</div>' +
        '</div>';

      function render() {
        var q = st.qs[st.i];
        st.locked = false; st.hinted = false;
        R(v, 'num').textContent = st.i + 1;
        R(v, 'score').textContent = st.score;
        R(v, 'bar').style.width = Math.round(st.i / st.qs.length * 100) + '%';
        var clue = R(v, 'clue');
        if (q.clue) { clue.textContent = q.clue; clue.hidden = false; clue.style.animation = 'none'; void clue.offsetWidth; clue.style.animation = ''; }
        else clue.hidden = true;
        R(v, 'q').textContent = q.prompt;
        R(v, 'hint').hidden = true;
        R(v, 'fb').hidden = true;
        R(v, 'options').innerHTML = '';
        q.options.forEach(function (t, i) {
          var b = document.createElement('button');
          b.type = 'button';
          b.className = 'ba-opt';
          b.setAttribute('data-i', i);
          b.innerHTML = '<span class="ba-opt-letter">' + 'ABCD'.charAt(i) + '</span><span class="ba-opt-text"></span>';
          b.querySelector('.ba-opt-text').textContent = t;
          R(v, 'options').appendChild(b);
        });
        var hb = v.querySelector('[data-act="hint"]');
        if (hb) { hb.hidden = false; hb.disabled = false; }
        v.querySelector('[data-act="next"]').hidden = true;
      }

      function fb(kind, html) {
        var el = R(v, 'fb');
        el.className = 'feedback ' + kind;
        el.innerHTML = html;
        el.hidden = false;
      }

      function pick(i) {
        if (st.locked) return;
        st.locked = true;
        var q = st.qs[st.i];
        var ok = i === q.answer;
        Array.prototype.forEach.call(R(v, 'options').children, function (b, idx) {
          b.disabled = true;
          if (idx === q.answer) b.classList.add('correct');
          else if (idx === i) b.classList.add('wrong');
        });
        if (ok) {
          var pts = st.hinted ? cfg.points - 5 : cfg.points;
          st.score += pts; st.correct++;
          fb('ok', '🎉 <b>Correct!</b> +' + pts + ' points. ' + esc(q.explain));
        } else {
          fb('no', '💔 <b>Not quite.</b> The answer is <b>' + esc(q.options[q.answer]) + '</b>. ' + esc(q.explain));
        }
        R(v, 'score').textContent = st.score;
        R(v, 'bar').style.width = Math.round((st.i + 1) / st.qs.length * 100) + '%';
        var hb = v.querySelector('[data-act="hint"]');
        if (hb) hb.hidden = true;
        var next = v.querySelector('[data-act="next"]');
        next.textContent = (st.i + 1 >= st.qs.length) ? 'See Results 🎀' : 'Next Question →';
        next.hidden = false;
      }

      function finish() {
        var max = st.qs.length * cfg.points;
        var pct = Math.round(st.correct / st.qs.length * 100);
        var res = cfg.result(st.score, max, st.correct, st.qs.length, pct);
        var bestValue = cfg.bestValue(st.score, pct);
        if (bestValue > store[cfg.key]) { store[cfg.key] = bestValue; saveStore(); }
        R(v, 'remoji').textContent = res.emoji;
        R(v, 'rtitle').textContent = res.title;
        R(v, 'rscore').textContent = st.score + ' / ' + max + ' points (' + pct + '%)';
        R(v, 'rmsg').textContent = res.msg;
        R(v, 'rextra').innerHTML = res.extra || '';
        R(v, 'play').hidden = true;
        R(v, 'result').hidden = false;
        if (pct >= 70) confetti();
      }

      v.addEventListener('click', function (e) {
        var opt = e.target.closest('.ba-opt');
        if (opt && v.contains(opt)) { pick(Number(opt.getAttribute('data-i'))); return; }
        var act = e.target.closest('[data-act]');
        if (!act) return;
        var a = act.getAttribute('data-act');
        if (a === 'hint') {
          if (st.locked) return;
          st.hinted = true;
          var h = R(v, 'hint');
          h.textContent = '💡 ' + st.qs[st.i].hint;
          h.hidden = false;
          act.disabled = true;
        } else if (a === 'next') {
          if (st.i + 1 >= st.qs.length) finish();
          else { st.i++; render(); }
        } else if (a === 'again') {
          start();
        }
      });

      function start() {
        st = { qs: cfg.build(), i: 0, score: 0, correct: 0, locked: false, hinted: false };
        R(v, 'total').textContent = st.qs.length;
        R(v, 'best').textContent = cfg.bestLabel(store[cfg.key]);
        R(v, 'result').hidden = true;
        R(v, 'play').hidden = false;
        render();
      }
      return { start: start };
    }

    /* =================================================================
       GAME 2 — GUESS THE BINI SONG
       ================================================================= */
    var songGame = makeQuiz(view('song'), {
      key: 'song', icon: '🎵', title: 'Guess the BINI Song', points: 10, hints: true,
      bestLabel: function (b) { return b + ' pts'; },
      bestValue: function (score) { return score; },
      build: function () {
        var titles = SONGS.map(function (s) { return s.title; });
        return shuffle(SONGS).slice(0, QUIZ_ROUNDS).map(function (s) {
          var wrong = shuffle(titles.filter(function (t) { return t !== s.title; })).slice(0, 3);
          var options = shuffle(wrong.concat(s.title));
          return { prompt: 'Which BINI song matches these emojis?', clue: s.clue, hint: s.hint, explain: s.hint, options: options, answer: options.indexOf(s.title) };
        });
      },
      result: function (score, max, correct, total, pct) {
        var r;
        if (pct === 100) r = { emoji: '🏆', title: 'Perfect Ear!', msg: 'You guessed every single song. Absolute BLOOM energy!' };
        else if (pct >= 70) r = { emoji: '🌟', title: 'Song Star!', msg: 'You really know your BINI hits. Keep singing along!' };
        else if (pct >= 40) r = { emoji: '🌷', title: 'Nice Try!', msg: 'Not bad! Play again and use the hints to learn more songs.' };
        else r = { emoji: '🌱', title: 'Keep Blooming!', msg: 'Every BLOOM starts somewhere. Give it another go!' };
        return r;
      }
    });

    /* =================================================================
       GAME 3 — HOW WELL DO YOU KNOW BINI?
       ================================================================= */
    var RANKS = [
      { max: 30,  emoji: '🌱', name: 'New Bloom',       msg: 'Every BLOOM starts as a seed. Keep learning about BINI!' },
      { max: 60,  emoji: '🌷', name: 'Growing Bloom',   msg: 'You are growing nicely! A few more rounds and you will bloom.' },
      { max: 85,  emoji: '🌸', name: 'Bloom Bestie',    msg: 'You know BINI really well. What a true bestie!' },
      { max: 100, emoji: '💗', name: 'Certified Bloom', msg: 'Wow! You are a certified BLOOM. BINI would be proud!' }
    ];
    function rankFor(pct) {
      for (var i = 0; i < RANKS.length; i++) if (pct <= RANKS[i].max) return i;
      return RANKS.length - 1;
    }
    var triviaGame = makeQuiz(view('trivia'), {
      key: 'trivia', icon: '💗', title: 'How Well Do You Know BINI?', points: 10, hints: false,
      bestLabel: function (b) { return b + '%'; },
      bestValue: function (score, pct) { return pct; },
      build: function () {
        return shuffle(TRIVIA).slice(0, QUIZ_ROUNDS).map(function (t) {
          var options = shuffle(t.w.concat(t.a));
          return { prompt: t.q, clue: '', hint: '', explain: t.x, options: options, answer: options.indexOf(t.a) };
        });
      },
      result: function (score, max, correct, total, pct) {
        var idx = rankFor(pct), rk = RANKS[idx];
        var ladder = '<ul class="ba-ranks">' + RANKS.map(function (r, i) {
          var range = ['0–30%', '31–60%', '61–85%', '86–100%'][i];
          return '<li class="' + (i === idx ? 'on' : '') + '"><span>' + r.emoji + '</span>' + r.name + '<br><small>' + range + '</small></li>';
        }).join('') + '</ul>';
        return { emoji: rk.emoji, title: 'Your rank: ' + rk.name, msg: 'You answered ' + correct + ' of ' + total + ' correctly. ' + rk.msg, extra: ladder };
      }
    });

    /* ---------- one single click handler for the "go to" buttons ---------- */
    root.addEventListener('click', function (e) {
      var g = e.target.closest('[data-go]');
      if (g && root.contains(g)) go(g.getAttribute('data-go'));
    });

    showView('welcome', false);
  });
})();

/* =====================================================================
   BINI UPGRADE (JavaScript)  —  PASTE AT THE VERY BOTTOM of script.js
   (below your Bloom Arcade code). It runs inside its own function, so
   it cannot clash with your existing code.

   WHAT YOU CAN EDIT (the three "SETTINGS" boxes right below):
     SETTINGS 1  → member picture links for the BINI Gallery
     SETTINGS 2  → the quiz music reward (video, chorus seconds, audio file)
     SETTINGS 3  → (further down) the achievements data, if you want to add more
   ===================================================================== */
(function () {
  'use strict';

  /* #####################################################################
     SETTINGS 1 of 3 — BINI GALLERY  (member pictures)
     ---------------------------------------------------------------------
     For each member, paste a picture link between the quotes after
     image:  — for example  image: "https://example.com/aiah.jpg"
     Leave it as "" to show a pretty placeholder instead.
     Tip: use pictures you own or have permission to use.
     ##################################################################### */
  var BINI_GALLERY = [
    { name: 'Aiah',    image: 'https://i.pinimg.com/736x/6d/76/5c/6d765c31816471246bc03033b160738c.jpg' /* 👉 PASTE AIAH IMAGE URL HERE */,    focus: 'center 20%', tagline: '' },
    { name: 'Colet',   image: 'https://i.pinimg.com/736x/03/df/90/03df9077c7c2e77196a33ed93d47c633.jpg' /* 👉 PASTE COLET IMAGE URL HERE */,   focus: 'center 20%', tagline: '' },
    { name: 'Maloi',   image: 'https://i.pinimg.com/736x/c9/0e/60/c90e604bbe0184f43e687090958182fd.jpg' /* 👉 PASTE MALOI IMAGE URL HERE */,   focus: 'center 20%', tagline: '' },
    { name: 'Gwen',    image: 'https://i.pinimg.com/736x/64/5d/9d/645d9d358d4ed84d11f20032365692f4.jpg' /* 👉 PASTE GWEN IMAGE URL HERE */,    focus: 'center 20%', tagline: '' },
    { name: 'Stacey',  image: 'https://i.pinimg.com/736x/f8/5f/06/f85f06cc6a159104dceb69d8b2d6345a.jpg' /* 👉 PASTE STACEY IMAGE URL HERE */,  focus: 'center 20%', tagline: '' },
    { name: 'Mikha',   image: 'https://i.pinimg.com/736x/97/07/2b/97072bd5e889ce42f8539e7218523436.jpg' /* 👉 PASTE MIKHA IMAGE URL HERE */,   focus: 'center 20%', tagline: '' },
    { name: 'Jhoanna', image: 'https://i.pinimg.com/736x/f2/c0/2c/f2c02c9ed95cda1f5db13f4166be8e8d.jpg' /* 👉 PASTE JHOANNA IMAGE URL HERE */, focus: 'center 20%', tagline: '' },
    { name: 'Sheena',  image: 'https://i.pinimg.com/736x/b8/98/b3/b898b32e7398ac20d6d54fc9e7ce1aee.jpg' /* 👉 PASTE SHEENA IMAGE URL HERE */,  focus: 'center 20%', tagline: '' }
  ];
  // focus  = which part of the picture stays visible when cropped ("center top", "center 20%" ...)
  // tagline = optional short line under the name (leave "" for none)
  var GALLERY_USE_LESSON_IMAGES = false;  // true = fall back to the member pictures already in MIL_LESSONS

  /* #####################################################################
     SETTINGS 2 of 3 — QUIZ MUSIC REWARD  ("Tic Tac Toe" chorus)
     ##################################################################### */
  var BINI_REWARD = {
    videoId: 'https://media1.tenor.com/m/2iBAzJrrW_MAAAAd/bini-bini-mikha.gif',   // from your link  https://youtu.be/vXlM5lzCmRU  (the part after youtu.be/)
    chorusStart: 40,          // ⏱ second where the CHORUS begins   ← CHECK THIS (see instructions)
    chorusEnd: 62,            // ⏱ second where the reward stops
    passRatio: 0.75,          // 3 out of 4 = 0.75
    // OPTIONAL: an audio file you are allowed to use (leave "" to use the YouTube player).
    // Example: audioUrl: "https://your-site.com/bini-tic-tac-toe-chorus.mp3"
    audioUrl: 'https://media1.tenor.com/m/2iBAzJrrW_MAAAAd/bini-bini-mikha.gif',
    audioStart: 0,            // only used with audioUrl: start second (0 = beginning of the file)
    audioEnd: 0               // only used with audioUrl: stop second (0 = play to the end)
  };

  /* #####################################################################
     SETTINGS 3 of 3 — ACHIEVEMENTS DATA  (see the long list further down)
     ##################################################################### */

  /* =====================================================================
     SMALL HELPERS
     ===================================================================== */
  function $(s, r) { return (r || document).querySelector(s); }
  function $$(s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); }
  function trim(s) { return String(s == null ? '' : s).replace(/^\s+|\s+$/g, ''); }
  function ready(fn) {
    if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', fn);
    else fn();
  }
  function el(tag, cls, text) {
    var n = document.createElement(tag);
    if (cls) n.className = cls;
    if (text != null) n.textContent = text;
    return n;
  }
  function reveal(nodes, onClass) {
    if ('IntersectionObserver' in window) {
      var io = new IntersectionObserver(function (entries) {
        entries.forEach(function (en) {
          if (en.isIntersecting) { en.target.classList.add(onClass); io.unobserve(en.target); }
        });
      }, { threshold: 0.12, rootMargin: '0px 0px -30px 0px' });
      nodes.forEach(function (n) { io.observe(n); });
    } else {
      nodes.forEach(function (n) { n.classList.add(onClass); });
    }
  }
  function closeMobileMenu() {
    var nl = document.getElementById('navLinks'), mb = document.getElementById('menuBtn');
    if (nl) nl.classList.remove('open');
    if (mb) { mb.setAttribute('aria-expanded', 'false'); mb.textContent = '☰'; }
  }

  /* =====================================================================
     NAVIGATION  — adds BINI Gallery + Achievements (only if missing)
     ===================================================================== */
  function makeNavLink(href, label) {
    var a = el('a', 'nav-link', label);
    a.href = href;
    a.addEventListener('click', closeMobileMenu);
    return a;
  }
  function ensureNav() {
    var nav = document.getElementById('navLinks');
    if (!nav) return;

    if (!nav.querySelector('a[href="#gallery"]')) {
      var about = nav.querySelector('a[href="#about"]');
      nav.insertBefore(makeNavLink('#gallery', 'BINI Gallery'), about || null);
    } else {
      var g = nav.querySelector('a[href="#gallery"]');
      if (!g.getAttribute('data-bu')) { g.setAttribute('data-bu', '1'); g.addEventListener('click', closeMobileMenu); }
    }

    var ach = nav.querySelector('a[href="#achievements"]');
    if (!ach) ach = makeNavLink('#achievements', 'Achievements');
    var members = document.getElementById('ourMembersNavBtn');     // created by your Our Members code
    if (members && members.parentNode) {
      if (members.nextSibling !== ach) members.parentNode.insertBefore(ach, members.nextSibling);
    } else if (!ach.parentNode) {
      nav.appendChild(ach);
    }
  }

  /* =====================================================================
     FEATURE 1 — BINI GALLERY
     ===================================================================== */
  var GAL_PALETTE = [
    ['#ff8cc6', '#c39bff'], ['#c39bff', '#7cc4ff'], ['#ffb3d9', '#a9d8ff'], ['#9b6bff', '#ff8cc6'],
    ['#7cc4ff', '#ff8cc6'], ['#ff6fb5', '#9b6bff'], ['#a9d8ff', '#c39bff'], ['#ffb3d9', '#9b6bff']
  ];
  function lessonImage(name) {
    try {
      if (typeof MIL_LESSONS !== 'undefined' && MIL_LESSONS && MIL_LESSONS.length) {
        for (var i = 0; i < MIL_LESSONS.length; i++) {
          if (MIL_LESSONS[i].member === name && MIL_LESSONS[i].image) return MIL_LESSONS[i].image;
        }
      }
    } catch (e) { /* ignore */ }
    return '';
  }

  var lightbox = null;
  function openLightbox(src, name) {
    if (!lightbox) {
      lightbox = el('div', 'gal-lightbox');
      lightbox.hidden = true;
      lightbox.setAttribute('role', 'dialog');
      lightbox.setAttribute('aria-modal', 'true');
      lightbox.setAttribute('aria-label', 'Member photo');
      lightbox.innerHTML =
        '<div class="gal-lb-box"><button type="button" class="gal-lb-close" aria-label="Close photo">×</button>' +
        '<img alt=""><p class="gal-lb-name"></p></div>';
      document.body.appendChild(lightbox);
      lightbox.addEventListener('click', function (e) {
        if (e.target === lightbox || e.target.closest('.gal-lb-close')) closeLightbox();
      });
      document.addEventListener('keydown', function (e) { if (e.key === 'Escape') closeLightbox(); });
    }
    var img = $('img', lightbox);
    img.src = src;
    img.alt = name + ' photo';
    $('.gal-lb-name', lightbox).textContent = name;
    lightbox.hidden = false;
    $('.gal-lb-close', lightbox).focus();
  }
  function closeLightbox() { if (lightbox) lightbox.hidden = true; }

  function initGallery() {
    var grid = document.getElementById('galGrid');
    if (!grid || grid.getAttribute('data-ready')) return;
    grid.setAttribute('data-ready', '1');
    var cards = [];

    BINI_GALLERY.forEach(function (m, i) {
      var pal = GAL_PALETTE[i % GAL_PALETTE.length];
      var card = el('article', 'gal-card');
      card.style.setProperty('--a', pal[0]);
      card.style.setProperty('--b', pal[1]);
      card.style.setProperty('--d', ((i % 4) * 90) + 'ms');

      var src = trim(m.image) || (GALLERY_USE_LESSON_IMAGES ? lessonImage(m.name) : '');
      var btn = el('button', 'gal-photo');
      btn.type = 'button';
      var frame = el('span', 'gal-frame');

      function placeholder() {
        frame.innerHTML = '';
        btn.classList.add('no-img');
        btn.setAttribute('aria-label', m.name + ' — photo coming soon');
        var ph = el('span', 'gal-ph');
        ph.appendChild(el('span', 'gal-flower', '🌸'));
        ph.appendChild(el('b', '', m.name.charAt(0)));
        ph.appendChild(el('small', '', 'Photo coming soon'));
        frame.appendChild(ph);
      }

      if (src) {
        var img = new Image();
        img.alt = m.name + ' photo';
        img.loading = 'lazy';
        if (trim(m.focus)) img.style.objectPosition = trim(m.focus);
        img.onerror = placeholder;
        img.src = src;
        frame.appendChild(img);
        btn.setAttribute('aria-label', 'View ' + m.name + ' photo bigger');
        btn.addEventListener('click', function () { if (!btn.classList.contains('no-img')) openLightbox(src, m.name); });
      } else {
        placeholder();
      }
      btn.appendChild(frame);
      card.appendChild(btn);
      card.appendChild(el('div', 'gal-name', '💖 ' + m.name));
      card.appendChild(el('p', 'gal-tag', trim(m.tagline)));
      grid.appendChild(card);
      cards.push(card);
    });
    reveal(cards, 'in');
  }

  /* =====================================================================
     FEATURE 2 — ACHIEVEMENTS
     ---------------------------------------------------------------------
     HOW TO ADD ONE MORE (optional):
       E(year, month, scope, "organization", "event name",
         [ "W|Award category|Who won it", "N|Category|Who" ],
         [ "https://link-to-source" ]);
     month: 1–12 (0 = unknown)    scope: "ph" (Philippines) or "intl" (international)
     item codes:  W = won   N = nominated   P = nominated, result pending
                  H = honor / recognition   M = milestone   C = chart   L = featured in a list
     Add new entries at the END of the right year (they show in the order written).
     ===================================================================== */
  var ACH = [];
  function E(y, m, scope, org, name, items, src, note) {
    ACH.push({ y: y, m: m, scope: scope, org: org, name: name, items: items, src: src || [], note: note || '' });
  }
  var MONTHS = ['', 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

  var S = {
    wiki: 'https://en.wikipedia.org/wiki/List_of_awards_and_nominations_received_by_Bini',
    disc: 'https://en.wikipedia.org/wiki/Bini_discography',
    philstar21: 'https://www.philstar.com/entertainment/2021/06/18/2106193/binis-three-year-journey-becoming-p-pop-idols',
    tribune20: 'https://web.archive.org/web/20201109034445/https://tribune.net.ph/index.php/2020/11/09/star-hunt-academy-launches-all-girl-pinoy-pop-group-bini/',
    rappler21: 'https://www.rappler.com/entertainment/music/bini-new-song-born-to-win/',
    bandwagon34: 'https://www.bandwagon.asia/articles/how-to-vote-34th-awit-awards-peoples-voice-ben-and-ben-clara-benin-leanne-naara-syd-hartha-moira-dela-torre-sb19-maris-racal-itchyworms-rico-blanco',
    wish7: 'https://web.archive.org/web/20211115042223/https://www.wish1075.com/7th-wish-music-awards-nominees-official/',
    mb2022: 'https://mb.com.ph/2022/10/01/bini-drops-sophomore-album-feel-good/?amp',
    acervo: 'https://portalacervo.com.br/noticia/2135/acervo-awards-2022-veja-a-lista-completa-dos-vencedores',
    preview: 'https://www.preview.ph/culture/preview-creative-25-2022-a1878-20220310-lfrm4',
    tiktok22: 'https://web.archive.org/web/20220821041412/https://www.cnnphilippines.com/entertainment/2022/8/20/second-TikTok-Awards-winners.html',
    diamond: 'https://balita.net.ph/2022/09/28/idol-philippines-bgyo-bini-atbp-wagi-sa-ikalawang-diamond-excellence-awards/',
    ppop22: 'https://pop.inquirer.net/337752/ppop-awards-2022-with-the-theme-popasikatin-natin-ang-sariling-atin-official-list-of-winners',
    wish8: 'https://www.philstar.com/entertainment/2023/01/23/2239640/list-regine-velasquez-sb19-big-winners-8th-wish-music-awards',
    awit36: 'https://mb.com.ph/2023/10/4/36th-awit-awards-finalists-revealed',
    awit36b: 'https://www.abs-cbn.com/entertainment/10/18/23/jonathan-manalo-gets-22-noms-in-2023-awit-awards',
    karera: 'https://en.wikipedia.org/wiki/Karera_(Bini_song)',
    pushAwards: 'https://manilastandard.net/?p=314418736',
    tiktok23: 'https://www.adobomagazine.com/advertising-awards/tiktok-awards-philippines-2023-nominees-highlights/',
    break23: 'https://www.abs-cbn.com/2023/11/17/bini-wins-international-new-artist-song-at-breaktudo-awards-2023-in-brazil-1240',
    ppop23: 'https://mb.com.ph/2023/12/2/complete-list-of-winners-at-the-8th-philippine-pop-ppop-awards',
    tag23: 'https://www.youtube.com/watch?v=6_o8oJcOUlI',
    teenvogue24: 'https://www.teenvogue.com/story/girl-groups-to-watch-2024',
    rising24: 'https://billboardphilippines.com/videos/bini-on-being-billboard-philippines-rising-star-awardees-we-really-worked-hard-for-this-2024/',
    talaarawan: 'https://billboardphilippines.com/music/news/bini-capture-all-stage-of-love-and-life-in-first-diary-inspired-ep-talaarawan-release-2024/',
    firstSolo: 'https://asianews.network/?p=227515',
    goldenLaurel: 'https://corporate.abs-cbn.com/newsroom/news-releases/2024/6/19/abs-cbn-wins-golden-laurel-2024?lang=en',
    cherryWiki: 'https://en.wikipedia.org/wiki/Cherry_on_Top_(Bini_song)',
    kpower: 'https://www.rappler.com/entertainment/music/sb19-bini-award-billboard-korea-k-power-100-event-august-2024/',
    pillars: 'https://www.youtube.com/watch?v=3UTDkhk9JZM',
    mega: 'https://mega-onemega.com/mega-fashion-awards-2024-winners-of-the-disruptors-category/',
    pmpc16: 'https://www.abs-cbn.com/entertainment/2024/10/27/opm-celebrated-in-16th-pmpc-star-awards-for-music-141',
    pasado: 'https://www.abs-cbn.com/entertainment/2024/10/12/abs-cbn-wins-big-at-26th-gawad-pasado-2350',
    grammy24: 'https://www.grammy.com/news/girl-groups-to-watch-k-pop-pinoy-japan-flo-bini-kiss-of-life',
    dome: 'https://web.archive.org/web/20241124050848/https://www.abs-cbn.com/lifestyle/people/2024/11/21/inside-the-grand-biniverse-how-bini-made-the-dome-their-own-1349',
    emaPhilstar: 'https://www.philstar.com/entertainment/2024/11/13/2399646/bini-first-filipino-group-win-best-asia-act-2024-mtv-emas',
    emaInq: 'https://entertainment.inquirer.net/584956/bini-takes-home-best-asia-act-award-at-mtv-emas-2024',
    makabata: 'https://www.abs-cbn.com/entertainment/2024/11/15/anak-tv-announces-net-makabata-awards-2024-winners-856',
    myx: 'https://philstarlife.com/news-and-views/192605-list-the-winners-of-myx-music-awards-2024',
    break24: 'https://www.abs-cbn.com/entertainment/2024/11/19/bini-sb19-bgyo-win-at-breaktudo-awards-2024-1326',
    aliw24: 'https://www.abs-cbn.com/entertainment/showbiz/events/2024/11/26/bini-sarah-g-lea-salonga-regine-velasquez-lead-nominees-for-37th-aliw-awards-1450',
    jupiter24: 'https://www.asiantelevisionawards.net/jupiter-music-awards-winners-news/',
    awit37: 'https://billboardphilippines.com/music/news/here-are-the-winners-for-the-37th-awit-awards-lola-amour-sb19-bini-2024/',
    ppop24: 'https://www.gmanetwork.com/news/lifestyle/content/931241/ppop-music-awards-2024-list-of-winners/story/',
    tag24: 'https://tribune.net.ph/2025/01/16/p-pop-superstars-sb19-bini-and-hori7on-shine-at-tag-awards-chicago',
    bbLists24: 'https://billboardphilippines.com/editorial-picks/best-of/the-50-best-music-videos-of-2024-staff-picks-sb19-bright-ariana-grande-bini-aespa/',
    bbAlbums24: 'https://billboardphilippines.com/editorial-picks/best-of/the-50-best-albums-and-eps-of-2024-staff-picks-bini-bts-dua--lipa',
    wish10: 'https://billboardphilippines.com/music/news/bini-shine-at-the-10th-wish-music-awards-bagging-three-major-awards-2025/',
    lasallianeta: 'https://corporate.abs-cbn.com/newsroom/news-releases/2025/1/28/abs-cbn-at-7th-gawad-lasallianeta?lang=en',
    blinkTwice: 'https://en.wikipedia.org/wiki/Biniverse_(EP)',
    tourKick: 'https://asianews.network/bini-is-the-first-all-filipino-group-to-perform-at-coachella-2026',
    rebyu: 'https://www.abs-cbn.com/entertainment/showbiz/movies-series/2025/2/15/bini-documentary-nominated-in-5th-pinoy-rebyu-awards-2051',
    mbNews: 'https://mb.com.ph/2025/2/15/bini-honored-as-mb-newsmaker-2025-motivates-us-to-keep-striving-for-excellence',
    stallion: 'https://www.abs-cbn.com/entertainment/showbiz/events/2025/2/17/kapamilya-stars-shine-at-10th-platinum-stallion-national-media-awards-2215',
    opc: 'https://www.rappler.com/entertainment/music/bini-tops-local-artists-official-philippines-chart/',
    hr2154: 'https://docs.congress.hrep.online/legisdocs/basic_19/HR02154.pdf',
    womenYear: 'https://billboardphilippines.com/women-in-music/bini-have-been-awarded-as-billboard-philippines-women-of-the-year-2025/',
    laurus: 'https://corporate.abs-cbn.com/newsroom/news-releases/2025/3/31/abscbn-2025-laurus-nobilis-media-excellence-awards?lang=en',
    forbes: 'https://www.forbes.com/sites/ranawehbe/2025/05/14/from-bini-to-sheetal-devi-meet-the-breakthrough-stars-and-athletes-on-the-2025-30-under-30-asia-entertainment--sports-list/',
    dubai: 'https://entertainment.inquirer.net/610873/look-bini-receives-certificate-of-commendation-in-dubai',
    nyf: 'https://www.abs-cbn.com/entertainment/showbiz/music/2025/5/23/abs-cbn-s-bini-chapter-1-documentary-named-finalist-at-new-york-festivals-1136',
    vp6: 'https://www.abs-cbn.com/entertainment/studios/tv/2025/5/30/abs-cbn-wins-big-bags-over-30-honors-at-the-6th-village-pipol-choice-awards-1419',
    musicRank: 'https://www.abante.com.ph/2025/06/18/bini-maki-wagi-sa-2025-music-rank-asian-choice-awards/',
    boxOffice: 'https://entertainment.inquirer.net/616251/kathryn-bernardo-alden-richards-lead-53rd-box-office-entertainment-awards',
    newHue: 'https://www.abs-cbn.com/entertainment/showbiz/events/2025/7/27/bini-maki-honored-at-new-hue-video-music-awards-2334',
    jupiter25: 'https://billboardphilippines.com/music/news/bini-win-female-group-of-the-year-2025-jupiter-music-awards/',
    jupiter25n: 'https://usa.inquirer.net/175947/bini-bags-multiple-nominations-at-2025-jupiter-music-awards',
    alta: 'https://www.abs-cbn.com/entertainment/studios/tv/2025/10/22/abs-cbn-bags-17-awards-at-the-6th-alta-media-icon-awards-2001',
    fma25: 'https://billboardphilippines.com/music/news/filipino-music-awards-winners-list-sb19-cup-of-joe2025/',
    awit38: 'https://www.abs-cbn.com/entertainment/showbiz/music/2025/11/17/bini-wins-multiple-accolades-at-38th-awit-awards-0057',
    break25: 'https://www.abs-cbn.com/entertainment/showbiz/music/2025/11/19/bini-bgyo-hori7on-score-wins-at-brazil-s-breaktudo-awards-2025-1255',
    ppop25: 'https://www.philstar.com/music/2025/12/02/2491369/sb19-dominates-p-pop-music-awards-2025-bini-cup-joe-also-among-winners',
    aliw25: 'https://www.abs-cbn.com/lifestyle/people-culture-events/2025/12/3/38th-aliw-awards-releases-full-list-of-finalists-for-theater-concerts-1353',
    zeen: 'https://entertainment.inquirer.net/639514/dolly-de-leon-antoinette-jadaone-more-to-be-honored-at-zeenfluential-awards',
    tatlerInfl: 'https://www.tatlerasia.com/list/most-influential-philippines?filter_2%5B%5D=2025&sort=title-asc&page=1',
    andAsian: 'https://andasian.com/the-25-best-p-pop-songs-of-the-21st-century-so-far/',
    hotPress: 'https://www.hotpress.com/music/hot-for-2025-international-acts-set-to-make-a-splash-this-year-23067989',
    tcCandler: 'https://www.abs-cbn.com/entertainment/showbiz/celebrities/2025/12/29/meet-the-kapamilya-stars-who-landed-on-tc-candler-s-100-most-beautiful-faces-of-2025-0954',
    bbFaves25: 'https://billboardphilippines.com/editorial-picks/best-of/25-best-filipino-albums-and-eps-of-2025-staff-picks/',
    wish11: 'https://billboardphilippines.com/music/news/here-are-the-winners-of-the-11th-wish-music-awards-full-list/',
    orchard: 'https://usa.inquirer.net/191235/bini-named-among-2026-rising-women-ambassadors',
    powerhouse: 'https://manilastandard.net/showbiz/music-concerts/314719783/bini-named-powerhouse-at-billboard-ph-women-in-music.html',
    bbPC26: 'https://billboardphilippines.com/women-in-music/here-are-the-nominees-for-the-peoples-choice-award-at-billboard-philippines-women-in-music-2026/',
    signals: 'https://corporate.abs-cbn.com/newsroom/news-releases/2026/4/9/bini-drops-new-ep-signals-set-to-debut-key-track-blush-at-coachella',
    coachella: 'https://www.sunstar.com.ph/cebu/bini-makes-history-at-coachella',
    coachella2: 'https://www.bandwagon.asia/articles/bini-make-p-pop-history-with-triumphant-coachella-2026-performance-gig-report',
    globalForce: 'https://www.philstar.com/entertainment/music/2026/04/11/2520248/bini-receive-billboard-women-music-global-force-honors',
    senate370: 'https://manilastandard.net/showbiz/music-concerts/314728785/senate-reso-recognizes-bini-performance-at-coachella.html',
    signalsTour: 'https://www.starmagicph.com/?p=10534',
    tagVic: 'https://www.gmanetwork.com/news/showbiz/chikaminute/982825/kapuso-winners-tag-victorious-awards-chicago-2026/story/',
    vp7: 'https://villagepipol.com/the-7th-vp-choice-awards-vpca-full-list-of-winners/',
    hr93: 'https://www.pna.gov.ph/articles/1275281',
    monster26: 'https://rx931.com/monstermusicawards/releases/2026',
    toycon: 'https://www.manilatimes.net/2026/06/14/videos/watch-bini-receives-pop-culture-award/2365013',
    pmpc17: 'https://tribune.net.ph/2026/06/26/star-awards-for-music-shines-spotlight-on-opms-biggest-names',
    esquire: 'https://www.esquiremag.ph/long-reads/profiles/100-most-powerful-people-in-the-philippines-soft-power-culture-2026-a1057-20260630-dyn',
    dot: 'https://www.pna.gov.ph/articles/1278629',
    la: 'https://www.hypnoticasia.com/bini-brings-pinay-power-high-energy-and-pride-to-los-angeles/',
    awit39: 'https://www.gmanetwork.com/news/showbiz/chikaminute/997732/julie-anne-san-jose-nominated-for-bagong-tadhana-simula-at-39th-awit-awards/story/s',
    fma26: 'https://billboardphilippines.com/events/filipino-music-awards/filipino-music-awards-2026-peoples-choice-poll/',
    sec26: 'https://billboardphilippines.com/music/news/sb19-and-bini-nominated-at-sec-awards-2026-in-brazil/',
    rsCoachella: 'https://www.rollingstone.com/music/music-features/coachella-2026-best-moments-performances-weekend-one-1235545575/',
    vulture: 'https://www.vulture.com/article/the-breakout-stars-who-won-coachella.html',
    kcon: 'https://ph.genz-mag.com/?p=5279'
  };

  /* ---------------------------- 2018 – 2020 ---------------------------- */
  E(2018, 0, 'ph', 'ABS-CBN · Star Hunt Academy', 'Training begins',
    ['M|Members chosen from a talent search to begin training|Selected by ABS-CBN’s Laurenti Dyogi'], [S.philstar21]);
  E(2020, 11, 'ph', 'Star Music · ABS-CBN', 'Pre-debut single',
    ['M|Released the pre-debut single “Da Coconut Nut”|A cover of Ryan Cayabyab’s song'], [S.tribune20]);

  /* ---------------------------- 2021 ---------------------------- */
  E(2021, 6, 'ph', 'Star Music · ABS-CBN', 'Official debut',
    ['M|Officially debuted with the single “Born to Win”'], [S.rappler21]);
  E(2021, 10, 'ph', 'Star Music', 'Debut album',
    ['M|Released the debut album “Born to Win”|October 14, 2021'], [S.disc]);
  E(2021, 0, 'ph', 'Saludo Excellence Awards', 'Saludo Excellence Awards 2021',
    ['W|Best Female Group'], [S.wiki]);
  E(2021, 0, 'ph', 'Awit Awards', '34th Awit Awards',
    ['N|Favorite Group Artist'], [S.bandwagon34]);
  E(2021, 0, 'ph', 'Wish Music Awards', '7th Wish Music Awards',
    ['N|Wish Pop Song of the Year|“Born to Win”'], [S.wish7]);

  /* ---------------------------- 2022 ---------------------------- */
  E(2022, 0, 'intl', 'Acervo Awards (Brazil)', 'Acervo Awards 2022',
    ['W|International Highlight'], [S.acervo]);
  E(2022, 3, 'ph', 'Preview Philippines', 'Preview Creative 25',
    ['H|Most Promising Talent — Musician category'], [S.preview]);
  E(2022, 5, 'ph', 'TikTok Philippines', '2nd TikTok Awards Philippines',
    ['W|P-pop Group of the Year'], [S.tiktok22]);
  E(2022, 9, 'ph', 'Diamond Excellence Awards', '2nd Diamond Excellence Awards',
    ['W|Outstanding Female Group of the Year'], [S.diamond]);
  E(2022, 9, 'ph', 'Star Music', 'Second studio album',
    ['M|Released the second studio album “Feel Good”'], [S.mb2022]);
  E(2022, 12, 'ph', 'P-pop Music Awards', '7th Ppop Awards',
    ['W|P-pop Icon of the Year', 'N|P-pop Girl Group of the Year'], [S.ppop22]);
  E(2022, 0, 'ph', 'Awit Awards', '35th Awit Awards',
    ['N|People’s Voice Favorite Group Artist', 'N|People’s Voice Breakthrough Artist', 'N|People’s Voice Favorite Song|“Na Na Na”'], [S.wiki]);
  E(2022, 0, 'ph', 'Wish Music Awards', '8th Wish Music Awards',
    ['N|Wish Pop Song of the Year|“Golden Arrow”'], [S.wish8]);

  /* ---------------------------- 2023 ---------------------------- */
  E(2023, 9, 'ph', 'Star Music', '“Karera” released',
    ['M|Released “Karera”|September 22, 2023'], [S.karera]);
  E(2023, 0, 'ph', 'Push Awards', 'Push Awards 2023',
    ['W|Push P-pop Group of the Year'], [S.pushAwards]);
  E(2023, 0, 'ph', 'TikTok Philippines', '3rd TikTok Awards Philippines',
    ['N|Song of the Year|“Na Na Na”'], [S.tiktok23]);
  E(2023, 0, 'ph', 'Awit Awards', '36th Awit Awards', [
    'N|Album of the Year|Feel Good',
    'N|Record of the Year|“Kabataang Pinoy” (with SB19) and “Lagi”',
    'N|Song of the Year|“Lagi”',
    'N|Best Performance by a Group Recording Artist',
    'N|Best Collaboration|“Up!” (with BGYO) and “Kabataang Pinoy” (with SB19)',
    'N|Best Pop Recording|“Lagi”'
  ], [S.awit36, S.awit36b]);
  E(2023, 0, 'intl', 'Tag Awards Chicago (USA)', 'TAG Awards 2023',
    ['N|Band of the Year'], [S.tag23]);
  E(2023, 11, 'intl', 'BreakTudo Awards (Brazil)', 'BreakTudo Awards 2023',
    ['W|International New Artist Song|“I Feel Good”'], [S.break23]);
  E(2023, 11, 'ph', 'Star Music', '“Pantropiko” released',
    ['M|“Pantropiko” released as a pre-release single|November 17, 2023'], [S.disc]);
  E(2023, 12, 'ph', 'P-pop Music Awards', '8th Ppop Awards', [
    'W|Top Favorite Group of the Year',
    'W|Top Female Dancer of the Year|Sheena',
    'W|Top Female Visual of the Year|Aiah',
    'W|Top Female Leader of the Year|Jhoanna'
  ], [S.ppop23]);

  /* ---------------------------- 2024 ---------------------------- */
  E(2024, 3, 'ph', 'Star Music', 'Talaarawan EP',
    ['M|Released the first EP, “Talaarawan”, with the lead single “Salamin, Salamin”|March 8, 2024'], [S.talaarawan]);
  E(2024, 3, 'ph', 'Billboard Philippines', 'Women in Music 2024',
    ['H|Rising Star Award'], [S.rising24]);
  E(2024, 4, 'ph', 'Billboard Philippines', 'Billboard Philippines charts',
    ['C|First P-pop group to top the magazine’s chart|“Pantropiko” and “Salamin, Salamin”, April 2024'], [S.disc]);
  E(2024, 5, 'intl', 'Teen Vogue (USA)', '12 Girl Groups to Watch in 2024',
    ['L|Named among the girl groups to watch'], [S.teenvogue24]);
  E(2024, 6, 'ph', 'New Frontier Theater', 'First solo concert',
    ['M|Held the first solo concert, “BINIverse: The First Solo Concert”|June 2024'], [S.firstSolo]);
  E(2024, 6, 'ph', 'Golden Laurel: The Batangas Province Media Awards', 'Golden Laurel 2024',
    ['W|Breakthrough P-pop Group'], [S.goldenLaurel]);
  E(2024, 7, 'ph', 'Star Music', '“Cherry on Top” released',
    ['M|Released the all-English single “Cherry on Top”|July 11, 2024',
     'C|“Cherry on Top” peaked at No. 6 on the Philippines Hot 100 and No. 4 on Top Philippine Songs'], [S.cherryWiki]);
  E(2024, 8, 'intl', 'Billboard Korea', 'K Power 100',
    ['H|Voices of Asia Award'], [S.kpower]);
  E(2024, 9, 'ph', 'Asian Pillars Awards', 'Asian Pillars Awards 2024',
    ['W|Phenomenal Pop Girl Group of the Year'], [S.pillars]);
  E(2024, 9, 'ph', 'Mega Fashion Awards', 'Mega Fashion Awards 2024',
    ['H|Cultural Impact Award'], [S.mega]);
  E(2024, 10, 'ph', 'PMPC Star Awards for Music', '16th Star Awards for Music', [
    'W|Duo/Group Artist of the Year',
    'N|Song of the Year|“Pantropiko”',
    'N|Dance Recording of the Year'
  ], [S.pmpc16]);
  E(2024, 10, 'ph', 'Gawad Pasado', '26th Gawad Pasado',
    ['W|Pinakapasadong Dangal ng Kabataan'], [S.pasado]);
  E(2024, 10, 'intl', 'GRAMMY.com (Recording Academy)', '12 Rising Girl Groups to Know Now',
    ['L|Featured among rising girl groups'], [S.grammy24]);
  E(2024, 11, 'ph', 'Araneta Coliseum', 'The Grand Biniverse',
    ['M|Headlined “The Grand Biniverse” at the Araneta Coliseum|November 16, 18 and 19, 2024',
     'H|Golden Dome Award|From the Araneta Group'], [S.dome]);
  E(2024, 11, 'intl', 'MTV Europe Music Awards', '2024 MTV Europe Music Awards',
    ['W|Best Asia Act|First Filipino group to win this award'], [S.emaPhilstar, S.emaInq]);
  E(2024, 11, 'ph', 'Net Makabata Awards (Anak TV)', 'Net Makabata Awards 2024',
    ['H|Net Makabata Star Award', 'H|Net Makabata Television Award|Aiah'], [S.makabata]);
  E(2024, 11, 'ph', 'Myx Music Awards', 'Myx Music Awards 2024', [
    'W|Song of the Year|“Pantropiko”',
    'W|Pop Video of the Year',
    'N|Artist of the Year',
    'N|Music Video of the Year'
  ], [S.myx]);
  E(2024, 11, 'intl', 'BreakTudo Awards (Brazil)', 'BreakTudo Awards 2024',
    ['W|International Breakthrough Artist', 'W|International Video of the Year|“Cherry on Top”'], [S.break24]);
  E(2024, 11, 'ph', 'Aliw Awards', '37th Aliw Awards',
    ['N|Best Collaboration in a Concert|Biniverse'], [S.aliw24]);
  E(2024, 12, 'intl', 'Jupiter Music Awards (Asian Television Awards)', 'Jupiter Music Awards 2024',
    ['W|Most Popular Dance Performer'], [S.jupiter24]);
  E(2024, 12, 'ph', 'Awit Awards', '37th Awit Awards', [
    'W|People’s Voice Breakthrough Artist of the Year',
    'W|People’s Voice Favorite Group Artist',
    'W|People’s Voice Favorite Record of the Year|“Pantropiko”',
    'W|People’s Voice Favorite Song of the Year|“Pantropiko”',
    'W|People’s Voice Favorite Music Video of the Year|“Karera”',
    'N|Record of the Year|“Pantropiko”',
    'N|Song of the Year|“Pantropiko”',
    'N|Best Performance by a Group',
    'N|Best Pop Recording',
    'N|Best Engineered Recording',
    'N|Best Inspirational Recording|“Karera”',
    'N|Best Music Video|“Karera”'
  ], [S.awit37]);
  E(2024, 12, 'ph', 'P-pop Music Awards', '9th Ppop Music Awards', [
    'W|Artist of the Year',
    'W|Album of the Year|Talaarawan',
    'W|Concert of the Year|The Grand Biniverse',
    'W|Fandom of the Year|Bloom',
    'W|Music Video of the Year|“Salamin, Salamin”',
    'W|Production Design in a Music Video',
    'W|Song of the Year|“Pantropiko”',
    'H|Favorite Streamed Artist|Shared award',
    'N|Breakthrough Artist of the Year',
    'N|Music Video of the Year|“Cherry on Top”',
    'N|Song of the Year|“Salamin, Salamin”'
  ], [S.ppop24]);
  E(2024, 0, 'ph', 'Monster RX 93.1 Music Awards', 'Monster Music Awards 2024',
    ['W|OPM Artist of the Year', 'W|P-pop Artist of the Year'], [S.wiki]);
  E(2024, 0, 'ph', 'Excellent Filipino Awards', 'Excellent Filipino Awards 2024',
    ['W|National Outstanding P-pop Female Group of the Year'], [S.wiki]);
  E(2024, 0, 'intl', 'Tag Awards Chicago (USA)', 'TAG Awards (reported Jan 2025)',
    ['H|Gold — P-pop Stars of the Year'], [S.tag24]);
  E(2024, 12, 'ph', 'Billboard Philippines', 'Billboard Philippines editorial lists', [
    'L|The 50 Best Music Videos of 2024|“Salamin, Salamin”',
    'L|The 50 Best Albums and EPs of 2024|Talaarawan',
    'L|15 Songs to Celebrate Your Graduation To|“Karera”'
  ], [S.bbLists24, S.bbAlbums24]);

  /* ---------------------------- 2025 ---------------------------- */
  E(2025, 1, 'ph', 'Wish Music Awards', '10th Wish Music Awards', [
    'W|Wishclusive Pop Performance of the Year|“Karera”',
    'W|Wish Pop Song of the Year|“Pantropiko”',
    'W|Wish Group of the Year'
  ], [S.wish10]);
  E(2025, 1, 'ph', 'Gawad Lasallianeta', '7th Gawad Lasallianeta',
    ['W|Most Outstanding OPM Artist'], [S.lasallianeta]);
  E(2025, 2, 'ph', 'Star Music', '“Blink Twice” and Biniverse EP',
    ['M|Released the single “Blink Twice”|February 13, 2025',
     'M|Released the all-English EP “Biniverse”|February 27, 2025',
     'C|“Blink Twice” peaked at No. 7 on the Philippines Hot 100'], [S.blinkTwice]);
  E(2025, 2, 'ph', 'Philippine Arena', 'Biniverse World Tour 2025 kicks off',
    ['M|Kicked off the first world tour, “Biniverse World Tour 2025”, at the Philippine Arena|First Filipino group to do a solo concert in the arena'], [S.tourKick]);
  E(2025, 2, 'ph', 'Pinoy Rebyu Awards', '5th Pinoy Rebyu Awards',
    ['N|Best Documentary Feature|Bini Chapter 1: Born to Win'], [S.rebyu]);
  E(2025, 2, 'ph', 'Manila Bulletin', 'MB Newsmakers',
    ['H|Honored as an MB Newsmaker|Reported February 15, 2025'], [S.mbNews]);
  E(2025, 2, 'ph', 'Platinum Stallion National Media Awards', '10th Platinum Stallion National Media Awards',
    ['W|Filipino Girl Group of the Year', 'W|Music Video of the Year|“Cherry on Top”'], [S.stallion]);
  E(2025, 2, 'ph', 'The Official Philippines Chart', 'Inaugural Official Philippines Chart event',
    ['H|Top Local Artist of the Year'], [S.opc]);
  E(2025, 3, 'ph', 'Billboard Philippines', 'Women in Music 2025',
    ['H|Women of the Year'], [S.womenYear]);
  E(2025, 3, 'ph', 'Laurus Nobilis Media Excellence Awards', 'Laurus Nobilis 2025',
    ['W|Media Excellence in Musical Performance'], [S.laurus]);
  E(2025, 5, 'intl', 'Forbes (Asia)', '30 Under 30 Asia 2025',
    ['H|Included in Entertainment & Sports'], [S.forbes]);
  E(2025, 5, 'ph', 'Philippine Consulate General in Dubai', 'Biniverse World Tour — Dubai stop',
    ['H|Certificate of Commendation'], [S.dubai]);
  E(2025, 5, 'intl', 'New York Festivals', 'New York Festivals 2025',
    ['N|Best Documentary: Biography/Profiles|Bini Chapter 1: Born to Win (named a finalist)'], [S.nyf]);
  E(2025, 5, 'ph', 'VP Choice Awards (Village Pipol)', '6th VP Choice Awards', [
    'W|P-pop Group of the Year',
    'W|P-pop Song of the Year|“Salamin, Salamin”',
    'W|Breakthrough Social Media Star of the Year|Aiah Arceta',
    'W|Female TikTok Face of the Year|Maloi Ricalde',
    'N|Group Performer of the Year',
    'N|Female TikTok Face of the Year|Mikha Lim',
    'N|Music Video of the Year|“Cherry on Top”',
    'N|Viral TikTok Video of the Year|“Eyyyy” by Sheena Catacutan',
    'N|Fandom of the Year|Bloom'
  ], [S.vp6]);
  E(2025, 6, 'intl', 'Music Rank Asian Choice Awards', 'Music Rank Asian Choice Awards 2025',
    ['W|Asian P-pop Girl Group of the Year', 'W|Asia’s Global Fan Choice'], [S.musicRank]);
  E(2025, 6, 'ph', 'Box Office Entertainment Awards', '53rd Box Office Entertainment Awards',
    ['W|Concert of the Year|The Grand Biniverse', 'W|Recording/Streaming/Concert Performing Group of the Year'], [S.boxOffice]);
  E(2025, 7, 'ph', 'New Hue Video Music Awards', 'New Hue Video Music Awards 2025', [
    'W|Group of the Year',
    'W|Concert of the Year|The Grand Biniverse',
    'N|Song of the Year|“Pantropiko”',
    'N|Music Video of the Year|“Cherry on Top”'
  ], [S.newHue]);
  E(2025, 7, 'intl', '&Asian', 'The 25 Best P-pop Songs of the 21st Century: So Far',
    ['L|Ranked 3rd|“Lagi”', 'L|Honorable mention|“Cherry on Top”'], [S.andAsian]);
  E(2025, 9, 'intl', 'Jupiter Music Awards (Asian Television Awards)', 'Jupiter Music Awards 2025',
    ['W|Female Group of the Year',
     'N|Album of the Year|Biniverse',
     'N|Song of the Year|“Cherry on Top (BiniMo Remix)” with Agnez Mo',
     'N|Collaboration of the Year|“Cherry on Top (BiniMo Remix)” with Agnez Mo',
     'N|Music Video of the Year|“Cherry on Top (BiniMo Remix)” with Agnez Mo'], [S.jupiter25, S.jupiter25n]);
  E(2025, 0, 'intl', 'KCON Los Angeles (USA)', 'KCON LA',
    ['M|Became the first Filipino pop group to perform at KCON Los Angeles'], [S.kcon],
    'Sources differ on whether this was 2024 or 2025 — please verify.');
  E(2025, 10, 'ph', 'ALTA Media Icon Awards', '6th ALTA Media Icon Awards',
    ['W|Best P-pop Group'], [S.alta]);
  E(2025, 10, 'ph', 'Filipino Music Awards', 'Filipino Music Awards 2025 (inaugural)', [
    'N|Artist of the Year',
    'N|People’s Choice Awards: Artist',
    'N|People’s Choice Awards: Song|“Blink Twice”',
    'N|Album of the Year|Biniverse',
    'N|Tour of the Year|Biniverse World Tour 2025'
  ], [S.fma25]);
  E(2025, 11, 'ph', 'Awit Awards', '38th Awit Awards', [
    'W|Best Dance/Electronic Recording|“Salamin, Salamin”',
    'W|People’s Voice Favorite Album of the Year|Talaarawan',
    'W|People’s Voice Favorite Group Artist',
    'W|Most Streamed Artist',
    'W|Vibe Stan Award|Blooms',
    'N|Album of the Year|Talaarawan',
    'N|Music Video of the Year|“Salamin, Salamin” and “Cherry on Top”'
  ], [S.awit38]);
  E(2025, 11, 'intl', 'BreakTudo Awards (Brazil)', 'BreakTudo Awards 2025', [
    'W|International Women of the Year',
    'W|International Collaboration of the Year|“Blink Twice (Remix)” with Belinda',
    'N|International Fandom of the Year|Bloom'
  ], [S.break25]);
  E(2025, 12, 'ph', 'P-pop Music Awards', '10th Ppop Music Awards', [
    'W|Favorite Streamed Artist',
    'W|Best Production Design in a Music Video',
    'N|Artist of the Year',
    'N|Song of the Year|“Blink Twice”',
    'N|Music Video of the Year',
    'N|Album of the Year|Biniverse'
  ], [S.ppop25]);
  E(2025, 12, 'ph', 'Aliw Awards', '38th Aliw Awards',
    ['N|Best Director for a Major Concert|“Binified” (with Mickey Perz and Jon R. Moll)'], [S.aliw25]);
  E(2025, 12, 'ph', 'Tatler Asia', 'Most Influential Philippines 2025',
    ['L|Included in the list'], [S.tatlerInfl]);
  E(2025, 12, 'ph', 'ZEENfluential Awards', 'ZEENfluential Awards 2025',
    ['N|ZEENfluential P-pop Group', 'N|ZEENfluential Music Artist'], [S.zeen]);
  E(2025, 12, 'ph', 'Billboard Philippines', 'Billboard Philippines editorial lists',
    ['L|25 Best Filipino Albums and EPs of 2025|FLAMES'], [S.bbFaves25]);
  E(2025, 12, 'intl', 'TC Candler', '100 Most Beautiful Faces of 2025',
    ['L|Placed on the list|Aiah'], [S.tcCandler]);
  E(2025, 0, 'ph', 'House of Representatives of the Philippines', 'Congressional honors',
    ['H|House Resolution No. 2154 and No. 2341|Commending BINI’s international achievements (MTV EMA and BreakTudo wins)'], [S.hr2154]);
  E(2025, 0, 'ph', 'Star Music', 'Third studio album',
    ['M|Released the third studio album “FLAMES”'], [S.signalsTour]);
  E(2025, 2, 'intl', 'Hot Press (Ireland)', 'Hot For 2025',
    ['L|Named among international acts set to make a splash in 2025'], [S.hotPress]);

  /* ---------------------------- 2026 ---------------------------- */
  E(2026, 1, 'ph', 'Wish Music Awards', '11th Wish Music Awards',
    ['N|Wishclusive Pop Song of the Year|“Blink Twice”', 'N|Wish Group of the Year'], [S.wish11]);
  E(2026, 3, 'intl', 'The Orchard', 'Rising Women Ambassadors 2026',
    ['H|Named a Rising Women Ambassador'], [S.orchard]);
  E(2026, 3, 'ph', 'Billboard Philippines', 'Women in Music 2026',
    ['H|Powerhouse of the Year|Third year in a row honored by Billboard Philippines',
     'N|People’s Choice'], [S.powerhouse, S.bbPC26]);
  E(2026, 4, 'ph', 'Star Music', '“Signals” EP',
    ['M|Released the six-track EP “Signals”|April 9, 2026'], [S.signals]);
  E(2026, 4, 'intl', 'Coachella Valley Music and Arts Festival (USA)', 'Coachella 2026', [
    'M|First Filipino act and girl group to perform at Coachella|April 2026 (two weekends)',
    'L|Covered by Rolling Stone, Vulture, Vogue, and Teen Vogue'
  ], [S.coachella, S.coachella2, S.rsCoachella, S.vulture]);
  E(2026, 4, 'intl', 'Billboard Women in Music (USA)', 'Billboard Women in Music 2026',
    ['H|Global Force Award'], [S.globalForce]);
  E(2026, 4, 'ph', 'Senate of the Philippines', 'Senate Resolution No. 370',
    ['H|Resolution recognizing BINI’s Coachella performance'], [S.senate370]);
  E(2026, 4, 'intl', 'Star Magic', 'Signals World Tour announced',
    ['M|Announced the second world tour, the “Signals” World Tour|Across Asia, Europe and North America'], [S.signalsTour]);
  E(2026, 4, 'intl', 'Tag Victorious Awards Chicago (USA)', 'Tag Victorious Awards 2026',
    ['H|Gold — P-pop Stars of the Year'], [S.tagVic]);
  E(2026, 4, 'ph', 'VP Choice Awards (Village Pipol)', '7th VP Choice Awards', [
    'W|P-pop Group of the Year',
    'W|Female TikTok Face of the Year|Maloi Ricalde',
    'N|Group Performer of the Year',
    'N|P-pop Song of the Year|“First Luv”',
    'N|Female TikTok Face of the Year|Gwen Apuli',
    'N|Viral TikTok Video of the Year|“Shagidi” by Sheena Catacutan'
  ], [S.vp7]);
  E(2026, 5, 'ph', 'House of Representatives of the Philippines', 'House Resolution No. 93',
    ['H|Resolution honoring BINI as the first Filipino pop group at Coachella'], [S.hr93]);
  E(2026, 6, 'ph', 'Monster RX 93.1 Music Awards', 'Monster Music Awards 2026',
    ['W|P-pop Artist of the Year'], [S.monster26]);
  E(2026, 6, 'ph', 'ToyCon Philippines', 'ToyCon Philippines 2026',
    ['H|Pinoy Pop Culture Award'], [S.toycon]);
  E(2026, 6, 'ph', 'PMPC Star Awards for Music', '17th Star Awards for Music', [
    'W|Dance Recording of the Year|“Salamin, Salamin”',
    'W|Pop Album of the Year|Talaarawan',
    'N|Song of the Year|“Salamin, Salamin”',
    'N|Music Video of the Year|“Salamin, Salamin”',
    'N|Album of the Year|Talaarawan',
    'N|Duo/Group Artist of the Year'
  ], [S.pmpc17]);
  E(2026, 6, 'ph', 'Esquire Philippines', 'The 100 Most Powerful People in the Philippines',
    ['L|Included in the “Wielders of Soft Power” list'], [S.esquire]);
  E(2026, 7, 'ph', 'Department of Tourism', 'Tourism Ambassadors',
    ['H|Named Official Tourism Ambassadors of the Philippines'], [S.dot]);
  E(2026, 8, 'intl', 'City of Los Angeles (USA)', 'Los Angeles visit',
    ['H|Certificate of Appreciation'], [S.la]);
  E(2026, 11, 'ph', 'Awit Awards', '39th Awit Awards', [
    'P|Best Performance by a Group|“Shagidi”',
    'P|Best Pop Recording',
    'P|Best R&B Recording|“Katabi”',
    'P|Best Global Collaboration Recording|“Cherry on Top (BiniMo) Remix” with Agnez Mo'
  ], [S.awit39], 'Nominations announced; results were not yet confirmed when this page was written.');
  E(2026, 11, 'ph', 'Filipino Music Awards', 'Filipino Music Awards 2026', [
    'P|People’s Choice Awards: Artist',
    'P|People’s Choice Awards: Song|“Blush”'
  ], [S.fma26], 'People’s Choice nominations; results were not yet confirmed when this page was written.');
  E(2026, 11, 'intl', 'SEC Awards (Brazil)', 'SEC Awards 2026', [
    'P|International Group/Duo of the Year',
    'P|International Album/EP of the Year|FLAMES'
  ], [S.sec26], 'Nominations; results were not yet confirmed when this page was written.');

  /* ---------------- the six big international highlights ---------------- */
  var HIGHLIGHTS = [
    { y: 2024, t: 'MTV EMA — Best Asia Act', d: 'The first Filipino group to win this award at the MTV Europe Music Awards.', u: S.emaPhilstar },
    { y: 2026, t: 'Coachella 2026', d: 'The first Filipino act and girl group to perform at the Coachella festival in California.', u: S.coachella },
    { y: 2026, t: 'Billboard Women in Music — Global Force', d: 'Honored with the Global Force Award at Billboard Women in Music 2026.', u: S.globalForce },
    { y: 2025, t: 'Forbes 30 Under 30 Asia', d: 'Included in the Entertainment & Sports list.', u: S.forbes },
    { y: 2025, t: 'Jupiter Music Awards — Female Group of the Year', d: 'Won at the Asian Television Awards’ music awards in Indonesia.', u: S.jupiter25 },
    { y: 2025, t: 'BreakTudo — International Women of the Year', d: 'Plus International Collaboration of the Year for “Blink Twice (Remix)” with Belinda.', u: S.break25 }
  ];

  /* ---------------- rendering ---------------- */
  var TYPE = {
    W: { icon: '🏆', label: 'Won' },
    N: { icon: '🎯', label: 'Nominated' },
    P: { icon: '⏳', label: 'Nominee · result pending' },
    H: { icon: '👑', label: 'Honor' },
    M: { icon: '🚀', label: 'Milestone' },
    C: { icon: '📈', label: 'Chart' },
    L: { icon: '📰', label: 'Featured' }
  };
  var FILTERS = {
    all: function () { return true; },
    win: function (t) { return t === 'W'; },
    nom: function (t) { return t === 'N' || t === 'P'; },
    honor: function (t) { return t === 'H' || t === 'M' || t === 'C' || t === 'L'; },
    intl: function () { return true; }
  };
  var achFilter = 'all';
  var MAX_VISIBLE = 5;

  function parseItem(s) {
    var p = String(s).split('|');
    return { t: p[0], text: p[1] || '', who: p[2] || '' };
  }
  function hostOf(u) {
    try { return new URL(u).hostname.replace(/^www\./, ''); } catch (e) { return 'source'; }
  }
  function countAll() {
    var c = { W: 0, N: 0, P: 0, H: 0, M: 0, intl: 0 };
    ACH.forEach(function (a) {
      if (a.scope === 'intl') c.intl++;
      a.items.forEach(function (s) { var t = parseItem(s).t; if (c[t] != null) c[t]++; });
    });
    return c;
  }

  function buildStats() {
    var box = document.getElementById('achStats');
    if (!box) return;
    var c = countAll();
    var data = [
      ['🏆', c.W, 'Awards won'],
      ['🎯', c.N + c.P, 'Nominations'],
      ['👑', c.H, 'Honors'],
      ['🚀', c.M, 'Career milestones'],
      ['🌍', c.intl, 'International entries']
    ];
    box.innerHTML = '';
    var nums = [];
    data.forEach(function (d) {
      var s = el('div', 'ach-stat');
      var strong = el('strong', '', '0');
      strong.setAttribute('data-to', d[1]);
      nums.push(strong);
      s.appendChild(strong);
      s.appendChild(el('span', '', d[0] + ' ' + d[2]));
      box.appendChild(s);
    });
    function run() {
      nums.forEach(function (n) {
        var to = Number(n.getAttribute('data-to')), t0 = null;
        function step(ts) {
          if (t0 === null) t0 = ts;
          var p = Math.min(1, (ts - t0) / 1100);
          n.textContent = Math.round(to * (1 - Math.pow(1 - p, 3)));
          if (p < 1) requestAnimationFrame(step); else n.textContent = to;
        }
        requestAnimationFrame(step);
      });
    }
    if ('IntersectionObserver' in window) {
      var io = new IntersectionObserver(function (en) {
        if (en[0].isIntersecting) { run(); io.disconnect(); }
      }, { threshold: 0.3 });
      io.observe(box);
    } else { nums.forEach(function (n) { n.textContent = n.getAttribute('data-to'); }); }
  }

  function buildHighlights() {
    var box = document.getElementById('achHighlights');
    if (!box) return;
    box.innerHTML = '';
    HIGHLIGHTS.forEach(function (h) {
      var d = el('div', 'ach-hl');
      d.appendChild(el('span', 'ach-hl-year', String(h.y)));
      d.appendChild(el('h4', '', h.t));
      d.appendChild(el('p', '', h.d));
      var a = el('a', '', 'See source ↗');
      a.href = h.u; a.target = '_blank'; a.rel = 'noopener noreferrer';
      var wrap = el('p');
      wrap.appendChild(a);
      d.appendChild(wrap);
      box.appendChild(d);
    });
  }

  function renderTimeline() {
    var tl = document.getElementById('achTimeline');
    var chips = document.getElementById('achYears');
    if (!tl) return;
    tl.innerHTML = '';
    if (chips) chips.innerHTML = '';
    var keep = FILTERS[achFilter];
    var years = [];
    ACH.forEach(function (a) { if (years.indexOf(a.y) === -1) years.push(a.y); });
    var cards = [], total = 0;

    years.forEach(function (y) {
      var list = [];
      ACH.forEach(function (a) {
        if (a.y !== y) return;
        if (achFilter === 'intl' && a.scope !== 'intl') return;
        var items = a.items.map(parseItem).filter(function (it) { return keep(it.t); });
        if (items.length) list.push({ a: a, items: items });
      });
      if (!list.length) return;

      var head = el('div', 'ach-year');
      head.id = 'ach-y-' + y;
      head.appendChild(el('h3', '', String(y)));
      tl.appendChild(head);
      if (chips) {
        var chip = el('button', 'ach-year-chip', String(y));
        chip.type = 'button';
        chip.addEventListener('click', function () {
          head.scrollIntoView({ behavior: 'smooth', block: 'start' });
        });
        chips.appendChild(chip);
      }

      list.forEach(function (row) {
        var a = row.a;
        var card = el('article', 'ach-card' + (a.scope === 'intl' ? ' intl' : ''));
        var h = el('div', 'ach-card-head');
        h.appendChild(el('h4', '', a.name));
        if (a.m) h.appendChild(el('span', 'ach-when', MONTHS[a.m] + ' ' + a.y));
        if (a.scope === 'intl') h.appendChild(el('span', 'ach-intl-badge', '🌍 International'));
        card.appendChild(h);
        card.appendChild(el('p', 'ach-org', a.org));

        var ul = el('ul', 'ach-items');
        var hidden = [];
        row.items.forEach(function (it, idx) {
          var li = el('li', 'ach-item ach-t-' + it.t);
          li.appendChild(el('span', 'ach-badge', TYPE[it.t].icon + ' ' + TYPE[it.t].label));
          li.appendChild(el('span', 'ach-cat', it.text));
          if (it.who) li.appendChild(el('span', 'ach-who', '— ' + it.who));
          if (idx >= MAX_VISIBLE) { li.hidden = true; hidden.push(li); }
          ul.appendChild(li);
          total++;
        });
        card.appendChild(ul);
        if (hidden.length) {
          var more = el('button', 'ach-more', 'Show all ' + row.items.length + ' ▾');
          more.type = 'button';
          more.setAttribute('aria-expanded', 'false');
          more.addEventListener('click', function () {
            var open = more.getAttribute('aria-expanded') === 'true';
            hidden.forEach(function (li) { li.hidden = open; });
            more.setAttribute('aria-expanded', open ? 'false' : 'true');
            more.textContent = open ? 'Show all ' + row.items.length + ' ▾' : 'Show less ▴';
          });
          card.appendChild(more);
        }
        if (a.note) card.appendChild(el('p', 'ach-note-line', 'ℹ️ ' + a.note));
        if (a.src.length) {
          var p = el('p', 'ach-src');
          p.appendChild(el('span', '', 'Sources:'));
          a.src.forEach(function (u) {
            var link = el('a', '', hostOf(u) + ' ↗');
            link.href = u; link.target = '_blank'; link.rel = 'noopener noreferrer';
            p.appendChild(link);
          });
          card.appendChild(p);
        }
        tl.appendChild(card);
        cards.push(card);
      });
    });

    if (!total) tl.appendChild(el('p', 'ach-empty', 'Nothing here yet for this filter.'));
    reveal(cards, 'in');
  }

  function initAchievements() {
    var sec = document.getElementById('achievements');
    if (!sec || sec.getAttribute('data-ready')) return;
    sec.setAttribute('data-ready', '1');
    buildHighlights();
    buildStats();
    renderTimeline();
    var filters = document.getElementById('achFilters');
    if (filters) {
      filters.addEventListener('click', function (e) {
        var b = e.target.closest('.ach-filter');
        if (!b) return;
        achFilter = b.getAttribute('data-filter');
        $$('.ach-filter', filters).forEach(function (x) { x.classList.toggle('on', x === b); });
        renderTimeline();
      });
    }
  }

  /* =====================================================================
     FEATURE 3 — QUIZ MUSIC REWARD  (works with every lesson quiz)
     It watches your existing #quizResult screen, so no quiz code changes.
     ===================================================================== */
  function initReward() {
    var result = document.getElementById('quizResult');
    if (!result || result.getAttribute('data-bqr')) return;
    result.setAttribute('data-bqr', '1');

    var cfg = BINI_REWARD;
    var useAudio = !!trim(cfg.audioUrl);
    var yt = null, ytReady = false, pending = null, ytLoading = false, ytQueue = [];
    var audio = null, shown = false;

    /* ----- the reward card (built once, placed above the result buttons) ----- */
    var card = el('div', 'bqr-card');
    card.hidden = true;
    card.setAttribute('aria-live', 'polite');
    card.innerHTML =
      '<h4 data-q="title"></h4>' +
      '<p data-q="msg"></p>' +
      '<div class="bqr-player" data-q="player" hidden></div>' +
      '<div class="bqr-controls" data-q="controls" hidden>' +
        '<button type="button" class="btn" data-q="replay">🔁 Replay</button>' +
        '<button type="button" class="btn btn-ghost" data-q="pause">⏸ Pause</button>' +
        '<button type="button" class="btn btn-ghost" data-q="stop">⏹ Stop</button>' +
      '</div>' +
      '<p class="bqr-status" data-q="status"></p>' +
      '<a class="bqr-link" data-q="link" target="_blank" rel="noopener noreferrer" hidden>Open on YouTube ↗</a>';
    var actions = $('.result-actions', result);
    result.insertBefore(card, actions || null);
    function q(n) { return card.querySelector('[data-q="' + n + '"]'); }
    var playerBox = q('player'), pauseBtn = q('pause');
    q('link').href = 'https://youtu.be/' + cfg.videoId;

    function setStatus(t) { q('status').textContent = t; }
    function setPlayingUI(isPlaying) {
      card.classList.toggle('playing', isPlaying);
    }
    function failMessage() {
      setStatus('Sorry — the music could not start here. You can open the song on YouTube instead.');
      q('link').hidden = false;
      setPlayingUI(false);
    }

    /* ----- YouTube player (loads only when needed) ----- */
    function loadYT(cb) {
      if (window.YT && window.YT.Player) { cb(); return; }
      ytQueue.push(cb);
      if (ytLoading) return;
      ytLoading = true;
      var prev = window.onYouTubeIframeAPIReady;
      window.onYouTubeIframeAPIReady = function () {
        if (typeof prev === 'function') { try { prev(); } catch (e) { /* ignore */ } }
        ytQueue.splice(0).forEach(function (f) { f(); });
      };
      var s = document.createElement('script');
      s.src = 'https://www.youtube.com/iframe_api';
      s.async = true;
      s.onerror = function () { ytLoading = false; failMessage(); };
      document.head.appendChild(s);
    }
    function onYTState(e) {
      var st = e.data;                       // 1 playing, 2 paused, 0 ended, 3 buffering
      if (st === 1) { setStatus('♪ Now playing the chorus of “Tic Tac Toe”'); pauseBtn.textContent = '⏸ Pause'; setPlayingUI(true); }
      else if (st === 2) { setStatus('Paused'); pauseBtn.textContent = '▶ Resume'; setPlayingUI(false); }
      else if (st === 0) { setStatus('Chorus finished 🎉 Press Replay to hear it again.'); pauseBtn.textContent = '⏸ Pause'; setPlayingUI(false); }
    }
    function ensureYT(cb) {
      if (yt && ytReady) { cb(); return; }
      pending = cb;
      if (yt) return;                        // already being created: wait for onReady
      loadYT(function () {
        if (yt) return;
        var host = document.createElement('div');
        playerBox.innerHTML = '';
        playerBox.appendChild(host);
        var vars = { playsinline: 1, rel: 0, modestbranding: 1, controls: 1 };
        if (/^https?:$/.test(location.protocol)) vars.origin = location.origin;
        yt = new window.YT.Player(host, {
          width: '100%', height: '100%', videoId: cfg.videoId, playerVars: vars,
          events: {
            onReady: function () { ytReady = true; var f = pending; pending = null; if (f) f(); },
            onStateChange: onYTState,
            onAutoplayBlocked: function () { setStatus('Tap the ▶ Replay button to start the music 🎵'); },
            onError: function () { failMessage(); }
          }
        });
      });
    }

    /* ----- optional audio file ----- */
    function ensureAudio() {
      if (audio) return audio;
      audio = new Audio();
      audio.preload = 'auto';
      audio.src = cfg.audioUrl;
      audio.addEventListener('timeupdate', function () {
        if (cfg.audioEnd > 0 && audio.currentTime >= cfg.audioEnd) {
          audio.pause(); setPlayingUI(false);
          setStatus('Chorus finished 🎉 Press Replay to hear it again.');
        }
      });
      audio.addEventListener('ended', function () { setPlayingUI(false); setStatus('Chorus finished 🎉 Press Replay to hear it again.'); });
      audio.addEventListener('playing', function () { setStatus('♪ Now playing the chorus of “Tic Tac Toe”'); pauseBtn.textContent = '⏸ Pause'; setPlayingUI(true); });
      audio.addEventListener('pause', function () { if (!audio.ended && audio.currentTime > (cfg.audioStart || 0)) { setStatus('Paused'); pauseBtn.textContent = '▶ Resume'; } setPlayingUI(false); });
      audio.addEventListener('error', failMessage);
      return audio;
    }

    /* ----- the 4 controls (one player only, so nothing can overlap) ----- */
    function playChorus() {
      pauseBtn.textContent = '⏸ Pause';
      setStatus('Loading the music…');
      if (useAudio) {
        var a = ensureAudio();
        try { a.currentTime = cfg.audioStart || 0; } catch (e) { /* ignore */ }
        var p = a.play();
        if (p && p.catch) p.catch(function () { setStatus('Tap the ▶ Replay button to start the music 🎵'); });
      } else {
        ensureYT(function () {
          try { yt.loadVideoById({ videoId: cfg.videoId, startSeconds: cfg.chorusStart, endSeconds: cfg.chorusEnd }); }
          catch (e) { failMessage(); }
        });
      }
    }
    function togglePause() {
      if (useAudio) {
        if (!audio) return;
        if (audio.paused) audio.play(); else audio.pause();
      } else if (yt && ytReady) {
        var s = yt.getPlayerState();
        if (s === 1 || s === 3) yt.pauseVideo(); else if (s === 2) yt.playVideo();
      }
    }
    function stopChorus(quiet) {
      pending = null;
      if (audio) { audio.pause(); try { audio.currentTime = cfg.audioStart || 0; } catch (e) { /* ignore */ } }
      if (yt && ytReady) { try { yt.stopVideo(); } catch (e) { /* ignore */ } }
      pauseBtn.textContent = '⏸ Pause';
      setPlayingUI(false);
      if (!quiet) setStatus('Stopped. Press Replay to listen again.');
    }

    card.addEventListener('click', function (e) {
      var b = e.target.closest('[data-q]');
      if (!b) return;
      var k = b.getAttribute('data-q');
      if (k === 'replay') playChorus();
      else if (k === 'pause') togglePause();
      else if (k === 'stop') stopChorus(false);
    });

    /* ----- when the quiz result screen opens ----- */
    function readScore() {
      var m = /(\d+)\s*\/\s*(\d+)/.exec(($('#resultScore') || {}).textContent || '');
      return m ? { s: Number(m[1]), t: Number(m[2]) } : null;
    }
    function onResultShown() {
      var sc = readScore();
      if (!sc || !sc.t) return;
      stopChorus(true);                                // never two songs at once
      q('link').hidden = true;
      card.hidden = false;
      var passed = sc.s / sc.t >= cfg.passRatio;
      card.classList.toggle('try-again', !passed);
      if (passed) {
        q('title').textContent = '🎉 Congratulations, Bloom! You unlocked a BINI music reward!';
        q('msg').innerHTML = 'You scored <b>' + sc.s + ' / ' + sc.t + '</b>. Enjoy the chorus of “Tic Tac Toe” by BINI <span class="bqr-note-icon">🎵</span>';
        playerBox.hidden = false;
        q('controls').hidden = false;
        playChorus();
      } else {
        q('title').textContent = '💪 You can do it, Bloom!';
        q('msg').textContent = 'You scored ' + sc.s + ' / ' + sc.t + '. Get ' + Math.ceil(cfg.passRatio * sc.t) +
          ' / ' + sc.t + ' or better to unlock the BINI music reward. Review the lesson and try again — you are so close! 🌸';
        playerBox.hidden = true;
        q('controls').hidden = true;
        setStatus('');
      }
    }
    function onResultHidden() {
      stopChorus(true);
      card.hidden = true;
      q('status').textContent = '';
    }

    new MutationObserver(function () {
      if (!result.hidden && !shown) { shown = true; onResultShown(); }
      else if (result.hidden && shown) { shown = false; onResultHidden(); }
    }).observe(result, { attributes: true, attributeFilter: ['hidden'] });

    // leaving the result screen through its own buttons also stops the music
    result.addEventListener('click', function (e) {
      if (e.target.closest('#tryAgainBtn, #resultReadBtn, #resultOtherBtn')) stopChorus(true);
    });

    // warm up the YouTube script early (first time a quiz is chosen), so the reward starts faster
    var chips = document.getElementById('quizChips');
    if (chips && !useAudio) {
      chips.addEventListener('click', function () { loadYT(function () {}); }, { once: true });
    }
  }

  /* =====================================================================
     START-UP
     ===================================================================== */
  function boot() {
    ensureNav();
    initGallery();
    initAchievements();
    initReward();
  }
  ready(boot);
  // your "Our Members" button is created by your own code; make sure Achievements ends up right beside it
  window.addEventListener('load', ensureNav);
  setTimeout(ensureNav, 800);
})();

/* MOVE ABOUT WEBSITE TO THE BOTTOM */

document.addEventListener("DOMContentLoaded", function () {

  const headings = [...document.querySelectorAll("h1, h2, h3")];

  const aboutHeading = headings.find(h =>
    h.textContent.trim().toLowerCase().includes("about this website")
  );

  if (!aboutHeading) {
    console.warn("About This Website section not found.");
    return;
  }

  // Find the About section container
  let aboutSection =
    aboutHeading.closest("section") ||
    aboutHeading.parentElement?.parentElement;

  if (!aboutSection) return;

  // Give the section its own ID
  aboutSection.id = "about";

  // Move About to the very bottom of the main website
  const mainContainer =
    document.querySelector("main") ||
    document.querySelector("#app") ||
    document.body;

  mainContainer.appendChild(aboutSection);

  // Find About button in the navigation
  const navLinks = document.querySelectorAll("nav a, nav button");

  navLinks.forEach(link => {
    if (link.textContent.trim().toLowerCase() === "about") {

      link.addEventListener("click", function (event) {
        event.preventDefault();

        document.getElementById("about").scrollIntoView({
          behavior: "smooth",
          block: "start"
        });

      });

    }
  });

});

/* =====================================================================
   BINI GALLERY VIDEO  —  PASTE AT THE VERY BOTTOM of script.js
   Pag pinindot ang picture ng member sa BINI Gallery, lalabas sa gilid
   ang YouTube Shorts video niya.
   ===================================================================== */
(function () {
  'use strict';

  /* #####################################################################
     SETTINGS — ILAGAY DITO ANG YOUTUBE SHORTS LINK NG BAWAT MEMBER
     Halimbawa:  Aiah: "https://youtube.com/shorts/AbCdEfGhIjK"
     Gumagana rin ang: youtu.be/ID, youtube.com/watch?v=ID, o ang ID lang.
     Iwanang "" kung wala pa — may "Video coming soon" na lalabas.
     ##################################################################### */
  var GALLERY_VIDEOS = {
    Aiah:    "https://www.youtube.com/shorts/vyOym87rd2c?t=2&feature=share",
    Colet:   "https://www.youtube.com/shorts/B2h1JgGVkQg?t=1&feature=share",
    Maloi:   "https://www.youtube.com/shorts/E6K30VBbsL8?t=4&feature=share",
    Gwen:    "https://www.youtube.com/shorts/D1T8iCMh_38?t=2&feature=share",
    Stacey:  "https://www.youtube.com/shorts/NF3eayYfyqk?t=1&feature=share",
    Mikha:   "https://www.youtube.com/shorts/dxk9Xe3276w?t=1&feature=share",
    Jhoanna: "https://www.youtube.com/shorts/-jyKIWcP9JY?t=10&feature=share",
    Sheena:  "https://www.youtube.com/shorts/pexvZwzCZTc?t=2&feature=share"
  };

  var AUTOPLAY = true;           // true = automatic mag-play pag pinindot ang picture
  var SCROLL_ON_MOBILE = true;   // sa phone, i-scroll papunta sa video

  /* ===================================================================== */

  function trim(s) { return String(s == null ? '' : s).replace(/^\s+|\s+$/g, ''); }
  function el(tag, cls, text) {
    var n = document.createElement(tag);
    if (cls) n.className = cls;
    if (text != null) n.textContent = text;
    return n;
  }
  function ready(fn) {
    if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', fn);
    else fn();
  }
  function ytId(u) {
    u = trim(u);
    if (!u) return '';
    if (/^[A-Za-z0-9_-]{11}$/.test(u)) return u;
    var m = u.match(/(?:youtube\.com\/(?:shorts\/|embed\/|live\/)|youtu\.be\/)([A-Za-z0-9_-]{11})/) ||
            u.match(/[?&]v=([A-Za-z0-9_-]{11})/);
    return m ? m[1] : '';
  }

  function setup() {
    var grid = document.getElementById('galGrid');
    if (!grid || grid.getAttribute('data-gvx')) return;
    grid.setAttribute('data-gvx', '1');

    // update the small text under the title
    var sec = document.getElementById('gallery');
    var sub = sec && sec.querySelector('.section-head p');
    if (sub) sub.textContent = 'Eight members, one bloom. Tap a card to watch their video! 🎬';

    // layout: [ grid | video panel ]
    var layout = el('div', 'gvx-layout');
    grid.parentNode.insertBefore(layout, grid);
    layout.appendChild(grid);

    var panel = el('aside', 'gvx-panel');
    panel.hidden = true;
    panel.setAttribute('aria-label', 'Member video');
    panel.innerHTML =
      '<div class="gvx-head">' +
        '<span class="gvx-title" data-g="title">🎬 Video</span>' +
        '<button type="button" class="gvx-close" data-g="close" aria-label="Close video">×</button>' +
      '</div>' +
      '<div class="gvx-stage"><div class="gvx-frame" data-g="frame"></div></div>' +
      '<a class="gvx-link" data-g="link" target="_blank" rel="noopener noreferrer" hidden>Open on YouTube ↗</a>';
    layout.appendChild(panel);

    function g(n) { return panel.querySelector('[data-g="' + n + '"]'); }
    var current = null;

    function clearFrame() { g('frame').innerHTML = ''; }

    function closePanel() {
      clearFrame();                         // removing the iframe stops the video
      panel.hidden = true;
      layout.classList.remove('has-video');
      var cards = grid.querySelectorAll('.gal-card');
      Array.prototype.forEach.call(cards, function (c) { c.classList.remove('gvx-on'); });
      current = null;
    }

    function openFor(card, name) {
      Array.prototype.forEach.call(grid.querySelectorAll('.gal-card'), function (c) {
        c.classList.toggle('gvx-on', c === card);
      });
      current = name;
      g('title').textContent = '🎬 ' + name + '’s Video';
      clearFrame();

      var id = ytId(GALLERY_VIDEOS[name]);
      var link = g('link');
      if (id) {
        var f = document.createElement('iframe');
        var qs = 'playsinline=1&rel=0&modestbranding=1&loop=1&playlist=' + id + (AUTOPLAY ? '&autoplay=1' : '');
        f.src = 'https://www.youtube.com/embed/' + id + '?' + qs;
        f.title = name + ' video';
        f.allow = 'autoplay; encrypted-media; picture-in-picture; fullscreen';
        f.setAttribute('allowfullscreen', '');
        f.setAttribute('frameborder', '0');
        g('frame').appendChild(f);
        link.href = 'https://www.youtube.com/shorts/' + id;
        link.hidden = false;
      } else {
        var ph = el('div', 'gvx-ph');
        ph.appendChild(el('span', 'gvx-ph-ico', '🎬'));
        ph.appendChild(el('b', '', name));
        ph.appendChild(el('small', '', 'Video coming soon ✨'));
        g('frame').appendChild(ph);
        link.hidden = true;
      }

      panel.hidden = false;
      layout.classList.add('has-video');
      panel.classList.remove('gvx-pop');
      void panel.offsetWidth;
      panel.classList.add('gvx-pop');

      if (SCROLL_ON_MOBILE && window.innerWidth <= 900) {
        setTimeout(function () {
          panel.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }, 60);
      }
    }

    // capture phase: runs BEFORE the old "big photo" popup, and replaces it
    grid.addEventListener('click', function (e) {
      var photo = e.target.closest && e.target.closest('.gal-photo');
      if (!photo || !grid.contains(photo)) return;
      e.stopPropagation();
      e.preventDefault();
      var card = photo.closest('.gal-card');
      var nameEl = card && card.querySelector('.gal-name');
      if (!nameEl) return;
      var name = trim(nameEl.textContent.replace(/^[^A-Za-z]+/, ''));
      if (current === name) { closePanel(); return; }   // click again = close
      openFor(card, name);
    }, true);

    g('close').addEventListener('click', closePanel);
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && !panel.hidden) closePanel();
    });
  }

  ready(setup);
  window.addEventListener('load', setup);   // safety: never runs twice
})();

/* =====================================================================
   BINI QUIZ GIF REWARD — pinapalitan ang "Tic Tac Toe" music reward
   ===================================================================== */
(function () {
  'use strict';

  /* ################################################################
     SETTINGS — DITO MO ILALAGAY ANG GIF LINKS MO
     passGif      = GIF na lalabas kapag PASADO (3/4 pataas)
     tryAgainGif  = GIF kapag hindi pasado (iwanang "" kung ayaw mo)
     Gamitin ang DIRECT link na nagtatapos sa .gif
     ################################################################ */
  var GIF_REWARD = {
    passGif: "https://media1.tenor.com/m/BRNBblkX10EAAAAd/bini-we-are-bini.gif",
    tryAgainGif: "https://media1.tenor.com/m/7o1xvA3SAiUAAAAd/bini-bini-ph.gif",
    passRatio: 0.75,                 // 3 out of 4 = 0.75
    showConfetti: true
  };

  function $(s, r) { return (r || document).querySelector(s); }
  function el(tag, cls, text) {
    var n = document.createElement(tag);
    if (cls) n.className = cls;
    if (text != null) n.textContent = text;
    return n;
  }
  function validUrl(u) {
    u = String(u || '').replace(/^\s+|\s+$/g, '');
    return /^https?:\/\//i.test(u) ? u : '';
  }

  function init() {
    var result = document.getElementById('quizResult');
    if (!result || result.getAttribute('data-bgr')) return;
    result.setAttribute('data-bgr', '1');

    /* ---------- 1. Alisin ang lumang Tic Tac Toe card ---------- */
    function killOld() {
      Array.prototype.slice.call(result.querySelectorAll('.bqr-card')).forEach(function (n) {
        n.parentNode && n.parentNode.removeChild(n);
      });
    }
    killOld();

    /* ---------- 2. Gawin ang bagong GIF card ---------- */
    var card = el('div', 'bgr-card');
    card.hidden = true;
    card.setAttribute('aria-live', 'polite');
    card.innerHTML =
      '<h4 class="bgr-title"></h4>' +
      '<p class="bgr-msg"></p>' +
      '<div class="bgr-frame" hidden>' +
        '<div class="bgr-frame-inner"></div>' +
        '<span class="bgr-spark bgr-s1" aria-hidden="true">🌸</span>' +
        '<span class="bgr-spark bgr-s2" aria-hidden="true">✨</span>' +
        '<span class="bgr-spark bgr-s3" aria-hidden="true">💖</span>' +
        '<span class="bgr-spark bgr-s4" aria-hidden="true">🦋</span>' +
      '</div>';
    var actions = $('.result-actions', result);
    result.insertBefore(card, actions || null);

    var titleEl = $('.bgr-title', card);
    var msgEl = $('.bgr-msg', card);
    var frame = $('.bgr-frame', card);
    var inner = $('.bgr-frame-inner', card);

    function placeholder(text) {
      inner.innerHTML = '';
      var ph = el('div', 'bgr-ph');
      ph.appendChild(el('span', '', '🎀'));
      ph.appendChild(el('small', '', text || 'GIF coming soon ✨'));
      inner.appendChild(ph);
    }

    function showGif(url) {
      frame.hidden = false;
      inner.innerHTML = '';
      var good = validUrl(url);
      if (!good) { placeholder('GIF coming soon ✨'); return; }
      var img = new Image();
      img.alt = 'BINI celebration GIF';
      img.onerror = function () { placeholder('GIF could not be loaded'); };
      img.src = good + (good.indexOf('?') === -1 ? '?' : '&') + 'r=' + Date.now(); // nire-restart ang GIF
      img.onerror = function () {                    // kung ayaw ng dagdag na ?r=, gamitin ang original
        img.onerror = function () { placeholder('GIF could not be loaded'); };
        img.src = good;
      };
      inner.appendChild(img);
    }

    function confetti() {
      if (!GIF_REWARD.showConfetti) return;
      if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
      var set = ['🌸', '⭐', '💖', '✨', '🦋', '🎉'];
      for (var i = 0; i < 26; i++) {
        var s = document.createElement('span');
        s.className = 'confetti';
        s.textContent = set[i % set.length];
        s.style.left = (Math.random() * 100) + 'vw';
        s.style.fontSize = (18 + Math.random() * 18) + 'px';
        s.style.animationDelay = (Math.random() * 0.7) + 's';
        document.body.appendChild(s);
        (function (n) { setTimeout(function () { if (n.parentNode) n.parentNode.removeChild(n); }, 3800); })(s);
      }
    }

    /* ---------- 3. Basahin ang score at ipakita ang GIF ---------- */
    function readScore() {
      var t = ($('#resultScore') || {}).textContent || '';
      var m = /(\d+)\s*\/\s*(\d+)/.exec(t);
      return m ? { s: Number(m[1]), t: Number(m[2]) } : null;
    }

    function onShown() {
      killOld();
      var sc = readScore();
      if (!sc || !sc.t) return;
      var passed = sc.s / sc.t >= GIF_REWARD.passRatio;
      card.classList.toggle('bgr-try', !passed);
      card.hidden = false;

      if (passed) {
        titleEl.textContent = '🎉 Congratulations, Bloom! You unlocked a BINI reward!';
        msgEl.innerHTML = 'You scored <b>' + sc.s + ' / ' + sc.t + '</b>. Enjoy your special BINI GIF! 💖';
        showGif(GIF_REWARD.passGif);
        confetti();
      } else {
        titleEl.textContent = '💪 You can do it, Bloom!';
        msgEl.innerHTML = 'You scored <b>' + sc.s + ' / ' + sc.t + '</b>. Get <b>' +
          Math.ceil(GIF_REWARD.passRatio * sc.t) + ' / ' + sc.t +
          '</b> or better to unlock the BINI reward. Review the lesson and try again! 🌸';
        if (validUrl(GIF_REWARD.tryAgainGif)) showGif(GIF_REWARD.tryAgainGif);
        else { frame.hidden = true; inner.innerHTML = ''; }
      }
    }

    function onHidden() {
      card.hidden = true;
      inner.innerHTML = '';     // inaalis ang GIF para mag-restart sa susunod
    }

    var wasShown = false;
    new MutationObserver(function () {
      killOld();                                   // kung ibalik ng lumang code, tanggalin ulit
      if (!result.hidden && !wasShown) { wasShown = true; onShown(); }
      else if (result.hidden && wasShown) { wasShown = false; onHidden(); }
    }).observe(result, { attributes: true, attributeFilter: ['hidden'], childList: true });
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
  window.addEventListener('load', init);          // safety: hindi tatakbo nang dalawang beses
})();